import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'filled', size = 'default', asChild = false, href, onClick, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantStyles = {
      filled: "bg-gray-700 text-white hover:bg-gray-600",
      outlined: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
    };
    
    const sizeStyles = {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6 text-lg"
    };
    
    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    
    if (href) {
      return (
        <a 
          href={href} 
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
