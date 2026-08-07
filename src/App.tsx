import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header, TabType } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomeOverview } from './components/HomeOverview';
import { HeroBanner } from './components/HeroBanner';
import { TopicExplorer } from './components/TopicExplorer';
import { PartyPrograms } from './components/PartyPrograms';
import { PartyComparer } from './components/PartyComparer';
import { PoliticalQuiz } from './components/PoliticalQuiz';
import { FactChecker } from './components/FactChecker';
import { FaqAndGuide } from './components/FaqAndGuide';
import { PollsAndStats } from './components/PollsAndStats';
import { GlossaryModal } from './components/GlossaryModal';
import { WelcomeModal } from './components/WelcomeModal';
import { Footer } from './components/Footer';
import { ThemeMode, PartyId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [glossaryModalOpen, setGlossaryModalOpen] = useState<boolean>(false);
  const [selectedProgramPartyId, setSelectedProgramPartyId] = useState<PartyId | null>(null);
  
  // First-access onboarding popup state
  const [welcomeModalOpen, setWelcomeModalOpen] = useState<boolean>(() => {
    return localStorage.getItem('votochiaro_onboarding_accepted') !== 'true';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('votochiaro_theme');
    if (saved === 'light' || saved === 'dark' || saved === 'sepia') return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('votochiaro_theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex font-sans transition-colors duration-200 w-full overflow-x-hidden">
      {/* Sleek Minimal Left Vertical Sidebar (Desktop / Tablet) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenGlossaryModal={() => setGlossaryModalOpen(true)}
        onOpenWelcomeModal={() => setWelcomeModalOpen(true)}
        currentTheme={theme}
        onSelectTheme={setTheme}
      />

      {/* Main Container Column */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Header Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenGlossaryModal={() => setGlossaryModalOpen(true)}
          onOpenWelcomeModal={() => setWelcomeModalOpen(true)}
          currentTheme={theme}
          onSelectTheme={setTheme}
        />

        {/* Main Content Area with Smooth Page Transitions */}
        <main className="flex-1 overflow-x-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {/* Home Overview Section */}
              {activeTab === 'home' && (
                <HomeOverview
                  onNavigate={(tab) => {
                    setActiveTab(tab);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              )}

              {/* Tab 1: Comprehensive Topics Bible */}
              {activeTab === 'topics' && (
                <TopicExplorer searchQuery={searchQuery} />
              )}

              {/* Tab 2: Party Programs Detailed Cards */}
              {activeTab === 'programs' && (
                <PartyPrograms
                  selectedPartyId={selectedProgramPartyId}
                  onSelectPartyId={setSelectedProgramPartyId}
                />
              )}

              {/* Tab 3: Real-time Program Comparison Matrix */}
              {activeTab === 'compare' && (
                <PartyComparer />
              )}

              {/* Tab 4: Political Compass Quiz */}
              {activeTab === 'quiz' && (
                <PoliticalQuiz />
              )}

              {/* Tab 5: Polls, Government Ratings & Seat Predictions */}
              {activeTab === 'polls' && (
                <PollsAndStats
                  onSelectPartyForProgram={(partyId) => {
                    setSelectedProgramPartyId(partyId);
                    setActiveTab('programs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              )}

              {/* Tab 6: Fact-Checking & Anti-Fake News */}
              {activeTab === 'factcheck' && (
                <FactChecker />
              )}

              {/* Tab 7: Electoral FAQ & Glossary */}
              {activeTab === 'faq' && (
                <FaqAndGuide />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <GlossaryModal
        isOpen={glossaryModalOpen}
        onClose={() => setGlossaryModalOpen(false)}
      />

      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={() => setWelcomeModalOpen(false)}
        currentTheme={theme}
        onSelectTheme={setTheme}
      />
    </div>
  );
}


