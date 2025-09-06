# Code Patterns & Examples

## Component Pattern
- Interface definition with comprehensive props
- Forward ref for DOM access
- Consistent animation variants
- Accessibility attributes (roles, aria-*, keyboard nav)
- Analytics event tracking (namespaced events)
- Loading skeletons and empty/error states

## Service Pattern
- Interface definition
- Constructor dependency injection
- Try-catch error handling
- Event publishing
- Structured logging
 - Input validation; pure business logic; side-effects isolated

## API Route Pattern
- Zod input validation
- Authorization checks
- Service layer calls
- Standardized responses
- Error handling
 - Pagination, sorting, filtering explicit
 - Idempotency keys where needed

## Database Pattern
- Proper relationships and indexes
- Timestamps
- Soft delete support (if applicable)
- Audit logging
 - Pagination-first queries; avoid N+1 with `include/select`
 - Use partial indexes and composite keys where appropriate

## Forms (React Hook Form + Zod)
- Zod schemas as single source of truth; infer types
- RHF Controller for custom inputs; register for native inputs
- Inline validation; aggregate submit summary
- Optimistic updates with rollback
- Accessibility: labels, descriptions, error associations

## Analytics Pattern
- Event naming: `domain.action_outcome`
- Payload: snake_case keys; include `timestamp`, `user_id`, `org_id`
- Client helper to enqueue and debounce non-critical events
