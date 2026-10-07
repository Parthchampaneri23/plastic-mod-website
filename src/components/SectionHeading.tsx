import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#0056b3] bg-blue-50 border border-blue-200 mb-3.5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-[#0056b3]">{highlightText}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
