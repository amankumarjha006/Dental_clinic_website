import React from 'react';
import { motion } from 'motion/react';
import { clinicData } from '../data/clinicData';

interface AboutPageProps {
  onBackToHome: () => void;
  onBookClick: () => void;
  onOpenSensoryMenu: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onBookClick,
  onOpenSensoryMenu,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-16 pb-20"
    >
      {/* 1. Hero & Breadcrumbs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-outline text-xs sm:text-sm font-semibold">
          <button onClick={onBackToHome} className="hover:text-primary transition-colors">
            Home
          </button>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">About &amp; Dr. Rostova</span>
        </nav>

        {/* Eyebrow & Headline Container */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-secondary-container/60 px-3.5 py-1.5 rounded-full border border-outline-variant/30 font-eyebrow inline-block">
            CLINICAL EXCELLENCE &amp; EMPATHY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-on-surface tracking-tight font-headline leading-[1.12]">
            Redefining Oral Healthcare Through Architectural Sanctuary &amp; Mindful Pacing
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-3xl leading-relaxed pt-1">
            Aura Dental Studio was founded on a singular conviction: exceptional restorative and aesthetic dentistry flourishes only when clinical mastery is paired with sensory calm and profound mutual respect.
          </p>
        </div>

        {/* Serene Clinic Interior Hero Showcase */}
        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-outline-variant/40 shadow-level-2 group mt-6">
          <img
            src={clinicData.images.pavilion}
            alt="An expansive, sunlit dental studio interior featuring high ceilings, warm natural oak wood accents, minimalist cream lime-wash walls, and ambient botanical greenery"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-on-primary">
            <div>
              <p className="text-lg font-bold font-headline">Suite 400 • The Quiet Pavilion</p>
              <p className="text-xs sm:text-sm text-surface-container-highest max-w-lg">
                Acoustically isolated procedural suites designed in collaboration with studio architects.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-semibold text-xs shadow-sm self-start sm:self-auto">
              <span className="material-symbols-outlined text-[16px]">spa</span>
              Air Purity HEPA H14 Continuous
            </span>
          </div>
        </div>
      </section>

      {/* 2. Genesis & Philosophy: The Antidote to the Clinical Conveyor-Belt */}
      <section className="bg-surface-container-low py-16 md:py-20 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative & Stat Cards */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-eyebrow">
                GENESIS &amp; ETHOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface tracking-tight font-headline">
                The Antidote to the Clinical Conveyor-Belt
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                In typical urban clinics, high overhead creates 15-minute rushed encounters, fragmented explanations, and silent patient anxiety. Dr. Elena Rostova established Aura Dental Studio to systematically dismantle that model.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Every first visit is structured as a full 60-minute collaborative dialogue. We map your complete dental history, inspect 3D scans together on high-resolution displays, and define personal comfort boundaries before a single instrument is lifted.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm">
                  <span className="text-3xl font-bold text-primary block mb-1 font-headline">60 Min</span>
                  <span className="text-sm font-bold text-on-surface block">Initial Consultation</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Unrushed diagnostic mapping and lifestyle alignment.</span>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40 shadow-sm">
                  <span className="text-3xl font-bold text-tertiary block mb-1 font-headline">Zero</span>
                  <span className="text-sm font-bold text-on-surface block">Judgment Guarantee</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Empathetic care regardless of lapse in prior treatment.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenSensoryMenu}
                  className="px-6 py-3 rounded-xl bg-surface-container hover:bg-secondary-container text-primary font-semibold text-sm transition-colors border border-outline-variant/40 inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">headphones</span>
                  <span>Explore Comfort Protocol</span>
                </button>
                <button
                  onClick={onBookClick}
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-inverse-surface text-on-primary font-semibold text-sm shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Schedule 60-Min Visit</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                </button>
              </div>
            </div>

            {/* Right 4 Key Ethos Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">hearing</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Co-Diagnosis &amp; Autonomy</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  You hold the mirror and view high-definition intraoral captures alongside us. We detail the biological 'why' and all conservative alternatives.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Synchronized Pacing</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  A simple non-verbal hand gesture pauses any procedure immediately. You retain 100% control over rhythm, rest intervals, and cadence.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Radical Transparency</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  No hidden lab surcharges or surprise billing. Written, line-item itemized treatment pathways are confirmed prior to scheduling any treatment.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Biomimetic Philosophy</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Preserving maximum natural tooth structure with modern advanced adhesive technology, minimizing invasive crown preps whenever possible.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Lead Clinician Deep-Dive: Dr. Elena Rostova */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-secondary-container/50 px-3 py-1 rounded-full border border-outline-variant/30 font-eyebrow">
            CLINICAL DIRECTOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-on-surface font-headline tracking-tight">
            Meet Dr. Elena Rostova, DDS, FAGD
          </h2>
          <p className="text-base text-on-surface-variant">
            Pioneering anxiety-informed restorative dentistry with surgical precision and human kindness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Doctor Portrait & Quote */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl overflow-hidden border border-outline-variant/40 shadow-level-2 group">
              <img
                src={clinicData.images.drElenaPortrait}
                alt="Portrait of Dr. Elena Rostova, DDS, FAGD in serene clinic surroundings"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary font-headline text-base">Dr. Elena Rostova</h4>
                    <p className="text-xs text-on-surface-variant">Clinical Director &amp; Founder, Aura Dental</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high p-6 rounded-2xl border border-outline-variant/50 relative">
              <span className="material-symbols-outlined text-surface-tint text-4xl opacity-30 absolute top-4 right-4">
                format_quote
              </span>
              <p className="text-sm sm:text-base text-on-surface italic relative z-10 leading-relaxed font-serif">
                “We believe dentistry should never feel intimidating. We explain every option thoroughly so you remain in full control of your oral health.”
              </p>
              <p className="text-xs font-bold text-primary mt-3 font-headline">— Dr. Elena Rostova</p>
            </div>
          </div>

          {/* Credentials & Clinical Focus Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            {/* Verified Credentials Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary">school</span>
                <span>Academic Foundation &amp; Honors</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
                  <span className="text-sm font-bold text-primary block">Doctor of Dental Surgery</span>
                  <span className="text-xs font-semibold text-on-surface-variant">Penn Dental Medicine</span>
                  <p className="text-xs text-outline mt-1.5 leading-relaxed">Graduated with Clinical Honors &amp; Restorative Award.</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
                  <span className="text-sm font-bold text-primary block">Fellowship Distinction</span>
                  <span className="text-xs font-semibold text-on-surface-variant">Academy of General Dentistry (FAGD)</span>
                  <p className="text-xs text-outline mt-1.5 leading-relaxed">Held by fewer than 6% of general dentists nationwide.</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
                  <span className="text-sm font-bold text-primary block">Hospital Residency</span>
                  <span className="text-xs font-semibold text-on-surface-variant">Mount Sinai Hospital, NYC</span>
                  <p className="text-xs text-outline mt-1.5 leading-relaxed">Advanced surgical and maxillofacial trauma training.</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
                  <span className="text-sm font-bold text-primary block">Specialty Certification</span>
                  <span className="text-xs font-semibold text-on-surface-variant">Anxiety-Informed Care Provider</span>
                  <p className="text-xs text-outline mt-1.5 leading-relaxed">Trained in neurological calm protocols and conscious sedation.</p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Focus Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary">award_star</span>
                <span>Specialized Clinical Pillars</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                    <span className="text-sm font-bold text-on-surface font-headline">Restorative Aesthetics</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Minimally invasive ceramic veneers, seamless tooth bonding, and lifelike composite reconstruction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">self_improvement</span>
                    <span className="text-sm font-bold text-on-surface font-headline">Anxiety Mitigation</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Comprehensive desensitization sequences, warm blankets, binaural sound, and gentle pacing for phobic patients.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">nature_people</span>
                    <span className="text-sm font-bold text-on-surface font-headline">Biomimetic Dentistry</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Treatments that emulate natural tooth flex and biomechanics, conserving virgin enamel without aggressive reduction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:bg-surface-container transition-colors shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">menu_book</span>
                    <span className="text-sm font-bold text-on-surface font-headline">Continuous Education</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Completing over 150 accredited hours annually—triple the state licensing mandate—in digital oral design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Studio Sanctuary Architecture (4-Column Feature Grid) */}
      <section className="bg-surface-container py-16 md:py-20 border-y border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-eyebrow">
              SENSORY ERGONOMICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface font-headline tracking-tight">
              The Studio Sanctuary Architecture
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Every cubic foot of Aura was intentional: engineered to quiet the nervous system and replace clinical harshness with architectural tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">air</span>
                </div>
                <h3 className="text-base font-bold text-on-surface font-headline">Medical HEPA Air Filtration</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Hospital-grade ISO-Class air scrubbers swap all clinic air 6 times per hour, removing 99.97% of particulates and airborne aerosols.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary flex items-center gap-1 pt-2 border-t border-outline-variant/30">
                Active Clean Standard
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">volume_off</span>
                </div>
                <h3 className="text-base font-bold text-on-surface font-headline">Acoustic Sound-Baffled Suites</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Architectural felt paneling and heavy double-laminated glass partitions eliminate high-frequency dental sounds and exterior street noise.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary flex items-center gap-1 pt-2 border-t border-outline-variant/30">
                Whisper Paced Suites
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">airline_seat_recline_extra</span>
                </div>
                <h3 className="text-base font-bold text-on-surface font-headline">Memory Foam Ergonomic Chairs</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Multi-density contour foam with dual lumbar support cushions relieve cervical pressure and promote total full-body relaxation.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary flex items-center gap-1 pt-2 border-t border-outline-variant/30">
                Dual Lumbar Relief
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </span>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">local_florist</span>
                </div>
                <h3 className="text-base font-bold text-on-surface font-headline">Zero Clinical Chemical Odors</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Negative pressure sterilization rooms keep pungent scents out of patient zones, accompanied by subtle organic hints of sage and bergamot.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary flex items-center gap-1 pt-2 border-t border-outline-variant/30">
                Botanical Ambient Air
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Practice Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-eyebrow">
              OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-on-surface font-headline tracking-tight">
              Guided by Non-Negotiable Core Values
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Healthcare is an act of trust. These four tenets dictate every protocol, consultation, and treatment step we perform at Aura Dental Studio.
            </p>
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                <span>Experience the difference at your consultation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-primary text-base font-bold font-headline">
                <span className="material-symbols-outlined">hourglass_empty</span>
                <h4>Mindful Pacing</h4>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We never double-book appointments. Your appointed time belongs entirely to you, allowing comprehensive care and attentive listening.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-primary text-base font-bold font-headline">
                <span className="material-symbols-outlined">visibility</span>
                <h4>Radical Price Transparency</h4>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Complete cost clarity prior to treatment. We provide detailed estimates, insurance pre-determinations, and flexible financial pathways.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-primary text-base font-bold font-headline">
                <span className="material-symbols-outlined">science</span>
                <h4>Evidence-Based Medicine</h4>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                We utilize peer-reviewed biomimetic methodologies, modern 3D digital impressions, and low-radiation cone-beam computed tomography.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-primary text-base font-bold font-headline">
                <span className="material-symbols-outlined">favorite</span>
                <h4>Total Comfort Protocol</h4>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Noise-cancelling headphones, warm lavender towels, tailored streaming media, and weighted blankets designed for restful visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Patient Testimonial Spotlight */}
      <section className="bg-surface-container-low py-16 border-y border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary-container text-primary">
            <span className="material-symbols-outlined text-3xl">rate_review</span>
          </div>
          <p className="text-xl sm:text-2xl text-on-surface font-normal italic leading-relaxed font-serif">
            “For over seven years, dental anxiety kept me from seeking help. Dr. Elena Rostova and the team at Aura changed everything. I felt respected, heard, and genuinely safe throughout my full restorative plan. It feels more like a serene retreat than a clinical office.”
          </p>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-base font-bold text-primary font-headline">Claire Montgomery, Architect</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-container-lowest text-outline text-xs font-semibold border border-outline-variant/30 shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
              Verified Patient • 18 Months in Care
            </span>
          </div>
        </div>
      </section>

      {/* 7. Consultation Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-primary-container text-on-primary rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-level-3 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container font-eyebrow">
              UNRUSHED CONSULTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-on-primary font-headline tracking-tight">
              Begin Your Journey to Calm, Confident Dental Wellness
            </h2>
            <p className="text-sm sm:text-base text-on-primary-container leading-relaxed">
              Schedule your personalized 60-minute evaluation with Dr. Elena Rostova. Experience deliberate pacing and modern architectural comfort.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onBookClick}
              className="px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-bold text-sm hover:bg-surface-bright transition-all text-center shadow-md active:scale-95 whitespace-nowrap"
            >
              Book 60-Min Appointment
            </button>
            <a
              href={`tel:${clinicData.phoneClean}`}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-on-primary text-on-primary font-semibold text-sm hover:bg-on-primary/10 transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>Call Our Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
