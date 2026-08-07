import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOPICS } from '../data/topics';
import { PARTIES } from '../data/parties';
import { PartyId, TopicData, StanceType, PartyStance } from '../types';
import { PartyLogo } from './PartyLogo';
import { FloatingSheet } from './FloatingSheet';
import { Scale, CheckCircle2, XCircle, AlertCircle, Sparkles, Filter, Quote, Maximize2, Layers } from 'lucide-react';

export const PartyComparer: React.FC = () => {
  const [selectedPartyIds, setSelectedPartyIds] = useState<PartyId[]>(['fdi', 'pd', 'm5s']);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [filterType, setFilterType] = useState<'all' | 'convergences' | 'divergences'>('all');

  // Floating detail sheet state
  const [activeSheetTopic, setActiveSheetTopic] = useState<TopicData | null>(null);

  const toggleParty = (partyId: PartyId) => {
    if (selectedPartyIds.includes(partyId)) {
      if (selectedPartyIds.length <= 2) return; // Maintain at least 2 parties
      setSelectedPartyIds(selectedPartyIds.filter((id) => id !== partyId));
    } else {
      if (selectedPartyIds.length >= 4) return; // Limit to 4 max side-by-side
      setSelectedPartyIds([...selectedPartyIds, partyId]);
    }
  };

  const getStanceBadge = (stance: StanceType) => {
    switch (stance) {
      case 'favorevole':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>Favorevole</span>
          </span>
        );
      case 'contrario':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
            <XCircle className="w-3 h-3" />
            <span>Contrario</span>
          </span>
        );
      case 'condizionato':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <AlertCircle className="w-3 h-3" />
            <span>Condizionato</span>
          </span>
        );
      case 'alternativa':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Alternativa</span>
          </span>
        );
    }
  };

  const topicsToCompare = TOPICS.filter((t) => selectedTopicId === 'all' || t.id === selectedTopicId);

  const isTopicConvergence = (topic: TopicData) => {
    const selectedStances = topic.stances
      .filter((s) => selectedPartyIds.includes(s.partyId))
      .map((s) => s.stance);
    const first = selectedStances[0];
    return selectedStances.every((st) => st === first);
  };

  const filteredTopics = topicsToCompare.filter((topic) => {
    if (filterType === 'convergences') return isTopicConvergence(topic);
    if (filterType === 'divergences') return !isTopicConvergence(topic);
    return true;
  });

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4 sm:space-y-8">
      {/* Title */}
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
            <Scale className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
            Sistema di Confronto Programmi in Tempo Reale
          </h2>
        </div>
        <p className="text-xs sm:text-sm theme-text-muted">
          Seleziona da 2 a 4 partiti e confronta direttamente le loro proposte, visioni e citazioni su ogni singolo tema dell'agenda politica.
        </p>
      </div>

      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="theme-card rounded-3xl p-4 sm:p-6 shadow-lg border theme-border space-y-4 sm:space-y-5"
      >
        {/* Party Selector Chips */}
        <div>
          <label className="text-[10px] font-black uppercase tracking-wider theme-text-muted block mb-2.5">
            Scegli i Partiti da mettere a confronto (da 2 a 4):
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
            {Object.values(PARTIES).map((party) => {
              const isSelected = selectedPartyIds.includes(party.id);
              return (
                <motion.button
                  key={party.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => toggleParty(party.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-3.5 py-2 rounded-2xl text-xs font-extrabold transition border min-h-[38px] ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700 shadow-md shadow-slate-900/25 ring-2 ring-indigo-500/40'
                      : 'bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-sky-500/40'
                  }`}
                >
                  <PartyLogo partyId={party.id} size="xs" />
                  <span>{party.shortName}</span>
                  <span className="text-[10px] font-normal opacity-70">({party.leader})</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Topic and Stance Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t theme-border">
          <div>
            <label className="text-xs font-bold theme-text-muted block mb-1.5">Filtra per Tema Specifico:</label>
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="w-full theme-subcard border theme-border text-xs font-bold rounded-2xl px-3.5 py-2.5 min-h-[40px] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-inner"
            >
              <option value="all">Tutti i Temi dell'Agenda Politica</option>
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold theme-text-muted block mb-1.5">Mostra Convergenze / Divergenze:</label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`py-2 px-2.5 rounded-xl text-[11px] sm:text-xs font-extrabold transition border min-h-[40px] text-center ${
                  filterType === 'all'
                    ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700 shadow-md'
                    : 'theme-subcard border theme-border'
                }`}
              >
                Tutti i Temi
              </button>
              <button
                onClick={() => setFilterType('convergences')}
                className={`py-2 px-2.5 rounded-xl text-[11px] sm:text-xs font-extrabold transition border min-h-[40px] text-center ${
                  filterType === 'convergences'
                    ? 'bg-emerald-700 text-white border-emerald-600 shadow-md'
                    : 'theme-subcard border theme-border'
                }`}
              >
                Convergenze
              </button>
              <button
                onClick={() => setFilterType('divergences')}
                className={`py-2 px-2.5 rounded-xl text-[11px] sm:text-xs font-extrabold transition border min-h-[40px] text-center ${
                  filterType === 'divergences'
                    ? 'bg-rose-700 text-white border-rose-600 shadow-md'
                    : 'theme-subcard border theme-border'
                }`}
              >
                Divergenze
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comparison Matrix Cards */}
      <div className="space-y-6">
        {filteredTopics.map((topic, index) => {
          const isConvergence = isTopicConvergence(topic);

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="theme-card rounded-3xl border theme-border shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/10 dark:bg-slate-900/40">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 text-indigo-700 dark:text-sky-300 border border-indigo-500/20 dark:border-sky-500/30">
                      {topic.category}
                    </span>
                    {isConvergence ? (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        Convergenza
                      </span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
                        Divergenza
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight">{topic.title}</h3>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSheetTopic(topic)}
                  className="flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl theme-subcard border theme-border text-xs font-extrabold text-indigo-600 dark:text-sky-400 shadow-xs hover:border-indigo-400 shrink-0"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Dettaglio Scheda</span>
                </motion.button>
              </div>

              {/* Side-By-Side Grid */}
              <div
                className={`grid grid-cols-1 ${
                  selectedPartyIds.length === 2
                    ? 'md:grid-cols-2'
                    : selectedPartyIds.length === 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-4'
                } divide-y md:divide-y-0 md:divide-x theme-border`}
              >
                {selectedPartyIds.map((pId) => {
                  const party = PARTIES[pId];
                  const stance = topic.stances.find((s) => s.partyId === pId);

                  if (!party || !stance) return null;

                  return (
                    <div key={pId} className="p-5 sm:p-6 space-y-4 theme-card">
                      {/* Party Badge */}
                      <div className="flex items-center justify-between border-b theme-border pb-3">
                        <div className="flex items-center space-x-3">
                          <PartyLogo partyId={pId} size="md" />
                          <div>
                            <div className="font-extrabold text-sm">{party.shortName}</div>
                            <div className="text-[10px] theme-text-muted">{party.leader}</div>
                          </div>
                        </div>

                        {getStanceBadge(stance.stance)}
                      </div>

                      {/* Summary */}
                      <p className="text-xs font-bold leading-relaxed">
                        "{stance.summary}"
                      </p>

                      {/* Key Proposal */}
                      <div className="p-3 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/10 border border-indigo-500/20 dark:border-sky-500/20 text-xs">
                        <span className="font-extrabold text-indigo-700 dark:text-sky-300 block mb-0.5">Proposta:</span>
                        <span className="theme-text-muted">{stance.keyProposal}</span>
                      </div>

                      {/* Bullet list */}
                      <ul className="space-y-1.5 text-xs theme-text-muted">
                        {stance.details.slice(0, 3).map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <span className="text-indigo-600 dark:text-sky-400 font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Detail Sheet for Topic Comparison */}
      {activeSheetTopic && (
        <FloatingSheet
          isOpen={!!activeSheetTopic}
          onClose={() => setActiveSheetTopic(null)}
          title={`Confronto Approfondito: ${activeSheetTopic.title}`}
          subtitle={`Mappatura completa delle ${selectedPartyIds.length} forze selezionate su questo tema`}
          icon={<Scale className="w-5 h-5" />}
          badge={activeSheetTopic.category}
          maxWidth="3xl"
        >
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 text-xs text-slate-800 dark:text-sky-200">
              <span className="font-extrabold block mb-1">Inquadramento Generale del Tema:</span>
              {activeSheetTopic.problemOverview}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedPartyIds.map((pId) => {
                const party = PARTIES[pId];
                const stance = activeSheetTopic.stances.find((s) => s.partyId === pId);
                if (!party || !stance) return null;

                return (
                  <div key={pId} className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div className="flex items-center space-x-2.5">
                        <PartyLogo partyId={pId} size="md" />
                        <div>
                          <div className="font-extrabold text-sm">{party.shortName}</div>
                          <div className="text-[10px] theme-text-muted">{party.leader}</div>
                        </div>
                      </div>
                      {getStanceBadge(stance.stance)}
                    </div>

                    <p className="text-xs font-bold leading-relaxed">
                      "{stance.summary}"
                    </p>

                    <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-sky-500/10 border border-indigo-500/20 dark:border-sky-500/20 text-xs">
                      <span className="font-extrabold text-indigo-700 dark:text-sky-300 block mb-1">Proposta Chiave:</span>
                      {stance.keyProposal}
                    </div>

                    <div className="space-y-1 text-xs theme-text-muted">
                      {stance.details.map((d, i) => (
                        <div key={i} className="flex items-start space-x-1.5">
                          <span className="text-indigo-600 dark:text-sky-400 font-bold">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>

                    {stance.quotes && stance.quotes.length > 0 && (
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                        {stance.quotes.map((q, idx) => (
                          <div key={idx} className="p-3 rounded-xl theme-subcard italic text-xs border border-slate-200 dark:border-slate-800">
                            <Quote className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 mb-1" />
                            <p className="font-serif">"{q.text}"</p>
                            <div className="text-[10px] font-extrabold theme-text-muted not-italic text-right mt-1">
                              — {q.speaker} ({q.role})
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </FloatingSheet>
      )}
    </section>
  );
};
