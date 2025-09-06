import * as React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={['text-sm font-medium text-[--text-muted]', className ?? ''].join(' ')}
      {...props}
    />
  )
);

Label.displayName = 'Label';


