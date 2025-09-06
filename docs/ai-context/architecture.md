# Recruaiter Architecture Context

## System Overview (C4 Context)
Recruaiter is a monorepo with clear domain boundaries:
- apps/web: Next.js frontend with React 18, TypeScript, Tailwind
- apps/api: Fastify backend with tRPC, Prisma, PostgreSQL
- packages/ui: Shared component library with Storybook
- packages/database: Prisma schema and migrations
- packages/types: Shared TypeScript interfaces

## Data Flow & Policies
1. User Actions: UI components dispatch actions via tRPC
2. API Layer: tRPC procedures handle validation and routing
3. Service Layer: Domain services execute business logic
4. Event System: Services publish events for loose coupling
5. Database: Prisma repositories handle data persistence
6. Background Jobs: BullMQ for outreach sequences, scoring, webhooks

Policies:
- Idempotency for mutations (client retry safe)
- Pagination: cursor-based for large lists, include `nextCursor`
- Caching: React Query on client; Redis for server-side caching where safe
- Errors: structured problem+json style with codes; never leak internals

## Key Relationships (Domain Map)
- Candidates belong to Organizations
- Jobs are created by Employers
- Applications connect Candidates to Jobs
- Communications track all Candidate interactions
- Pipeline stages define Candidate progress

## Performance & Observability
- React Query for client-side caching and background refresh
- Redis for session and API caching
- Database: proper indexes, `EXPLAIN ANALYZE` for heavy queries, pagination only
- Code splitting at route level, lazy load heavy components
- Metrics: request latency (P50/P95), error rate, queue depth, DB slow query count
- Tracing: request ids propagate via headers; structured logs with correlation ids

## Security Baseline
- Input validation with Zod at boundaries
- Rate limit public endpoints; CORS allowlist
- JWT access + refresh with rotation; RBAC checks in tRPC middlewares
- Secrets via environment variables; never commit secrets
- Audit log sensitive actions (login, role changes, outreach send)
