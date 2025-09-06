import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@recruaiter/database';
import argon2 from 'argon2';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from './jwt';
import type { TrpcContext } from '../../trpc/context';

const t = initTRPC.context<TrpcContext>().create();

export const authRouter = t.router({
  login: t.procedure
    .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.findUnique({ where: { email: input.email }, include: { credential: true } });
      if (!user || !user.credential) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      const valid = await argon2.verify(user.credential.passwordHash, input.password);
      if (!valid) throw new TRPCError({ code: 'UNAUTHORIZED' });
      const accessToken = signAccessToken({ sub: user.id, role: user.role });
      const tokenRecord = await prisma.refreshToken.create({
        data: {
          userId: user.id,
          tokenHash: '', // store hashed token id if needed; keep empty for MVP
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
      const refreshToken = signRefreshToken({ sub: user.id, role: user.role, tokenId: tokenRecord.id });
      return { accessToken, refreshToken, user: { id: user.id, email: user.email, role: user.role, name: user.name } };
    }),

  me: t.procedure.query(async ({ ctx }) => {
    if (!ctx.userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
    const user = await prisma.user.findUnique({ where: { id: ctx.userId } });
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    return { id: user.id, email: user.email, role: user.role, name: user.name };
  }),

  refresh: t.procedure
    .input(z.object({ refreshToken: z.string() }))
    .mutation(async ({ input }) => {
      const payload = verifyRefreshToken(input.refreshToken);
      const token = await prisma.refreshToken.findFirst({ where: { id: payload.tokenId, userId: payload.sub, revokedAt: null } });
      if (!token || token.expiresAt < new Date()) throw new TRPCError({ code: 'UNAUTHORIZED' });
      const accessToken = signAccessToken({ sub: payload.sub, role: payload.role });
      return { accessToken };
    }),
});

export type AuthRouter = typeof authRouter;

