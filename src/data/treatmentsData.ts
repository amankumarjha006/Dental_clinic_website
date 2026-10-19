import { TreatmentItem } from '../types';

export const treatmentsData: TreatmentItem[] = [
  {
    id: 'hygiene-remineralization',
    title: 'Routine Hygiene & Enamel Remineralization',
    category: 'Preventive',
    duration: '60 min visit',
    feeRange: '$180 – $290',
    description: 'Ultrasonic biofilm debridement paired with biomimetic hydroxyapatite therapy to actively rebuild natural enamel density without abrasives.',
    highlights: [
      'Comfort ultrasonic tartar therapy',
      'Salivary microbiome screening',
      'Painless airflow stain polishing',
      'Remineralizing mineral varnish'
    ],
    icon: 'clean_hands',
    popular: true,
    warranty: 'Preventive Guarantee',
    technology: 'Guided Biofilm Therapy (Airflow®)'
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners & Gentle Orthodontics',
    category: 'Orthodontics',
    duration: '6–12 months',
    feeRange: '$3,200 – $5,800',
    description: 'Discreet tooth realignment designed digitally with 3D facial symmetry scans for comfortable, predictable bite correction.',
    highlights: [
      'Zero metal brackets or abrasive wires',
      'Digital 3D before-and-after smile simulation',
      'Customized crack-resistant medical polymers',
      'Hybrid remote / in-studio tracking'
    ],
    icon: 'architecture',
    popular: true,
    warranty: 'Refinement Guarantee Included',
    technology: 'iTero Lumina™ 3D Scanner'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Biocompatible Restorations',
    category: 'Restorative',
    duration: '2–3 sessions',
    feeRange: '$2,400 – $4,200',
    description: 'Grade-4 titanium and Swiss ceramic zirconia implants surgically guided by 3D CBCT imaging for seamless biological osseointegration.',
    highlights: [
      'Digitally guided flapless insertion',
      'Custom shaded monolithic zirconia crown',
      'Preserves adjacent natural tooth bone',
      'Natural chew force restitution'
    ],
    icon: 'dentistry',
    popular: true,
    warranty: 'Lifetime Structural Warranty',
    technology: '3D CBCT Guided Surgery'
  },
  {
    id: 'root-canal',
    title: 'Minimally Invasive Root Canals',
    category: 'Endodontics',
    duration: 'Single visit (75 min)',
    feeRange: '$950 – $1,600',
    description: 'Gentle rotary microscope root canal treatment designed to neutralize infection without post-procedural discomfort.',
    highlights: [
      'Profound computerized local anesthesia',
      '3D acoustic gentle irrigation cleansing',
      'Zeiss surgical microscope precision',
      'Bioceramic hermetic root sealing'
    ],
    icon: 'biotech',
    warranty: 'Biological Canal Seal Warranty',
    technology: 'Zeiss Opmi Lumera® Surgical Microscope'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers & Aesthetic Harmonization',
    category: 'Cosmetic',
    duration: '2 visits',
    feeRange: '$1,100 – $2,100 / tooth',
    description: 'Hand-layered, ultra-thin ceramic shells tailored meticulously to match natural translucency, tooth shade, and face geometry.',
    highlights: [
      'Minimal-prep conservative enamel technique',
      'Physical in-mouth trial smile mock-up',
      'Feldspathic artisan porcelain layering',
      'Stain-resistant high-gloss finish'
    ],
    icon: 'auto_awesome',
    popular: true,
    warranty: '10-Year Craftsmanship Guarantee',
    technology: 'Digital Smile Design (DSD)'
  },
  {
    id: 'pediatric-family',
    title: 'Gentle Pediatric & Family Dentistry',
    category: 'Pediatric',
    duration: '45–60 min',
    feeRange: '$140 – $260',
    description: 'An anxiety-free orientation introducing children and teens to oral wellness through playful education, zero needles, and positive reinforcement.',
    highlights: [
      'No-needle cavity sealing treatments',
      'Growth & airway arch evaluation',
      'Sensory-friendly dimmed suites with cartoons',
      'Parent-always-in-room guarantee'
    ],
    icon: 'child_care',
    warranty: 'Fluoride-Free Biomimetic Sealants',
    technology: 'Silver Diamine Fluoride (SDF)'
  }
];
