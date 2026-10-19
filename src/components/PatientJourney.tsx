import React from 'react';
import { motion } from 'motion/react';

interface PatientJourneyProps {
  onStartBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onStartBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Request Online',
      desc: 'Complete our frictionless 60-second appointment booking with your preferred visit date and sensory preferences.',
      highlight: 'Average time: Under 1 minute',
      icon: 'touch_app',
    },
    {
      num: '02',
      title: 'Unhurried 3D Imaging',
      desc: 'Arrive at our clinic lounge, sip organic tea, and review full ultra-quiet 3D digital imaging alongside Dr. Elena.',
      highlight: 'Zero physical impression trays',
      icon: 'view_in_ar',
    },
    {
      num: '03',
      title: 'Written Roadmap',
      desc: 'Receive a clear, transparent digital and printed plan with exact fees, procedure durations, and no upsells.',
      highlight: 'Absolute price transparency',
      icon: 'receipt_long',
    },
    {
      num: '04',
      title: 'Gentle Treatment',
      desc: 'Relax in private acoustic suites with tailored comfort. Followed by a direct clinician check-in call next morning.',
      highlight: 'Post-visit concierge follow-up',
      icon: 'favorite',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2"
          >
            TRANSPARENT PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline"
          >
            Your Experience From Start to Finish
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-on-surface-variant mt-3"
          >
            No surprises. No waiting in cold rooms. A structured, compassionate cadence.
          </motion.p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: '#126b64' }}
              className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between relative group hover:shadow-level-2 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shadow-sm font-headline">
                    {step.num}
                  </div>
                  <span className="material-symbols-outlined text-outline text-[1.4rem] group-hover:text-primary transition-colors">
                    {step.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-on-surface mb-2.5 font-headline group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 text-xs font-semibold text-primary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{step.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA prompt */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartBooking}
            className="bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Begin Step 1: Request Online</span>
            <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};
