import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[--accent-default] text-white hover:bg-[--accent-hover] active:bg-[--accent-pressed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-default] disabled:opacity-60',
  secondary:
    'bg-[--bg-muted] text-[--text-default] hover:bg-[--bg-subtle] active:bg-[--bg-muted] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--border-focus] disabled:opacity-60',
  outline:
    'border border-[--border-default] text-[--text-default] hover:bg-[--bg-subtle] active:bg-[--bg-muted] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--border-focus] disabled:opacity-60',
  ghost:
    'bg-transparent text-[--text-default] hover:bg-[--bg-subtle] active:bg-[--bg-muted] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--border-focus] disabled:opacity-60',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-[--radius-sm]',
  md: 'h-9 px-4 text-sm rounded-[--radius-md]',
  lg: 'h-11 px-5 text-base rounded-[--radius-lg]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { variant = 'primary', size = 'md', className, ...rest } = props;
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center font-medium transition-colors disabled:cursor-not-allowed select-none',
          'shadow-sm hover:shadow-md active:shadow-sm',
          'focus:outline-none',
          variantClass[variant],
          sizeClass[size],
          className ?? '',
        ].join(' ')}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;

