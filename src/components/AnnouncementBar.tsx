import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clinicData } from '../data/clinicData';

interface AnnouncementBarProps {
  onBookClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-primary-container text-on-secondary px-4 sm:px-6 py-2.5 text-center relative z-50 overflow-hidden text-xs sm:text-sm font-medium"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-2 sm:gap-4">
          <div className="flex items-center flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container animate-ping" />
              NOW ACCEPTING
            </span>
            <span className="font-medium text-white/95">
              Welcoming New Patients • Saturday &amp; Evening Consultations Available
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <button
              onClick={onBookClick}
              className="hidden lg:inline-flex items-center gap-1 underline underline-offset-4 font-semibold hover:text-on-primary-container transition-colors"
            >
              Reserve First Visit
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicData.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-on-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              {clinicData.phone}
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/60 hover:text-white p-1 rounded-full transition-colors ml-2"
              aria-label="Dismiss banner"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};
