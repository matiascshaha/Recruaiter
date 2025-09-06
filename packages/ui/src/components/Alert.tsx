import * as React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

const variantMap: Record<AlertVariant, string> = {
  info: 'bg-[--status-info-bg] text-[--status-info-text] border-[--status-info-border]',
  success:
    'bg-[--status-success-bg] text-[--status-success-text] border-[--status-success-border]',
  warning:
    'bg-[--status-warning-bg] text-[--status-warning-text] border-[--status-warning-border]',
  danger:
    'bg-[--status-danger-bg] text-[--status-danger-text] border-[--status-danger-border]',
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      className={[
        'rounded-[--radius-md] border px-3 py-2 text-sm',
        variantMap[variant],
        className ?? '',
      ].join(' ')}
      {...props}
    />
  )
);

Alert.displayName = 'Alert';


