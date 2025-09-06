"use client";
import { useEffect, useState } from 'react';
import { trpcUrl } from '../../lib/api';

export default function DashboardPage() {
  const [me, setMe] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    fetch(trpcUrl('auth.me'), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setMe(d.result?.data))
      .catch((e) => setError(String(e)));
  }, []);

  return (
    <main className="min-h-screen p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      {me ? (
        <pre className="bg-gray-100 text-xs p-3 rounded overflow-auto">{JSON.stringify(me, null, 2)}</pre>
      ) : (
        <p className="text-gray-600">Sign in to view your profile.</p>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}

