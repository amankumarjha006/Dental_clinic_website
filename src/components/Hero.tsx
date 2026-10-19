import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
  onDoctorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExploreClick,
  onDoctorClick,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-surface via-surface-container-low/40 to-surface-container-lowest pt-8 md:pt-14 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle ambient blur ornaments */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-surface-container-high/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            {/* Category / Trust Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/60 text-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-[1.1rem]">verified</span>
              <span className="text-[0.72rem] font-bold tracking-widest uppercase">
                PERSONALIZED DENTAL CARE
              </span>
            </motion.div>

            {/* Main Headline with Editorial Serif Emphasis */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-on-surface tracking-tight leading-[1.15] font-headline">
              Healthy Smiles Begin With{' '}
              <span className="text-primary italic font-serif font-medium">
                Comfortable
              </span>
              , Thoughtful Care.
            </h1>

            {/* Supporting Philosophy Lead */}
            <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              We reject rushed clinical conveyor-belts. Experience comprehensive, evidence-based dentistry in an architecturally quiet sanctuary designed intentionally to ease sensory stress and honor your peace of mind.
            </p>

            {/* CTAs and Immediate Booking */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onBookClick}
                className="bg-primary text-on-primary hover:bg-inverse-surface rounded-xl px-7 py-4 text-base font-semibold shadow-level-2 transition-all duration-200 inline-flex items-center gap-2.5 w-full sm:w-auto justify-center"
              >
                <span>Book an Appointment</span>
                <span className="material-symbols-outlined text-[1.2rem]">calendar_month</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                className="bg-surface-container hover:bg-secondary-container text-primary border border-outline-variant/40 rounded-xl px-6 py-4 text-base font-semibold transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Explore Treatments</span>
                <span className="material-symbols-outlined text-[1.2rem]">clinical_notes</span>
              </motion.button>
            </div>

            {/* Direct Phone Consultation Desk */}
            <div className="flex items-center gap-2.5 text-sm text-outline pt-1">
              <span className="material-symbols-outlined text-primary text-[1.2rem]">
                phone_in_talk
              </span>
              <span>Direct consultation desk:</span>
              <a
                href={`tel:${clinicData.phoneClean}`}
                className="font-bold text-primary underline underline-offset-2 hover:text-on-surface transition-colors"
              >
                {clinicData.phone}
              </a>
            </div>

            {/* Credential Trust Pill */}
            <motion.div
              whileHover={{ scale: 1.02, backgroundColor: '#dff4ef' }}
              onClick={onDoctorClick}
              className="mt-2 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 flex items-center gap-4 cursor-pointer transition-colors shadow-sm w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[1.4rem]">school</span>
              </div>
              <div>
                <p className="text-base font-bold text-on-surface flex items-center gap-2">
                  <span>{clinicData.doctor.name}, {clinicData.doctor.titles}</span>
                  <span className="material-symbols-outlined text-primary text-[1rem]">verified</span>
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  Univ. of Pennsylvania Dental Medicine • Fellow, AGD
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Column with Ambient Card & Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/50 aspect-[4/5] bg-surface-container group">
              <img
                src={clinicData.images.heroSuite}
                alt="A serene architectural dental studio suite illuminated by soft morning sunlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-inverse-surface/10 to-transparent pointer-events-none" />

              {/* Floating Badge Over Image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-5 right-5 sm:left-6 sm:right-6 p-4 rounded-2xl backdrop-blur-md bg-surface-container-lowest/90 border border-white/70 shadow-level-3 flex items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[1.5rem]">hotel_class</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Calm Environment Certified
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Zero-Rushing Policy • Private acoustic suites
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
