import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TreatmentItem } from '../types';
import { treatmentsData } from '../data/treatmentsData';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);

  const categories = [
    'All',
    'Preventive',
    'Orthodontics',
    'Restorative',
    'Cosmetic',
    'Endodontics',
    'Pediatric'
  ];

  const filteredTreatments = selectedCategory === 'All'
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 md:py-28 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary uppercase tracking-widest block mb-2 font-eyebrow"
            >
              PRACTICE CAPABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline"
            >
              Precision Restorative &amp; Aesthetic Care
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-on-surface-variant max-w-md leading-relaxed"
          >
            Biomimetic dental procedures engineered to conserve natural tooth structure while achieving optimal biological longevity.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Treatment Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTreatments.map((treatment) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-7 bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between hover:shadow-level-2 hover:border-primary-container transition-all group relative"
              >
                <div>
                  {/* Category & Duration Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-semibold">
                      {treatment.category}
                    </span>
                    <span className="text-xs text-outline font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {treatment.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-on-surface mb-2 font-headline group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-5 line-clamp-3 leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Procedure Highlights */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-on-surface-variant">
                    {treatment.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[1.05rem] shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Fee Range & CTAs */}
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[0.7rem] text-outline uppercase tracking-wider block font-semibold">
                      Fee Range
                    </span>
                    <span className="text-base font-bold text-on-surface">
                      {treatment.feeRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalTreatment(treatment)}
                      className="text-xs text-outline hover:text-primary px-2.5 py-1.5 rounded-lg hover:bg-surface-container transition-colors"
                      title="View technology & details"
                    >
                      Details
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onSelectTreatmentForBooking(treatment.title)}
                      className="bg-primary hover:bg-primary-container text-on-primary text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl inline-flex items-center gap-1 shadow-sm transition-colors"
                    >
                      <span>Reserve</span>
                      <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectTreatmentForBooking('Comprehensive New Patient Exam & Cleaning')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary text-primary bg-surface-container-lowest hover:bg-primary hover:text-on-primary transition-all text-sm font-semibold shadow-sm"
          >
            <span>Reserve Comprehensive Evaluation</span>
            <span className="material-symbols-outlined text-[1.1rem]">menu_book</span>
          </motion.button>
        </div>
      </div>

      {/* Treatment Detail Modal */}
      <AnimatePresence>
        {activeModalTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalTreatment(null)}
              className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/60 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-primary font-semibold text-xs">
                  {activeModalTreatment.category}
                </span>
                <span className="text-xs text-outline">{activeModalTreatment.duration}</span>
              </div>

              <h3 className="text-2xl font-bold text-on-surface mb-3 font-headline">
                {activeModalTreatment.title}
              </h3>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {activeModalTreatment.description}
              </p>

              {activeModalTreatment.technology && (
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">biotech</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">
                      Advanced Technology
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {activeModalTreatment.technology}
                    </span>
                  </div>
                </div>
              )}

              {activeModalTreatment.warranty && (
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">
                      Clinical Assurance
                    </span>
                    <span className="text-sm font-bold text-on-surface">
                      {activeModalTreatment.warranty}
                    </span>
                  </div>
                </div>
              )}

              <h4 className="text-xs uppercase font-bold text-outline tracking-wider mb-2">
                Procedure Deliverables
              </h4>
              <ul className="space-y-2 mb-6">
                {activeModalTreatment.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div>
                  <span className="text-xs text-outline block">Fee Estimate</span>
                  <span className="text-xl font-bold text-primary">{activeModalTreatment.feeRange}</span>
                </div>
                <button
                  onClick={() => {
                    const title = activeModalTreatment.title;
                    setActiveModalTreatment(null);
                    onSelectTreatmentForBooking(title);
                  }}
                  className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-xl font-semibold text-sm shadow-sm transition-colors"
                >
                  Reserve This Treatment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
