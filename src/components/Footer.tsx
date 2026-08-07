import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Database, Award, Heart } from 'lucide-react';
import { PARTIES_ARRAY } from '../data/parties';
import { VotochiaroLogo } from './VotochiaroLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <VotochiaroLogo size="md" showSubtitle={false} />

            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-md">
              Votochiaro è il portale civico indipendente per il voto consapevole in Italia. Mappatura obiettiva di tutti i temi d'attualità politica, programmi delle forze politiche, fact-checking e guida elettorale.
            </p>

            <div className="flex items-center space-x-2 text-xs text-sky-300 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>100% Imparziale • Senza Affiliazioni Politiche • Dati Ufficiali Verificati</span>
            </div>
          </div>

          {/* Official Sources */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 flex items-center space-x-1.5">
              <Database className="w-4 h-4 text-sky-400" />
              <span>Fonti Dati Ufficiali</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• ISTAT (Istituto Nazionale di Statistica)</li>
              <li>• Banca d'Italia (Relazioni Annuali)</li>
              <li>• Eurostat & OECD Health Statistics</li>
              <li>• Corte dei Conti & RGS</li>
              <li>• NATO Secretary General Report</li>
            </ul>
          </div>

          {/* Mapped Parties */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Partiti Mappati ({PARTIES_ARRAY.length})</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {PARTIES_ARRAY.map((p) => (
                <motion.span
                  key={p.id}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700/80 cursor-pointer transition"
                >
                  {p.shortName}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Votochiaro Italia — Guida al Voto Consapevole. Strumento civico aperto.
          </div>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Realizzato per una democrazia consapevole</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
