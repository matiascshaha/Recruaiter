# Recruiting Domain Knowledge

## Business Process Flow
1. Sourcing: AI scrapes LinkedIn for qualified candidates
2. Outreach: Automated personalized messages via multiple channels
3. Qualification: AI conversations assess candidate fit
4. Coordination: Schedule interviews, manage communications
5. Tracking: Monitor progress through recruitment pipeline

## Compliance & Ethics
- GDPR: Right to access/delete personal data; explicit consent for outreach where required
- LinkedIn & Provider ToS: Respect rate limits, usage policies; no scraping beyond permitted APIs
- Anti-spam: CAN-SPAM and local equivalents for email; opt-out handling; do-not-contact lists
- Fairness: Avoid biased scoring; document factors in AI scoring; allow human override

## User Personas
- Hiring Managers: Need qualified candidates quickly
- Recruiters: Manage multiple searches, need pipeline visibility
- Employers: Review candidates, make decisions
- Candidates: Respond to outreach, participate in process

## Key Metrics
- Time-to-qualified-candidate
- Candidate response rates by channel
- AI conversation success rates
- Pipeline conversion rates
- Satisfaction scores

## Roles & Permissions (RBAC Overview)
- SuperAdmin: platform configuration; full access
- OrgAdmin: organization settings; user/invite management
- Recruiter: sourcing, outreach, pipeline management
- Employer: view candidates, manage jobs, schedule interviews
- Viewer: read-only within assigned scope

## Integration Points
- LinkedIn API
- Email providers
- Calendar systems
- ATS systems
- Slack/Teams notifications
