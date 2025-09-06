export type ThemeName = 'light' | 'dark';

export const tokens = {
  colors: {
    light: {
      background: {
        default: 'hsl(0, 0%, 100%)',
        subtle: 'hsl(0, 0%, 98%)',
        muted: 'hsl(0, 0%, 96%)',
      },
      text: {
        default: 'hsl(0, 0%, 10%)',
        muted: 'hsl(0, 0%, 45%)',
        subtle: 'hsl(0, 0%, 64%)',
      },
      border: {
        default: 'hsl(0, 0%, 90%)',
        subtle: 'hsl(0, 0%, 95%)',
        focus: 'hsl(142, 100%, 42%)',
      },
      accent: {
        default: 'hsl(142, 100%, 42%)',
        hover: 'hsl(142, 100%, 38%)',
        pressed: 'hsl(142, 100%, 32%)',
        subtle: 'hsla(142, 100%, 42%, 0.1)',
      },
      status: {
        success: { bg: 'hsla(142, 100%, 42%, 0.1)', text: 'hsl(142, 100%, 36%)', border: 'hsl(142, 100%, 42%)' },
        warning: { bg: 'hsla(40, 100%, 50%, 0.1)', text: 'hsl(35, 92%, 40%)', border: 'hsl(35, 92%, 50%)' },
        danger: { bg: 'hsla(0, 84%, 60%, 0.1)', text: 'hsl(0, 72%, 42%)', border: 'hsl(0, 84%, 60%)' },
        info: { bg: 'hsla(210, 100%, 56%, 0.1)', text: 'hsl(210, 90%, 40%)', border: 'hsl(210, 100%, 56%)' },
      },
      overlay: {
        backdrop: 'hsla(0, 0%, 0%, 0.4)',
      },
    },
    dark: {
      background: {
        default: 'hsl(0, 0%, 6%)',
        subtle: 'hsl(0, 0%, 9%)',
        muted: 'hsl(0, 0%, 12%)',
      },
      text: {
        default: 'hsl(0, 0%, 96%)',
        muted: 'hsl(0, 0%, 72%)',
        subtle: 'hsl(0, 0%, 55%)',
      },
      border: {
        default: 'hsl(0, 0%, 18%)',
        subtle: 'hsl(0, 0%, 14%)',
        focus: 'hsl(142, 100%, 42%)',
      },
      accent: {
        default: 'hsl(142, 100%, 42%)',
        hover: 'hsl(142, 100%, 38%)',
        pressed: 'hsl(142, 100%, 32%)',
        subtle: 'hsla(142, 100%, 42%, 0.16)',
      },
      status: {
        success: { bg: 'hsla(142, 100%, 42%, 0.16)', text: 'hsl(142, 100%, 56%)', border: 'hsl(142, 100%, 42%)' },
        warning: { bg: 'hsla(40, 100%, 50%, 0.16)', text: 'hsl(35, 92%, 62%)', border: 'hsl(35, 92%, 50%)' },
        danger: { bg: 'hsla(0, 84%, 60%, 0.16)', text: 'hsl(0, 84%, 68%)', border: 'hsl(0, 84%, 60%)' },
        info: { bg: 'hsla(210, 100%, 56%, 0.16)', text: 'hsl(210, 100%, 72%)', border: 'hsl(210, 100%, 56%)' },
      },
      overlay: {
        backdrop: 'hsla(0, 0%, 0%, 0.6)',
      },
    },
  },
  typography: {
    family: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    scale: {
      xs: { size: '0.75rem', lineHeight: '1.2', weight: 400, letterSpacing: '0' },
      sm: { size: '0.875rem', lineHeight: '1.35', weight: 400, letterSpacing: '0' },
      base: { size: '1rem', lineHeight: '1.45', weight: 400, letterSpacing: '0' },
      lg: { size: '1.125rem', lineHeight: '1.5', weight: 500, letterSpacing: '-0.005em' },
      xl: { size: '1.25rem', lineHeight: '1.5', weight: 600, letterSpacing: '-0.01em' },
      '2xl': { size: '1.5rem', lineHeight: '1.4', weight: 600, letterSpacing: '-0.01em' },
      '3xl': { size: '1.875rem', lineHeight: '1.3', weight: 700, letterSpacing: '-0.015em' },
    },
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
  },
  radius: {
    xs: '6px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '999px',
  },
  shadow: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 8px rgba(0, 0, 0, 0.12)',
    lg: '0 6px 20px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 32px rgba(0, 0, 0, 0.2)',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Tokens = typeof tokens;

export function buildCssVariables(themeName: ThemeName): string {
  const theme = tokens.colors[themeName];
  // base variables
  const lines: string[] = [
    `--bg-default: ${theme.background.default};`,
    `--bg-subtle: ${theme.background.subtle};`,
    `--bg-muted: ${theme.background.muted};`,
    `--text-default: ${theme.text.default};`,
    `--text-muted: ${theme.text.muted};`,
    `--text-subtle: ${theme.text.subtle};`,
    `--border-default: ${theme.border.default};`,
    `--border-subtle: ${theme.border.subtle};`,
    `--border-focus: ${theme.border.focus};`,
    `--accent-default: ${theme.accent.default};`,
    `--accent-hover: ${theme.accent.hover};`,
    `--accent-pressed: ${theme.accent.pressed};`,
    `--accent-subtle: ${theme.accent.subtle};`,
    `--status-success-bg: ${theme.status.success.bg};`,
    `--status-success-text: ${theme.status.success.text};`,
    `--status-success-border: ${theme.status.success.border};`,
    `--status-warning-bg: ${theme.status.warning.bg};`,
    `--status-warning-text: ${theme.status.warning.text};`,
    `--status-warning-border: ${theme.status.warning.border};`,
    `--status-danger-bg: ${theme.status.danger.bg};`,
    `--status-danger-text: ${theme.status.danger.text};`,
    `--status-danger-border: ${theme.status.danger.border};`,
    `--status-info-bg: ${theme.status.info.bg};`,
    `--status-info-text: ${theme.status.info.text};`,
    `--status-info-border: ${theme.status.info.border};`,
    `--overlay-backdrop: ${theme.overlay.backdrop};`,
    // radius
    `--radius-xs: ${tokens.radius.xs};`,
    `--radius-sm: ${tokens.radius.sm};`,
    `--radius-md: ${tokens.radius.md};`,
    `--radius-lg: ${tokens.radius.lg};`,
    `--radius-xl: ${tokens.radius.xl};`,
    `--radius-full: ${tokens.radius.full};`,
    // shadow
    `--shadow-sm: ${tokens.shadow.sm};`,
    `--shadow-md: ${tokens.shadow.md};`,
    `--shadow-lg: ${tokens.shadow.lg};`,
    `--shadow-xl: ${tokens.shadow.xl};`,
  ];
  return `:root{${lines.join('')}}`;
}

