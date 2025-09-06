import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@recruaiter/ui';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

