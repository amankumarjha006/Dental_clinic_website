import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

interface DoctorSectionProps {
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onBookClick }) => {
  return (
    <section
      id="doctor"
      className="py-20 md:py-28 bg-surface-container-low border-y border-outline-variant/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/40 aspect-[4/5] bg-surface-container group">
              <img
                src={clinicData.images.drElenaPortrait}
                alt="Dr. Elena Rostova, DDS, FAGD"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary font-semibold text-xs shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Accepting New Patients
                </span>
              </div>

              {/* Bottom Credential Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface border border-white/60">
                <p className="text-xs uppercase tracking-wider text-outline font-bold">
                  Fellow, Academy of General Dentistry
                </p>
                <p className="text-sm font-bold text-primary">
                  Top 6% of North American Clinicians
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Credentials & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
                CLINICAL LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
                {clinicData.doctor.name}
              </h2>
              <p className="text-sm font-semibold text-outline mt-1">
                {clinicData.doctor.titles} • {clinicData.doctor.role}
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border-l-4 border-primary shadow-sm">
              <p className="italic text-on-surface-variant font-serif text-lg leading-relaxed">
                "{clinicData.doctor.quote}"
              </p>
            </div>

            {/* Academic & Professional Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicData.doctor.credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary-container transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-primary text-[1.4rem] mb-1.5 block">
                    {cred.icon}
                  </span>
                  <h4 className="text-sm font-bold text-on-surface font-headline">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {cred.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onBookClick}
                className="bg-primary text-on-primary hover:bg-inverse-surface rounded-xl px-7 py-3.5 text-sm font-semibold shadow-level-2 transition-all inline-flex items-center gap-2"
              >
                <span>Book Consultation with Dr. Elena</span>
                <span className="material-symbols-outlined text-[1.1rem]">calendar_today</span>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
