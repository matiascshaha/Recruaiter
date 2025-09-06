### Architecture Overview

- Monorepo with Turborepo. Microservices-ready monolith: `apps/api` holds core domain modules with clear boundaries and can be extracted later.
- DDD-aligned packages: `@recruaiter/types` for contracts, `@recruaiter/database` for persistence, `@recruaiter/ui` for shared design system.
- API is Fastify + tRPC for type-safe contracts. Redis + BullMQ for background jobs. Socket.io for realtime updates.
- Next.js 14 App Router frontend, TanStack Query for data, Zustand for app state, RHF + Zod for forms.

