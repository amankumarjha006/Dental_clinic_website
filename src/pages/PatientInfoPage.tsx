import React, { useState } from 'react';
import { motion } from 'motion/react';
import { InteractiveBooking } from '../components/InteractiveBooking';
import { FAQSection } from '../components/FAQSection';

interface PatientInfoPageProps {
  onBackToHome: () => void;
  onOpenSensoryMenu: () => void;
  initialService: string;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({
  onBackToHome,
  onOpenSensoryMenu,
  initialService,
}) => {
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string>(initialService);

  const handleClaimPackage = (packageName: string) => {
    setSelectedPackageForBooking(packageName);
    const bookingSuiteEl = document.getElementById('booking-suite');
    if (bookingSuiteEl) {
      bookingSuiteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-16 pb-20"
    >
      {/* 1. Hero & Trust Badges Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 space-y-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-outline text-xs sm:text-sm font-semibold">
          <button onClick={onBackToHome} className="hover:text-primary transition-colors">
            Home
          </button>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Patient Information</span>
        </nav>

        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-secondary-container/60 px-3.5 py-1.5 rounded-full border border-outline-variant/30 font-eyebrow inline-block">
            FIRST VISIT GUIDE &amp; CLEAR PRICING
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-on-surface tracking-tight font-headline leading-[1.12]">
            Everything You Need for a Seamless, Anxiety-Free Dental Visit
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            At Aura Dental Studio, we believe healthcare should feel restorative, predictable, and devoid of surprises. From completely digital paperwork before you arrive to itemized pricing roadmaps before any treatment begins, here is what your first consultation looks like.
          </p>
        </div>

        {/* Quick Stats / Trust Badges Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-outline-variant/40">
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">timer</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-on-surface font-headline">Zero Wait Policy</div>
              <div className="text-xs text-on-surface-variant">Seated within 3 mins</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">receipt_long</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-on-surface font-headline">Upfront Pricing</div>
              <div className="text-xs text-on-surface-variant">Zero hidden line items</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">headphones</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-on-surface font-headline">Sensory Sanctuary</div>
              <div className="text-xs text-on-surface-variant">Bose audio &amp; warm towels</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-on-surface font-headline">In-Network PPO</div>
              <div className="text-xs text-on-surface-variant">Direct digital billing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-Step Patient Journey Interactive Timeline */}
      <section className="bg-surface-container-low py-16 md:py-20 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow">
                YOUR PROTOCOL
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface font-headline tracking-tight mt-1">
                The 4-Step Patient Journey
              </h2>
            </div>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
              Crafted meticulously around human nervous system ergonomics to replace clinical tension with deliberate peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary font-headline">01</span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-primary text-xs font-semibold">
                    Contactless
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Digital Pre-Checkin</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Fill out intake forms securely in 50 seconds on your own phone or tablet. Say goodbye forever to waiting room clipboards, germ-laden pens, and repetitive paperwork.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-primary text-xs font-semibold">
                <span className="material-symbols-outlined text-base">smartphone</span>
                <span>Encrypted SMS link 24h prior</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary font-headline">02</span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-primary text-xs font-semibold">
                    Diagnostics
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Unhurried 3D Imaging</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Sit eye-to-eye in a peaceful private studio. Ultra-low radiation 3D intraoral scans map your teeth in high-definition color without gooey impression trays or discomfort.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-primary text-xs font-semibold">
                <span className="material-symbols-outlined text-base">3d_rotation</span>
                <span>Instant chairside screen view</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary font-headline">03</span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-primary text-xs font-semibold">
                    Total Honesty
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Transparent Roadmap</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Receive an itemized digital treatment plan outlining urgent vs. elective steps with exact out-of-pocket costs and insurance breakdown. Zero sales pitches or surprise charges.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-primary text-xs font-semibold">
                <span className="material-symbols-outlined text-base">checklist</span>
                <span>Take-home written guarantee</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary font-headline">04</span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-primary text-xs font-semibold">
                    Wellness
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Gentle Sensory Care</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Relax in ergonomic memory foam chairs equipped with Bose noise-canceling headphones, nature projections on the ceiling, weighted blankets, and warm lavender towels.
                </p>
              </div>
              <button
                onClick={onOpenSensoryMenu}
                className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-primary text-xs font-semibold hover:underline w-full text-left"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">nature_people</span>
                  <span>Personalized comfort menu</span>
                </span>
                <span className="material-symbols-outlined text-[14px]">tune</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What to Bring to Your First Visit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow">
            PREPARATION CHECKLIST
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface font-headline tracking-tight">
            What to Bring to Your First Visit
          </h2>
          <p className="text-base text-on-surface-variant">
            We keep administrative requirements lean so you can focus entirely on unwinding. Simply bring these three items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm flex flex-col items-start hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-2xl">badge</span>
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Government Photo ID</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              A valid state Driver's License, Real ID, or Passport to safely establish and protect your medical records and digital identity.
            </p>
            <span className="inline-flex items-center text-primary text-xs font-semibold mt-auto pt-4 border-t border-outline-variant/20 w-full">
              <span className="material-symbols-outlined text-sm mr-1.5">check_circle</span>
              Digital photo upload accepted in pre-checkin
            </span>
          </div>

          {/* Item 2 */}
          <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm flex flex-col items-start hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-2xl">credit_card</span>
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Dental Insurance Card</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              If utilizing employer or private PPO dental benefits, bring your physical or digital policy card for instant automated claim verification.
            </p>
            <span className="inline-flex items-center text-primary text-xs font-semibold mt-auto pt-4 border-t border-outline-variant/20 w-full">
              <span className="material-symbols-outlined text-sm mr-1.5">check_circle</span>
              Or membership details if enrolled directly
            </span>
          </div>

          {/* Item 3 */}
          <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm flex flex-col items-start hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-2xl">medication</span>
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">Medication &amp; Health History</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              A current list of prescriptions, regular supplements, known allergies, or heart conditions so we can formulate the safest possible clinical care protocol.
            </p>
            <span className="inline-flex items-center text-primary text-xs font-semibold mt-auto pt-4 border-t border-outline-variant/20 w-full">
              <span className="material-symbols-outlined text-sm mr-1.5">check_circle</span>
              Can be synced directly in digital portal
            </span>
          </div>
        </div>
      </section>

      {/* 4. Financial Clarity & Transparent Fees Section (Bento Grid) */}
      <section className="bg-surface-container-low py-16 md:py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow">
              RADICAL TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface font-headline tracking-tight">
              Financial Clarity &amp; Transparent Fees
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              No unexpected invoices in your mailbox. We clarify costs upfront so you can make informed decisions in complete tranquility.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* First Consultation Package (5 Cols) */}
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-secondary-container text-primary font-semibold text-xs mb-4">
                  New Patient Offer
                </div>
                <h3 className="text-2xl font-bold text-on-surface font-headline">
                  Comprehensive First Consultation
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                  Complete oral health assessment, cancer screening, panoramic low-dose X-rays, 3D intraoral imaging, and dedicated physician discussion.
                </p>
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-outline-variant/40">
                  <span className="text-4xl sm:text-5xl font-bold text-primary font-headline">$185</span>
                  <span className="text-sm text-on-surface-variant">flat fee or</span>
                  <span className="text-2xl font-bold text-secondary font-headline">$0</span>
                  <span className="text-xs text-on-surface-variant">with most PPO plans</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-on-surface mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check</span>
                    <span>Full mouth comprehensive digital X-rays</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check</span>
                    <span>High-definition 3D restorative scan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check</span>
                    <span>Periodontal gum health scoring</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check</span>
                    <span>1-on-1 consultation with Dr. Elena Rostova</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleClaimPackage('Comprehensive New Patient Exam & Cleaning')}
                className="w-full text-center py-3.5 px-4 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-surface-tint transition-colors shadow-sm"
              >
                Claim New Patient Package
              </button>
            </div>

            {/* PPO Concierge & Aura Wellness Membership (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* In-Network PPO Concierge */}
              <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/60 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-on-surface font-headline">
                    In-Network PPO &amp; Claims Concierge
                  </h3>
                  <span className="flex items-center text-primary text-xs font-semibold gap-1">
                    <span className="material-symbols-outlined text-base">handshake</span>
                    <span>Direct Assignment</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  We verify coverage limits prior to your appointment and file all insurance documentation on your behalf, maximizing your allowable annual benefits without tedious claims paperwork.
                </p>
                {/* Insurance Provider Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    Delta Dental
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    Cigna PPO
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    MetLife Dental
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    Aetna Health
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    Guardian Dental
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant border border-outline-variant/30">
                    BlueCross BlueShield
                  </div>
                </div>
              </div>

              {/* Uninsured Patients: Aura Wellness Membership */}
              <div className="bg-primary text-on-primary rounded-3xl p-8 border border-surface-tint shadow-sm relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-inverse-primary">health_and_safety</span>
                      <span className="text-xs font-bold uppercase text-inverse-primary tracking-wider font-eyebrow">
                        No Insurance? No Problem.
                      </span>
                    </div>
                    <span className="px-3 py-0.5 rounded-full bg-surface-tint text-on-primary text-xs font-semibold">
                      In-House Plan
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-on-primary font-headline">
                        Aura Wellness Membership
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-fixed mt-1 max-w-md">
                        Comprehensive preventive dental care without deductibles, waiting periods, or claim denials.
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <div className="text-3xl font-bold text-inverse-primary font-headline">
                        $34<span className="text-xs font-normal text-secondary-fixed">/month</span>
                      </div>
                      <span className="text-xs text-secondary-fixed">or $380 billed annually</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-primary-container text-xs text-on-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-inverse-primary text-base">task_alt</span>
                      <span>2 Cleanings &amp; Exams / Year</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-inverse-primary text-base">task_alt</span>
                      <span>Unlimited Digital X-Rays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-inverse-primary text-base">task_alt</span>
                      <span>15% Off All Treatments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Main Interactive Booking Suite */}
      <div id="booking-suite">
        <InteractiveBooking initialService={selectedPackageForBooking} />
      </div>

      {/* 6. Embedded FAQ */}
      <FAQSection />
    </motion.div>
  );
};
