import React from 'react';
import { Sun, Moon, BookOpen, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeSelectorProps {
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  compact?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onSelectTheme,
  compact = false,
}) => {
  const themes: { id: ThemeMode; label: string; icon: React.ReactNode; bgClass: string; textClass: string }[] = [
    {
      id: 'light',
      label: 'Chiaro',
      icon: <Sun className="w-3.5 h-3.5 text-amber-500" />,
      bgClass: 'bg-white border-slate-200',
      textClass: 'text-slate-800',
    },
    {
      id: 'dark',
      label: 'Scuro',
      icon: <Moon className="w-3.5 h-3.5 text-indigo-400" />,
      bgClass: 'bg-slate-900 border-slate-700',
      textClass: 'text-slate-100',
    },
    {
      id: 'sepia',
      label: 'Carta',
      icon: <BookOpen className="w-3.5 h-3.5 text-amber-700" />,
      bgClass: 'bg-[#fcf9f2] border-[#dfd2be]',
      textClass: 'text-[#2a2118]',
    },
  ];

  if (compact) {
    return (
      <div className="inline-flex items-center p-1 rounded-xl theme-subcard border border-white/10 gap-1">
        {themes.map((t) => {
          const isActive = currentTheme === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTheme(t.id)}
              title={`Tema ${t.label}`}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-semibold transition cursor-pointer hover:scale-105 active:scale-95 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'theme-text-muted hover:text-indigo-600 dark:hover:text-sky-400 hover:bg-white/10'
              }`}
            >
              <span>{t.icon}</span>
              <span className="hidden sm:inline text-[11px]">{t.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
        Modalità Lettura:
      </span>
      {themes.map((t) => {
        const isActive = currentTheme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onSelectTheme(t.id)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${t.bgClass} ${t.textClass} ${
              isActive
                ? 'ring-2 ring-indigo-600 border-indigo-600 shadow-xs'
                : 'opacity-70 hover:opacity-100 hover:scale-[1.05] active:scale-95'
            }`}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};
