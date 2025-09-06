# Project Knowledge Base
*Auto-updated by AI to maintain context across conversations*

## Recent Architectural Decisions
- Implemented JWT authentication with refresh tokens
- Added Framer Motion for UI animations (planned)
- Established event-driven architecture scaffolding
- Created semantic design token system
 - Adopted ADR + C4 documentation workflow

## Current Implementation Status
- ✅ Authentication: JWT with role-based access
- ✅ Database: Prisma schema with core entities
- ✅ UI Foundation: Design tokens and base components
- 🚧 Dashboard: Needs analytics + nav
- 🚧 Pipeline: Drag-and-drop pending
- ❌ Integrations: LinkedIn not yet implemented

## Performance Benchmarks
- Bundle Size: TBD (target: <250KB)
- First Load: TBD (target: <1200ms)
- Lighthouse Score: TBD (target: >90)
 - API P95 Latency: TBD (target: <150ms within VPC)

## Known Issues & Technical Debt
- Login form request format needs tweak
- Dashboard loading states need improvement
- Mobile responsiveness pending full testing
 - Missing ADRs for some early decisions

## Team Preferences & Patterns
- Prefer compound components over prop drilling
- Use semantic HTML with ARIA labels
- Implement optimistic UI updates
- Include comprehensive error boundaries
 - Namespaced analytics events with typed payloads
