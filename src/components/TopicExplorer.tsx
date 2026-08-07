import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOPICS } from '../data/topics';
import { PARTIES } from '../data/parties';
import { TopicData, PartyId, StanceType, PartyStance } from '../types';
import { PartyLogo } from './PartyLogo';
import { FloatingSheet } from './FloatingSheet';
import {
  Shield,
  Zap,
  Receipt,
  Landmark,
  HeartPulse,
  Briefcase,
  ShieldAlert,
  Users,
  Building2,
  GraduationCap,
  Train,
  Home,
  Cpu,
  Sprout,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Sparkles,
  Quote,
  BarChart3,
  FileText,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Layers,
  Search,
  BookOpen
} from 'lucide-react';

interface TopicExplorerProps {
  searchQuery: string;
  initialTopicId?: string | null;
}

interface CategoryTheme {
  category: string;
  badgeClass: string;
  cardBgClass: string;
  cardBorderClass: string;
  iconBgClass: string;
  textAccentClass: string;
  subcardBgClass: string;
  glowColor: string;
}

const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  'Economia & Lavoro': {
    category: 'Economia & Lavoro',
    badgeClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
    cardBgClass: 'bg-amber-500/[0.04] dark:bg-amber-500/[0.08]',
    cardBorderClass: 'border-amber-500/30 dark:border-amber-500/40 border-t-amber-500 border-t-[5px]',
    iconBgClass: 'bg-gradient-to-tr from-amber-600 via-amber-700 to-amber-900 text-white shadow-amber-500/20',
    textAccentClass: 'text-amber-600 dark:text-amber-400',
    subcardBgClass: 'bg-amber-500/10 border-amber-500/20',
    glowColor: '#f59e0b',
  },
  'Riforme & Istituzioni': {
    category: 'Riforme & Istituzioni',
    badgeClass: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    cardBgClass: 'bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08]',
    cardBorderClass: 'border-indigo-500/30 dark:border-indigo-500/40 border-t-indigo-500 border-t-[5px]',
    iconBgClass: 'bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-900 text-white shadow-indigo-500/20',
    textAccentClass: 'text-indigo-600 dark:text-indigo-400',
    subcardBgClass: 'bg-indigo-500/10 border-indigo-500/20',
    glowColor: '#6366f1',
  },
  'Esteri & Difesa': {
    category: 'Esteri & Difesa',
    badgeClass: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30',
    cardBgClass: 'bg-sky-500/[0.04] dark:bg-sky-500/[0.08]',
    cardBorderClass: 'border-sky-500/30 dark:border-sky-500/40 border-t-sky-500 border-t-[5px]',
    iconBgClass: 'bg-gradient-to-tr from-sky-600 via-blue-700 to-slate-900 text-white shadow-sky-500/20',
    textAccentClass: 'text-sky-600 dark:text-sky-400',
    subcardBgClass: 'bg-sky-500/10 border-sky-500/20',
    glowColor: '#0ea5e9',
  },
  'Società & Diritti': {
    category: 'Società & Diritti',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    cardBgClass: 'bg-rose-500/[0.04] dark:bg-rose-500/[0.08]',
    cardBorderClass: 'border-rose-500/30 dark:border-rose-500/40 border-t-rose-500 border-t-[5px]',
    iconBgClass: 'bg-gradient-to-tr from-rose-600 via-pink-700 to-rose-900 text-white shadow-rose-500/20',
    textAccentClass: 'text-rose-600 dark:text-rose-400',
    subcardBgClass: 'bg-rose-500/10 border-rose-500/20',
    glowColor: '#f43f5e',
  },
  'Ambiente & Energia': {
    category: 'Ambiente & Energia',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    cardBgClass: 'bg-emerald-500/[0.04] dark:bg-emerald-500/[0.08]',
    cardBorderClass: 'border-emerald-500/30 dark:border-emerald-500/40 border-t-emerald-500 border-t-[5px]',
    iconBgClass: 'bg-gradient-to-tr from-emerald-600 via-teal-700 to-emerald-900 text-white shadow-emerald-500/20',
    textAccentClass: 'text-emerald-600 dark:text-emerald-400',
    subcardBgClass: 'bg-emerald-500/10 border-emerald-500/20',
    glowColor: '#10b981',
  },
};

const DEFAULT_THEME: CategoryTheme = {
  category: 'Generale',
  badgeClass: 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30',
  cardBgClass: 'bg-violet-500/[0.04] dark:bg-violet-500/[0.08]',
  cardBorderClass: 'border-violet-500/30 dark:border-violet-500/40 border-t-violet-500 border-t-[5px]',
  iconBgClass: 'bg-gradient-to-tr from-violet-600 via-purple-700 to-violet-900 text-white shadow-violet-500/20',
  textAccentClass: 'text-violet-600 dark:text-violet-400',
  subcardBgClass: 'bg-violet-500/10 border-violet-500/20',
  glowColor: '#8b5cf6',
};

const getCategoryTheme = (category: string): CategoryTheme => {
  return CATEGORY_THEMES[category] || DEFAULT_THEME;
};

export const TopicExplorer: React.FC<TopicExplorerProps> = ({ searchQuery, initialTopicId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  
  // Single Topic Detail Subpage State (null = list of all topics, string = topic subpage active)
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(initialTopicId || null);

  // State for iOS Floating Detail Sheet inside subpage
  const [activeSheetTopic, setActiveSheetTopic] = useState<TopicData | null>(null);
  const [activeSheetPartyId, setActiveSheetPartyId] = useState<PartyId>('fdi');

  const categories = [
    'Tutti',
    'Economia & Lavoro',
    'Riforme & Istituzioni',
    'Esteri & Difesa',
    'Società & Diritti',
    'Ambiente & Energia',
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Receipt': return <Receipt className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'BuildingBank': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Train': return <Train className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Sprout': return <Sprout className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getStanceBadge = (stance: StanceType) => {
    switch (stance) {
      case 'favorevole':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Favorevole</span>
          </span>
        );
      case 'contrario':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
            <XCircle className="w-3.5 h-3.5" />
            <span>Contrario</span>
          </span>
        );
      case 'condizionato':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Favorevole Condizionato</span>
          </span>
        );
      case 'alternativa':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proposta Alternativa</span>
          </span>
        );
    }
  };

  const filteredTopics = TOPICS.filter((topic) => {
    const matchesCategory = selectedCategory === 'Tutti' || topic.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      topic.title.toLowerCase().includes(query) ||
      topic.shortDesc.toLowerCase().includes(query) ||
      topic.tags.some((t) => t.toLowerCase().includes(query)) ||
      topic.problemOverview.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const openPartyDetailSheet = (topic: TopicData, partyId: PartyId) => {
    setActiveSheetTopic(topic);
    setActiveSheetPartyId(partyId);
  };

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedTopicId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find currently selected topic object
  const activeTopic = selectedTopicId ? TOPICS.find((t) => t.id === selectedTopicId) : null;
  const activeTopicIndex = activeTopic ? TOPICS.findIndex((t) => t.id === activeTopic.id) : -1;
  const prevTopic = activeTopicIndex > 0 ? TOPICS[activeTopicIndex - 1] : TOPICS[TOPICS.length - 1];
  const nextTopic = activeTopicIndex >= 0 && activeTopicIndex < TOPICS.length - 1 ? TOPICS[activeTopicIndex + 1] : TOPICS[0];

  // Find current sheet stance details
  const currentSheetStance: PartyStance | undefined = activeSheetTopic?.stances.find(
    (s) => s.partyId === activeSheetPartyId
  );
  const currentSheetParty = PARTIES[activeSheetPartyId];

  // ==========================================
  // VIEW 1: DEDICATED TOPIC SUBPAGE (DETAIL)
  // ==========================================
  if (activeTopic) {
    const activeTheme = getCategoryTheme(activeTopic.category);

    return (
      <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        {/* Sticky Top Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-20 z-20 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border theme-border shadow-md flex items-center justify-between gap-2"
        >
          <button
            onClick={handleBackToList}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-slate-900 text-white dark:bg-sky-950 dark:text-sky-200 border border-slate-700 dark:border-sky-800 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna a Tutti i Temi Caldi</span>
          </button>

          <div className="hidden md:flex items-center space-x-2 text-xs font-bold truncate px-2">
            <span className={`text-xs uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border ${activeTheme.badgeClass}`}>
              {activeTopic.category}
            </span>
            <span className="truncate text-slate-800 dark:text-slate-200 font-black">{activeTopic.title}</span>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={() => handleSelectTopic(prevTopic.id)}
              title={`Precedente: ${prevTopic.title}`}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-bold theme-subcard border theme-border hover:border-indigo-400 dark:hover:border-sky-500/50 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Precedente</span>
            </button>
            <button
              onClick={() => handleSelectTopic(nextTopic.id)}
              title={`Successivo: ${nextTopic.title}`}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-bold theme-subcard border theme-border hover:border-indigo-400 dark:hover:border-sky-500/50 transition cursor-pointer"
            >
              <span className="hidden sm:inline">Successivo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Hero Card for the Selected Topic with Category Elegance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative rounded-3xl border shadow-xl overflow-hidden p-6 sm:p-8 space-y-6 backdrop-blur-md ${activeTheme.cardBgClass} ${activeTheme.cardBorderClass}`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 -mr-20 -mt-20"
            style={{ backgroundColor: activeTheme.glowColor }}
          />

          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-6 relative z-10">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/20 ${activeTheme.iconBgClass}`}>
                {getIcon(activeTopic.iconName)}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${activeTheme.badgeClass}`}>
                    {activeTopic.category}
                  </span>
                  {activeTopic.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700">
                      #{t}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{activeTopic.title}</h1>
                <p className="text-sm theme-text-muted mt-1 leading-relaxed max-w-3xl">
                  {activeTopic.shortDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Context & Official Statistics Grid with Color Rectangles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Context Card Rectangle */}
            <div className={`lg:col-span-2 space-y-4 p-5 sm:p-7 rounded-3xl border shadow-xs ${activeTheme.cardBgClass} ${activeTheme.cardBorderClass}`}>
              <h2 className={`text-xs uppercase tracking-wider font-extrabold flex items-center space-x-2 ${activeTheme.textAccentClass}`}>
                <FileText className="w-4 h-4 shrink-0" />
                <span>Contesto & Quadro del Problema in Italia</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed font-normal text-slate-800 dark:text-slate-200">
                {activeTopic.problemOverview}
              </p>

              <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-xs text-amber-950 dark:text-amber-200 font-medium">
                <span className="font-extrabold block mb-1 uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-300">
                  Inquadramento Normativo Attuale:
                </span>
                {activeTopic.currentLawContext}
              </div>
            </div>

            {/* Statistics Card Rectangle */}
            <div className={`space-y-3 p-5 sm:p-7 rounded-3xl border shadow-xs ${activeTheme.cardBgClass} ${activeTheme.cardBorderClass}`}>
              <h2 className={`text-xs uppercase tracking-wider font-extrabold flex items-center space-x-2 ${activeTheme.textAccentClass}`}>
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Dati e Statistiche Ufficiali</span>
              </h2>

              <div className="space-y-3">
                {activeTopic.keyStatistics.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-semibold theme-text-muted">{stat.label}</div>
                    <div className={`text-2xl font-black my-0.5 ${activeTheme.textAccentClass}`}>{stat.value}</div>
                    <div className="text-[11px] theme-text-muted flex justify-between items-center">
                      <span>{stat.subtext}</span>
                      <span className="font-bold">({stat.source})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Party Stances Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center space-x-2">
              <Layers className={`w-6 h-6 ${activeTheme.textAccentClass}`} />
              <span>Posizioni e Proposte dei Partiti</span>
            </h2>
            <p className="text-xs theme-text-muted mt-0.5">
              Ogni partito presenta una scheda colorata con la propria identità ufficiale (stesso colore assegnato nei Programmi Partiti).
            </p>
          </div>

          <div className="text-xs font-extrabold px-3 py-1.5 rounded-full theme-subcard border theme-border self-start sm:self-center">
            {activeTopic.stances.length} Partiti Mappati
          </div>
        </div>

        {/* PARTY STANCES GRID WITH ELEGANT CUSTOM COLOR CARDS PER PARTY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {activeTopic.stances.map((st) => {
            const party = PARTIES[st.partyId];
            if (!party) return null;

            const partyColor = party.color || '#3b82f6';

            return (
              <motion.div
                key={st.partyId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                className="rounded-3xl p-6 sm:p-7 space-y-5 transition shadow-sm hover:shadow-xl relative flex flex-col justify-between overflow-hidden group border-2"
                style={{
                  backgroundColor: `${partyColor}0D`,
                  borderColor: `${partyColor}45`,
                  borderTopColor: partyColor,
                  borderTopWidth: '6px',
                }}
              >
                {/* Background Subtle Color Glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 -mr-16 -mt-16"
                  style={{ backgroundColor: partyColor }}
                />

                <div className="space-y-4 relative z-10">
                  {/* Party Header Row */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
                    <div className="flex items-center space-x-3.5">
                      <PartyLogo partyId={st.partyId} size="lg" />
                      <div>
                        <div className="font-black text-base flex items-center space-x-2">
                          <span>{party.name}</span>
                          <span
                            className="text-[10px] font-extrabold px-2 py-0.5 rounded-md text-white"
                            style={{ backgroundColor: partyColor }}
                          >
                            {party.shortName}
                          </span>
                        </div>
                        <div className="text-xs theme-text-muted mt-0.5 font-medium">
                          Leader: <span className="font-bold text-slate-800 dark:text-slate-200">{party.leader}</span> • {party.coalition}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">{getStanceBadge(st.stance)}</div>
                  </div>

                  {/* Sintesi Posizione Ufficiale Box */}
                  <div
                    className="p-4 rounded-2xl border text-xs sm:text-sm font-bold leading-relaxed space-y-1.5 shadow-xs"
                    style={{
                      backgroundColor: `${partyColor}1A`,
                      borderColor: `${partyColor}40`,
                    }}
                  >
                    <div
                      className="text-[11px] font-extrabold uppercase tracking-wider flex items-center space-x-1"
                      style={{ color: partyColor }}
                    >
                      <Quote className="w-3.5 h-3.5" />
                      <span>Sintesi Posizione Ufficiale</span>
                    </div>
                    <p className="text-slate-900 dark:text-slate-100 font-serif italic text-sm">
                      "{st.summary}"
                    </p>
                  </div>

                  {/* Key Proposal Box */}
                  <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border theme-border space-y-1 shadow-xs">
                    <div
                      className="text-[11px] font-extrabold uppercase tracking-wider"
                      style={{ color: partyColor }}
                    >
                      Proposta Progettuale di Punta
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {st.keyProposal}
                    </p>
                  </div>

                  {/* Detailed Bullet Points */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider theme-text-muted">
                      Punti Programmatici Mappati:
                    </div>
                    <ul className="space-y-2 text-xs">
                      {st.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: partyColor }}
                          />
                          <span className="leading-relaxed font-semibold text-slate-700 dark:text-slate-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quotes if available */}
                  {st.quotes && st.quotes.length > 0 && (
                    <div className="space-y-2 pt-2 border-t theme-border">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider theme-text-muted flex items-center space-x-1">
                        <Quote className="w-3 h-3 text-indigo-600 dark:text-sky-400" />
                        <span>Dichiarazioni dei Dirigenti</span>
                      </div>
                      {st.quotes.map((q, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border theme-border italic text-xs"
                        >
                          <p className="font-serif">"{q.text}"</p>
                          <div className="text-[10px] font-extrabold theme-text-muted not-italic text-right mt-1">
                            — {q.speaker} ({q.role})
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action inside Card */}
                <div className="pt-4 border-t theme-border flex items-center justify-between text-xs font-extrabold relative z-10">
                  <span className="theme-text-muted">Partito: {party.shortName}</span>
                  <button
                    onClick={() => openPartyDetailSheet(activeTopic, st.partyId)}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-white font-extrabold hover:opacity-90 transition shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: partyColor }}
                  >
                    <span>Apri Fascicolo Scheda</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Back Button */}
        <div className="pt-8 text-center">
          <button
            onClick={handleBackToList}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl text-xs font-black bg-slate-900 text-white dark:bg-sky-950 dark:text-sky-200 border border-slate-700 dark:border-sky-800 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al Catalogo Tutti i Temi Caldi</span>
          </button>
        </div>

        {/* iOS Floating Sheet for Nested Details with Party Accent Colors */}
        {activeSheetTopic && currentSheetStance && currentSheetParty && (
          <FloatingSheet
            isOpen={!!activeSheetTopic}
            onClose={() => setActiveSheetTopic(null)}
            title={`${currentSheetParty.shortName} • ${activeSheetTopic.title}`}
            subtitle={`Leader: ${currentSheetParty.leader} | Coalizione: ${currentSheetParty.coalition}`}
            icon={<PartyLogo partyId={activeSheetPartyId} size="md" />}
            badge={currentSheetStance.stance.toUpperCase()}
            maxWidth="2xl"
          >
            {/* Party Stance Quick Selector inside Sheet */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar border-b theme-border">
              <span className="text-xs font-bold theme-text-muted shrink-0 mr-1">Partiti:</span>
              {activeSheetTopic.stances.map((s) => {
                const p = PARTIES[s.partyId];
                const pColor = p?.color || '#3b82f6';
                const isSelected = s.partyId === activeSheetPartyId;

                return (
                  <button
                    key={s.partyId}
                    onClick={() => setActiveSheetPartyId(s.partyId)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${
                      isSelected
                        ? 'text-white shadow-md'
                        : 'theme-subcard border border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                    style={isSelected ? { backgroundColor: pColor } : undefined}
                  >
                    <PartyLogo partyId={s.partyId} size="xs" />
                    <span>{p?.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Stance Header Badge & Proposal in Party Accent Tint */}
            <div
              className="p-5 rounded-2xl border space-y-2"
              style={{
                backgroundColor: `${currentSheetParty.color || '#3b82f6'}1A`,
                borderColor: `${currentSheetParty.color || '#3b82f6'}40`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-extrabold uppercase tracking-wider"
                  style={{ color: currentSheetParty.color || '#3b82f6' }}
                >
                  Sintesi Posizione Ufficiale
                </span>
                {getStanceBadge(currentSheetStance.stance)}
              </div>
              <p className="text-sm font-bold leading-relaxed font-serif italic">
                "{currentSheetStance.summary}"
              </p>
            </div>

            {/* Main Key Proposal Box */}
            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
              <h4
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: currentSheetParty.color || '#3b82f6' }}
              >
                Proposta Progettuale di Punta
              </h4>
              <p className="text-sm leading-relaxed font-semibold">
                {currentSheetStance.keyProposal}
              </p>
            </div>

            {/* Detailed Bullet Points */}
            <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider theme-text-muted">
                Punti Programmatici di Dettaglio
              </h4>
              <ul className="space-y-2.5 text-xs">
                {currentSheetStance.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: currentSheetParty.color || '#3b82f6' }}
                    />
                    <span className="leading-relaxed font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quotes Section */}
            {currentSheetStance.quotes && currentSheetStance.quotes.length > 0 && (
              <div className="theme-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider theme-text-muted flex items-center space-x-1.5">
                  <Quote className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                  <span>Dichiarazioni Ufficiali dei Dirigenti</span>
                </h4>
                <div className="space-y-3">
                  {currentSheetStance.quotes.map((q, idx) => (
                    <div key={idx} className="p-4 rounded-xl theme-subcard border border-white/10 italic text-xs relative">
                      <p className="mb-2 font-serif text-sm">"{q.text}"</p>
                      <div className="text-[11px] font-extrabold theme-text-muted not-italic text-right">
                        — {q.speaker} ({q.role})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FloatingSheet>
        )}
      </section>
    );
  }

  // ==========================================
  // VIEW 2: ALL TOPICS CATALOGUE (MAIN INDEX)
  // ==========================================
  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Category Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="theme-card rounded-3xl p-3.5 sm:p-5 shadow-lg border theme-border"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-1.5 overflow-x-auto touch-pan-x pb-1 lg:pb-0 no-scrollbar -mx-1 px-1">
            {categories.map((cat) => {
              const theme = getCategoryTheme(cat);
              const isSelected = selectedCategory === cat;

              return (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 sm:px-4 py-2 min-h-[38px] rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md shadow-slate-900/25 border border-slate-700/60'
                      : `bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-sky-500/40`
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>

          <div className="text-xs font-extrabold theme-text-muted hidden sm:block">
            {filteredTopics.length} {filteredTopics.length === 1 ? 'Tema Trovato' : 'Temi Trovati'}
          </div>
        </div>
      </motion.div>

      {/* Topics Catalogue Cards with Elegant Colors for each Category Rectangle */}
      {filteredTopics.length === 0 ? (
        <div className="text-center py-16 theme-card rounded-3xl border border-white/10 p-8 shadow-lg">
          <p className="theme-text-muted font-medium text-sm">Nessun tema trovato per la ricerca "{searchQuery}".</p>
          <button
            onClick={() => setSelectedCategory('Tutti')}
            className="mt-4 text-xs font-extrabold text-indigo-600 dark:text-sky-400 hover:underline cursor-pointer"
          >
            Ripristina tutti i filtri
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTopics.map((topic, index) => {
            const theme = getCategoryTheme(topic.category);

            return (
              <motion.div
                key={topic.id}
                id={topic.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, type: 'spring', stiffness: 280, damping: 26 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => handleSelectTopic(topic.id)}
                className={`relative rounded-3xl border shadow-lg p-6 flex flex-col justify-between space-y-5 transition-all cursor-pointer group overflow-hidden ${theme.cardBgClass} ${theme.cardBorderClass}`}
              >
                {/* Subtle Radial Glow in Top Right Corner */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 -mr-16 -mt-16"
                  style={{ backgroundColor: theme.glowColor }}
                />

                <div className="space-y-3.5 relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-md border border-white/20 ${theme.iconBgClass}`}>
                      {getIcon(topic.iconName)}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badgeClass}`}>
                      {topic.category}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-black tracking-tight leading-snug group-hover:opacity-90 transition">
                      {topic.title}
                    </h2>
                    <p className="text-xs theme-text-muted mt-1.5 line-clamp-2 leading-relaxed">
                      {topic.shortDesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {topic.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Stat Preview */}
                  {topic.keyStatistics.length > 0 && (
                    <div className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${theme.subcardBgClass}`}>
                      <span className="theme-text-muted font-medium truncate pr-2">{topic.keyStatistics[0].label}:</span>
                      <span className={`font-extrabold shrink-0 ${theme.textAccentClass}`}>{topic.keyStatistics[0].value}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="font-bold theme-text-muted">
                    {topic.stances.length} Partiti Mappati
                  </span>
                  <div className={`flex items-center space-x-1.5 font-extrabold group-hover:translate-x-1 transition ${theme.textAccentClass}`}>
                    <span>Esplora Scheda Tema</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};
