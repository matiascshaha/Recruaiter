import type { FastifyRequest } from 'fastify';
import { prisma } from '@recruaiter/database';
import { verifyAccessToken } from '../modules/auth/jwt';

export interface TrpcContext {
  prisma: typeof prisma;
  userId: string | null;
  role: 'ADMIN' | 'MANAGER' | 'RECRUITER' | 'VIEWER' | null;
}

export function createContext({ req }: { req: FastifyRequest }): TrpcContext {
  let userId: string | null = null;
  let role: TrpcContext['role'] = null;
  const auth = req.headers.authorization;
  if (auth?.startsWith('Bearer ')) {
    const token = auth.slice('Bearer '.length);
    try {
      const payload = verifyAccessToken(token);
      userId = payload.sub;
      role = payload.role;
    } catch {
      // ignore invalid token
    }
  }
  return { prisma, userId, role };
}

