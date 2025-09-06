import * as React from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <input
      ref={ref}
      className={[
        'block w-full rounded-[--radius-md] border bg-[--bg-default] text-[--text-default] placeholder-[--text-subtle]',
        'h-10 px-3 outline-none transition-colors',
        invalid
          ? 'border-[--status-danger-border] focus:border-[--status-danger-border]'
          : 'border-[--border-default] focus:border-[--border-focus]',
        className ?? '',
      ].join(' ')}
      {...props}
    />
  )
);

Input.displayName = 'Input';


