import React from 'react';
import { motion } from 'motion/react';

interface StatItem {
  icon: string;
  title: string;
  description: string;
}

const trustItems: StatItem[] = [
  {
    icon: 'verified_user',
    title: 'Board-Certified',
    description: 'Continuous academic rigor and hospital residency-trained specialists.',
  },
  {
    icon: 'receipt_long',
    title: '100% Upfront Pricing',
    description: 'Itemized written plans with zero surprise bills before every procedure.',
  },
  {
    icon: 'sensors',
    title: 'Pain-Free Sensory Tech',
    description: 'Silent intraoral 3D scanning and computer-guided micro-lasers.',
  },
  {
    icon: 'nest_heat_link_gen_3',
    title: 'Sanctuary Comfort',
    description: 'Bose noise-canceling headsets, weighted linen blankets, and organic tea.',
  },
];

export const TrustStats: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-surface-container-lowest border-y border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: '#126b64' }}
              className="p-6 rounded-2xl bg-surface-container-low/60 border border-outline-variant/40 hover:shadow-level-2 transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-secondary-container transition-all">
                <span className="material-symbols-outlined text-[1.5rem]">
                  {item.icon}
                </span>
              </div>
              <h2 className="text-xl font-bold text-on-surface mb-1.5 font-headline">
                {item.title}
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
