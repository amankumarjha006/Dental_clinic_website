import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data/testimonialsData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Preventive', 'Cosmetic', 'Endodontic', 'Implants'];

  const filteredReviews = filter === 'All'
    ? testimonialsData
    : testimonialsData.filter((r) => r.treatment.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-20 md:py-28 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Rating Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
              VOICES OF TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
              Patient Reflections
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-surface-container-lowest px-5 py-3 rounded-2xl border border-outline-variant/40 shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[1.2rem] fill-1">
                  star
                </span>
              ))}
            </div>
            <span className="font-bold text-on-surface text-base">4.9 / 5.0</span>
            <span className="text-outline text-xs hidden sm:inline">
              (280+ verified Google &amp; Healthgrades reviews)
            </span>
          </div>
        </div>

        {/* Filter tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === opt
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between hover:shadow-level-2 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[1.1rem] fill-1">
                          star
                        </span>
                      ))}
                    </div>
                    {review.date && (
                      <span className="text-xs text-outline font-medium">{review.date}</span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-on-surface italic mb-6 leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-bold text-on-surface text-sm font-headline">
                      {review.name}
                    </p>
                    <p className="text-xs text-outline">
                      {review.role} • {review.treatment}
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined text-primary text-[1.3rem]"
                    title="Verified Patient Review"
                  >
                    verified
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
