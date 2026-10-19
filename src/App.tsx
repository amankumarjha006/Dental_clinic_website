import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NavTab } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { SensoryComfortModal } from './components/SensoryComfortModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>(
    'Comprehensive New Patient Exam & Cleaning'
  );
  const [isSensoryModalOpen, setIsSensoryModalOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    if (activeTab === 'home') {
      const el = document.getElementById('book-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveTab('patient-info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTreatmentForBooking = (title: string) => {
    setSelectedTreatmentForBooking(title);
    if (activeTab === 'home') {
      const el = document.getElementById('book-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveTab('patient-info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-primary relative">
      {/* 1. Global Announcement Bar */}
      <AnnouncementBar onBookClick={handleBookClick} />

      {/* 2. Sticky Glassmorphic Header */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={handleBookClick}
        onOpenSensoryMenu={() => setIsSensoryModalOpen(true)}
      />

      {/* 3. Page Body with motion.dev View Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <HomePage
              key="page-home"
              onBookClick={handleBookClick}
              onExploreTreatments={() => handleSelectTab('treatments')}
              onDoctorClick={() => handleSelectTab('about')}
              onOpenSensoryMenu={() => setIsSensoryModalOpen(true)}
              selectedTreatmentForBooking={selectedTreatmentForBooking}
              onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage
              key="page-about"
              onBackToHome={() => handleSelectTab('home')}
              onBookClick={handleBookClick}
              onOpenSensoryMenu={() => setIsSensoryModalOpen(true)}
            />
          )}

          {activeTab === 'treatments' && (
            <TreatmentsPage
              key="page-treatments"
              onBackToHome={() => handleSelectTab('home')}
              onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
              onBookClick={handleBookClick}
            />
          )}

          {activeTab === 'doctor' && (
            <AboutPage
              key="page-doctor"
              onBackToHome={() => handleSelectTab('home')}
              onBookClick={handleBookClick}
              onOpenSensoryMenu={() => setIsSensoryModalOpen(true)}
            />
          )}

          {activeTab === 'patient-info' && (
            <PatientInfoPage
              key="page-patient-info"
              onBackToHome={() => handleSelectTab('home')}
              onOpenSensoryMenu={() => setIsSensoryModalOpen(true)}
              initialService={selectedTreatmentForBooking}
            />
          )}

          {activeTab === 'contact' && (
            <ContactPage
              key="page-contact"
              onBackToHome={() => handleSelectTab('home')}
              onBookClick={handleBookClick}
            />
          )}
        </AnimatePresence>
      </main>

      {/* 4. Global Sensory Comfort Modal */}
      <SensoryComfortModal
        isOpen={isSensoryModalOpen}
        onClose={() => setIsSensoryModalOpen(false)}
      />

      {/* 5. Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Sensory Protocol Shortcut */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsSensoryModalOpen(true)}
          className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center shadow-level-3 border border-outline-variant/40 hover:bg-surface-container transition-colors"
          title="Sensory Anxiety Protocol"
          aria-label="Open sensory comfort protocol"
        >
          <span className="material-symbols-outlined text-[22px]">spa</span>
        </motion.button>

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-level-3 transition-colors"
              aria-label="Scroll to top"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 6. Footer */}
      <Footer onSelectTab={handleSelectTab} onOpenBooking={handleBookClick} />
    </div>
  );
};

export default App;
