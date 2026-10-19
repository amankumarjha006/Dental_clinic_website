import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-container-low border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
            STUDIO LOCATION &amp; ACCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
            Visiting Aura Dental Studio
          </h2>
          <p className="text-base text-on-surface-variant mt-2">
            A peaceful sanctuary conveniently situated with validated parking and full elevator access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Operating Hours Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-outline-variant/30 gap-3">
              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-widest block font-eyebrow mb-1">
                  Weekly Cadence
                </span>
                <h3 className="text-2xl font-bold text-on-surface font-headline">
                  Studio Operating Hours
                </h3>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-secondary-container text-primary font-semibold text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Open Today Until 7:00 PM</span>
              </div>
            </div>

            {/* Schedule list */}
            <div className="divide-y divide-outline-variant/20 font-sans text-sm">
              {clinicData.hours.map((item, idx) => (
                <div
                  key={idx}
                  className={`py-3.5 flex items-center justify-between ${
                    item.note === 'Open Today'
                      ? 'bg-surface-container px-3.5 rounded-xl my-1'
                      : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-on-surface">{item.day}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">
                      {item.note}
                    </span>
                  </div>
                  <span className={`font-semibold ${item.note === 'Open Today' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Parking and Transit Notes */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                local_parking
              </span>
              <div>
                <span className="text-xs font-bold text-on-surface block uppercase tracking-wide">
                  Validated Parking &amp; Accessibility
                </span>
                <span className="text-xs text-on-surface-variant mt-0.5 block leading-relaxed">
                  {clinicData.parking}. Complimentary ticket validation provided at checkout. High-speed elevator to the 3rd floor.
                </span>
              </div>
            </div>

            {/* Fast Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${clinicData.phoneClean}`}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-surface-container hover:bg-secondary-container text-primary text-sm font-semibold transition-all border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call {clinicData.phone}</span>
              </a>
              <a
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-surface-container hover:bg-secondary-container text-primary text-sm font-semibold transition-all border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Clinical Desk</span>
              </a>
            </div>
          </motion.div>

          {/* Location & Map Preview Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Address Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase text-primary tracking-widest block font-eyebrow">
                SUITE ADDRESS
              </span>
              <h3 className="text-xl font-bold text-on-surface font-headline">
                {clinicData.address}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {clinicData.cityStateZip} • {clinicData.suiteInfo}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-outline font-medium">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">directions_subway</span>
                  Metro Line 2 (Mindful Ave)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">accessible</span>
                  Wheelchair Accessible
                </span>
              </div>
            </div>

            {/* Stylized Map View */}
            <div className="relative rounded-3xl overflow-hidden border border-outline-variant/40 h-64 sm:h-72 bg-surface-container shadow-sm flex items-end p-4 group">
              <img
                src={clinicData.images.mapPreview}
                alt="Map rendering of 452 Mindful Way district"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />

              {/* Pin Pill */}
              <div className="relative z-10 w-full flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-level-2 border border-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-on-surface block">
                      Aura Dental Studio
                    </span>
                    <span className="text-[10px] text-outline">
                      452 Mindful Way, Suite 300
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
                >
                  <span>Directions</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
