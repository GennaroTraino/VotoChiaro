import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { PARTIES } from '../data/parties';
import { PartyId } from '../types';
import { PartyLogo } from './PartyLogo';
import { Vote, ArrowRight, ArrowLeft, RefreshCw, Trophy, HelpCircle, CheckCircle2 } from 'lucide-react';

export const PoliticalQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionId,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const calculateScores = (): { partyId: PartyId; score: number; percentage: number }[] => {
    const totalPointsPerParty: Record<PartyId, number> = {
      fdi: 0,
      pd: 0,
      m5s: 0,
      lega: 0,
      fi: 0,
      avs: 0,
      azione: 0,
      iv: 0,
      piueuropa: 0,
      libdem: 0,
      vannacci: 0,
      scn: 0,
      dsp: 0,
    };

    const maxPossiblePoints = QUIZ_QUESTIONS.length * 10;

    QUIZ_QUESTIONS.forEach((q) => {
      const selectedOptionId = selectedAnswers[q.id];
      if (selectedOptionId) {
        const option = q.options.find((o) => o.id === selectedOptionId);
        if (option) {
          Object.entries(option.alignments).forEach(([partyKey, score]) => {
            totalPointsPerParty[partyKey as PartyId] += score;
          });
        }
      }
    });

    return Object.entries(totalPointsPerParty)
      .map(([partyKey, points]) => ({
        partyId: partyKey as PartyId,
        score: points,
        percentage: Math.round((points / maxPossiblePoints) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  const scores = calculateScores();

  return (
    <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-4 sm:space-y-8">
      {/* Header Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 text-indigo-700 dark:text-sky-300 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1">
          <Vote className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400 shrink-0" />
          <span>Bussola Elettorale Imparziale</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
          Quiz del Voto Consapevole: Trova la tua Affinità Politica
        </h2>
        <p className="text-xs sm:text-sm theme-text-muted max-w-2xl mx-auto">
          Rispondi alle domande sui temi concreti del Paese. Il sistema calcolerà matematicamente la tua percentuale di sovrapposizione con i programmi ufficiali.
        </p>
      </div>

      {!showResults ? (
        /* Question Card Flow */
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="bg-white/80 dark:bg-[#131b2e]/85 backdrop-blur-md rounded-3xl shadow-xl border border-slate-200/90 dark:border-slate-800/80 p-4 sm:p-8 space-y-5"
        >
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center text-xs font-extrabold theme-text-muted mb-2">
              <span>Domanda {currentQuestionIndex + 1} di {totalQuestions}</span>
              <span className="text-indigo-600 dark:text-sky-400 font-black">{currentQ.topicTitle}</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-full"
                animate={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Text & Context */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-black leading-snug">
              {currentQ.question}
            </h3>
            <div className="p-4 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 border border-indigo-500/20 dark:border-sky-500/30 text-xs flex items-start space-x-2.5">
              <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Contesto:</strong> {currentQ.context}</span>
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswers[currentQ.id] === opt.id;
              return (
                <motion.div
                  key={opt.id}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3.5 ${
                    isSelected
                      ? 'border-indigo-600 dark:border-sky-500 bg-indigo-500/15 dark:bg-sky-500/20 font-bold shadow-md ring-2 ring-indigo-500/50 dark:ring-sky-500/50'
                      : 'theme-subcard border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-sky-500/40'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition ${
                      isSelected ? 'border-indigo-600 bg-slate-900 text-white' : 'border-slate-400'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-sky-300" />}
                  </div>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    {opt.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-5 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition border ${
                currentQuestionIndex === 0
                  ? 'opacity-30 cursor-not-allowed theme-subcard border-slate-200 dark:border-slate-800'
                  : 'theme-subcard border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Precedente</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleNext}
              disabled={!selectedAnswers[currentQ.id]}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl text-xs font-black shadow-md transition ${
                selectedAnswers[currentQ.id]
                  ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-slate-900/25 border border-slate-700/60'
                  : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>{currentQuestionIndex === totalQuestions - 1 ? 'Vedi Risultati Bussola' : 'Successiva'}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </motion.button>
          </div>
        </motion.div>
      ) : (
        /* Results Breakdown View */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-[#131b2e]/85 rounded-3xl shadow-xl border border-slate-200/90 dark:border-slate-800/80 p-6 sm:p-8 backdrop-blur-2xl space-y-6"
        >
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800 space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-sky-500/15 text-indigo-600 dark:text-sky-300 flex items-center justify-center mx-auto mb-2 border border-indigo-500/20 dark:border-sky-500/30 font-bold">
              <Trophy className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              La Tua Bussola Elettorale è Pronta!
            </h3>
            <p className="text-xs theme-text-muted">
              In base alle risposte fornite, ecco la percentuale di sovrapposizione con i programmi ufficiali:
            </p>
          </div>

          <div className="space-y-3">
            {scores.map((res, index) => {
              const party = PARTIES[res.partyId];
              const isTop = index === 0;

              return (
                <motion.div
                  key={res.partyId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`p-4 rounded-2xl border transition ${
                    isTop
                      ? 'bg-indigo-500/10 dark:bg-sky-500/10 border-indigo-500 dark:border-sky-500 shadow-lg ring-1 ring-indigo-500/50 dark:ring-sky-500/50'
                      : 'theme-subcard border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <PartyLogo partyId={res.partyId} size="md" />
                      <div>
                        <div className="font-extrabold text-sm flex items-center space-x-2">
                          <span>{party.name}</span>
                          {isTop && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-900 text-white uppercase tracking-wider shadow-xs border border-slate-700">
                              Primo Match
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] theme-text-muted">
                          Leader: {party.leader} • Coalizione: {party.coalition}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-indigo-700 dark:text-sky-300">{res.percentage}%</div>
                      <div className="text-[10px] font-bold uppercase theme-text-muted">Affinità</div>
                    </div>
                  </div>

                  {/* Score bar */}
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${res.percentage}%` }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className={`h-full ${isTop ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900' : 'bg-slate-500'}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-slate-800 hover:to-indigo-900 text-white text-xs font-black shadow-md shadow-slate-900/30 transition border border-slate-700/60"
            >
              <RefreshCw className="w-4 h-4 text-sky-400" />
              <span>Ricomincia il Quiz</span>
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};
