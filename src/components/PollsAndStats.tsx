import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  BarChart2,
  Users,
  Percent,
  Calendar,
  Building,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Maximize2,
  Sparkles,
  ShieldAlert,
  Crown,
  CheckCircle2,
  XCircle,
  AlertCircle,
  CheckSquare,
  Quote,
  FileText,
  ArrowRight,
  Filter,
  Layers,
  ShieldCheck,
  Check,
  X,
  BookOpen
} from 'lucide-react';
import { POLLS_DATA, LEADER_RATINGS, COALITION_STATS, ECONOMIC_INDICATORS } from '../data/polls';
import { PARTIES } from '../data/parties';
import { LEADER_PROMISES_DATA, LeaderPromiseTrack, PromiseExample } from '../data/promises';
import { PartyLogo } from './PartyLogo';
import { FloatingSheet } from './FloatingSheet';
import { PartyId } from '../types';

interface PollsAndStatsProps {
  onSelectPartyForProgram?: (partyId: PartyId) => void;
}

export const PollsAndStats: React.FC<PollsAndStatsProps> = ({ onSelectPartyForProgram }) => {
  const [activeTab, setActiveTab] = useState<'polls' | 'seats' | 'leaders' | 'economy' | 'promises'>('polls');

  // Selected party/coalition state for iOS Floating Sheet
  const [selectedPartyId, setSelectedPartyId] = useState<PartyId | null>(null);

  // Selected leader for promises detail sheet
  const [selectedPromiseLeaderId, setSelectedPromiseLeaderId] = useState<string | null>(null);
  const [promiseFilter, setPromiseFilter] = useState<'all' | 'pro' | 'contro'>('all');

  const activePartyData = selectedPartyId ? PARTIES[selectedPartyId] : null;
  const activePollItem = selectedPartyId ? POLLS_DATA.parties.find((p) => p.partyId === selectedPartyId) : null;

  const activeLeaderTrack = selectedPromiseLeaderId
    ? LEADER_PROMISES_DATA.find((l) => l.id === selectedPromiseLeaderId)
    : null;

  const handlePartyClick = (partyId: PartyId) => {
    if (onSelectPartyForProgram) {
      onSelectPartyForProgram(partyId);
    } else {
      setSelectedPartyId(partyId);
    }
  };

  const getStatusBadge = (status: PromiseExample['status']) => {
    switch (status) {
      case 'maintained':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Mantenuta</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>In Corso</span>
          </span>
        );
      case 'partially_maintained':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Parziale</span>
          </span>
        );
      case 'broken':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
            <XCircle className="w-3.5 h-3.5" />
            <span>Non Mantenuta</span>
          </span>
        );
    }
  };

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4 sm:space-y-8">
      {/* Title */}
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/20 shrink-0 border border-slate-700/60">
            <BarChart2 className="w-5 h-5 text-indigo-400 dark:text-sky-400" />
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
            Sondaggi, Proiezioni Seggi & Indicatori Paese
          </h2>
        </div>
        <p className="text-xs sm:text-sm theme-text-muted">
          Aggiornamento settimanale sulla Supermedia dei Sondaggi Nazionali, fiducia nei leader, promesse mantenute e quadro economico.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto touch-pan-x pb-1 no-scrollbar -mx-1 px-1">
        {[
          { id: 'polls', label: 'Supermedia Sondaggi', icon: TrendingUp },
          { id: 'seats', label: 'Proiezione Seggi e Coalizioni', icon: Building },
          { id: 'leaders', label: 'Fiducia nei Leader', icon: Users },
          { id: 'promises', label: 'Promesse Mantenute', icon: CheckSquare },
          { id: 'economy', label: 'Indicatori Economici Paese', icon: Percent },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] rounded-2xl text-xs font-extrabold whitespace-nowrap transition border shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700 shadow-md shadow-slate-900/25 ring-2 ring-indigo-500/40'
                  : 'bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-sky-500/40'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* TAB 1: Supermedia Sondaggi Partiti */}
      {activeTab === 'polls' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl theme-card border theme-border text-xs">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0" />
              <span className="font-extrabold">{POLLS_DATA.lastUpdated}</span>
            </div>
            <span className="theme-text-muted">{POLLS_DATA.methodology}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="theme-card rounded-3xl border theme-border shadow-lg p-6 sm:p-7 space-y-4"
          >
            <div className="flex items-center justify-between border-b theme-border pb-4">
              <h3 className="font-black text-lg">
                Consensi dei Partiti Italiani (%)
              </h3>
              <div className="flex items-center space-x-3 text-[11px] font-extrabold theme-text-muted">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-sky-400 inline-block" />
                  <span>Sopra Sbarramento 3%</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block" />
                  <span>Sotto Sbarramento</span>
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {POLLS_DATA.parties.map((p) => {
                const party = PARTIES[p.partyId];
                const isOverThreshold = p.percentage >= 3.0;

                return (
                  <motion.div
                    key={p.partyId}
                    whileHover={{ scale: 1.01, y: -2 }}
                    onClick={() => handlePartyClick(p.partyId)}
                    className="p-4 rounded-2xl theme-subcard border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition hover:border-indigo-400 dark:hover:border-sky-500/40 cursor-pointer group shadow-sm"
                  >
                    {/* Party info */}
                    <div className="flex items-center space-x-3.5 sm:w-1/3">
                      <PartyLogo partyId={p.partyId} size="md" />
                      <div>
                        <div className="font-extrabold text-sm flex items-center space-x-2">
                          <span>{party?.name || p.partyId}</span>
                          {!isOverThreshold && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                              &lt;3% Sbarramento
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] theme-text-muted">
                          {party?.leader} • {party?.coalition}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 max-w-md">
                      <div className="flex justify-between items-center text-xs mb-1 font-bold">
                        <span>{p.percentage}%</span>
                        <span className="text-[11px] theme-text-muted">
                          Variazione: {p.weeklyChange > 0 ? `+${p.weeklyChange}%` : `${p.weeklyChange}%`}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(p.percentage / 32) * 100}%` }}
                          transition={{ duration: 0.8, type: 'spring' }}
                          className={`h-full rounded-full ${
                            isOverThreshold
                              ? 'bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600'
                              : 'bg-slate-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Trend Icon & Trigger */}
                    <div className="flex items-center space-x-3 shrink-0 self-end sm:self-center">
                      <div className="flex items-center space-x-1 text-xs font-black">
                        {p.weeklyChange > 0 ? (
                          <span className="text-emerald-500 flex items-center">
                            <ArrowUpRight className="w-4 h-4" /> +{p.weeklyChange}%
                          </span>
                        ) : p.weeklyChange < 0 ? (
                          <span className="text-red-500 flex items-center">
                            <ArrowDownRight className="w-4 h-4" /> {p.weeklyChange}%
                          </span>
                        ) : (
                          <span className="text-slate-400 flex items-center">
                            <Minus className="w-4 h-4" /> 0.0%
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-1 text-xs font-extrabold text-indigo-600 dark:text-sky-400 group-hover:underline">
                        <span>Programma</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}

      {/* TAB 2: Seggi e Coalizioni */}
      {activeTab === 'seats' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {COALITION_STATS.map((coalition) => (
            <div
              key={coalition.name}
              className="theme-card rounded-3xl border border-white/10 p-6 shadow-lg space-y-4 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-extrabold text-base flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>{coalition.name}</span>
                </h3>
                <span className="text-lg font-black text-indigo-600 dark:text-sky-400">{coalition.totalPercentage}%</span>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 flex justify-between items-center text-xs">
                <div>
                  <div className="font-extrabold">Stima Seggi Camera dei Deputati</div>
                  <div className="text-[11px] theme-text-muted">Maggioranza richiesta: 201 seggi</div>
                </div>
                <div className="text-xl font-black text-indigo-700 dark:text-sky-300">
                  {coalition.cameraSeatsTotal} seggi
                </div>
              </div>

              <div>
                <div className="text-xs font-bold theme-text-muted mb-2">Partiti della Coalizione (Clicca per il programma):</div>
                <div className="flex flex-wrap gap-2">
                  {coalition.parties.map((pObj) => (
                    <button
                      key={pObj.partyId}
                      onClick={() => handlePartyClick(pObj.partyId)}
                      className="flex items-center space-x-2 px-3 py-1.5 rounded-xl theme-subcard border border-slate-200 dark:border-slate-800 text-xs font-bold hover:border-indigo-400 dark:hover:border-sky-500/50 transition cursor-pointer group"
                    >
                      <PartyLogo partyId={pObj.partyId} size="xs" />
                      <span>{pObj.name}</span>
                      <ArrowRight className="w-3 h-3 text-indigo-600 dark:text-sky-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* TAB 3: Fiducia Leader */}
      {activeTab === 'leaders' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="theme-card rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg backdrop-blur-2xl space-y-4"
        >
          <h3 className="font-black text-lg border-b border-slate-200 dark:border-slate-800 pb-3">
            Indice di Gradimento dei Leader Politici (%)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEADER_RATINGS.map((l) => (
              <div
                key={l.name}
                onClick={() => handlePartyClick(l.partyId)}
                className="p-4 rounded-2xl theme-subcard border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-indigo-400 dark:hover:border-sky-500/40 transition group"
              >
                <div className="flex items-center space-x-3">
                  <PartyLogo partyId={l.partyId} size="md" />
                  <div>
                    <div className="font-extrabold text-sm flex items-center space-x-1.5">
                      <span>{l.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <div className="text-[11px] theme-text-muted">{l.role} ({l.party})</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-black text-indigo-600 dark:text-sky-400">{l.rating}%</div>
                  <div className="text-[10px] font-bold theme-text-muted">Fiducia</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* NEW TAB 4: Promesse Mantenute & Track Record Leader */}
      {activeTab === 'promises' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Fact-Checking Explanation Banner */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-700/60 shadow-xl space-y-2">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-indigo-400 dark:text-sky-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Indice di Attuazione del Programma & Fact-Checking Elettorale</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black">
              Promesse Mantenute vs Rinviate nei Governi Recenti
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              Analisi imparziale basata sui dati trasparenti di monitoraggio parlamentare (OpenPolis, Pagella Politica, Gazzetta Ufficiale). Clicca su un leader per aprire il dossier dettagliato con esempi concreti <span className="text-emerald-400 font-bold">PRO (Promesse Mantenute)</span> e <span className="text-red-400 font-bold">CONTRO (Promesse Non Mantenute)</span>.
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADER_PROMISES_DATA.map((leader) => {
              const party = PARTIES[leader.partyId];
              const partyColor = party?.color || '#6366f1';

              return (
                <motion.div
                  key={leader.id}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setSelectedPromiseLeaderId(leader.id);
                    setPromiseFilter('all');
                  }}
                  className="rounded-3xl p-6 space-y-5 transition shadow-sm hover:shadow-xl border-2 flex flex-col justify-between overflow-hidden cursor-pointer group relative"
                  style={{
                    backgroundColor: `${partyColor}0B`,
                    borderColor: `${partyColor}40`,
                    borderTopColor: partyColor,
                    borderTopWidth: '6px',
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-15 -mr-16 -mt-16"
                    style={{ backgroundColor: partyColor }}
                  />

                  <div className="space-y-4 relative z-10">
                    {/* Header Row */}
                    <div className="flex items-start justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-3.5">
                      <div className="flex items-center space-x-3">
                        <PartyLogo partyId={leader.partyId} size="md" />
                        <div>
                          <h4 className="font-black text-base flex items-center space-x-1.5">
                            <span>{leader.leaderName}</span>
                          </h4>
                          <div className="text-xs theme-text-muted font-semibold">
                            {leader.role}
                          </div>
                        </div>
                      </div>

                      <span
                        className="text-[10px] font-black px-2.5 py-1 rounded-md text-white shadow-xs"
                        style={{ backgroundColor: partyColor }}
                      >
                        {party?.shortName || leader.partyName}
                      </span>
                    </div>

                    {/* Government Period Subtitle */}
                    <div className="text-[11px] font-extrabold px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border theme-border theme-text-muted flex items-center space-x-1.5">
                      <Building className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 shrink-0" />
                      <span className="truncate">{leader.govExperienceYears}</span>
                    </div>

                    {/* Fulfillment Index Progress Card */}
                    <div
                      className="p-4 rounded-2xl border space-y-2 shadow-xs"
                      style={{
                        backgroundColor: `${partyColor}1A`,
                        borderColor: `${partyColor}35`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider theme-text-muted">
                          Indice Attuazione
                        </span>
                        <span
                          className="text-2xl font-black"
                          style={{ color: partyColor }}
                        >
                          {leader.fulfillmentRate}%
                        </span>
                      </div>

                      {/* Bar */}
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${leader.fulfillmentRate}%` }}
                          transition={{ duration: 0.8, type: 'spring' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: partyColor }}
                        />
                      </div>

                      <div className="text-[10px] theme-text-muted font-bold flex justify-between pt-1">
                        <span>{leader.keptCount} Mantenute</span>
                        <span>{leader.brokenCount} Non Mantenute</span>
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="font-black text-emerald-600 dark:text-emerald-400 text-base">
                          {leader.keptCount}
                        </div>
                        <div className="text-[10px] font-extrabold theme-text-muted">Mantenute</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <div className="font-black text-amber-600 dark:text-amber-400 text-base">
                          {leader.partiallyKeptCount + leader.inProgressCount}
                        </div>
                        <div className="text-[10px] font-extrabold theme-text-muted">In Corso / Parziali</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                        <div className="font-black text-red-600 dark:text-red-400 text-base">
                          {leader.brokenCount}
                        </div>
                        <div className="text-[10px] font-extrabold theme-text-muted">Rinviate</div>
                      </div>
                    </div>

                    {/* Overview snippet */}
                    <p className="text-xs theme-text-muted line-clamp-2 leading-relaxed font-medium">
                      {leader.overviewSummary}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-extrabold relative z-10">
                    <span className="theme-text-muted">{leader.totalPromisesTracked} Promesse Mappate</span>
                    <div
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-white font-extrabold shadow-xs transition group-hover:scale-[1.03]"
                      style={{ backgroundColor: partyColor }}
                    >
                      <span>Vedi Esempi Pro / Contro</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* TAB 5: Indicatori Economici */}
      {activeTab === 'economy' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {ECONOMIC_INDICATORS.map((indicator) => (
            <div
              key={indicator.label}
              className="theme-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-2 backdrop-blur-2xl"
            >
              <div className="text-xs font-extrabold theme-text-muted">{indicator.label}</div>
              <div className="text-3xl font-black text-indigo-600 dark:text-sky-400">{indicator.value}</div>
              <div className="text-[11px] theme-text-muted">{indicator.note}</div>
              <div className="text-[10px] font-bold text-indigo-700 dark:text-sky-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                Fonte: {indicator.source}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Floating Detail Sheet for Party Analytics */}
      {activePartyData && activePollItem && (
        <FloatingSheet
          isOpen={!!selectedPartyId}
          onClose={() => setSelectedPartyId(null)}
          title={`Scheda Analitica: ${activePartyData.name}`}
          subtitle={`Leader: ${activePartyData.leader} | Fondazione: ${activePartyData.foundedYear}`}
          icon={<PartyLogo partyId={selectedPartyId!} size="md" />}
          badge={`${activePollItem.percentage}% Supermedia`}
          maxWidth="2xl"
        >
          <div className="space-y-5">
            {/* Poll Status Card */}
            <div className="p-5 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold uppercase text-indigo-700 dark:text-sky-300">
                  Consenso Elettorale Stimato
                </div>
                <div className="text-3xl font-black mt-1">{activePollItem.percentage}%</div>
                <div className="text-xs theme-text-muted mt-0.5">
                  Tendenza recente: {activePollItem.weeklyChange > 0 ? `+${activePollItem.weeklyChange}%` : `${activePollItem.weeklyChange}%`}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-white shadow-md">
                  {activePartyData.coalition}
                </span>
              </div>
            </div>

            {/* Party Description */}
            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-sky-400">
                Identità Politica e Collocazione
              </h4>
              <p className="text-sm leading-relaxed">{activePartyData.description}</p>
            </div>

            {/* Key Program Pillars */}
            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider theme-text-muted">
                Pilastri Programmatici Principali
              </h4>
              <ul className="space-y-2 text-xs">
                {activePartyData.keyPillars.map((pillar, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="font-semibold">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FloatingSheet>
      )}

      {/* Floating Detail Sheet for Leader Promises Dossier */}
      {activeLeaderTrack && (
        <FloatingSheet
          isOpen={!!selectedPromiseLeaderId}
          onClose={() => setSelectedPromiseLeaderId(null)}
          title={`Dossier Promesse: ${activeLeaderTrack.leaderName}`}
          subtitle={`${activeLeaderTrack.role} | ${activeLeaderTrack.govExperienceYears}`}
          icon={<PartyLogo partyId={activeLeaderTrack.partyId} size="md" />}
          badge={`Indice: ${activeLeaderTrack.fulfillmentRate}%`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            {/* Top Stat Banner inside Sheet */}
            <div
              className="p-5 rounded-2xl border space-y-3 shadow-xs"
              style={{
                backgroundColor: `${PARTIES[activeLeaderTrack.partyId]?.color || '#6366f1'}15`,
                borderColor: `${PARTIES[activeLeaderTrack.partyId]?.color || '#6366f1'}40`,
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider theme-text-muted">
                    Tasso Attuazione Elettorale
                  </div>
                  <div className="text-3xl font-black mt-0.5">
                    {activeLeaderTrack.fulfillmentRate}%
                  </div>
                </div>

                <div className="text-right text-xs font-extrabold space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 mr-1">
                    {activeLeaderTrack.keptCount} Pro
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-700 dark:text-red-300">
                    {activeLeaderTrack.brokenCount} Contro
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {activeLeaderTrack.overviewSummary}
              </p>
            </div>

            {/* Filter Buttons: Tutti vs PRO vs CONTRO */}
            <div className="flex items-center space-x-2 border-b theme-border pb-3">
              <span className="text-xs font-bold theme-text-muted mr-1">Filtra Esempi:</span>
              <button
                onClick={() => setPromiseFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  promiseFilter === 'all'
                    ? 'bg-slate-900 text-white dark:bg-sky-950 dark:text-sky-200 shadow-sm'
                    : 'theme-subcard border theme-border theme-text-muted hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tutti ({activeLeaderTrack.proExamples.length + activeLeaderTrack.controExamples.length})
              </button>
              <button
                onClick={() => setPromiseFilter('pro')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  promiseFilter === 'pro'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Promesse Mantenute / PRO ({activeLeaderTrack.proExamples.length})</span>
              </button>
              <button
                onClick={() => setPromiseFilter('contro')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  promiseFilter === 'contro'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 hover:bg-red-500/20'
                }`}
              >
                <X className="w-3.5 h-3.5" />
                <span>Non Mantenute / CONTRO ({activeLeaderTrack.controExamples.length})</span>
              </button>
            </div>

            {/* List of Examples */}
            <div className="space-y-4">
              {(promiseFilter === 'all' || promiseFilter === 'pro') && (
                <div className="space-y-3">
                  {promiseFilter === 'all' && (
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Esempi PRO: Promesse Mantenute e Provvedimenti Realizzati</span>
                    </h4>
                  )}
                  {activeLeaderTrack.proExamples.map((ex) => (
                    <div
                      key={ex.id}
                      className="p-4 sm:p-5 rounded-2xl bg-emerald-500/[0.06] dark:bg-emerald-500/[0.1] border border-emerald-500/30 space-y-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                            {ex.category}
                          </span>
                          <h5 className="font-black text-sm sm:text-base mt-1 text-slate-900 dark:text-white">
                            {ex.title}
                          </h5>
                        </div>
                        {getStatusBadge(ex.status)}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {ex.description}
                      </p>

                      <div className="pt-2 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                          <span className="font-extrabold text-slate-800 dark:text-slate-200 block">
                            Contesto Campagna Elettorale:
                          </span>
                          <span className="theme-text-muted">{ex.campaignContext}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                          <span className="font-extrabold text-emerald-700 dark:text-emerald-300 block">
                            Esito Ufficiale / Normativa:
                          </span>
                          <span className="theme-text-muted">{ex.officialOutcome}</span>
                        </div>
                      </div>

                      <div className="text-[10px] theme-text-muted font-bold text-right pt-1">
                        Fonte dati: {ex.source}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {(promiseFilter === 'all' || promiseFilter === 'contro') && (
                <div className="space-y-3 pt-2">
                  {promiseFilter === 'all' && (
                    <h4 className="text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center space-x-1.5 pt-2 border-t theme-border">
                      <XCircle className="w-4 h-4" />
                      <span>Esempi CONTRO: Promesse Non Mantenute, Rinviate o Modificate</span>
                    </h4>
                  )}
                  {activeLeaderTrack.controExamples.map((ex) => (
                    <div
                      key={ex.id}
                      className="p-4 sm:p-5 rounded-2xl bg-red-500/[0.06] dark:bg-red-500/[0.1] border border-red-500/30 space-y-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-500/20 text-red-700 dark:text-red-300">
                            {ex.category}
                          </span>
                          <h5 className="font-black text-sm sm:text-base mt-1 text-slate-900 dark:text-white">
                            {ex.title}
                          </h5>
                        </div>
                        {getStatusBadge(ex.status)}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {ex.description}
                      </p>

                      <div className="pt-2 border-t border-red-500/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                          <span className="font-extrabold text-slate-800 dark:text-slate-200 block">
                            Slogan / Promessa Elettorale:
                          </span>
                          <span className="theme-text-muted">{ex.campaignContext}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                          <span className="font-extrabold text-red-700 dark:text-red-300 block">
                            Stato Reale / Motivo Rinvio:
                          </span>
                          <span className="theme-text-muted">{ex.officialOutcome}</span>
                        </div>
                      </div>

                      <div className="text-[10px] theme-text-muted font-bold text-right pt-1">
                        Fonte dati: {ex.source}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </FloatingSheet>
      )}
    </section>
  );
};
