import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        'bg-[--bg-subtle] border border-[--border-default] rounded-[--radius-lg] shadow-sm',
        interactive ? 'transition-all hover:shadow-md hover:-translate-y-0.5' : '',
        className ?? '',
      ].join(' ')}
      {...props}
    />
  )
);

Card.displayName = 'Card';

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4 border-b border-[--border-subtle]', className ?? ''].join(' ')} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4', className ?? ''].join(' ')} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={['p-4 border-t border-[--border-subtle]', className ?? ''].join(' ')} {...props} />;
}


