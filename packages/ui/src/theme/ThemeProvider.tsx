"use client";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { buildCssVariables, ThemeName } from '../tokens/design-tokens';

export interface ThemeProviderProps {
  initialTheme?: ThemeName;
  children: React.ReactNode;
}

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = 'recruaiter.theme';

function getSystemTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return initialTheme ?? 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    return stored ?? initialTheme ?? getSystemTheme();
  });

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  const css = useMemo(() => buildCssVariables(theme), [theme]);

  useEffect(() => {
    const id = 'recruaiter-theme-vars';
    let styleEl = document.getElementById(id) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = css;
    // dataset is an index signature; use bracket notation for strict TS configs
    document.documentElement.dataset['theme'] = theme;
  }, [css, theme]);

  const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

