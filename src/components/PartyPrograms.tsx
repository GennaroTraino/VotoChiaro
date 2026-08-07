import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PARTIES,
  PARTIES_ARRAY
} from '../data/parties';
import { PARTY_PROGRAMS } from '../data/partyPrograms';
import { PartyId } from '../types';
import { PartyLogo } from './PartyLogo';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  HeartPulse,
  Globe,
  Award,
  FileText,
  Search,
  Zap,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Filter,
  ExternalLink,
  Layers
} from 'lucide-react';

interface PartyProgramsProps {
  selectedPartyId?: PartyId | null;
  onSelectPartyId?: (partyId: PartyId | null) => void;
}

export const PartyPrograms: React.FC<PartyProgramsProps> = ({
  selectedPartyId: propSelectedPartyId,
  onSelectPartyId: propOnSelectPartyId,
}) => {
  // null means show all party cards; setting a PartyId opens the detail subpage
  const [internalSelectedPartyId, setInternalSelectedPartyId] = useState<PartyId | null>(null);

  const selectedPartyId = propSelectedPartyId !== undefined ? propSelectedPartyId : internalSelectedPartyId;

  const setSelectedPartyId = (id: PartyId | null) => {
    if (propOnSelectPartyId) {
      propOnSelectPartyId(id);
    }
    setInternalSelectedPartyId(id);
  };

  const [activePillarTab, setActivePillarTab] = useState<number | 'all'>('all');
  const [partySearch, setPartySearch] = useState<string>('');
  const [coalitionFilter, setCoalitionFilter] = useState<string>('all');

  // Filter party list if user searches or filters by coalition
  const filteredParties = PARTIES_ARRAY.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(partySearch.toLowerCase()) ||
      p.shortName.toLowerCase().includes(partySearch.toLowerCase()) ||
      p.leader.toLowerCase().includes(partySearch.toLowerCase());

    const matchesCoalition =
      coalitionFilter === 'all' ||
      p.coalition.toLowerCase().includes(coalitionFilter.toLowerCase());

    return matchesSearch && matchesCoalition;
  });

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
      case 'Calculator':
      case 'Coins':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck':
      case 'Shield':
      case 'ShieldAlert':
      case 'Scale':
        return <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-sky-400" />;
      case 'HeartPulse':
      case 'Heart':
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Globe':
      case 'Compass':
      case 'MapPin':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Zap':
      case 'Leaf':
        return <Zap className="w-5 h-5 text-amber-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-purple-500" />;
    }
  };

  // Switcher helper for subpage view
  const handleNextParty = () => {
    if (!selectedPartyId) return;
    const currentIndex = PARTIES_ARRAY.findIndex((p) => p.id === selectedPartyId);
    const nextIndex = (currentIndex + 1) % PARTIES_ARRAY.length;
    setSelectedPartyId(PARTIES_ARRAY[nextIndex].id);
    setActivePillarTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevParty = () => {
    if (!selectedPartyId) return;
    const currentIndex = PARTIES_ARRAY.findIndex((p) => p.id === selectedPartyId);
    const prevIndex = (currentIndex - 1 + PARTIES_ARRAY.length) % PARTIES_ARRAY.length;
    setSelectedPartyId(PARTIES_ARRAY[prevIndex].id);
    setActivePillarTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentParty = selectedPartyId ? PARTIES[selectedPartyId] : null;
  const currentProgram = selectedPartyId ? PARTY_PROGRAMS[selectedPartyId] : null;

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* ------------------------------------------------------------- */}
      {/* VIEW 1: GRID OF ALL PARTY CARDS (When selectedPartyId is null) */}
      {/* ------------------------------------------------------------- */}
      {!selectedPartyId && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Header Title */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
                <FileText className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
              </div>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
                Programmi Politici Completi & Schede Partiti
              </h2>
            </div>
            <p className="text-xs sm:text-sm theme-text-muted max-w-3xl">
              Esplora i programmi ufficiali depositati dalle forze politiche italiane. Clicca su una scheda per aprire il sotto-fascicolo di approfondimento integrale con pilastri programmatici e misure bandiera.
            </p>
          </div>

          {/* Search and Coalition Filter Bar */}
          <div className="theme-card rounded-3xl p-4 sm:p-5 border theme-border shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cerca partito, leader o proposta..."
                  value={partySearch}
                  onChange={(e) => setPartySearch(e.target.value)}
                  className="w-full text-xs font-medium theme-subcard border theme-border rounded-2xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-inner"
                />
              </div>

              {/* Coalition Filter Chips */}
              <div className="flex items-center space-x-1.5 overflow-x-auto touch-pan-x pb-1 md:pb-0 no-scrollbar">
                <span className="text-xs font-bold theme-text-muted shrink-0 mr-1 flex items-center space-x-1">
                  <Filter className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                  <span className="hidden sm:inline">Coalizione:</span>
                </span>

                {[
                  { id: 'all', label: 'Tutti' },
                  { id: 'Centrodestra', label: 'Centrodestra' },
                  { id: 'Centrosinistra', label: 'Centrosinistra' },
                  { id: 'Opposizione', label: 'Opposizione Indipendente' },
                  { id: 'Centro', label: 'Centro / Terzo Polo' },
                ].map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setCoalitionFilter(col.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 border ${
                      coalitionFilter === col.id
                        ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700 shadow-xs'
                        : 'theme-subcard border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid of Party Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredParties.map((party) => {
              const program = PARTY_PROGRAMS[party.id];

              return (
                <motion.div
                  key={party.id}
                  whileHover={{ y: -5, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedPartyId(party.id);
                    setActivePillarTab('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="theme-card rounded-3xl p-5 sm:p-6 border theme-border shadow-md transition-all cursor-pointer relative group flex flex-col justify-between space-y-4 hover:shadow-xl hover:border-indigo-400 dark:hover:border-sky-500/50"
                  style={{
                    borderTop: `4px solid ${party.color}`
                  }}
                >
                  <div className="space-y-3.5">
                    {/* Top Row: Official SVG Logo + Party Name */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center space-x-3">
                        {/* Official Party SVG Logo */}
                        <div className="shrink-0 p-1 rounded-full bg-slate-900/10 dark:bg-white/10 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <PartyLogo partyId={party.id} size="lg" />
                        </div>
                        <div>
                          <h3 className="font-black text-base sm:text-lg leading-tight group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition">
                            {party.name}
                          </h3>
                          <span className="text-[11px] font-bold theme-text-muted">
                            Leader: <strong className="theme-text">{party.leader}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white dark:bg-slate-800 dark:text-sky-300">
                        {party.coalition}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold theme-subcard border theme-border theme-text-muted">
                        {party.seatsInParliament || 'Parlamento'}
                      </span>
                    </div>

                    {/* Program Subtitle Preview */}
                    {program && (
                      <p className="text-xs theme-text-muted leading-relaxed line-clamp-3 font-normal">
                        {program.subtitle}
                      </p>
                    )}

                    {/* Key Flagship Proposals Pills */}
                    {program && program.flagshipProposals.length > 0 && (
                      <div className="pt-2 border-t theme-border space-y-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-sky-400 block">
                          Proposte Misure Bandiera:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {program.flagshipProposals.slice(0, 3).map((prop, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 text-indigo-900 dark:text-sky-200"
                            >
                              {prop.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3 border-t theme-border flex items-center justify-between text-xs font-black text-indigo-600 dark:text-sky-400 group-hover:translate-x-1 transition">
                    <span>Leggi Programma Integrale</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredParties.length === 0 && (
            <div className="text-center py-12 theme-card rounded-3xl border theme-border space-y-2">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="font-bold text-sm">Nessun partito trovato con i filtri selezionati.</p>
              <button
                onClick={() => {
                  setPartySearch('');
                  setCoalitionFilter('all');
                }}
                className="text-xs font-extrabold text-indigo-600 dark:text-sky-400 hover:underline"
              >
                Ripristina tutti i filtri
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* VIEW 2: SUBPAGE DETAIL VIEW FOR A SELECTED PARTY               */}
      {/* ------------------------------------------------------------- */}
      {selectedPartyId && currentParty && currentProgram && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPartyId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Sticky Navigation Subpage Header */}
            <div className="sticky top-2 z-30 theme-card rounded-2xl p-3 border theme-border shadow-xl backdrop-blur-md bg-white/90 dark:bg-slate-900/90 flex items-center justify-between gap-2">
              {/* Back Button to Return to Main List */}
              <button
                onClick={() => setSelectedPartyId(null)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-extrabold bg-slate-900 text-white hover:bg-slate-800 transition shadow-xs cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Torna a Tutti i Partiti</span>
                <span className="sm:hidden">Tutti</span>
              </button>

              {/* Center Logo & Name */}
              <div className="flex items-center space-x-2 truncate px-2">
                <PartyLogo partyId={currentParty.id} size="sm" />
                <span className="font-black text-xs sm:text-sm truncate">
                  {currentParty.name}
                </span>
              </div>

              {/* Right: Prev/Next Switcher Controls */}
              <div className="flex items-center space-x-1 shrink-0">
                <button
                  onClick={handlePrevParty}
                  title="Partito Precedente"
                  className="p-2 rounded-xl theme-subcard border theme-border text-xs font-bold hover:bg-indigo-500/10 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextParty}
                  title="Partito Successivo"
                  className="p-2 rounded-xl theme-subcard border theme-border text-xs font-bold hover:bg-indigo-500/10 transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Party Hero Banner */}
            <div
              className="rounded-3xl p-5 sm:p-8 text-white relative overflow-hidden shadow-2xl border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${currentParty.color} 0%, #0f172a 100%)`
              }}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Header Row: Official Logo + Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    {/* Large Official Party SVG Logo */}
                    <div className="p-2 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/20 shadow-xl shrink-0">
                      <PartyLogo partyId={currentParty.id} size="xl" />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                        {currentParty.name}
                      </h1>
                      <p className="text-xs sm:text-base text-slate-200 font-medium">
                        Leader: <strong className="text-white font-bold">{currentParty.leader}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 border border-white/30 backdrop-blur-md">
                      {currentParty.coalition}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/40 border border-white/20">
                      {currentParty.seatsInParliament || 'Rappresentanza Parlamentare'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/30 border border-emerald-400/40 text-emerald-100">
                      {currentProgram.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Intro */}
                <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
                  {currentProgram.subtitle}
                </p>

                {/* Quick Vision Highlights */}
                <div className="pt-3 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentProgram.vision.map((v, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-100 bg-white/10 p-2.5 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flagship Proposals Section */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <h3 className="text-base sm:text-lg font-black tracking-tight">
                  Misure Bandiera & Proposte Chiave
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {currentProgram.flagshipProposals.map((prop, idx) => (
                  <div
                    key={idx}
                    className="theme-card rounded-2xl p-4 border theme-border shadow-md space-y-2.5 hover:border-indigo-400 dark:hover:border-sky-500/40 transition flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${prop.badgeBg}`}>
                        {prop.badgeText}
                      </span>
                      <h4 className="font-extrabold text-sm leading-snug">
                        {prop.title}
                      </h4>
                      <p className="text-xs theme-text-muted leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programmatic Pillars Filter Tabs */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b theme-border pb-3">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-sky-400 shrink-0" />
                  <h3 className="text-lg font-black tracking-tight">
                    Programma Completo in Pilastri Tematici
                  </h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center space-x-1 overflow-x-auto touch-pan-x no-scrollbar pb-1">
                  <button
                    onClick={() => setActivePillarTab('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      activePillarTab === 'all'
                        ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xs'
                        : 'theme-subcard theme-text-muted hover:text-indigo-600 dark:hover:text-sky-400'
                    }`}
                  >
                    Tutti i Pilastri ({currentProgram.pillars.length})
                  </button>
                  {currentProgram.pillars.map((pillar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePillarTab(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                        activePillarTab === idx
                          ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xs'
                          : 'theme-subcard theme-text-muted hover:text-indigo-600 dark:hover:text-sky-400'
                      }`}
                    >
                      Pilastro {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pillar Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProgram.pillars.map((pillar, idx) => {
                  if (activePillarTab !== 'all' && activePillarTab !== idx) return null;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="theme-card rounded-2xl p-5 border theme-border shadow-md space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Header of Pillar */}
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-xl theme-subcard border theme-border shrink-0">
                            {getPillarIcon(pillar.iconName)}
                          </div>
                          <div>
                            <h4 className="font-black text-sm sm:text-base leading-snug">
                              {pillar.title}
                            </h4>
                            <p className="text-xs theme-text-muted font-medium mt-0.5">
                              {pillar.summary}
                            </p>
                          </div>
                        </div>

                        {/* Points List */}
                        <ul className="space-y-2 pt-1 border-t theme-border">
                          {pillar.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start space-x-2 text-xs leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-sky-400 shrink-0 mt-1.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Distinctive Stances / Differences Card */}
            <div className="theme-card rounded-3xl p-5 sm:p-6 border theme-border shadow-md space-y-3 bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-transparent">
              <div className="flex items-center space-x-2 text-indigo-700 dark:text-sky-300">
                <Award className="w-5 h-5 shrink-0" />
                <h3 className="font-black text-base tracking-tight">
                  Elementi Distintivi del Programma di {currentParty.shortName}
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentProgram.keyDifferences.map((diff, i) => (
                  <li key={i} className="theme-subcard rounded-2xl p-3 border theme-border text-xs leading-relaxed flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-[11px] theme-text-muted border-t theme-border flex items-center justify-between flex-wrap gap-2">
                <span><strong>Fonte Trasparente:</strong> {currentProgram.officialSourceNote}</span>
                <a
                  href={currentParty.programUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-sky-400 hover:underline font-bold inline-flex items-center space-x-1"
                >
                  <span>Sito Ufficiale {currentParty.shortName}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Bottom Floating Return Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  setSelectedPartyId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-extrabold text-xs shadow-xl border border-slate-700 hover:bg-slate-800 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Torna al Catalogo Tutti i Partiti</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};
