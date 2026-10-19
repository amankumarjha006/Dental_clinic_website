import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

export const EmergencySection: React.FC = () => {
  return (
    <section className="py-12 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-tertiary-fixed/60 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-bright p-6 sm:p-10 relative overflow-hidden shadow-sm"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-8 -top-8 w-52 h-52 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-error-container text-on-error-container font-bold text-xs uppercase tracking-wider font-eyebrow">
                <span className="material-symbols-outlined text-[15px]">emergency</span>
                <span>Urgent Dental Care &amp; Trauma Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight font-headline">
                Experiencing severe tooth pain, accidental fracture, or acute trauma?
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                We reserve dedicated clinical emergency slots every morning and afternoon. Walk-ins triage prioritized; immediate stabilization provided by on-duty specialists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${clinicData.emergencyPhone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-container transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                <span>Call {clinicData.emergencyPhone}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-primary font-semibold text-sm hover:bg-surface-container-low transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">chat</span>
                <span>WhatsApp Triage (15m response)</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
