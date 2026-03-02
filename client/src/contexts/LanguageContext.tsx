import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.cv': 'CV',
    'nav.bioinformatics': 'Bioinformatics',
    'nav.ai': 'AI',
    'nav.statistics': 'Statistics',
    'nav.services': 'Services',
    'home.title': 'Bioinformatics',
    'home.subtitle': '& AI Expertise',
    'home.description': 'PhD Microbiologist specializing in bacterial pathogen surveillance, whole genome sequencing analysis, and agentic AI solutions. Transforming complex genomic data into actionable insights.',
    'home.pathogen': 'Pathogen Surveillance: Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae',
    'home.skills': 'Technical Skills: WGS analysis, AMR profiling, phylogenetics, Nextflow/nf-core',
    'home.ai': 'AI Expertise: LLM optimization, prompt engineering, generative applications',
    'home.cta': 'Get In Touch',
    'home.cv': 'View CV',
    'home.expertise': 'Core Expertise',
    'home.ready': 'Ready to Collaborate?',
    'home.ready_desc': 'Whether you need bioinformatics consulting, pipeline development, or AI training, I\'m here to help.',
    'home.explore': 'Explore Services',
    'cv.title': 'Curriculum Vitae',
    'cv.download': 'Download PDF',
    'cv.summary': 'Professional Summary',
    'cv.skills': 'Technical Skills',
    'cv.experience': 'Professional Experience',
    'cv.education': 'Education',
    'cv.certifications': 'Certifications & Training',
    'cv.memberships': 'Professional Memberships',
    'footer.about': 'About',
    'footer.quick_links': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.download_cv': 'Download CV',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.crafted': 'Crafted with precision and expertise in bioinformatics.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.cv': 'CV',
    'nav.bioinformatics': 'Bioinformatique',
    'nav.ai': 'IA',
    'nav.statistics': 'Statistiques',
    'nav.services': 'Services',
    'home.title': 'Bioinformatique',
    'home.subtitle': '& Expertise en IA',
    'home.description': 'Docteur en Microbiologie spécialisé en surveillance des pathogènes bactériens, analyse du séquençage du génome entier et solutions d\'IA agentive. Transformer les données génomiques complexes en informations exploitables.',
    'home.pathogen': 'Surveillance des pathogènes : Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae',
    'home.skills': 'Compétences techniques : analyse WGS, profilage AMR, phylogénétique, Nextflow/nf-core',
    'home.ai': 'Expertise en IA : optimisation LLM, ingénierie des prompts, applications génératives',
    'home.cta': 'Me Contacter',
    'home.cv': 'Voir CV',
    'home.expertise': 'Expertise Principale',
    'home.ready': 'Prêt à Collaborer ?',
    'home.ready_desc': 'Que vous ayez besoin de conseil en bioinformatique, développement de pipeline ou formation en IA, je suis là pour vous aider.',
    'home.explore': 'Explorer les Services',
    'cv.title': 'Curriculum Vitae',
    'cv.download': 'Télécharger PDF',
    'cv.summary': 'Résumé Professionnel',
    'cv.skills': 'Compétences Techniques',
    'cv.experience': 'Expérience Professionnelle',
    'cv.education': 'Formation',
    'cv.certifications': 'Certifications & Formation',
    'cv.memberships': 'Adhésions Professionnelles',
    'footer.about': 'À Propos',
    'footer.quick_links': 'Liens Rapides',
    'footer.connect': 'Se Connecter',
    'footer.download_cv': 'Télécharger CV',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.crafted': 'Conçu avec précision et expertise en bioinformatique.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const lang = language as keyof typeof translations;
    const translation = translations[lang][key as keyof typeof translations['en']];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
