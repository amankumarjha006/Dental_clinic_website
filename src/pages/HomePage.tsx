import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { TreatmentsSection } from '../components/TreatmentsSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { DoctorSection } from '../components/DoctorSection';
import { PatientJourney } from '../components/PatientJourney';
import { ReviewsSection } from '../components/ReviewsSection';
import { InteractiveBooking } from '../components/InteractiveBooking';
import { EmergencySection } from '../components/EmergencySection';
import { LocationSection } from '../components/LocationSection';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onBookClick: () => void;
  onExploreTreatments: () => void;
  onDoctorClick: () => void;
  onOpenSensoryMenu: () => void;
  selectedTreatmentForBooking: string;
  onSelectTreatmentForBooking: (title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onBookClick,
  onExploreTreatments,
  onDoctorClick,
  onOpenSensoryMenu,
  selectedTreatmentForBooking,
  onSelectTreatmentForBooking,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full"
    >
      <Hero
        onBookClick={onBookClick}
        onExploreClick={onExploreTreatments}
        onDoctorClick={onDoctorClick}
      />
      <TrustStats />
      <TreatmentsSection onSelectTreatmentForBooking={onSelectTreatmentForBooking} />
      <PhilosophySection
        onLearnMoreClick={onDoctorClick}
        onOpenSensoryMenu={onOpenSensoryMenu}
      />
      <DoctorSection onBookClick={onBookClick} />
      <PatientJourney onStartBooking={onBookClick} />
      <ReviewsSection />
      <InteractiveBooking initialService={selectedTreatmentForBooking} />
      <EmergencySection />
      <LocationSection />
      <FAQSection />
    </motion.div>
  );
};
