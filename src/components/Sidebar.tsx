import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  FileText,
  Scale,
  Vote,
  BarChart3,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sparkles,
  Compass
} from 'lucide-react';
import { VotochiaroLogo } from './VotochiaroLogo';
import { ThemeSelector } from './ThemeSelector';
import { TabType, HEADER_TABS } from './Header';
import { ThemeMode } from '../types';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenGlossaryModal: () => void;
  onOpenWelcomeModal: () => void;
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export const NAV_ITEMS = HEADER_TABS;

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenGlossaryModal,
  onOpenWelcomeModal,
  currentTheme,
  onSelectTheme,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`hidden md:flex flex-col h-screen sticky top-0 z-30 transition-all duration-300 ease-in-out border-r theme-border theme-card shadow-xl select-none shrink-0 ${
        isCollapsed ? 'w-20' : 'w-64 lg:w-72'
      }`}
    >
      {/* Top Sidebar Header with Logo */}
      <div className="p-4 border-b theme-border flex items-center justify-between gap-2">
        {!isCollapsed ? (
          <div onClick={() => setActiveTab('home')} className="cursor-pointer overflow-hidden">
            <VotochiaroLogo size="md" showSubtitle={true} />
          </div>
        ) : (
          <div onClick={() => setActiveTab('home')} className="mx-auto cursor-pointer p-1">
            <VotochiaroLogo size="sm" showSubtitle={false} />
          </div>
        )}

        {/* Collapse Toggle Button */}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 rounded-xl theme-subcard border theme-border theme-text-muted hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 dark:hover:border-sky-500/40 transition shrink-0 cursor-pointer"
          title={isCollapsed ? 'Espandi Sidebar' : 'Riduci Sidebar'}
        >
          {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Quick Search Bar (when expanded) */}
      {!isCollapsed && (
        <div className="p-3 border-b theme-border">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca tema o legge..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full theme-subcard text-xs placeholder:text-slate-400 theme-text-muted pl-8 pr-7 py-1.5 rounded-xl border theme-border focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-sky-500/40 transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-slate-800 p-1 cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>
      )}

      {/* Vertical Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5 no-scrollbar">
        {!isCollapsed && (
          <div className="px-2 pb-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Sezioni Votochiaro
          </div>
        )}

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              title={isCollapsed ? item.label : undefined}
              whileHover={{ scale: 1.03, x: isCollapsed ? 0 : 3 }}
              whileTap={{ scale: 0.96 }}
              className={`relative w-full flex items-center ${
                isCollapsed ? 'justify-center px-2' : 'justify-start px-3'
              } py-2.5 rounded-2xl transition-all duration-200 group cursor-pointer ${
                isActive
                  ? 'text-white font-extrabold shadow-md shadow-slate-900/20'
                  : 'theme-subcard text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-sky-300 border theme-border hover:border-slate-400 dark:hover:border-sky-500/40'
              }`}
            >
              {/* Active Tab Spring Highlight Backdrop */}
              {isActive && (
                <motion.div
                  layoutId="activeSideTab"
                  className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl shadow-lg border border-slate-700/60 -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {/* Colored Section Icon Container with Bubble Bounce on Hover */}
              <div className="flex items-center space-x-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-110 ${
                    isActive
                      ? item.colorClass.activeIconBg
                      : item.colorClass.iconBg
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? item.colorClass.activeIconColor : item.colorClass.iconColor
                    }`}
                  />
                </div>

                {!isCollapsed && (
                  <div className="text-left leading-tight min-w-0 truncate">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs sm:text-sm font-bold truncate block">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase shrink-0 ${
                            isActive
                              ? 'bg-white/20 text-white border border-white/30'
                              : 'bg-slate-800/15 dark:bg-sky-500/15 text-slate-800 dark:text-sky-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-medium block truncate ${
                        isActive ? 'text-slate-200' : 'theme-text-muted'
                      }`}
                    >
                      {item.desc}
                    </span>
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Tools & Footer Info */}
      <div className="p-3 border-t theme-border space-y-2">
        {/* Quick Utility Actions */}
        {!isCollapsed ? (
          <div className="grid grid-cols-2 gap-1.5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenGlossaryModal}
              className="flex items-center justify-center space-x-1.5 py-2 px-2 text-xs font-bold rounded-xl theme-subcard border theme-border hover:border-slate-400 dark:hover:border-sky-500/40 transition cursor-pointer"
              title="Dizionario Politico"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-700 dark:text-sky-400 shrink-0" />
              <span>Glossario</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenWelcomeModal}
              className="flex items-center justify-center space-x-1.5 py-2 px-2 text-xs font-bold rounded-xl bg-slate-800/10 dark:bg-sky-500/10 text-slate-800 dark:text-sky-300 border border-slate-800/20 dark:border-sky-500/30 hover:bg-slate-800/20 dark:hover:bg-sky-500/20 transition cursor-pointer"
              title="Guida al Voto"
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-700 dark:text-sky-400 shrink-0" />
              <span>Guida</span>
            </motion.button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenGlossaryModal}
              className="p-2 rounded-xl theme-subcard border theme-border hover:border-slate-400 dark:hover:border-sky-500/40 transition cursor-pointer"
              title="Glossario"
            >
              <BookOpen className="w-4 h-4 text-slate-700 dark:text-sky-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenWelcomeModal}
              className="p-2 rounded-xl bg-slate-800/10 dark:bg-sky-500/10 text-slate-800 dark:text-sky-300 border border-slate-800/20 dark:border-sky-500/30 transition cursor-pointer"
              title="Guida"
            >
              <HelpCircle className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* Theme Selector */}
        <div className="pt-1 flex items-center justify-between border-t theme-border">
          {!isCollapsed && <span className="text-[10px] font-bold theme-text-muted">Tema:</span>}
          <div className={isCollapsed ? 'mx-auto' : ''}>
            <ThemeSelector currentTheme={currentTheme} onSelectTheme={onSelectTheme} compact />
          </div>
        </div>
      </div>
    </aside>
  );
};
