import { Button, Card, CardContent, CardHeader } from '@recruaiter/ui';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg">
      <div className="px-6 md:px-10 w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[--radius-xl] border border-[--border-default] bg-[linear-gradient(180deg,var(--bg-subtle),var(--bg-default))] p-10 md:p-14">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(closest-side,var(--accent-subtle),transparent)' }} />
          <div className="relative z-10 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Recruaiter</h1>
            <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
              Enterprise AI recruiting platform. Accelerate sourcing, automate outreach, and coordinate interviews with a premium, accessible UI.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">View Docs</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card interactive>
            <CardHeader className="font-medium">AI Sourcing</CardHeader>
            <CardContent className="text-text-muted">Identify qualified candidates across platforms with customizable criteria.</CardContent>
          </Card>
          <Card interactive>
            <CardHeader className="font-medium">Automated Outreach</CardHeader>
            <CardContent className="text-text-muted">Multi-channel sequences with personalization and sentiment tracking.</CardContent>
          </Card>
          <Card interactive>
            <CardHeader className="font-medium">Pipeline</CardHeader>
            <CardContent className="text-text-muted">Real-time, drag-and-drop pipeline with analytics and collaboration.</CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

