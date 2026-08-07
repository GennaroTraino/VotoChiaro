import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  FileText,
  Scale,
  Vote,
  BarChart3,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Zap,
  Receipt,
  HeartPulse,
  ShieldAlert,
  Flame
} from 'lucide-react';
import { TabType } from './Header';

interface HomeOverviewProps {
  onNavigate: (tab: TabType) => void;
}

interface SectionCard {
  id: TabType;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  buttonText: string;
  popular?: boolean;
  colorClass: {
    iconBg: string;
    iconText: string;
    badgeBg: string;
    badgeText: string;
    btnClass: string;
  };
}

// Background Floating Animated Bubbles Component
const BackgroundBubbles: React.FC = () => {
  const bubbles = [
    { id: 1, size: 'w-32 h-32 sm:w-64 sm:h-64', color: 'bg-indigo-500/10 dark:bg-sky-500/15', top: '5%', left: '-5%', duration: 18, delay: 0 },
    { id: 2, size: 'w-40 h-40 sm:w-80 sm:h-80', color: 'bg-purple-500/10 dark:bg-purple-500/15', top: '35%', right: '-8%', duration: 22, delay: 2 },
    { id: 3, size: 'w-28 h-28 sm:w-56 sm:h-56', color: 'bg-emerald-500/10 dark:bg-emerald-500/15', top: '70%', left: '10%', duration: 20, delay: 4 },
    { id: 4, size: 'w-24 h-24 sm:w-48 sm:h-48', color: 'bg-amber-500/10 dark:bg-amber-500/12', top: '85%', right: '5%', duration: 16, delay: 1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className={`absolute rounded-full blur-3xl ${b.size} ${b.color}`}
          style={{ top: b.top, left: b.left, right: b.right }}
          animate={{
            y: [0, -25, 15, 0],
            x: [0, 15, -20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
};

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate }) => {
  const sections: SectionCard[] = [
    {
      id: 'topics',
      title: 'Temi Caldi',
      badge: 'In Primo Piano',
      icon: Layers,
      description:
        'Sfoglia le schede espandibili su Difesa, Fisco, Sanità, Lavoro, Casa, IA e Ambiente con le posizioni di tutti i partiti.',
      buttonText: 'Esplora i Temi Caldi',
      popular: true,
      colorClass: {
        iconBg: 'bg-indigo-500/15 dark:bg-sky-500/15 border-indigo-500/25 dark:border-sky-500/30',
        iconText: 'text-indigo-600 dark:text-sky-300',
        badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/40',
        badgeText: 'text-indigo-700 dark:text-sky-300',
        btnClass: 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-slate-900/20 hover:border-indigo-400',
      },
    },
    {
      id: 'programs',
      title: 'Programmi dei Partiti',
      badge: 'Schede Complete',
      icon: FileText,
      description:
        'Leader, coalizioni, pilastri programmatici e link ai testi ufficiali depositati per ogni forza politica.',
      buttonText: 'Vedi Schede Partiti',
      colorClass: {
        iconBg: 'bg-emerald-500/15 border-emerald-500/25',
        iconText: 'text-emerald-600 dark:text-emerald-400',
        badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/40',
        badgeText: 'text-emerald-700 dark:text-emerald-300',
        btnClass: 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white shadow-slate-900/20',
      },
    },
    {
      id: 'compare',
      title: 'Confronto Partiti',
      badge: 'Matrice in Tempo Reale',
      icon: Scale,
      description:
        'Metti a confronto i partiti a tua scelta affiancati tema per tema per individuare punti d’intesa e differenze.',
      buttonText: 'Confronta Partiti',
      colorClass: {
        iconBg: 'bg-amber-500/15 border-amber-500/25',
        iconText: 'text-amber-600 dark:text-amber-400',
        badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/40',
        badgeText: 'text-amber-800 dark:text-amber-300',
        btnClass: 'bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white shadow-slate-900/20',
      },
    },
    {
      id: 'quiz',
      title: 'Quiz Affinità Elettorale',
      badge: 'Raccomandato',
      icon: Vote,
      description:
        'Rispondi alle domande sui temi reali dell’attualità politica per scoprire la tua percentuale di affinità con i partiti italiani.',
      buttonText: 'Fai il Quiz Affinità',
      colorClass: {
        iconBg: 'bg-purple-500/20 border-purple-500/30',
        iconText: 'text-purple-600 dark:text-purple-300',
        badgeBg: 'bg-purple-100 dark:bg-purple-950/80 border-purple-300 dark:border-purple-700/60',
        badgeText: 'text-purple-800 dark:text-purple-200',
        btnClass: 'bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 hover:from-purple-600 hover:to-indigo-600 text-white shadow-purple-900/25',
      },
    },
    {
      id: 'polls',
      title: 'Sondaggi & Seggi',
      badge: 'Supermedia & Camera',
      icon: BarChart3,
      description:
        'Supermedia settimanale dei sondaggi nazionali e proiezioni sulla ripartizione dei seggi alla Camera e al Senato.',
      buttonText: 'Consulta Sondaggi',
      colorClass: {
        iconBg: 'bg-cyan-500/15 border-cyan-500/25',
        iconText: 'text-cyan-600 dark:text-cyan-400',
        badgeBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/40',
        badgeText: 'text-cyan-800 dark:text-cyan-300',
        btnClass: 'bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white shadow-slate-900/20',
      },
    },
    {
      id: 'factcheck',
      title: 'Fact-Checking',
      badge: 'Verifiche Dati Ufficiali',
      icon: CheckCircle2,
      description:
        'Fact-checking indipendente con dati certificati ISTAT, Bankitalia, INPS e NATO per smontare bufale e dati alterati.',
      buttonText: 'Leggi Fact-Check',
      colorClass: {
        iconBg: 'bg-rose-500/15 border-rose-500/25',
        iconText: 'text-rose-600 dark:text-rose-400',
        badgeBg: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/40',
        badgeText: 'text-rose-800 dark:text-rose-300',
        btnClass: 'bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white shadow-slate-900/20',
      },
    },
    {
      id: 'faq',
      title: 'Guida Voto & FAQ',
      badge: 'Rosatellum & Dizionario',
      icon: HelpCircle,
      description:
        'Tutto sul sistema elettorale, regole di voto per fuorisede, guida alle schede e glossario dei termini politici.',
      buttonText: 'Apri Guida Elettorale',
      colorClass: {
        iconBg: 'bg-slate-700/15 dark:bg-sky-500/15 border-slate-700/25 dark:border-sky-500/30',
        iconText: 'text-slate-800 dark:text-sky-300',
        badgeBg: 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700/40',
        badgeText: 'text-slate-800 dark:text-slate-200',
        btnClass: 'bg-slate-900 hover:bg-slate-800 dark:bg-sky-950 text-white shadow-slate-900/20',
      },
    },
  ];

  const quickHotTopics = [
    { title: 'Invio Armi Ucraina & 2% PIL NATO', cat: 'Esteri & Difesa', icon: ShieldAlert, color: 'text-rose-500' },
    { title: 'Superbonus, Deficit & Patto Stabilità', cat: 'Economia & Lavoro', icon: Receipt, color: 'text-amber-500' },
    { title: 'Sanità Pubblica & Liste d\'Attesa', cat: 'Società & Diritti', icon: HeartPulse, color: 'text-emerald-500' },
    { title: 'Nucleare di Nuova Generazione', cat: 'Ambiente & Energia', icon: Zap, color: 'text-cyan-500' },
  ];

  return (
    <div className="relative py-4 sm:py-8 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-5 sm:space-y-8">
      {/* Background Animated Bubbles */}
      <BackgroundBubbles />

      {/* Main High-Impact Banner for Cellphone & Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-white/85 dark:bg-[#131b2e]/90 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800/80 shadow-xl overflow-hidden backdrop-blur-md"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/25 dark:border-sky-500/30 text-indigo-700 dark:text-sky-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 shrink-0" />
              <span>Iniziativa di Trasparenza Civica</span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">
              Votochiaro: Guida al Voto Consapevole
            </h1>

            <p className="text-xs sm:text-sm theme-text-muted leading-relaxed font-normal">
              Confronto neutrale e trasparente di tutti i <strong>partiti politici italiani</strong> su programmi ufficiali, dati ISTAT e fact-checking. Scopri la tua affinità politica in pochi minuti.
            </p>

            {/* Quick Action Buttons Directly in Top Banner */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('topics')}
                className="flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-slate-800 hover:to-indigo-900 text-white font-black text-xs shadow-lg shadow-slate-900/25 border border-slate-700/60 transition w-full sm:w-auto cursor-pointer"
              >
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Esplora i Temi Caldi</span>
                <ArrowRight className="w-4 h-4 shrink-0 ml-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('programs')}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-900 dark:text-sky-200 font-extrabold text-xs border border-indigo-200 dark:border-indigo-800/50 shadow-xs transition w-full sm:w-auto cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0" />
                <span>Programmi dei Partiti</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('quiz')}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-xs shadow-md shadow-purple-900/20 transition w-full sm:w-auto cursor-pointer"
              >
                <Vote className="w-4 h-4 shrink-0 text-amber-300" />
                <span>Quiz Affinità</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-amber-400 text-slate-950 font-black uppercase tracking-wider ml-1">Consigliato</span>
              </motion.button>
            </div>
          </div>

          {/* Rapid Hot Topics Preview Box */}
          <div className="w-full lg:w-80 bg-slate-900/90 text-white p-4 rounded-2xl border border-slate-800/80 shadow-md space-y-2.5 shrink-0">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-amber-300">
              <span className="flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Temi Caldi in Evidenza</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold">In Evidenza</span>
            </div>

            <div className="space-y-1.5">
              {quickHotTopics.map((ht, idx) => {
                const Icon = ht.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onNavigate('topics')}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition cursor-pointer text-xs group"
                  >
                    <div className="flex items-center space-x-2 min-w-0 pr-2">
                      <Icon className={`w-3.5 h-3.5 ${ht.color} shrink-0`} />
                      <span className="font-bold text-[11px] truncate text-slate-200 group-hover:text-sky-300">
                        {ht.title}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Sections Directory Header */}
      <div className="relative z-10 space-y-1 text-left pt-1">
        <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-sky-400">
          <Compass className="w-3.5 h-3.5" />
          <span>Navigazione Rapida</span>
        </div>
        <h2 className="text-lg sm:text-2xl font-black tracking-tight">
          Cosa vuoi consultare oggi?
        </h2>
      </div>

      {/* Grid of All 7 Navigation Section Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {sections.map((section, idx) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              className={`bg-white/80 dark:bg-[#131b2e]/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
                section.popular
                  ? 'ring-2 ring-purple-500/60 dark:ring-purple-400/60 border-purple-300 dark:border-purple-600/60'
                  : 'border-slate-200/90 dark:border-slate-800/80 hover:border-indigo-500/40 dark:hover:border-sky-500/40'
              }`}
            >
              {section.popular && (
                <div className="absolute top-2.5 right-2.5 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md flex items-center space-x-1 border border-purple-400/40">
                  <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                  <span>Consigliato</span>
                </div>
              )}

              <div className="space-y-2.5">
                {/* Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${section.colorClass.iconBg} ${section.colorClass.iconText} flex items-center justify-center font-black border group-hover:scale-105 transition-transform shadow-xs`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${section.colorClass.badgeBg} ${section.colorClass.badgeText}`}>
                    {section.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-black tracking-tight group-hover:text-indigo-600 dark:group-hover:text-sky-300 transition-colors">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs theme-text-muted leading-relaxed font-normal">
                  {section.description}
                </p>
              </div>

              {/* Action Button - Elegant navy button */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-200/60 dark:border-slate-800/80">
                <button
                  onClick={() => onNavigate(section.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all shadow-md active:scale-95 ${section.colorClass.btnClass}`}
                >
                  <span>{section.buttonText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
