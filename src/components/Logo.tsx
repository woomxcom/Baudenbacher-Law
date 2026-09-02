import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  onClick
}) => {
  const isLight = variant === 'light';

  return (
    <div
      id="brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none cursor-pointer group ${className}`}
    >
      {/* Monogram Icon */}
      <div className="relative flex items-center justify-center">
        <div className={`relative flex items-baseline font-serif font-semibold tracking-tighter ${
          size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'
        }`}>
          <span className={`${isLight ? 'text-white group-hover:text-[#E4D9CC]' : 'text-[#213134]'} transition-colors duration-300 font-serif`}>
            B
          </span>
          <span className="text-[#C6A15B] text-lg font-serif italic -ml-1 transform translate-y-1 group-hover:scale-110 transition-transform duration-300">
            L
          </span>
        </div>
        {/* Subtle decorative gold dot or underline */}
        <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center text-left border-l border-[#C6A15B]/30 pl-3.5">
        <span
          className={`font-serif tracking-[0.14em] font-medium uppercase leading-none ${
            isLight ? 'text-white' : 'text-[#213134]'
          } ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}
        >
          Baudenbacher Law AG
        </span>
        <span
          className={`font-sans tracking-[0.28em] font-normal uppercase mt-1 leading-none ${
            isLight ? 'text-[#E4D9CC]/80' : 'text-[#213134]/70'
          } ${size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px]'}`}
        >
          Rechtsanwälte & Advisors
        </span>
      </div>
    </div>
  );
};
