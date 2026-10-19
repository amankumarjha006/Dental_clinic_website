import React from 'react';
import { NavTab } from '../types';
import { clinicData } from '../data/clinicData';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[1.4rem]">spa</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-headline block leading-tight">
                  Aura Dental Studio
                </span>
                <span className="text-[0.65rem] tracking-widest uppercase font-bold text-inverse-primary">
                  Restorative Sanctuary
                </span>
              </div>
            </div>

            <p className="text-sm text-surface-container-highest max-w-sm leading-relaxed">
              An architecturally calm dental sanctuary dedicated to biomimetic tooth preservation, upfront pricing transparency, and sensory comfort protocols.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-surface-container-highest">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary" />
                AGD Fellowship Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary" />
                ADA &amp; AACD Member
              </span>
            </div>
          </div>

          {/* Treatments Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-inverse-primary mb-4 font-eyebrow">
              Care &amp; Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-surface-container-highest">
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Preventive Remineralization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Clear Aligners &amp; Orthodontics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Porcelain Veneers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Biocompatible Implants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Minimally Invasive Root Canals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('treatments')}
                  className="hover:text-white transition-colors"
                >
                  Gentle Pediatric Care
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Studio Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-inverse-primary mb-4 font-eyebrow">
              Studio &amp; Practice
            </h4>
            <ul className="space-y-2.5 text-sm text-surface-container-highest">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('doctor')}
                  className="hover:text-white transition-colors"
                >
                  Dr. Elena Rostova
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('patient-info')}
                  className="hover:text-white transition-colors"
                >
                  Patient FAQ &amp; Fees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-white transition-colors"
                >
                  Emergency Triage
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-inverse-primary hover:underline font-semibold"
                >
                  Reserve Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-inverse-primary mb-4 font-eyebrow">
              Sanctuary Access
            </h4>
            <p className="text-xs text-surface-container-highest mb-2">
              {clinicData.address}
              <br />
              {clinicData.cityStateZip}
            </p>
            <p className="text-xs text-white font-semibold mb-4">
              P1 &amp; P2 Validated Parking
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${clinicData.phoneClean}`}
                className="block text-inverse-primary hover:text-white font-bold"
              >
                Desk: {clinicData.phone}
              </a>
              <a
                href={clinicData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-surface-container-highest hover:text-white"
              >
                WhatsApp Emergency Triage
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-container-highest">
          <p>
            © {new Date().getFullYear()} Aura Dental Studio. All rights reserved. Dr. Elena Rostova, DDS, FAGD.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              HIPAA Compliant
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy Notice</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
