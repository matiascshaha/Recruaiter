## Recruaiter - Enterprise AI Recruiting Platform

Monorepo managed with Turborepo. Apps: `apps/web` (Next.js), `apps/api` (Fastify). Shared packages: `packages/ui`, `packages/database`, `packages/types`, `packages/config`.

Quick start:

1. Install pnpm: `npm i -g pnpm`
2. Install deps: `pnpm install`
3. Start infra (optional): `docker compose -f docker/docker-compose.yml up -d`
4. Generate Prisma client: `pnpm -w prisma:generate`
5. Start dev: `pnpm dev`


