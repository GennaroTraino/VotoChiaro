import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ELECTORAL_FAQS, GLOSSARY_TERMS } from '../data/faqAndGlossary';
import { HelpCircle, Vote, AlertTriangle, UserCheck, FileText, Percent, BookOpen, ChevronDown, Search } from 'lucide-react';

export const FaqAndGuide: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(ELECTORAL_FAQS[0].id);
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  const getFaqIcon = (iconName: string) => {
    switch (iconName) {
      case 'Vote': return <Vote className="w-5 h-5 text-indigo-600 dark:text-sky-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case 'FileText': return <FileText className="w-5 h-5 text-indigo-500" />;
      case 'Percent': return <Percent className="w-5 h-5 text-sky-500" />;
      default: return <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-sky-400" />;
    }
  };

  const filteredGlossary = GLOSSARY_TERMS.filter((gt) => {
    const q = glossarySearch.toLowerCase().trim();
    return (
      !q ||
      gt.term.toLowerCase().includes(q) ||
      gt.definition.toLowerCase().includes(q) ||
      gt.category.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-12">
      {/* Section 1: Electoral System FAQs */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
              <HelpCircle className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
              Guida al Voto & FAQ Elettorali
            </h2>
          </div>
          <p className="text-xs sm:text-sm theme-text-muted">
            Tutto quello che c'è da sapere prima di andare alle urne: legge elettorale Rosatellum, divieto di voto disgiunto e diritti dei fuori sede.
          </p>
        </div>

        <div className="space-y-3">
          {ELECTORAL_FAQS.map((faq, index) => {
            const isOpen = openFaqId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="theme-card rounded-3xl border theme-border shadow-lg overflow-hidden transition"
              >                <div
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="p-5 cursor-pointer hover:bg-indigo-500/5 dark:hover:bg-sky-500/5 transition flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 flex items-center justify-center shrink-0">
                      {getFaqIcon(faq.icon)}
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-full theme-subcard border theme-border flex items-center justify-center shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 border-t theme-border theme-subcard text-xs sm:text-sm leading-relaxed font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Glossary "Spiegato Semplice" */}
      <div className="pt-8 border-t theme-border space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
                <BookOpen className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Glossario Politico "Spiegato Semplice"
              </h2>
            </div>
            <p className="text-xs sm:text-sm theme-text-muted">
              I concetti tecnici ed economici dell'attualità politica spiegati in parole povere con esempi pratici.
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Filtra termine (es. MES, Cuneo...)"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="w-full theme-subcard border theme-border text-xs placeholder:text-slate-400 theme-text-muted pl-9 pr-3 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-inner"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredGlossary.map((gt, index) => (
            <motion.div
              key={gt.term}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="theme-card rounded-3xl border theme-border p-6 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base">{gt.term}</h3>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 text-indigo-700 dark:text-sky-300 border border-indigo-500/20 dark:border-sky-500/30">
                  {gt.category}
                </span>
              </div>

              <p className="text-xs theme-text-muted leading-relaxed">
                {gt.definition}
              </p>

              <div className="p-3.5 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/10 border border-indigo-500/20 dark:border-sky-500/20 text-xs">
                <span className="font-extrabold text-indigo-700 dark:text-sky-300 block mb-0.5">Esempio Pratico:</span>
                <span className="italic">"{gt.simpleExample}"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
