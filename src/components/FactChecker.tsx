import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FACT_CHECKS, FactCheckItem } from '../data/factChecks';
import {
  CheckCircle2,
  ShieldAlert,
  Database,
  Search,
  ChevronDown,
  ChevronUp,
  Maximize2,
  ExternalLink,
  Filter,
  Sparkles,
  Layers,
  ArrowUpRight,
  Minimize2
} from 'lucide-react';
import { FloatingSheet } from './FloatingSheet';

export const FactChecker: React.FC = () => {
  const [selectedVerdictFilter, setSelectedVerdictFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Track expanded item IDs in compact mode
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  
  // Track selected card for full floating modal sheet
  const [activeModalCheck, setActiveModalCheck] = useState<FactCheckItem | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const expandAll = () => {
    setExpandedIds(filteredFactChecks.map((fc) => fc.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const filteredFactChecks = FACT_CHECKS.filter((fc) => {
    const matchesVerdict = selectedVerdictFilter === 'all' || fc.verdict === selectedVerdictFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      fc.claim.toLowerCase().includes(q) ||
      fc.speakerOrContext.toLowerCase().includes(q) ||
      fc.analysis.toLowerCase().includes(q) ||
      fc.officialData.toLowerCase().includes(q) ||
      fc.source.toLowerCase().includes(q);

    return matchesVerdict && matchesSearch;
  });

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4 sm:space-y-8">
      {/* Title Header */}
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
            Fact-Checking & Anti-Fake News
          </h2>
        </div>
        <p className="text-xs sm:text-sm theme-text-muted">
          Analisi obiettiva delle affermazioni virali e dei miti politici con dati certificati ISTAT, Banca d'Italia, Eurostat, NATO, INPS e Corte dei Conti. Clicca su qualsiasi scheda per espandere i dettagli.
        </p>
      </div>

      {/* Control & Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="theme-card rounded-3xl p-4 sm:p-5 shadow-lg border theme-border space-y-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Cerca bufala, tema o ente (es. Superbonus, Sanità, PNRR, NATO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full theme-subcard border theme-border text-xs placeholder:text-slate-400 theme-text-muted pl-9 pr-8 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-inner transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-indigo-500"
              >
                ×
              </button>
            )}
          </div>

          {/* Verdict Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            <span className="text-xs font-bold theme-text-muted shrink-0 mr-1 flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
              <span>Esito:</span>
            </span>

            {[
              { id: 'all', label: `Tutti` },
              { id: 'FALSO', label: 'Esito Falso' },
              { id: 'FUORVIANTE', label: 'Fuorviante' },
              { id: 'PARZIALMENTE FALSO', label: 'Parzialmente Falso' },
            ].map((vf) => (
              <button
                key={vf.id}
                onClick={() => setSelectedVerdictFilter(vf.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition border ${
                  selectedVerdictFilter === vf.id
                    ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700 shadow-md shadow-slate-900/25 ring-2 ring-indigo-500/40'
                    : 'bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-sky-500/40'
                }`}
              >
                {vf.label}
              </button>
            ))}
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center space-x-2 shrink-0 self-end lg:self-center">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-xl theme-subcard border theme-border text-xs font-bold text-indigo-600 dark:text-sky-400 hover:border-indigo-400 transition"
            >
              Espandi Tutti
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-xl theme-subcard border theme-border text-xs font-bold theme-text-muted hover:border-indigo-400 transition"
            >
              Comprimi Tutti
            </button>
          </div>
        </div>
      </motion.div>

      {/* Fact Checks List - Compact Accordion Mode */}
      {filteredFactChecks.length === 0 ? (
        <div className="text-center py-16 theme-card rounded-3xl border border-white/10 p-8 shadow-lg">
          <p className="theme-text-muted font-medium text-sm">
            Nessuna verifica trovata per i criteri cercati.
          </p>
          <button
            onClick={() => {
              setSelectedVerdictFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 text-xs font-extrabold text-indigo-600 dark:text-sky-400 hover:underline"
          >
            Ripristina filtri di ricerca
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFactChecks.map((fc, index) => {
            const isExpanded = expandedIds.includes(fc.id);

            return (
              <motion.div
                key={fc.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  layout: { type: 'spring', stiffness: 350, damping: 25 },
                  delay: index * 0.03,
                }}
                whileHover={{ scale: 1.008, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="theme-card rounded-2xl border border-white/10 shadow-md overflow-hidden backdrop-blur-2xl transition-all"
              >
                {/* Compact Row Header (Always Visible - Only Title + Badge) */}
                <div
                  onClick={() => toggleExpand(fc.id)}
                  className="p-4 sm:p-5 cursor-pointer hover:bg-white/5 transition flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3.5 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${fc.verdictBg}`}>
                          {fc.verdictText}
                        </span>
                        <span className="text-[10px] font-semibold theme-text-muted truncate">
                          {fc.speakerOrContext}
                        </span>
                      </div>

                      {/* Main Compact Claim Title */}
                      <h3 className="text-sm sm:text-base font-extrabold tracking-tight line-clamp-2 leading-snug">
                        "{fc.claim}"
                      </h3>
                    </div>
                  </div>

                  {/* Expand Icon / Chevron */}
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-sky-400 hidden sm:inline-block">
                      {isExpanded ? 'Chiudi' : 'Espandi'}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 rounded-full theme-subcard border flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Inline Expanded Details (Show Analysis + Data + Source) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 theme-subcard space-y-4"
                    >
                      {/* Analysis Paragraph */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-indigo-700 dark:text-sky-300 mb-1">
                          Analisi Dettagliata dei Fatti
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed theme-text-muted font-medium">
                          {fc.analysis}
                        </p>
                      </div>

                      {/* Official Verified Data Box */}
                      <div className="p-4 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/10 border border-indigo-500/20 dark:border-sky-500/20 text-xs flex items-start space-x-3">
                        <Database className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold block mb-0.5 text-indigo-700 dark:text-sky-300">
                            Dato Ufficiale Certificato:
                          </span>
                          <span className="theme-text-muted font-bold leading-relaxed">
                            {fc.officialData}
                          </span>
                        </div>
                      </div>

                      {/* Source & Modal Trigger Footer */}
                      <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-200 dark:border-slate-800">
                        <div className="text-[11px] font-extrabold theme-text-muted">
                          Fonte Ufficiale: <span className="text-indigo-600 dark:text-sky-400">{fc.source}</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalCheck(fc);
                          }}
                          className="flex items-center space-x-1.5 text-xs font-black text-indigo-600 dark:text-sky-400 hover:underline"
                        >
                          <span>Fascicolo Scheda Estesa</span>
                          <Maximize2 className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Modal Sheet for Complete Fact-Check Document */}
      {activeModalCheck && (
        <FloatingSheet
          isOpen={!!activeModalCheck}
          onClose={() => setActiveModalCheck(null)}
          title={`Scheda Verificata: ${activeModalCheck.verdictText}`}
          subtitle={`Contesto: ${activeModalCheck.speakerOrContext}`}
          icon={<ShieldAlert className="w-5 h-5 text-indigo-600 dark:text-sky-400" />}
          badge={activeModalCheck.verdict}
          maxWidth="2xl"
        >
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 space-y-2">
              <span className="text-xs font-black uppercase text-indigo-700 dark:text-sky-300">
                Affermazione Sottoposta a Fact-Checking
              </span>
              <p className="text-base font-black leading-snug">
                "{activeModalCheck.claim}"
              </p>
            </div>

            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-sky-400">
                Resoconto & Verifica dei Dati
              </h4>
              <p className="text-sm leading-relaxed">{activeModalCheck.analysis}</p>
            </div>

            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-500 flex items-center space-x-1.5">
                <Database className="w-4 h-4" />
                <span>Dato Ufficiale Certificato</span>
              </h4>
              <p className="text-sm leading-relaxed font-bold">{activeModalCheck.officialData}</p>
              <div className="text-xs text-indigo-600 dark:text-sky-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-bold">
                Ente Certificatore: {activeModalCheck.source}
              </div>
            </div>
          </div>
        </FloatingSheet>
      )}
    </section>
  );
};
