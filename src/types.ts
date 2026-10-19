export type NavTab = 'home' | 'about' | 'treatments' | 'doctor' | 'patient-info' | 'contact';

export interface TreatmentItem {
  id: string;
  title: string;
  category: 'Preventive' | 'Orthodontics' | 'Restorative' | 'Cosmetic' | 'Endodontics' | 'Pediatric';
  duration: string;
  feeRange: string;
  description: string;
  highlights: string[];
  icon: string;
  popular?: boolean;
  warranty?: string;
  technology?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  treatment: string;
  avatar?: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Anxiety' | 'First Visit' | 'Pricing & Insurance' | 'Technology' | 'Emergency';
}

export interface SensoryPreferences {
  noiseCanceling: boolean;
  weightedBlanket: boolean;
  aromatherapy: boolean;
  handStopSignal: boolean;
  pacedExplanation: boolean;
  dimLighting: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: 'Morning (8a–12p)' | 'Afternoon (12p–4p)' | 'Evening (4p–7p)';
  sensoryAnxietyProtocol: boolean;
  notes?: string;
  sensoryPreferences: SensoryPreferences;
}
