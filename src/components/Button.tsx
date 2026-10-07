import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  icon,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 rounded-full",
    md: "text-sm px-5 py-2.5 gap-2 rounded-full",
    lg: "text-base px-7 py-3.5 gap-2.5 rounded-full",
  };

  const variantStyles = {
    primary: "bg-[#0056b3] hover:bg-[#004494] text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 border border-blue-600/20",
    secondary: "bg-[#ff6b00] hover:bg-[#e56000] text-white shadow-md shadow-orange-950/20 hover:-translate-y-0.5 border border-orange-500/30",
    outline: "bg-white border border-slate-300 hover:border-[#0056b3] text-slate-800 hover:text-[#0056b3] hover:bg-blue-50/50 shadow-sm",
    ghost: "text-slate-700 hover:text-[#0056b3] hover:bg-slate-100",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
