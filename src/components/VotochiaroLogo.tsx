import React from 'react';
import { motion } from 'motion/react';

interface VotochiaroLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const VotochiaroLogo: React.FC<VotochiaroLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-sm',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 text-base',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none group shrink-0"
    >
      {/* Dynamic Animated Emblem Mark */}
      <div className={`relative ${sizeClasses[size]} rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center text-white font-black shadow-md shadow-slate-900/25 border border-slate-700/60 overflow-hidden shrink-0`}>
        {/* Internal Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-60 pointer-events-none" />
        
        {/* Custom Italian Tricolor Ribbon Accent in Corner */}
        <div className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 flex pointer-events-none">
          <span className="w-1/3 h-full bg-emerald-500" />
          <span className="w-1/3 h-full bg-white" />
          <span className="w-1/3 h-full bg-red-500" />
        </div>

        {/* Custom SVG Ballot Checkmark Icon */}
        <svg
          className="w-3/5 h-3/5 text-indigo-300 dark:text-sky-300 drop-shadow-md transform group-hover:scale-110 transition duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center space-x-1.5">
          <span className="font-black text-base sm:text-xl tracking-tight text-slate-900 dark:text-white drop-shadow-xs whitespace-nowrap">
            Voto<span className="text-indigo-600 dark:text-sky-400">chiaro</span>
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 text-indigo-700 dark:text-sky-300 border border-indigo-500/20 dark:border-sky-500/30 hidden xs:inline-block sm:inline-block">
            Italia
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase mt-0.5 hidden sm:block whitespace-nowrap">
            Guida al Voto Consapevole
          </span>
        )}
      </div>
    </motion.div>
  );
};
