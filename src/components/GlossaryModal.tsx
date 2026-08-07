import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/faqAndGlossary';
import { BookOpen, Search, Sparkles } from 'lucide-react';
import { FloatingSheet } from './FloatingSheet';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState<string>('');

  const filteredTerms = GLOSSARY_TERMS.filter((gt) => {
    const q = search.toLowerCase().trim();
    return (
      !q ||
      gt.term.toLowerCase().includes(q) ||
      gt.definition.toLowerCase().includes(q) ||
      gt.category.toLowerCase().includes(q)
    );
  });

  return (
    <FloatingSheet
      isOpen={isOpen}
      onClose={onClose}
      title="Glossario Politico Spiegato Semplice"
      subtitle="Tutti i concetti chiave dell'economia e della politica con esempi della vita reale"
      icon={<BookOpen className="w-5 h-5" />}
      badge="Dizionario Civico"
      maxWidth="2xl"
    >
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Cerca termine (es. Cuneo fiscale, MES, SMR, LEP)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full theme-subcard border theme-border text-xs placeholder:text-slate-400 pl-9 pr-3 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-inner"
          />
        </div>

        {/* Terms List */}
        <div className="space-y-3 pt-2">
          {filteredTerms.map((gt) => (
            <div key={gt.term} className="p-4 rounded-2xl theme-card border theme-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm">{gt.term}</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-sky-300 border border-indigo-500/20 dark:border-sky-500/30">
                  {gt.category}
                </span>
              </div>
              <p className="text-xs theme-text-muted leading-relaxed">{gt.definition}</p>
              <div className="text-xs p-3 rounded-xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30">
                <span className="font-extrabold text-indigo-700 dark:text-sky-300">Esempio Pratico:</span> "{gt.simpleExample}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </FloatingSheet>
  );
};
