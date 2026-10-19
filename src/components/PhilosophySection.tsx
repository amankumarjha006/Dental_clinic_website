import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

interface PhilosophySectionProps {
  onLearnMoreClick: () => void;
  onOpenSensoryMenu: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onLearnMoreClick,
  onOpenSensoryMenu,
}) => {
  const pillars = [
    {
      icon: 'timer',
      title: 'Mindful Pacing',
      description:
        'We schedule full 60-minute appointments so our dentists can listen, answer every question, and conduct meticulous procedures without looking at the clock.',
    },
    {
      icon: 'biotech',
      title: 'Evidence-Based Medicine',
      description:
        'Biomimetic tooth preservation. We choose minimally invasive intervention to protect maximum native tooth bone, avoiding unnecessary drilling.',
    },
    {
      icon: 'headphones',
      title: 'Total Comfort Protocol',
      description:
        'Personalized sensory menus for every patient: active noise canceling headphones, calming ambient music, weighted blankets, and zero clinical odor.',
      action: 'Customize Sensory Setup',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Photography Anchor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-outline-variant/40 aspect-[4/3] bg-surface-container group">
              <img
                src={clinicData.images.receptionLounge}
                alt="A tranquil Scandinavian-Japanese inspired dental clinic reception lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge Over Image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-on-primary">
                <div>
                  <p className="text-sm font-bold">Suite 400 • The Quiet Lounge</p>
                  <p className="text-xs text-white/80">Architectural acoustic design</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  <span className="material-symbols-outlined text-[15px]">spa</span>
                  HEPA H14 Continuous
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar Under Image */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/40">
                <span className="text-2xl font-bold text-primary block mb-0.5 font-headline">
                  60 Min
                </span>
                <span className="text-xs font-bold text-on-surface block">
                  Initial Evaluation
                </span>
                <span className="text-xs text-on-surface-variant">
                  Diagnostic mapping without rushing.
                </span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/40">
                <span className="text-2xl font-bold text-tertiary block mb-0.5 font-headline">
                  Zero
                </span>
                <span className="text-xs font-bold text-on-surface block">
                  Judgment Guarantee
                </span>
                <span className="text-xs text-on-surface-variant">
                  Empathetic care regardless of history.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Philosophy Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
                A Different Kind of Dental Experience
              </h2>
            </div>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Aura Dental Studio was created as an intentional antidote to the cold, impersonal healthcare conveyor systems of the past. We operate on three fundamental pillars of respectful human care:
            </p>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/30 hover:bg-surface-container-low transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="material-symbols-outlined text-[1.3rem]">
                      {pillar.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-on-surface mb-1 font-headline">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-1">
                      {pillar.description}
                    </p>
                    {pillar.action && (
                      <button
                        onClick={onOpenSensoryMenu}
                        className="text-xs text-primary font-bold underline underline-offset-2 hover:text-on-surface transition-colors mt-1 inline-flex items-center gap-1"
                      >
                        <span>{pillar.action}</span>
                        <span className="material-symbols-outlined text-[14px]">tune</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary hover:bg-inverse-surface transition-colors text-sm font-semibold shadow-sm"
              >
                <span>Learn More About Dr. Elena &amp; Our Clinic</span>
                <span className="material-symbols-outlined text-[1rem]">east</span>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
