import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SensoryPreferences } from '../types';

interface SensoryComfortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToBooking?: (preferences: SensoryPreferences) => void;
}

export const SensoryComfortModal: React.FC<SensoryComfortModalProps> = ({
  isOpen,
  onClose,
  onApplyToBooking,
}) => {
  const [prefs, setPrefs] = useState<SensoryPreferences>({
    noiseCanceling: true,
    weightedBlanket: true,
    aromatherapy: true,
    handStopSignal: true,
    pacedExplanation: true,
    dimLighting: false,
  });

  const [soundscapePlaying, setSoundscapePlaying] = useState<boolean>(false);

  const togglePref = (key: keyof SensoryPreferences) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = Object.values(prefs).filter(Boolean).length;

  const handleSave = () => {
    if (onApplyToBooking) {
      onApplyToBooking(prefs);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/60 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">spa</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider font-eyebrow">
                CUSTOMIZABLE WELLNESS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline">
                Sensory &amp; Anxiety Comfort Protocol
              </h3>
            </div>
          </div>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            We believe your nervous system deserves as much care as your teeth. Customize your sensory environment before your visit—our team prepares your acoustic suite according to your exact preferences.
          </p>

          {/* Soundscape Preview Banner */}
          <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/40 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[22px]">
                {soundscapePlaying ? 'volume_up' : 'graphic_eq'}
              </span>
              <div>
                <span className="text-xs font-bold text-primary block">
                  Studio Acoustic Soundscape
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  {soundscapePlaying ? 'Playing: Japanese Pine Garden (Simulated)' : 'Soft ocean rain & meditative binaural drone'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSoundscapePlaying(!soundscapePlaying)}
              className="px-3 py-1.5 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-inverse-surface transition-colors"
            >
              {soundscapePlaying ? 'Mute' : 'Listen Preview'}
            </button>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 mb-6">
            {[
              {
                key: 'noiseCanceling',
                title: 'Bose® Acoustic Noise-Canceling Headset',
                desc: 'Active acoustic isolation paired with patient-curated soundscapes or Spotify.',
                icon: 'headphones',
              },
              {
                key: 'weightedBlanket',
                title: '12lb Organic Linen Weighted Blanket',
                desc: 'Gentle, therapeutic deep-pressure stimulation to relax muscular tension.',
                icon: 'bedtime',
              },
              {
                key: 'handStopSignal',
                title: 'Unconditional Hand-Stop Protocol',
                desc: 'Raise your left hand at any moment. Dr. Elena will pause instantly, without hesitation.',
                icon: 'front_hand',
              },
              {
                key: 'pacedExplanation',
                title: 'Paced Step-by-Step Transparency',
                desc: 'Receive clear, gentle walkthroughs before each instrument or sensation begins.',
                icon: 'record_voice_over',
              },
              {
                key: 'aromatherapy',
                title: 'Botanical Lavender & Bergamot Diffusion',
                desc: 'Eliminates traditional clinical odors in favor of organic botanical terpenes.',
                icon: 'psychology',
              },
              {
                key: 'dimLighting',
                title: 'Dimmed Warm Lighting & Heated Silk Eye Pillow',
                desc: 'Reduces visual glare and relaxes eyelid muscles during care.',
                icon: 'dark_mode',
              },
            ].map((item) => {
              const isChecked = (prefs as any)[item.key];
              return (
                <div
                  key={item.key}
                  onClick={() => togglePref(item.key as any)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-surface-container-low border-primary shadow-sm ring-1 ring-primary/30'
                      : 'bg-surface-container-lowest border-outline-variant/40 hover:border-outline-variant'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isChecked ? 'bg-primary text-on-primary' : 'bg-surface-container text-outline'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-on-surface block">
                      {item.title}
                    </span>
                    <span className="text-xs text-on-surface-variant block mt-0.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs mt-1 shrink-0 ${
                      isChecked
                        ? 'bg-primary border-primary text-white font-bold'
                        : 'border-outline-variant'
                    }`}
                  >
                    {isChecked && '✓'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
            <span className="text-xs text-outline font-semibold">
              {activeCount} of 6 accommodations active
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-outline hover:text-on-surface"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-colors"
              >
                Save to My Booking
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
