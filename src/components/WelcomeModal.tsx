import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Layers,
  Scale,
  Vote,
  BarChart2,
  CheckCircle2,
  HelpCircle,
  Sun,
  Moon,
  BookOpen,
  Sparkles,
  ArrowRight,
  X,
  Check
} from 'lucide-react';
import { ThemeMode } from '../types';
import { VotochiaroLogo } from './VotochiaroLogo';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme,
}) => {
  if (!isOpen) return null;

  const themes: {
    id: ThemeMode;
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    bgPreview: string;
    textPreview: string;
    borderPreview: string;
  }[] = [
    {
      id: 'dark',
      label: 'Scuro Moderno',
      sublabel: 'Consigliato',
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
      bgPreview: 'bg-slate-900',
      textPreview: 'text-white',
      borderPreview: 'border-slate-700',
    },
    {
      id: 'light',
      label: 'Chiaro Solare',
      sublabel: 'Giorno',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      bgPreview: 'bg-slate-100',
      textPreview: 'text-slate-900',
      borderPreview: 'border-slate-300',
    },
    {
      id: 'sepia',
      label: 'Carta Warm',
      sublabel: 'Riposo visivo',
      icon: <BookOpen className="w-4 h-4 text-amber-700" />,
      bgPreview: 'bg-[#fcf9f2]',
      textPreview: 'text-[#2a2118]',
      borderPreview: 'border-[#dfd2be]',
    },
  ];

  const handleAccept = () => {
    localStorage.setItem('votochiaro_onboarding_accepted', 'true');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleAccept}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl theme-card border theme-border shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b theme-border shrink-0 bg-white/5">
            <div className="flex items-center space-x-3">
              <VotochiaroLogo size="sm" showSubtitle={false} />
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-sky-300 border border-indigo-500/30">
                Benvenuto su Votochiaro
              </span>
            </div>

            <button
              onClick={handleAccept}
              className="w-8 h-8 rounded-full theme-subcard hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition border border-white/10 text-slate-400 hover:text-slate-200"
              title="Chiudi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
            {/* Title & Intro */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                Guida Civica Indipendente al Voto Consapevole
              </h2>
              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed font-medium">
                Votochiaro è il portale super partes nato per offrire ai cittadini italiani uno strumento trasparente e neutrale per orientarsi tra i programmi dei partiti, i dati ufficiali e l'agenda politica del Paese.
              </p>
            </div>

            {/* Features Capabilities Grid */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-sky-400 mb-3 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Cosa puoi fare su Votochiaro:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                {[
                  {
                    title: 'Programmi & Temi Dettagliati',
                    desc: 'Analisi approfondita su Difesa, Fisco, Sanità, Riforme e Diritti.',
                    icon: Layers,
                    color: 'text-indigo-600 dark:text-sky-400',
                  },
                  {
                    title: 'Confronto Diretto',
                    desc: 'Metti a confronto fino a 4 partiti affiancati su ogni proposta.',
                    icon: Scale,
                    color: 'text-indigo-500',
                  },
                  {
                    title: 'Quiz Affinità Elettorale',
                    desc: 'Rispondi alle domande per calcolare la tua percentuale di sovrapposizione.',
                    icon: Vote,
                    color: 'text-emerald-500',
                  },
                  {
                    title: 'Sondaggi & Seggi',
                    desc: 'Supermedia nazionale, fiducie nei leader e dati economici.',
                    icon: BarChart2,
                    color: 'text-amber-500',
                  },
                  {
                    title: 'Fact-Checking Certificato',
                    desc: 'Verifica delle fake news con dati Bankitalia, ISTAT e NATO.',
                    icon: CheckCircle2,
                    color: 'text-red-500',
                  },
                  {
                    title: 'FAQ Voto & Glossario',
                    desc: 'Legge elettorale Rosatellum, voto fuori sede e termini spiegati.',
                    icon: HelpCircle,
                    color: 'text-sky-500',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-2xl theme-subcard border border-slate-200 dark:border-slate-800 flex items-start space-x-3"
                    >
                      <div className={`w-8 h-8 rounded-xl bg-indigo-500/10 dark:bg-sky-500/15 flex items-center justify-center shrink-0 border border-indigo-500/20 dark:border-sky-500/30 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-extrabold text-xs">{item.title}</div>
                        <div className="text-[11px] theme-text-muted leading-tight mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Theme Selector Section */}
            <div className="p-4 sm:p-5 rounded-2xl theme-subcard border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-sky-400">
                  Scegli il tuo Tema Visivo:
                </h3>
                <span className="text-[10px] theme-text-muted font-bold">Puoi modificarlo sempre nel menu</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {themes.map((t) => {
                  const isSelected = currentTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => onSelectTheme(t.id)}
                      className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all relative overflow-hidden ${t.bgPreview} ${t.textPreview} ${
                        isSelected
                          ? 'ring-2 ring-indigo-600 border-indigo-600 shadow-lg scale-105'
                          : 'opacity-70 hover:opacity-100 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}

                      <div className="flex items-center space-x-1.5 mb-2">
                        {t.icon}
                        <span className="text-xs font-black">{t.label}</span>
                      </div>
                      <span className="text-[10px] opacity-75 font-medium">{t.sublabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-5 sm:p-6 border-t theme-border shrink-0 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] theme-text-muted font-medium text-center sm:text-left">
              Continuando confermi di accedere a una piattaforma neutrale e trasparente.
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleAccept}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs font-black shadow-lg shadow-slate-900/30 transition flex items-center justify-center space-x-2 shrink-0 border border-slate-700/60"
            >
              <span>Accetta e Inizia l'Esplorazione</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
