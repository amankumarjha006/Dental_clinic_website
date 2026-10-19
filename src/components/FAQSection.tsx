import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqsData } from '../data/faqsData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('anxiety-protocol');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Anxiety', 'First Visit', 'Pricing & Insurance', 'Technology', 'Emergency'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqsData
    : faqsData.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="patient-info" className="py-20 md:py-28 bg-surface-container-low relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-on-surface-variant mt-2">
            Transparent answers regarding our clinical philosophy and financial policies.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl bg-surface-container-lowest border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/40 shadow-sm ring-1 ring-primary/10'
                    : 'border-outline-variant/40 hover:border-outline-variant'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-on-surface font-headline">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="material-symbols-outlined text-primary text-[22px] shrink-0"
                  >
                    expand_more
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
