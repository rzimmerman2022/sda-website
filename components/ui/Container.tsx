import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:px-8',
          {
            'max-w-7xl': size === 'default',
            'max-w-4xl': size === 'narrow',
            'max-w-[90rem]': size === 'wide',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };
