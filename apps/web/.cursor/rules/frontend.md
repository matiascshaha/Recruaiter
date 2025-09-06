# Frontend-Specific Rules

## React Component Standards
- Always use React.forwardRef for components
- Implement proper error boundaries
- Use React.memo for expensive components
- Handle loading and error states
- Include proper TypeScript props
 - Follow Base Props pattern (`id?`, `className?`, `children?`, `data-testid?`)
 - Include controlled/uncontrolled variants where applicable

## Animation Requirements
- All interactive elements have hover states
- Page transitions use Framer Motion
- Loading states use skeleton screens
- Form validation includes smooth transitions
- Micro-interactions enhance UX
 - Respect reduced-motion preferences

## Performance Standards
- Bundle size under 250KB gzipped
- Code splitting at route level
- Lazy loading for non-critical components
- Image optimization with Next.js Image
- Memoization for expensive computations
 - Avoid hydration waterfalls; prefer Server Components where possible
 - Use React Query for server state; SWR for simple caches

## Accessibility Checklist (WCAG 2.2 AA)
- Keyboard navigation for all interactive elements
- Visible 2px focus outlines using semantic tokens
- aria-live regions for dynamic content
- Color contrast ≥ 4.5:1; never use color alone to convey meaning
- Touch targets ≥ 44px; hit areas inclusive

## Testing
- Components: Jest + RTL (states: loading/empty/error/success)
- Routes: Playwright smoke and a11y scans
- Visual: consider Storybook with a11y and interactions for critical components
