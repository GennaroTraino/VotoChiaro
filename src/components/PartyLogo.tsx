import React from 'react';
import { PartyId } from '../types';

interface PartyLogoProps {
  partyId: PartyId;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showName?: boolean;
}

export const PartyLogo: React.FC<PartyLogoProps> = ({
  partyId,
  size = 'md',
  className = '',
  showName = false,
}) => {
  const sizeMap = {
    xs: 'w-5 h-5 text-[9px]',
    sm: 'w-7 h-7 text-[11px]',
    md: 'w-9 h-9 text-xs',
    lg: 'w-12 h-12 text-sm',
    xl: 'w-16 h-16 text-base',
  };

  const dim = sizeMap[size] || sizeMap.md;

  // Render SVG emblems for each party
  const renderSvg = () => {
    switch (partyId) {
      case 'fdi':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            {/* Background Circle */}
            <circle cx="50" cy="50" r="48" fill="#0b2e59" stroke="#ffffff" strokeWidth="2" />
            {/* Tricolor Flame */}
            <path d="M42 68 C40 55, 30 45, 42 28 C46 36, 48 42, 45 68 Z" fill="#009246" />
            <path d="M48 70 C46 52, 42 40, 50 24 C55 35, 54 48, 52 70 Z" fill="#ffffff" />
            <path d="M54 68 C58 55, 68 45, 56 28 C52 36, 50 42, 53 68 Z" fill="#ce2b37" />
            {/* Base Bar */}
            <rect x="25" y="70" width="50" height="6" rx="3" fill="#009246" />
            <rect x="40" y="70" width="20" height="6" fill="#ffffff" />
            <rect x="55" y="70" width="20" height="6" rx="3" fill="#ce2b37" />
            {/* Text */}
            <text x="50" y="88" fontSize="9" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">FdI</text>
          </svg>
        );

      case 'pd':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            {/* P in Green */}
            <text x="32" y="58" fontSize="48" fontWeight="900" fill="#008a43" fontFamily="sans-serif">P</text>
            {/* D in Red */}
            <text x="56" y="58" fontSize="48" fontWeight="900" fill="#e30613" fontFamily="sans-serif">D</text>
            {/* Olive branch line */}
            <path d="M20 72 Q50 82 80 72" stroke="#008a43" strokeWidth="5" fill="none" strokeLinecap="round" />
            <circle cx="35" cy="77" r="3" fill="#008a43" />
            <circle cx="50" cy="78" r="3" fill="#ce2b37" />
            <circle cx="65" cy="77" r="3" fill="#008a43" />
          </svg>
        );

      case 'm5s':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#eab308" strokeWidth="3" />
            <circle cx="50" cy="50" r="44" fill="#e11d48" />
            {/* 5 Yellow Stars */}
            {[...Array(5)].map((_, i) => {
              const angle = (i - 2) * 22 - 90;
              const rad = (angle * Math.PI) / 180;
              const cx = 50 + 26 * Math.cos(rad);
              const cy = 48 + 22 * Math.sin(rad);
              return (
                <polygon
                  key={i}
                  points={`${cx},${cy - 5} ${cx + 1.5},${cy - 1.5} ${cx + 5},${cy - 1.5} ${cx + 2},${cy + 1} ${cx + 3},${cy + 5} ${cx},${cy + 2.5} ${cx - 3},${cy + 5} ${cx - 2},${cy + 1} ${cx - 5},${cy - 1.5} ${cx - 1.5},${cy - 1.5}`}
                  fill="#facc15"
                />
              );
            })}
            <text x="50" y="74" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">M5S</text>
          </svg>
        );

      case 'lega':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#008000" stroke="#ffffff" strokeWidth="2" />
            <circle cx="50" cy="50" r="42" fill="#0f4c81" />
            {/* Alberto da Giussano Warrior Silhouette */}
            <path d="M50 22 L50 48 M38 32 L62 32" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 48 L42 70 M50 48 L58 70" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M35 25 L50 15 L65 25" stroke="#facc15" strokeWidth="3" fill="none" />
            <text x="50" y="86" fontSize="11" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">LEGA</text>
          </svg>
        );

      case 'fi':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#0055a5" stroke="#ffffff" strokeWidth="2" />
            {/* Flag */}
            <path d="M22 30 L40 30 L40 55 L22 55 Z" fill="#009246" />
            <path d="M40 30 L60 30 L60 55 L40 55 Z" fill="#ffffff" />
            <path d="M60 30 L78 30 L78 55 L60 55 Z" fill="#ce2b37" />
            <text x="50" y="72" fontSize="10" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">FORZA</text>
            <text x="50" y="83" fontSize="10" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">ITALIA</text>
          </svg>
        );

      case 'avs':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#15803d" />
            <path d="M50 2 C76 2 98 24 98 50 C98 76 76 98 50 98 Z" fill="#dc2626" />
            <text x="50" y="56" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">AVS</text>
          </svg>
        );

      case 'azione':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#1e3a8a" stroke="#ffffff" strokeWidth="2" />
            <path d="M25 70 L50 25 L75 70 L62 70 L50 45 L38 70 Z" fill="#38bdf8" />
            <text x="50" y="86" fontSize="10" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">AZIONE</text>
          </svg>
        );

      case 'iv':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#db2777" stroke="#ffffff" strokeWidth="2" />
            {/* Wave / Seagull */}
            <path d="M20 50 Q38 30 50 50 Q62 70 80 40" stroke="#f472b6" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M20 60 Q38 40 50 60 Q62 80 80 50" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" />
            <text x="50" y="84" fontSize="12" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">IV</text>
          </svg>
        );

      case 'piueuropa':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#003366" stroke="#facc15" strokeWidth="2" />
            <text x="50" y="52" fontSize="30" fontWeight="900" fill="#facc15" textAnchor="middle" fontFamily="sans-serif">+E</text>
            <text x="50" y="78" fontSize="10" fontWeight="800" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">EUROPA</text>
          </svg>
        );

      case 'libdem':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#0891b2" stroke="#ffffff" strokeWidth="2" />
            <path d="M50 20 L58 38 L78 38 L62 50 L68 70 L50 58 L32 70 L38 50 L22 38 L42 38 Z" fill="#ffffff" opacity="0.3" />
            <text x="50" y="58" fontSize="20" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">LIB</text>
            <text x="50" y="76" fontSize="11" fontWeight="800" fill="#f0fdf4" textAnchor="middle" fontFamily="sans-serif">DEM</text>
          </svg>
        );

      case 'vannacci':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#14532d" stroke="#facc15" strokeWidth="2" />
            <polygon points="50,20 57,36 74,36 60,46 65,62 50,52 35,62 40,46 26,36 43,36" fill="#facc15" />
            <text x="50" y="82" fontSize="10" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">FUTURO N.</text>
          </svg>
        );

      case 'scn':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#ea580c" stroke="#facc15" strokeWidth="2" />
            <path d="M30 40 L50 20 L70 40 L60 40 L60 70 L40 70 L40 40 Z" fill="#facc15" />
            <text x="50" y="86" fontSize="9" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">SUD/NORD</text>
          </svg>
        );

      case 'dsp':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-xs">
            <circle cx="50" cy="50" r="48" fill="#7f1d1d" stroke="#facc15" strokeWidth="2" />
            <text x="50" y="54" fontSize="24" fontWeight="900" fill="#facc15" textAnchor="middle" fontFamily="sans-serif">DSP</text>
            <text x="50" y="76" fontSize="8" fontWeight="800" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">SOVRANA</text>
          </svg>
        );

      default:
        return (
          <div className="w-full h-full rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">
            {partyId.toUpperCase()}
          </div>
        );
    }
  };

  return (
    <div className={`inline-flex items-center space-x-2 shrink-0 ${className}`}>
      <div className={`${dim} shrink-0 relative flex items-center justify-center`}>
        {renderSvg()}
      </div>
      {showName && (
        <span className="font-bold text-xs tracking-tight">
          {partyId.toUpperCase()}
        </span>
      )}
    </div>
  );
};
