import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TreatmentsSection } from '../components/TreatmentsSection';

interface TreatmentsPageProps {
  onBackToHome: () => void;
  onSelectTreatmentForBooking: (title: string) => void;
  onBookClick: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onBackToHome,
  onSelectTreatmentForBooking,
  onBookClick,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes 'Biomimetic' dentistry fundamentally different from conventional fillings?",
      a: "Conventional dental restorations often grind away substantial amounts of healthy tooth structure to create mechanical retention locks for rigid amalgam or large crowns. Biomimetic dentistry mimics nature: we use ultra-fine adhesive micro-layering and stress-reduced composite formulations that expand, flex, and seal exactly like natural dentin and enamel, preserving up to 80% more of your natural tooth and preventing catastrophic structural fractures."
    },
    {
      q: "How does the Wand® computerized anesthesia system work?",
      a: "The Wand® replaces the traditional, frightening metallic syringe with an ergonomic, featherlight pen-like handpiece. A microprocessor regulates the flow rate and pressure of the anesthetic at the cellular absorption rate—below the human pain threshold. Because the flow creates a pathway of numbness ahead of the needle tip, 98% of patients report feeling absolutely no sting or pressure sensation whatsoever."
    },
    {
      q: "Do you accept my dental insurance, and what if I am out-of-network?",
      a: "We are an out-of-network direct provider for most PPO plans, which allows Dr. Rostova to dedicate genuine 60-to-90 minute appointments rather than rushing patients through high-volume quotas. Our patient concierges process all primary insurance claims on your behalf, maximizing your reimbursement checks sent directly to your home. We also provide full HSA / FSA documentation and interest-free split payment plans."
    },
    {
      q: "How long do porcelain veneers and ceramic restorations typically endure?",
      a: "When bonded exclusively to natural enamel using our biomimetic isolation protocols, layered feldspathic and lithium disilicate (e.max) veneers routinely demonstrate exceptional longevity exceeding 15 to 20 years. Each case includes a custom-fitted nightguard to cushion against involuntary clenching, backed by our 5-year studio restoration guarantee."
    },
    {
      q: "I have extreme dental phobia and haven't visited in years. What is my first visit like?",
      a: "You are completely safe here. First visits for nervous patients involve zero scraping, zero treatment surprises, and zero guilt. You will sit comfortably in a quiet consultation suite, sip herbal tea, and review non-invasive 3D digital imaging at your pace. You have total agency: you can pause any examination at any second simply by raising a hand."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-outline text-xs sm:text-sm font-semibold mb-6">
          <button onClick={onBackToHome} className="hover:text-primary transition-colors">
            Home
          </button>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Treatments &amp; Services</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-3">
              EVIDENCE-BASED RESTORATIVE &amp; AESTHETIC CARE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-on-surface tracking-tight font-headline leading-[1.12]">
              Dental Treatments Designed Around Comfort, Longevity &amp; Biology
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-base text-on-surface-variant leading-relaxed">
              We reject fear-driven dentistry and cold clinical sterility. Every procedure integrates minimally invasive biomimetic protocols, zero-pain computerized anesthesia, and upfront fee transparency.
            </p>
          </div>
        </div>

        {/* Quick Trust Indicators Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-surface-container-lowest border border-outline-variant/40 rounded-3xl shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified</span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface font-headline">Biomimetic Philosophy</div>
              <div className="text-xs text-outline">Conserving natural tooth enamel</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">syringe</span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface font-headline">The Wand® Anesthesia</div>
              <div className="text-xs text-outline">Painless computerized delivery</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">spa</span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface font-headline">Sensory Comfort Suites</div>
              <div className="text-xs text-outline">Acoustic dampening & calm visual lines</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface font-headline">Transparent Upfront Fees</div>
              <div className="text-xs text-outline">Zero hidden procedural surcharges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Treatments Grid */}
      <TreatmentsSection onSelectTreatmentForBooking={onSelectTreatmentForBooking} />

      {/* The Sensory & Technology Difference (Editorial Comparison Section) */}
      <section className="bg-surface-container-low py-16 md:py-24 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 font-eyebrow">
              CLINICAL EXCELLENCE IN REPOSE
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface tracking-tight font-headline mb-3">
              The Sensory &amp; Technology Difference
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Traditional dental clinics often overwhelm senses with shrill drills, cold metallic odors, and intimidating syringes. We engineered an architectural sanctuary around biology and nervous system calm.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-outline-variant/30 bg-surface-container-high/40 text-on-surface text-sm font-semibold">
              <div className="p-6 md:col-span-4 text-primary">Sensory / Clinical Dimension</div>
              <div className="p-6 md:col-span-4 text-outline border-t md:border-t-0 md:border-l border-outline-variant/30">Conventional Dental Clinic</div>
              <div className="p-6 md:col-span-4 text-primary border-t md:border-t-0 md:border-l border-outline-variant/30 bg-surface-container-low/60 flex items-center space-x-1.5">
                <span className="material-symbols-outlined text-primary text-base">verified</span>
                <span>The Aura Studio Standard</span>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-outline-variant/20 hover:bg-surface/50 transition-colors">
              <div className="p-6 md:col-span-4 flex items-center space-x-3.5">
                <span className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg">syringe</span>
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface font-headline">Local Numbing Protocol</div>
                  <div className="text-outline text-xs">Pain perception during injection</div>
                </div>
              </div>
              <div className="p-6 md:col-span-4 text-sm text-on-surface-variant border-t md:border-t-0 md:border-l border-outline-variant/20 flex items-center leading-relaxed">
                Manual high-pressure syringe needle causing painful tissue distension and residual lip numbness for 4+ hours.
              </div>
              <div className="p-6 md:col-span-4 text-sm text-primary font-medium border-t md:border-t-0 md:border-l border-outline-variant/20 bg-surface-container-low/30 flex items-center leading-relaxed">
                The Wand® computer-controlled local delivery beneath pain-receptor thresholds. Pinpoint tooth numbness without facial paralysis.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-outline-variant/20 hover:bg-surface/50 transition-colors">
              <div className="p-6 md:col-span-4 flex items-center space-x-3.5">
                <span className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg">3d_rotation</span>
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface font-headline">Impression Taking</div>
                  <div className="text-outline text-xs">Restoration accuracy &amp; comfort</div>
                </div>
              </div>
              <div className="p-6 md:col-span-4 text-sm text-on-surface-variant border-t md:border-t-0 md:border-l border-outline-variant/20 flex items-center leading-relaxed">
                Uncomfortable chemical goop trays triggering the pharyngeal gag reflex with potential structural dimensional distortion.
              </div>
              <div className="p-6 md:col-span-4 text-sm text-primary font-medium border-t md:border-t-0 md:border-l border-outline-variant/20 bg-surface-container-low/30 flex items-center leading-relaxed">
                Non-invasive 3D optical video wand capturing 6,000 sub-millimeter frames per second with instant color accuracy.
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-outline-variant/20 hover:bg-surface/50 transition-colors">
              <div className="p-6 md:col-span-4 flex items-center space-x-3.5">
                <span className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg">headphones</span>
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface font-headline">Auditory &amp; Ambient Setting</div>
                  <div className="text-outline text-xs">Acoustic stress management</div>
                </div>
              </div>
              <div className="p-6 md:col-span-4 text-sm text-on-surface-variant border-t md:border-t-0 md:border-l border-outline-variant/20 flex items-center leading-relaxed">
                Shrill high-pitched air turbines echoing off cold linoleum and bright, blinding fluorescent surgical overhead spotlights.
              </div>
              <div className="p-6 md:col-span-4 text-sm text-primary font-medium border-t md:border-t-0 md:border-l border-outline-variant/20 bg-surface-container-low/30 flex items-center leading-relaxed">
                Bose QuietComfort® noise-canceling headsets, whisper-quiet electric speed-increasing handpieces, and circadian daylight therapy.
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 hover:bg-surface/50 transition-colors">
              <div className="p-6 md:col-span-4 flex items-center space-x-3.5">
                <span className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg">receipt_long</span>
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface font-headline">Financial Transparency</div>
                  <div className="text-outline text-xs">Clarity of estimates &amp; billing</div>
                </div>
              </div>
              <div className="p-6 md:col-span-4 text-sm text-on-surface-variant border-t md:border-t-0 md:border-l border-outline-variant/20 flex items-center leading-relaxed">
                Confusing billing codes mailed weeks later with surprise diagnostic add-on facility fees and disputed coverage.
              </div>
              <div className="p-6 md:col-span-4 text-sm text-primary font-medium border-t md:border-t-0 md:border-l border-outline-variant/20 bg-surface-container-low/30 flex items-center leading-relaxed">
                Written itemized plan before any treatment begins. Real-time digital insurance pre-authorization with 0% interest monthly terms.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itemized Price & Warranty Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow block mb-1">
              FINANCIAL PEACE OF MIND
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface font-headline">
              Our 100% Upfront Fee Commitment
            </h3>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              We never perform any procedure without handing you an itemized printed estimate and discussing your options together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">
                credit_score
              </span>
              <h4 className="text-base font-bold text-on-surface mb-1 font-headline">
                0% APR Monthly Plans
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Flexible installment schedules via CareCredit and Cherry, splitting procedures into manageable monthly terms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">
                health_and_safety
              </span>
              <h4 className="text-base font-bold text-on-surface mb-1 font-headline">
                Direct PPO Claims Filing
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our billing specialists submit all electronic dental claims on your behalf to maximize your reimbursement directly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">
                verified_user
              </span>
              <h4 className="text-base font-bold text-on-surface mb-1 font-headline">
                Craftsmanship Warranties
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Restorative implants and cosmetic porcelain crowns backed by written structural warranties when maintained with regular hygiene.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 font-eyebrow">
            CLINICAL TRANSPARENCY
          </p>
          <h2 className="text-3xl font-semibold text-on-surface tracking-tight font-headline mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-on-surface-variant">
            Clear answers regarding appointments, insurance coordination, and biological treatment longevity.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-semibold text-base sm:text-lg text-on-surface gap-4"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing High-Contrast CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative bg-primary text-on-primary rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-surface-container-low/20 text-primary-fixed rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                NEW PATIENT CONSULTATIONS OPEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-primary mb-4 font-headline">
                Begin Your Restorative Journey in Quiet Comfort
              </h2>
              <p className="text-base text-on-primary-container max-w-2xl mb-6 leading-relaxed">
                Experience oral healthcare without intimidation. Meet Dr. Elena Rostova and discover personalized biological treatments designed for lifelong health and natural aesthetic harmony.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-on-primary-container text-xs sm:text-sm font-medium">
                <span className="flex items-center space-x-1.5">
                  <span className="material-symbols-outlined text-primary-fixed text-base">check_circle</span>
                  <span>Direct consultation with Dr. Rostova</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="material-symbols-outlined text-primary-fixed text-base">check_circle</span>
                  <span>Zero obligation comprehensive 3D scan</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="material-symbols-outlined text-primary-fixed text-base">check_circle</span>
                  <span>Sensory comfort suite preferences logged</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3.5">
              <button
                onClick={onBookClick}
                className="w-full bg-primary-fixed hover:bg-on-primary text-on-primary-fixed hover:text-primary px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 text-center shadow-lg hover:shadow-xl"
              >
                Book Initial Consultation
              </button>
              <a
                href="tel:5552345678"
                className="w-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary border border-surface-container-lowest/30 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 text-center flex items-center justify-center space-x-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Speak with a Patient Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
