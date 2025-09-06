"use client";
import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Input, Label, Alert } from '@recruaiter/ui';
import { trpcUrl } from '../../lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@recruaiter.ai');
  const [password, setPassword] = useState('ChangeMe123!');
  const [result, setResult] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult('');
    const res = await fetch(trpcUrl('auth.login'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ input: { email, password } }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
    if (data.result?.data?.accessToken) {
      localStorage.setItem('accessToken', data.result.data.accessToken);
      localStorage.setItem('refreshToken', data.result.data.refreshToken);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <h1 className="text-xl font-semibold">Welcome back</h1>
          <p className="text-sm text-[--text-muted]">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@example.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full h-10">
              Sign In
            </Button>
            {result && (
              <Alert variant="info" className="text-xs whitespace-pre-wrap">{result}</Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

