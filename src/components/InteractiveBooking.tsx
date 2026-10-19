import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingFormData, SensoryPreferences } from '../types';
import { clinicData } from '../data/clinicData';

interface InteractiveBookingProps {
  initialService?: string;
  onBookingSuccess?: () => void;
}

export const InteractiveBooking: React.FC<InteractiveBookingProps> = ({
  initialService = 'Comprehensive New Patient Exam & Cleaning',
  onBookingSuccess,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    preferredDate: '',
    preferredTime: 'Morning (8a–12p)',
    sensoryAnxietyProtocol: true,
    notes: '',
    sensoryPreferences: {
      noiseCanceling: true,
      weightedBlanket: true,
      aromatherapy: false,
      handStopSignal: true,
      pacedExplanation: true,
      dimLighting: false,
    },
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  const servicesList = [
    'Comprehensive New Patient Exam & Cleaning',
    'Clear Aligners / Orthodontic Consultation',
    'Cosmetic Porcelain Veneers',
    'Dental Implant Consultation',
    'Toothache / Urgent Dental Evaluation',
    'Routine Hygiene & Remineralization',
    'Second Opinion / Diagnostic Review',
  ];

  const handleSensoryToggle = (key: keyof SensoryPreferences) => {
    setFormData((prev) => ({
      ...prev,
      sensoryPreferences: {
        ...prev.sensoryPreferences,
        [key]: !prev.sensoryPreferences[key],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill out all required contact fields.');
      return;
    }

    const refCode = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingReference(refCode);
    setIsSubmitted(true);
    if (onBookingSuccess) onBookingSuccess();
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setActiveStep(1);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Comprehensive New Patient Exam & Cleaning',
      preferredDate: '',
      preferredTime: 'Morning (8a–12p)',
      sensoryAnxietyProtocol: true,
      notes: '',
      sensoryPreferences: {
        noiseCanceling: true,
        weightedBlanket: true,
        aromatherapy: false,
        handStopSignal: true,
        pacedExplanation: true,
        dimLighting: false,
      },
    });
  };

  return (
    <section id="book-section" className="py-20 md:py-28 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-2">
            RESERVE A CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface tracking-tight font-headline">
            Begin Your Restorative Journey
          </h2>
          <p className="text-base text-on-surface-variant mt-2">
            Select your preferred visit details below. Our concierge team confirms appointments within 4 business hours.
          </p>
        </div>

        {/* Booking Container */}
        <div className="max-w-4xl mx-auto bg-surface-container-low p-6 sm:p-10 rounded-3xl border border-outline-variant/40 shadow-level-2">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Step Indicators */}
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-6">
                  {[
                    { step: 1, label: '1. Care Reason' },
                    { step: 2, label: '2. Date & Time' },
                    { step: 3, label: '3. Sensory Menu' },
                    { step: 4, label: '4. Contact Info' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.step}
                      onClick={() => setActiveStep(s.step)}
                      className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                        activeStep === s.step
                          ? 'text-primary'
                          : activeStep > s.step
                          ? 'text-primary/70'
                          : 'text-outline hover:text-on-surface'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          activeStep === s.step
                            ? 'bg-primary text-on-primary'
                            : activeStep > s.step
                            ? 'bg-secondary-container text-primary'
                            : 'bg-surface-container text-outline'
                        }`}
                      >
                        {activeStep > s.step ? '✓' : s.step}
                      </span>
                      <span className="hidden md:inline">{s.label}</span>
                    </button>
                  ))}
                </div>

                {/* STEP 1: SERVICE */}
                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <label className="block text-sm font-bold text-on-surface">
                      Select Primary Reason for Consultation *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesList.map((srv) => {
                        const isSelected = formData.service === srv;
                        return (
                          <div
                            key={srv}
                            onClick={() => setFormData({ ...formData, service: srv })}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-surface-container-lowest border-primary shadow-sm ring-1 ring-primary'
                                : 'bg-surface-container-lowest border-outline-variant/50 hover:border-outline-variant'
                            }`}
                          >
                            <span className="text-sm font-semibold text-on-surface">
                              {srv}
                            </span>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected
                                  ? 'border-primary bg-primary text-white text-[10px]'
                                  : 'border-outline-variant'
                              }`}
                            >
                              {isSelected && '✓'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Continue to Schedule</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DATE & TIME */}
                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        Preferred Visit Date *
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        required
                        className="w-full sm:w-72 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        Preferred Window of Day
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          'Morning (8a–12p)',
                          'Afternoon (12p–4p)',
                          'Evening (4p–7p)',
                        ].map((timeWindow) => {
                          const isSelected = formData.preferredTime === timeWindow;
                          return (
                            <label
                              key={timeWindow}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  preferredTime: timeWindow as any,
                                })
                              }
                              className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                                isSelected
                                  ? 'bg-surface-container-lowest border-primary ring-1 ring-primary text-primary font-bold shadow-sm'
                                  : 'bg-surface-container-lowest border-outline-variant/60 text-on-surface hover:border-primary'
                              }`}
                            >
                              <input
                                type="radio"
                                name="time_window"
                                checked={isSelected}
                                onChange={() => {}}
                                className="text-primary focus:ring-primary"
                              />
                              <span>{timeWindow}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="text-outline hover:text-primary font-semibold text-sm px-4 py-2"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Personalize Comfort</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SENSORY PROTOCOL */}
                {activeStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-base font-bold text-on-surface mb-1 font-headline">
                        Sensory Accommodations Menu
                      </h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant">
                        Every patient has full control over their sensory environment. Toggle whatever helps you feel grounded:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        {
                          key: 'noiseCanceling',
                          title: 'Bose Noise-Canceling Headphones',
                          desc: 'Streaming ambient soundscapes or playlist of your choice',
                          icon: 'headphones',
                        },
                        {
                          key: 'weightedBlanket',
                          title: 'Weighted Linen Blanket',
                          desc: 'Organic 12lb deep-pressure grounding touch',
                          icon: 'bedtime',
                        },
                        {
                          key: 'handStopSignal',
                          title: 'Explicit Hand-Stop Protocol',
                          desc: 'Raise left hand to immediately pause anytime, no questions',
                          icon: 'front_hand',
                        },
                        {
                          key: 'pacedExplanation',
                          title: 'Paced Step-by-Step Explanations',
                          desc: 'Walk through every action before touching any instrument',
                          icon: 'record_voice_over',
                        },
                        {
                          key: 'aromatherapy',
                          title: 'Calming Botanical Aromatherapy',
                          desc: 'Mild lavender or bergamot essential oils (no clinical smell)',
                          icon: 'spa',
                        },
                        {
                          key: 'dimLighting',
                          title: 'Dimmed Ambient Lighting',
                          desc: 'Soft warm indirect lighting with warm eye masks',
                          icon: 'lightbulb',
                        },
                      ].map((item) => {
                        const checked = (formData.sensoryPreferences as any)[item.key];
                        return (
                          <div
                            key={item.key}
                            onClick={() => handleSensoryToggle(item.key as any)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                              checked
                                ? 'bg-surface-container-lowest border-primary shadow-sm ring-1 ring-primary'
                                : 'bg-surface-container-lowest border-outline-variant/40 hover:border-outline-variant'
                            }`}
                          >
                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                              {item.icon}
                            </span>
                            <div className="flex-1">
                              <span className="text-sm font-bold text-on-surface block">
                                {item.title}
                              </span>
                              <span className="text-xs text-on-surface-variant block mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                            <span
                              className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs mt-0.5 ${
                                checked
                                  ? 'bg-primary border-primary text-white'
                                  : 'border-outline-variant'
                              }`}
                            >
                              {checked && '✓'}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="text-outline hover:text-primary font-semibold text-sm px-4 py-2"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(4)}
                        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Final Step: Contact Details</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT & SUBMIT */}
                {activeStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1">
                          Phone Number (SMS Confirmation) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1">
                          Selected Treatment
                        </label>
                        <div className="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl px-4 py-3 text-sm text-primary font-semibold">
                          {formData.service}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-1">
                        Any specific concerns or previous dental sensitivities? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us anything that will make you feel more comfortable..."
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/50 text-xs text-on-surface-variant flex items-center justify-between">
                      <div>
                        <span className="font-bold text-primary block">
                          Reservation Window: {formData.preferredTime}
                        </span>
                        <span>Date: {formData.preferredDate || 'Earliest available opening'}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        Sensory Protocol Active
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="text-outline hover:text-primary font-semibold text-sm px-4 py-2"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-primary hover:bg-inverse-surface text-on-primary px-8 py-3.5 rounded-xl font-bold text-sm shadow-level-2 transition-all flex items-center gap-2"
                      >
                        <span>Confirm Appointment Request</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-outline pt-2">
                      🔒 HIPAA Compliant &amp; Private. We will never share or distribute your contact details.
                    </p>
                  </motion.div>
                )}
              </motion.form>
            ) : (
              /* SUCCESS CONFIRMATION STATE */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-container text-primary flex items-center justify-center mx-auto shadow-level-2">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-surface-container text-primary font-bold text-xs">
                    REFERENCE: {bookingReference}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-on-surface font-headline">
                    Consultation Request Reserved!
                  </h3>
                  <p className="text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto">
                    Thank you, <strong className="text-primary">{formData.fullName}</strong>. Our clinical concierge team has logged your appointment and comfort preferences. We will reach you at{' '}
                    <strong className="text-on-surface">{formData.phone}</strong> within 4 business hours to lock in your exact time.
                  </p>
                </div>

                {/* Details Breakdown */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 text-left space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-outline font-medium">Service</span>
                    <span className="font-bold text-on-surface">{formData.service}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-outline font-medium">Preferred Window</span>
                    <span className="font-semibold text-primary">{formData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-outline font-medium">Date</span>
                    <span className="font-medium text-on-surface">{formData.preferredDate || 'First available'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-outline font-medium">Sensory Accommodations</span>
                    <span className="font-bold text-primary">Custom Profile Saved</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-outline-variant text-sm font-semibold text-primary hover:bg-surface-container transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`tel:${clinicData.phoneClean}`}
                    className="px-6 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>Direct Concierge: {clinicData.phone}</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
