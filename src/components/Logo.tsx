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
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none cursor-pointer group shrink-0 ${className}`}
    >
      {/* Monogram Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className={`relative flex items-baseline font-serif font-semibold tracking-tighter ${
          size === 'sm' ? 'text-xl sm:text-2xl' : size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
        }`}>
          <span className={`${isLight ? 'text-white group-hover:text-[#E4D9CC]' : 'text-[#213134]'} transition-colors duration-300 font-serif`}>
            B
          </span>
          <span className="text-[#C6A15B] text-base sm:text-lg font-serif italic -ml-1 transform translate-y-1 group-hover:scale-110 transition-transform duration-300">
            L
          </span>
        </div>
        {/* Subtle decorative gold dot or underline */}
        <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center text-left border-l border-[#C6A15B]/30 pl-2.5 sm:pl-3.5 min-w-0">
        <span
          className={`font-serif tracking-[0.1em] sm:tracking-[0.14em] font-medium uppercase leading-none whitespace-nowrap ${
            isLight ? 'text-white' : 'text-[#213134]'
          } ${size === 'sm' ? 'text-[11px] sm:text-xs' : size === 'lg' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}
        >
          Baudenbacher Law AG
        </span>
        <span
          className={`font-sans tracking-[0.2em] sm:tracking-[0.28em] font-normal uppercase mt-1 leading-none whitespace-nowrap ${
            isLight ? 'text-[#E4D9CC]/80' : 'text-[#213134]/70'
          } ${size === 'sm' ? 'text-[7.5px] sm:text-[8px]' : size === 'lg' ? 'text-[9.5px] sm:text-[11px]' : 'text-[8px] sm:text-[9.5px]'}`}
        >
          Rechtsanwälte & Advisors
        </span>
      </div>
    </div>
  );
};
