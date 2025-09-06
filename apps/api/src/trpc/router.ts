import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import type { TrpcContext } from './context';
import { authRouter } from '../modules/auth/router';

const t = initTRPC.context<TrpcContext>().create();
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.userId) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return next();
});
const isAdmin = t.middleware(({ ctx, next }) => {
  if (ctx.role !== 'ADMIN') throw new TRPCError({ code: 'FORBIDDEN' });
  return next();
});

export const protectedProcedure = t.procedure.use(isAuthed);
export const adminProcedure = t.procedure.use(isAuthed).use(isAdmin);

export const appRouter = t.router({
  health: t.procedure.query(() => ({ ok: true })),
  auth: authRouter,
  candidateSearch: t.procedure
    .input(
      z.object({
        keywords: z.array(z.string()).optional(),
        locations: z.array(z.string()).optional(),
        seniority: z.array(z.string()).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { keywords } = input;
      const where = keywords && keywords.length > 0
        ? {
            OR: keywords.map((k) => ({
              OR: [
                { fullName: { contains: k, mode: 'insensitive' } },
                { headline: { contains: k, mode: 'insensitive' } },
                { location: { contains: k, mode: 'insensitive' } },
              ],
            })),
          }
        : {};
      const candidates = await ctx.prisma.candidate.findMany({ where, take: 25 });
      return candidates;
    }),
});

export type AppRouter = typeof appRouter;

