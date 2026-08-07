import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, Compass, CheckCircle, Sparkles, ArrowRight, Layers, Vote } from 'lucide-react';

interface HeroBannerProps {
  onStartQuiz: () => void;
  onStartCompare: () => void;
  onExploreTopics: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartQuiz,
  onStartCompare,
  onExploreTopics,
}) => {
  return (
    <div className="py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Top Split Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            whileHover={{ scale: 1.01, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="lg:col-span-2 bg-white/80 dark:bg-[#131b2e]/85 backdrop-blur-md p-4 sm:p-8 rounded-3xl shadow-xl border border-slate-200/90 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all relative overflow-hidden cursor-default"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/25 dark:border-sky-500/30 text-indigo-700 dark:text-sky-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 sm:mb-4 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 shrink-0" />
              <span>Iniziativa di Trasparenza Civica</span>
            </div>

            <h1 className="text-xl sm:text-4xl font-black tracking-tight leading-tight">
              Votochiaro — Il Portale del Voto Consapevole
            </h1>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base theme-text-muted leading-relaxed font-normal">
              Tutti i temi cruciali dell’attualità politica italiana spiegati in modo semplice e trasparente, con dati ufficiali verificati, quadro normativo e le posizioni dettagliate di tutte le forze politiche.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={onExploreTopics}
                className="flex items-center justify-center space-x-2 px-5 py-3 min-h-[44px] rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-slate-800 hover:to-indigo-900 text-white font-black text-xs shadow-lg shadow-slate-900/25 border border-slate-700/60 transition w-full sm:w-auto cursor-pointer"
              >
                <Layers className="w-4 h-4 shrink-0 text-sky-400" />
                <span>Sfoglia Temi Caldi</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartCompare}
                className="flex items-center justify-center space-x-2 px-4 py-3 min-h-[44px] rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-900 dark:text-sky-200 font-extrabold text-xs border border-indigo-200 dark:border-indigo-800/50 shadow-xs transition w-full sm:w-auto cursor-pointer"
              >
                <Scale className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0" />
                <span>Confronta Programmi</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartQuiz}
                className="flex items-center justify-center space-x-2 px-4 py-3 min-h-[44px] rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-xs shadow-md shadow-purple-900/20 transition w-full sm:w-auto cursor-pointer"
              >
                <Vote className="w-4 h-4 shrink-0 text-amber-300" />
                <span>Quiz Affinità</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-amber-400 text-slate-950 font-black uppercase tracking-wider ml-1">Consigliato</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-8 rounded-3xl shadow-xl shadow-slate-900/20 text-white flex flex-col justify-between border border-slate-700/60 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 mb-2.5 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Verso le Elezioni 2027</span>
              </h3>
              <ul className="text-xs sm:text-sm space-y-2.5 font-semibold text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>Temi d'attualità politica mappati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>Forze e movimenti politici analizzati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>Verifiche Fact-Checking con fonti ufficiali</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
              <span className="font-bold text-[11px] sm:text-xs">Dati Ufficiali Verificati</span>
              <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase border border-white/20 text-slate-200">
                100% Imparziale
              </span>
            </div>
          </motion.div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {[
            { title: 'Temi Caldi', desc: 'Difesa, Fisco, Sanità, Riforme', icon: CheckCircle, iconColor: 'text-indigo-600 dark:text-sky-300', iconBg: 'bg-indigo-500/15 border-indigo-500/25' },
            { title: 'Partiti Mappati', desc: 'Tutti i partiti e movimenti', icon: Scale, iconColor: 'text-emerald-600 dark:text-emerald-400', iconBg: 'bg-emerald-500/15 border-emerald-500/25' },
            { title: 'Fact-Checking', desc: 'Verifiche ISTAT e Bankitalia', icon: Sparkles, iconColor: 'text-amber-600 dark:text-amber-400', iconBg: 'bg-amber-500/15 border-amber-500/25' },
            { title: '100% Imparziale', desc: 'Super partes e neutrale', icon: Compass, iconColor: 'text-purple-600 dark:text-purple-300', iconBg: 'bg-purple-500/15 border-purple-500/25' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-start space-x-2.5 p-3 sm:p-4 rounded-2xl bg-white/80 dark:bg-[#131b2e]/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 shadow-xs hover:shadow-md cursor-pointer transition-all"
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 font-bold border`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-extrabold text-[11px] sm:text-xs truncate">{item.title}</div>
                  <div className="text-[10px] sm:text-[11px] theme-text-muted mt-0.5 line-clamp-1">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
