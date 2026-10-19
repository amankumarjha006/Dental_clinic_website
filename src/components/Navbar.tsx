import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavTab } from '../types';
import { clinicData } from '../data/clinicData';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
  onOpenSensoryMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenBooking,
  onOpenSensoryMenu
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'doctor', label: 'Our Dentist' },
    { id: 'patient-info', label: 'Patient Info' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-level-2 border-b border-outline-variant/40 py-3'
          : 'bg-surface-container-lowest/80 backdrop-blur-sm border-b border-outline-variant/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm"
          >
            <span className="material-symbols-outlined text-[1.4rem]">spa</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-primary leading-tight font-headline">
              Aura Dental Studio
            </span>
            <span className="text-[0.68rem] tracking-widest uppercase font-semibold text-outline">
              Restorative Sanctuary
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Suite */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sensory Comfort Quick Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenSensoryMenu}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-surface-container hover:bg-secondary-container text-primary transition-colors border border-outline-variant/30"
            title="Customize your acoustic and sensory comfort preferences"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">headphones</span>
            <span className="hidden xl:inline">Comfort Protocol</span>
          </motion.button>

          {/* Call Clinic Desk */}
          <a
            href={`tel:${clinicData.phoneClean}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-[1.15rem]">call</span>
            <span className="hidden md:inline">Call Clinic</span>
          </a>

          {/* Book Appointment CTA */}
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="bg-primary text-on-primary hover:bg-inverse-surface rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold tracking-tight shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Book Visit</span>
            <span className="material-symbols-outlined text-[1rem]">calendar_month</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="bg-primary text-on-primary px-3 py-1.5 rounded-lg text-xs font-semibold sm:hidden"
          >
            Book
          </motion.button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-primary hover:bg-surface-container transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-outline-variant/40 bg-surface-container-lowest px-4 py-5 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors text-left ${
                      isActive
                        ? 'bg-surface-container text-primary'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-outline-variant/30 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSensoryMenu();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container text-primary font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">headphones</span>
                <span>Personalize Sensory Comfort</span>
              </button>

              <a
                href={`tel:${clinicData.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant text-primary font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Concierge: {clinicData.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-sm"
              >
                <span>Book Appointment Online</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
