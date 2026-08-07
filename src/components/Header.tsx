import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Vote,
  Search,
  Layers,
  Scale,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  FileText,
  Menu,
  X,
  Compass,
  Sparkles
} from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { VotochiaroLogo } from './VotochiaroLogo';
import { ThemeMode } from '../types';

export type TabType = 'home' | 'topics' | 'programs' | 'compare' | 'quiz' | 'polls' | 'factcheck' | 'faq';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenGlossaryModal: () => void;
  onOpenWelcomeModal: () => void;
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export interface HeaderTabItem {
  id: TabType;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  colorClass: {
    iconColor: string;
    iconBg: string;
    activeIconColor: string;
    activeIconBg: string;
  };
}

export const HEADER_TABS: HeaderTabItem[] = [
  {
    id: 'home',
    label: 'Home',
    desc: 'Guida e panoramica del portale',
    icon: Compass,
    badge: 'Inizio',
    colorClass: {
      iconColor: 'text-sky-500 dark:text-sky-400',
      iconBg: 'bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/30',
      activeIconColor: 'text-sky-300',
      activeIconBg: 'bg-sky-400/25 border-sky-300/30',
    },
  },
  {
    id: 'topics',
    label: 'Temi Caldi',
    desc: 'Analisi e posizioni dei partiti sui temi chiave',
    icon: Layers,
    badge: 'Dibattito',
    colorClass: {
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/30',
      activeIconColor: 'text-indigo-300',
      activeIconBg: 'bg-indigo-400/25 border-indigo-300/30',
    },
  },
  {
    id: 'programs',
    label: 'Programmi Partiti',
    desc: 'Schede e pilastri dei partiti',
    icon: FileText,
    badge: 'Nuovo 2026',
    colorClass: {
      iconColor: 'text-blue-600 dark:text-sky-400',
      iconBg: 'bg-blue-500/10 dark:bg-sky-500/20 border-blue-500/30',
      activeIconColor: 'text-sky-300',
      activeIconBg: 'bg-blue-400/25 border-blue-300/30',
    },
  },
  {
    id: 'compare',
    label: 'Confronto Diretto',
    desc: 'Matrice di confronto tra 2 partiti',
    icon: Scale,
    colorClass: {
      iconColor: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/30',
      activeIconColor: 'text-amber-300',
      activeIconBg: 'bg-amber-400/25 border-amber-300/30',
    },
  },
  {
    id: 'quiz',
    label: 'Quiz Affinità',
    desc: 'Test guidato per scoprire l\'affinità',
    icon: Vote,
    badge: 'Popolare',
    colorClass: {
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/30',
      activeIconColor: 'text-purple-300',
      activeIconBg: 'bg-purple-400/25 border-purple-300/30',
    },
  },
  {
    id: 'polls',
    label: 'Sondaggi & Seggi',
    desc: 'Intenzioni di voto e simulazione seggi',
    icon: BarChart3,
    colorClass: {
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/30',
      activeIconColor: 'text-emerald-300',
      activeIconBg: 'bg-emerald-400/25 border-emerald-300/30',
    },
  },
  {
    id: 'factcheck',
    label: 'Fact-Checking',
    desc: 'Verifica bufale e dichiarazioni',
    icon: CheckCircle2,
    colorClass: {
      iconColor: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/30',
      activeIconColor: 'text-rose-300',
      activeIconBg: 'bg-rose-400/25 border-rose-300/30',
    },
  },
  {
    id: 'faq',
    label: 'FAQ & Guida',
    desc: 'Guida al voto, legge elettorale e glossario',
    icon: HelpCircle,
    colorClass: {
      iconColor: 'text-teal-600 dark:text-teal-400',
      iconBg: 'bg-teal-500/10 dark:bg-teal-500/20 border-teal-500/30',
      activeIconColor: 'text-teal-300',
      activeIconBg: 'bg-teal-400/25 border-teal-300/30',
    },
  },
];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenGlossaryModal,
  onOpenWelcomeModal,
  currentTheme,
  onSelectTheme,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = HEADER_TABS;
  const currentActiveTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];
  const ActiveHeaderIcon = currentActiveTabObj.icon;

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);

    // Touch Swipe Right Gesture Handler (Opens mobile drawer menu on swipe from left)
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Detect swipe right starting near left edge or significant horizontal displacement
      if (deltaX > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && touchStartX < 140) {
        setIsMobileMenuOpen(true);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('resize', checkScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };  return (
    <header className="sticky top-0 z-30 glass-header shadow-md transition-colors duration-200 border-b theme-border w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        {/* Desktop Top Header Bar (When Sidebar is active on md+) */}
        <div className="hidden md:flex items-center justify-between h-16 gap-4 w-full">
          {/* Active Tab Breadcrumb Title */}
          <div className="flex items-center space-x-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shadow-md shrink-0 border ${currentActiveTabObj.colorClass.iconBg}`}>
              <ActiveHeaderIcon className={`w-5 h-5 ${currentActiveTabObj.colorClass.iconColor}`} />
            </div>
            <div>
              <h1 className="text-base font-black tracking-tight leading-tight flex items-center space-x-2">
                <span>{currentActiveTabObj.label}</span>
                {currentActiveTabObj.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-800/10 dark:bg-sky-500/15 text-slate-800 dark:text-sky-300 border border-slate-800/20 dark:border-sky-500/30">
                    {currentActiveTabObj.badge}
                  </span>
                )}
              </h1>
              <p className="text-[11px] theme-text-muted">
                {currentActiveTabObj.desc} — Votochiaro Italia
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="flex items-center relative max-w-sm w-full">
            <Search className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca tema, partito, o legge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full theme-subcard text-xs placeholder:text-slate-400 theme-text-muted pl-9 pr-8 py-2 rounded-xl border theme-border focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-sky-500/40 transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 font-bold"
              >
                ×
              </button>
            )}
          </div>

          {/* Top Desktop Action Tools */}
          <div className="flex items-center space-x-2 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenGlossaryModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 min-h-[36px] text-xs font-bold rounded-xl theme-subcard border theme-border hover:border-slate-400 dark:hover:border-sky-500/40 transition shadow-xs"
              title="Dizionario Politico Spiegato Semplice"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-700 dark:text-sky-400 shrink-0" />
              <span>Glossario</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenWelcomeModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 min-h-[36px] text-xs font-bold rounded-xl bg-slate-800/10 dark:bg-sky-500/10 text-slate-800 dark:text-sky-300 border border-slate-800/20 dark:border-sky-500/30 hover:bg-slate-800/20 dark:hover:bg-sky-500/20 transition shadow-xs"
              title="Guida & Info Benvenuto"
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-700 dark:text-sky-400 shrink-0" />
              <span>Guida Voto</span>
            </motion.button>

            <ThemeSelector currentTheme={currentTheme} onSelectTheme={onSelectTheme} compact />
          </div>
        </div>

        {/* Clean & Intuitive Mobile Top Navigation Bar (< md) */}
        <div className="md:hidden py-2.5 flex items-center justify-between gap-2">
          {/* Left: Hamburger Icon + Logo */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-1 rounded-xl theme-subcard border theme-border text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-sky-400 transition shadow-xs flex items-center justify-center shrink-0"
              aria-label="Apri Menù"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div onClick={() => setIsMobileMenuOpen(true)} className="cursor-pointer shrink-0">
              <VotochiaroLogo size="sm" showSubtitle={false} />
            </div>
          </div>

          {/* Right Mobile Quick Tools */}
          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={onOpenGlossaryModal}
              className="p-2 rounded-xl theme-subcard border theme-border text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 transition"
              title="Glossario"
            >
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
            </button>

            <ThemeSelector currentTheme={currentTheme} onSelectTheme={onSelectTheme} compact />
          </div>
        </div>

        {/* Mobile Quick Search Input Bar (< md) */}
        <div className="md:hidden pb-2.5">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca tema, partito, legge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full theme-subcard text-xs placeholder:text-slate-400 theme-text-muted pl-8 pr-7 py-1.5 rounded-xl border theme-border focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-indigo-600 dark:hover:text-sky-400 p-1 font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Off-Canvas Smartphone Slide-In Side Drawer Menu (Portaled directly to document.body) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-[999999] md:hidden">
                {/* Dark Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
                />

                {/* Slide-In Side Drawer Panel (From Left) */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="fixed top-0 left-0 bottom-0 z-[1000000] w-[85vw] max-w-xs h-full theme-card border-r theme-border shadow-2xl flex flex-col overflow-hidden"
                >
                  {/* Drawer Top Header */}
                  <div className="p-4 border-b theme-border flex items-center justify-between bg-slate-800/10 dark:bg-slate-900/40">
                    <div
                      onClick={() => {
                        setActiveTab('home');
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="cursor-pointer"
                    >
                      <VotochiaroLogo size="md" showSubtitle={true} />
                    </div>

                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-xl theme-subcard border theme-border text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition"
                      aria-label="Chiudi Menù"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Drawer Category Label */}
                  <div className="px-4 py-2.5 border-b theme-border bg-slate-500/5 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <span className="flex items-center space-x-1.5 text-slate-700 dark:text-sky-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Sfoglia Sezioni</span>
                    </span>
                    <span>{tabs.length} Sezioni</span>
                  </div>

                  {/* Vertical Nav List */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {tabs.map((tab, idx) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;

                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id as TabType);
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all cursor-pointer group hover:scale-[1.01] active:scale-[0.98] ${
                            isActive
                              ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg shadow-slate-900/25 border border-slate-700/60 font-black'
                              : 'theme-subcard text-slate-800 dark:text-slate-200 border theme-border hover:border-slate-400 dark:hover:border-sky-500/40'
                          }`}
                        >
                          <div className="flex items-center space-x-3 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition ${
                                isActive
                                  ? tab.colorClass.activeIconBg
                                  : tab.colorClass.iconBg
                              }`}
                            >
                              <Icon
                                className={`w-4 h-4 ${
                                  isActive ? tab.colorClass.activeIconColor : tab.colorClass.iconColor
                                }`}
                              />
                            </div>

                            <div className="min-w-0 leading-tight">
                              <div className="flex items-center space-x-1.5">
                                <span className="text-xs sm:text-sm font-bold truncate block">{tab.label}</span>
                                {tab.badge && (
                                  <span
                                    className={`text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full shrink-0 ${
                                      isActive
                                        ? 'bg-white/20 text-white'
                                        : 'bg-slate-800/15 dark:bg-sky-500/15 text-slate-800 dark:text-sky-300'
                                    }`}
                                  >
                                    {tab.badge}
                                  </span>
                                )}
                              </div>
                              <span
                                className={`text-[10px] block truncate font-normal mt-0.5 ${
                                  isActive ? 'text-slate-200' : 'theme-text-muted'
                                }`}
                              >
                                {tab.desc}
                              </span>
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Drawer Bottom Utility Footer */}
                  <div className="p-3 border-t theme-border bg-slate-500/5 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          onOpenGlossaryModal();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center space-x-1.5 py-2 px-2 text-xs font-bold rounded-xl theme-subcard border theme-border hover:border-indigo-400 transition cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                        <span>Glossario</span>
                      </button>

                      <button
                        onClick={() => {
                          onOpenWelcomeModal();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center space-x-1.5 py-2 px-2 text-xs font-bold rounded-xl bg-slate-800/10 dark:bg-sky-500/10 text-slate-800 dark:text-sky-300 border border-slate-800/20 dark:border-sky-500/30 transition cursor-pointer"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                        <span>Guida</span>
                      </button>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t theme-border">
                      <span className="text-[10px] font-bold theme-text-muted">Tema Grafico</span>
                      <ThemeSelector currentTheme={currentTheme} onSelectTheme={onSelectTheme} compact />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};


