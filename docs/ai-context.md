# Recruaiter AI Development Context
## The Complete AI Knowledge Base

### 🎯 BUSINESS DOMAIN INTELLIGENCE

**Recruaiter Mission**: Replace human recruiters with AI that handles the entire recruitment process from sourcing to interview coordination.

**Core Workflow**:
1. **Sourcing**: AI scrapes LinkedIn, job boards for qualified candidates
2. **Outreach**: Automated LinkedIn messages, emails, cold calls with personalization
3. **Qualification**: AI conversations to assess candidate fit and interest
4. **Coordination**: Schedule interviews, manage communication between parties
5. **Pipeline Management**: Track progress, update status, provide analytics

**Key Entities & Relationships**:
```typescript
// Domain Entity Structure (for AI reference)
interface Candidate {
  id: string;
  linkedinUrl?: string;
  email: string;
  skills: string[];
  experience: ExperienceLevel;
  aiScore: number;
  scoreFactors: ScoringFactor[];
  communications: Communication[];
  applications: JobApplication[];
  status: CandidateStatus;
}

interface Job {
  id: string;
  title: string;
  requirements: JobRequirement[];
  compensation: CompensationRange;
  employer: Employer;
  applications: JobApplication[];
  aiSourcingCriteria: SourcingCriteria;
}

interface Communication {
  id: string;
  candidateId: string;
  channel: 'linkedin' | 'email' | 'phone' | 'sms';
  direction: 'inbound' | 'outbound';
  content: string;
  sentimentScore: number;
  responseTime?: number;
  aiGenerated: boolean;
}
```

**Business Logic Patterns**:
- **AI Scoring Algorithm**: Technical skills (40%) + Experience level (30%) + Communication sentiment (20%) + Response rate (10%)
- **Outreach Sequences**: LinkedIn connection → Personalized message → Follow-up (3 days) → Email backup (7 days)
- **Status Transitions**: Sourced → Contacted → Responded → Qualified → Interview Scheduled → Hired/Rejected
- **Real-time Events**: All status changes trigger WebSocket updates to frontend
- **Integration Points**: LinkedIn API, email providers, calendar systems, ATS platforms

### 🏗️ ARCHITECTURE INTELLIGENCE

**Monorepo Structure**:
- apps/web (Next.js), apps/api (Fastify + tRPC), packages/ui, packages/database, packages/types
- Shared types in packages for cross-domain communication
- Event-driven architecture for loose coupling
- Repository pattern for data access abstraction

**Performance Patterns**:
- React Query for server state caching
- Redis for session storage and API caching
- Database read replicas for analytics queries
- CDN for static assets and images

**Security Patterns**:
- JWT authentication with role-based permissions
- API rate limiting per user/organization
- Input sanitization and SQL injection prevention
- Audit logging for all sensitive operations

### 🎨 UI/UX INTELLIGENCE

**Design System Principles**:
- **Color Palette**: Professional blues/grays with success greens and warning oranges
- **Typography**: Inter font family for readability
- **Spacing**: 8px grid system (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Components**: Follow shadcn/ui patterns with custom extensions

**User Experience Patterns**:
- **Dashboard**: Executive summary cards + recent activity feed + quick actions
- **Candidate Pipeline**: Kanban-style board with drag-and-drop
- **Communication**: Chat-like interface with AI-generated message suggestions
- **Analytics**: Interactive charts with drill-down capabilities

