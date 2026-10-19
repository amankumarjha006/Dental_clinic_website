import React, { useState } from 'react';

interface ContactPageProps {
  onBackToHome?: () => void;
  onBookClick?: () => void;
  onOpenBooking?: () => void;
  onOpenComfort?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen">
      {/* Top Announcement Strip */}
      <aside className="bg-surface-container text-on-surface-variant border-b border-outline-variant/30 py-2.5 px-4 md:px-margin text-center text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-on-surface font-medium">Emergency clinical duty active</span>
            <span className="text-outline">|</span>
            <span className="text-on-surface-variant">Average triage response time under 15 minutes</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:flex items-center space-x-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary" data-icon="location_on">location_on</span>
              <span>Metro City Sanctuary Suite 300</span>
            </span>
            <a className="text-primary font-semibold hover:underline flex items-center space-x-1" href="tel:5552345678">
              <span className="material-symbols-outlined text-[16px]" data-icon="call">call</span>
              <span>(555) 234-5678</span>
            </a>
          </div>
        </div>
      </aside>

      <main className="max-w-7xl mx-auto px-4 md:px-gutter py-8 md:py-12 space-y-12">
        {/* Priority Emergency Care Banner */}
        <section className="rounded-2xl border border-tertiary-fixed/60 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-bright p-6 md:p-8 relative overflow-hidden shadow-sm">
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-secondary-container/40 blur-2xl pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-error-container text-on-error-container font-semibold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]" data-icon="emergency">emergency</span>
                <span>Urgent Dental Care & Trauma Protocol</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-headline-md font-bold text-on-surface tracking-tight">
                Experiencing severe tooth pain, accidental fracture, or acute trauma?
              </h1>
              <p className="text-on-surface-variant text-base leading-relaxed">
                We reserve dedicated clinical emergency slots every morning and afternoon. Walk-in triage prioritized; immediate stabilization provided by on-duty specialists.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3 shrink-0">
              <a
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary-container transition-all duration-200 shadow-sm"
                href="tel:5552345678"
              >
                <span className="material-symbols-outlined text-[20px]" data-icon="phone_in_talk">phone_in_talk</span>
                <span>(555) 234-5678</span>
              </a>
              <a
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-primary font-semibold hover:bg-surface-container-low transition-colors duration-200 shadow-sm"
                href="https://wa.me/15552345678"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-primary" data-icon="chat">chat</span>
                <span>WhatsApp Triage (15m response)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Two-Column Layout: Operations & Records/Direct Inquiry */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Clinic Schedule & Access (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Operating Hours Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-outline-variant/30 gap-3">
                <div>
                  <span className="text-xs uppercase text-primary font-bold tracking-widest block mb-1">Weekly Cadence</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Studio Operating Hours</h2>
                </div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>Open Today Until 7:00 PM</span>
                </div>
              </div>
              <div className="divide-y divide-outline-variant/20 mt-4 text-sm md:text-base">
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-on-surface">Monday – Thursday</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">Standard</span>
                  </div>
                  <span className="text-on-surface-variant font-medium">7:30 AM – 7:00 PM</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-on-surface">Friday</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">Standard</span>
                  </div>
                  <span className="text-on-surface-variant font-medium">8:00 AM – 5:00 PM</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-on-surface">Saturday</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary-container/50 text-secondary font-medium">By Appointment</span>
                  </div>
                  <span className="text-on-surface-variant font-medium">9:00 AM – 3:00 PM</span>
                </div>
                <div className="py-3.5 flex items-center justify-between bg-surface-container-low/50 px-3.5 rounded-lg mt-2">
                  <div className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-primary text-[18px]" data-icon="support_agent">support_agent</span>
                    <span className="font-semibold text-primary">Sunday</span>
                  </div>
                  <span className="text-primary font-medium text-xs md:text-sm">Emergency On-Call Duty (8:00 AM – 8:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Location Specs & Transport Access */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase text-primary font-bold tracking-widest block mb-1">Architectural Sanctuary</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Location & Arrival Access</h2>
                </div>
                <span className="material-symbols-outlined text-secondary text-2xl" data-icon="domain">domain</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Physical Address */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
                    <span className="material-symbols-outlined text-[18px]" data-icon="pin_drop">pin_drop</span>
                    <span>Studio Address</span>
                  </div>
                  <p className="text-on-surface font-medium text-sm md:text-base leading-snug">
                    452 Mindful Way, Suite 300<br />
                    Metro City, MC 98210
                  </p>
                  <p className="text-xs text-on-surface-variant">Elevator tower B, 3rd Floor Private Lobby</p>
                </div>

                {/* Parking Structure */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
                    <span className="material-symbols-outlined text-[18px]" data-icon="local_parking">local_parking</span>
                    <span>Covered Parking</span>
                  </div>
                  <p className="text-on-surface font-medium text-sm md:text-base leading-snug">
                    P1 & P2 Sub-Level Structure
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Full 2-hour complimentary validation provided at reception for all visits.
                  </p>
                </div>
              </div>

              {/* Public Transit Spec */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-surface-container border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 shrink-0" data-icon="directions_subway">directions_subway</span>
                <div>
                  <h3 className="font-semibold text-sm text-on-surface">Transit Hub Proximity</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                    Situated precisely 1.5 blocks east from Central Metro Transit Hub (Red & Blue Line platforms). ADA accessible ramps connect seamlessly to our street-level entrance.
                  </p>
                </div>
              </div>

              {/* Map Preview Card */}
              <div className="rounded-xl overflow-hidden border border-outline-variant/40 relative">
                <img
                  className="w-full h-56 object-cover"
                  alt="Aura Dental Studio map rendering and arrival pavilion on Mindful Way"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD26i6Q1AXCU5RvHJJnM4Q3W-UZ9JK4rHiIar6LhOKO3DgAk6XEbQdwfW9_dWaAa991O2SpnpuZSg0K_qi8sQ9BphXBa2rQJoxNfwKu-dvpd7yOjLo5tAvvJuUyli5o9QFsxMZW0oHNX5aQA3lVNqo1a4ot0z-zcJ8jTuqxhWoGLCcbVQ5JJDcmRTkWWUcj9MlRxmIA55Pea26rPuq0GphoqtoNNSjJcJg9WXbYWsXYhfTTVBn3HvME"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent flex items-end p-4">
                  <a
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-primary font-semibold text-sm hover:bg-surface-container-high transition-all duration-150 shadow-md"
                    href="https://maps.google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]" data-icon="directions">directions</span>
                    <span>Get Driving Directions via Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Inquiries & Records Transfer Form (5 Cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm lg:sticky lg:top-28">
            <div>
              <span className="text-xs uppercase text-primary font-bold tracking-widest block mb-1">Encrypted Concierge</span>
              <h2 className="text-xl md:text-2xl font-bold text-on-surface">Direct Inquiries & Records</h2>
              <p className="text-xs md:text-sm text-on-surface-variant mt-1 leading-relaxed">
                Submit general questions, previous x-ray records transfer requests, or special accessibility requirements.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-surface-container border border-primary/30 text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="check_circle">check_circle</span>
                <h3 className="font-bold text-lg text-on-surface">Inquiry Transmitted Securely</h3>
                <p className="text-sm text-on-surface-variant">
                  Thank you, {formData.fullName || 'Patient'}. Our clinical triage coordinator will review your inquiry and follow up within 1 business hour.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-primary hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="full-name">
                    Full Legal Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                    id="full-name"
                    placeholder="e.g. Katherine Vance"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                      id="email"
                      placeholder="katherine@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                      id="phone"
                      placeholder="(555) 000-0000"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="purpose">
                    Inquiry Purpose
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  >
                    <option value="general">General Question</option>
                    <option value="records">Medical Record Transfer</option>
                    <option value="accessibility">Accessibility Accommodation</option>
                    <option value="billing">Billing & Insurance Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1.5" htmlFor="message">
                    Detailed Message or Records Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none"
                    id="message"
                    placeholder="Please outline your symptoms, requested appointment timeframe, or prior dental practice info for file transfers..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-start space-x-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" data-icon="lock">lock</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    HIPAA compliant transmission. Encrypted directly into our secure Electronic Medical Records system.
                  </p>
                </div>

                <button
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-container transition-all duration-200 active:scale-95 shadow-sm"
                  type="submit"
                >
                  Transmit Inquiry Securely
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Direct Communication Channels Grid */}
        <section className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs uppercase text-primary font-bold tracking-widest">Multi-Channel Access</span>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface">Direct Communication Channels</h2>
            <p className="text-sm md:text-base text-on-surface-variant">Choose the modality best aligned with your present schedule and immediacy needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Direct Voice */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/40 transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="call">call</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">Direct Voice</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Speak directly with studio reception and triage coordinators.</p>
              </div>
              <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline space-x-1" href="tel:5552345678">
                <span>(555) 234-5678</span>
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/40 transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="chat">chat</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">Fast Chat</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Quick digital triage and rapid photo diagnostics review.</p>
              </div>
              <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline space-x-1" href="https://wa.me/15552345678" rel="noopener noreferrer" target="_blank">
                <span>WhatsApp Channel</span>
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            {/* Card 3: Email Concierge */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/40 transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="mail">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">Email Concierge</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Detailed treatment proposals and insurance authorizations.</p>
              </div>
              <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline space-x-1" href="mailto:care@auradental.com">
                <span>care@auradental.com</span>
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            {/* Card 4: Patient Portal */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/40 transition-colors shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="encrypted">encrypted</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">Patient Portal</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Access 3D scans, pay statements, and self-reschedule.</p>
              </div>
              <a className="inline-flex items-center text-primary font-semibold text-sm hover:underline space-x-1" href="#portal">
                <span>Portal Login</span>
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Anxiety-Free Arrival Experience Assurance Callout */}
        <section className="rounded-2xl bg-surface-container border border-outline-variant/30 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-full md:w-1/3 shrink-0 rounded-xl overflow-hidden aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover"
              alt="Interior view of a tranquil architectural dental lounge featuring warm travertine walls and soft ambient light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb15shRsrWwVPiwMi0HBXBMGhlMPZ1B4dK4HFbq3ySZFq5ffyaFL5BAGyGA0Yze_seihHjI45f7uHV0WipNuwxy1GVJGMZt0Lcqmy3yTVm_xAjLMHuyBWCIO2rPM6Vd_Po0BMEM7rzOflppdaW036yYHD86ntGPGl-yVDCKQDFyeySUTmUvMe3uvCCDHeRlqJ2Fq-vdQzrt5w3d4mIeRmMzntczyZHH6Auv6nUsHeMbdLskokaFn5A"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-primary text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]" data-icon="nature">nature</span>
              <span>Neuro-Calming Environment</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface">The Anxiety-Free Arrival Experience</h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
              We understand that arriving for dental appointments, especially acute care, can evoke tension. Aura Dental Studio is engineered from acoustic paneling, organic botanical air purification, and private decompression pods to ensure your sensory comfort before you ever see a treatment suite.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-on-surface text-xs md:text-sm font-semibold">
                <span className="material-symbols-outlined text-primary text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Acoustically insulated suites</span>
              </div>
              <div className="flex items-center space-x-2 text-on-surface text-xs md:text-sm font-semibold">
                <span className="material-symbols-outlined text-primary text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Zero-wait private arrival</span>
              </div>
              <div className="flex items-center space-x-2 text-on-surface text-xs md:text-sm font-semibold">
                <span className="material-symbols-outlined text-primary text-[18px]" data-icon="check_circle">check_circle</span>
                <span>Warm herbal towel service</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
