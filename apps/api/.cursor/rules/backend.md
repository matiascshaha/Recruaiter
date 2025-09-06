# Backend-Specific Rules

## API Standards
- All routes include proper validation
- Error responses are user-friendly
- Rate limiting for public endpoints
- Comprehensive logging
- Authentication/authorization checks
 - Pagination/sorting/filtering documented and enforced
 - Idempotency for unsafe retries where relevant

## Service Layer
- Business logic separated from controllers
- Dependency injection for testability
- Event publishing for loose coupling
- Transaction handling for data consistency
- Error handling with proper types
 - Side-effects isolated; pure functions where possible

## Database Standards
- Use transactions for multi-table operations
- Implement proper indexes
- Include audit trails
- Handle connection pooling
- Optimize queries for performance
 - Prefer cursor pagination; avoid full-table scans
 - Migrations are forward-only; write `down` notes in ADRs

## Security & Observability
- Validate all inputs with Zod; never trust client
- CORS allowlist; secure headers via Fastify plugins
- JWT access+refresh with rotation; RBAC in procedures
- Logs are structured with correlation IDs; no PII leak
- Metrics: request latency, error rates, queue depths
