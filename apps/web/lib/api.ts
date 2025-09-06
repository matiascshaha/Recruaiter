export const API_BASE_URL = process.env['NEXT_PUBLIC_API_URL'] ?? 'http://localhost:4000';

export function trpcUrl(path: string): string {
  return `${API_BASE_URL.replace(/\/$/, '')}/trpc/${path.replace(/^\//, '')}`;
}


