// Shared CV content: read by the /cv page and by the printable /cv-print page,
// so both always show the same up-to-date information.

export type Lang = 'fr' | 'en';

const tr = <T,>(language: string, fr: T, en: T): T => (language === 'fr' ? fr : en);

export const getProfileTitle = (language: string) =>
  tr(
    language,
    'Doctorant en Microbiologie & Bioinformatique • Nextflow/nf-core • IA Agentique',
    'PhD Student in Microbiology & Bioinformatics • Nextflow/nf-core • Agentic AI',
  );

export const getSummary = (language: string) =>
  tr(
    language,
    "Bioinformaticien et microbiologiste spécialisé dans les pathogènes ESKAPE et les micro-organismes impliqués dans la dégradation des microplastiques, avec expertise en science des données, IA agentive, bioinformatique et développement de pipelines utilisant les outils Nextflow/nf-core. Bilan éprouvé dans la conception et la validation de workflows d'analyse génomique dans des environnements informatiques à ressources limitées.",
    'Bioinformatician and microbiologist focused on ESKAPE pathogens and microorganisms involved in microplastics degradation, with expertise in data science, agentic AI, bioinformatics, and pipeline development using Nextflow/nf-core tools. Proven track record in designing and validating genomic analysis workflows under resource-constrained computational environments.',
  );

export const getBioinfSkills = (language: string) =>
  tr(
    language,
    [
      'Analyse du séquençage du génome entier (WGS)',
      'Génomique comparative et phylogénétique',
      'Profilage de la résistance aux antimicrobiens (AMR)',
      'Développement de pipelines Nextflow/nf-core',
      'Métagénomique et analyse virale',
      'Annotation du génome et appel de variants',
    ],
    [
      'Whole Genome Sequencing (WGS) analysis',
      'Comparative genomics & phylogenetics',
      'Antimicrobial Resistance (AMR) profiling',
      'Nextflow/nf-core pipeline development',
      'Metagenomics & viral analysis',
      'Genome annotation & variant calling',
    ],
  );

export const getDataScienceSkills = (language: string) =>
  tr(
    language,
    [
      'Scripts Python et R et statistiques',
      'Machine Learning (NLP, classifications)',
      'Optimisation LLM et ingénierie des prompts',
      'IA agentive et applications génératives',
      'Visualisation de données et tableaux de bord',
      'Contrôle de version Git/GitHub',
    ],
    [
      'Python & R scripting & statistics',
      'Machine Learning (NLP, classifications)',
      'LLM optimization & prompt engineering',
      'Agentic AI & generative applications',
      'Data visualization & dashboards',
      'Git/GitHub version control',
    ],
  );

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export const getCertifications = (language: string): Certification[] => [
  {
    title: 'Build with the Anthropic API',
    issuer: 'Anthropic',
    date: tr(language, 'Octobre 2026', 'October 2026'),
    imageUrl: 'https://drive.google.com/thumbnail?id=1i1yB_Aa3Lw_OXMrpoPzc1mRWsGk9LDjL&sz=w1000',
  },
  {
    title: 'Build with nf-core',
    issuer: 'Seqera - Nextflow Training Week 2026-Q3',
    date: tr(language, 'Octobre 2026', 'October 2026'),
    imageUrl: 'https://drive.google.com/thumbnail?id=1ejWlXu3fYx_jY1_sY-XaPvlLDhT6uoz4&sz=w1000',
  },
  {
    title: 'Hello Nextflow',
    issuer: 'Seqera - Nextflow Training Week 2026-Q3',
    date: tr(language, 'Octobre 2026', 'October 2026'),
    imageUrl: 'https://drive.google.com/thumbnail?id=1JXw4LHJbfJ2TH2uLvmSQC3hcY0twBDXQ&sz=w1000',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: tr(language, 'Mai 2026', 'May 2026'),
    imageUrl: 'https://drive.google.com/thumbnail?id=1oMwyf1DAwvSfCQpwYKVEMTkMwxvH2K-x&sz=w1000',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: tr(language, 'Avril 2026', 'April 2026'),
    imageUrl: 'https://drive.google.com/thumbnail?id=1cy1K6XLe9PFq1DCQAbL8MrTFaCKPZBo_&sz=w1000',
  },
  {
    title: 'Machine Learning',
    issuer: 'ALX Foundation',
    date: tr(language, 'Avril 2026', 'April 2026'),
    imageUrl: 'https://lh3.googleusercontent.com/d/1Pq-ubIykzMuoGs_CnBLt-Sf0g2rqEx_k',
  },
  {
    title: tr(language, 'Ingénieur Datascience', 'Data Science Engineer'),
    issuer: 'ALX Foundation',
    date: tr(language, 'Avril 2026', 'April 2026'),
    imageUrl: 'https://lh3.googleusercontent.com/d/1YPVN3udXf0jvWYcq-5sNHAyw4YtsU16I',
  },
  {
    title: tr(
      language,
      'Fondamentaux de la Science des Données en Médecine de Précision',
      'Fundamentals of Data Science in Precision Medicine',
    ),
    issuer: 'Stanford Data Ocean',
    date: 'June 2025',
    imageUrl: 'https://lh3.googleusercontent.com/d/1avMjLeUatbU5RUcO38cc9zCUK8kq_EWs',
  },
  {
    title: 'ALX AI Starter Kit Certificate',
    issuer: 'ALX Foundation',
    date: 'March 2025',
    imageUrl: 'https://lh3.googleusercontent.com/d/13vBt7ZOvYCwrKwDNfue0aRQDpovm_EvP',
  },
  {
    title: tr(language, 'Métagénomique pour Débutants', 'Metagenomics for Beginners'),
    issuer: 'NyBerMan Bioinformatics Europe',
    date: 'August 2024 (Score: 100%)',
    imageUrl: 'https://lh3.googleusercontent.com/d/1RQi3AdoDOKhRw-sBOB9vz_NanShr2UPP',
  },
  {
    title: tr(language, 'Bioinformatique pour Biologistes', 'Bioinformatics for Biologists'),
    issuer: 'Wellcome Connecting Science',
    date: 'Oct 2023 (Score: 90%)',
    imageUrl: 'https://lh3.googleusercontent.com/d/1HSPjCr7c1IFbZsqIRAMuG5c9bodsyS2I',
  },
  {
    title: tr(language, 'Formation en Ingénierie Logicielle', 'Software Engineering Training'),
    issuer: 'ALX Foundation',
    date: 'Nov 2023',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ADfCRLgs8UYJYO4s010uHnwkUoQZWoDG',
  },
  {
    title: 'GenAI from Kaggle',
    issuer: 'Kaggle',
    date: 'March 31 - April 4, 2025',
    imageUrl: 'https://lh3.googleusercontent.com/d/1cRTnRY8Dum2rrr2d52F8paljww5TeusX',
  },
];

export interface EducationItem {
  title: string;
  institution: string;
  theme: string;
}

export const getEducation = (language: string): EducationItem[] => [
  {
    title: tr(language, 'Doctorant - Microbiologie Bioinformatique', 'PhD Student - Microbiology Bioinformatics'),
    institution: tr(
      language,
      'Université NANGUI Abrogoua • Mars 2024 - Présent',
      'NANGUI Abrogoua University • March 2024 - Present',
    ),
    theme: tr(
      language,
      'Thème : Évaluation du potentiel génomique des communautés microbiennes du lac Kassembie pour la dégradation des microplastiques',
      'Theme: Evaluation of the genomic potential of microbial communities in Lake Kassembie for microplastics degradation',
    ),
  },
  {
    title: tr(
      language,
      'Master - Génétique et Amélioration des Bioressources',
      "Master's Degree - Genetics and Improvement of Bioresources",
    ),
    institution: tr(
      language,
      'Université NANGUI Abrogoua • Fév 2022 - Sept 2023 (GPA: 14.21/20)',
      'NANGUI Abrogoua University • Feb 2022 - Sept 2023 (GPA: 14.21/20)',
    ),
    theme: tr(
      language,
      "Thème : Caractérisation morphométrique de l'abeille Apis mellifera adansonii",
      'Theme: Morphometric characterization of the honeybee Apis mellifera adansonii',
    ),
  },
  {
    title: tr(language, 'Licence - Production Animale', "Bachelor's Degree - Animal Production"),
    institution: tr(
      language,
      'Université NANGUI Abrogoua • Mars 2020 - Jan 2021 (GPA: 12.30/20)',
      'NANGUI Abrogoua University • March 2020 - Jan 2021 (GPA: 12.30/20)',
    ),
    theme: tr(
      language,
      'Thème : Relation longueur-longueur des espèces de requins du genre Carcharhinus',
      'Theme: Length-length relationship of shark species of the genus Carcharhinus',
    ),
  },
];

export const getPublication = (language: string) => ({
  status: tr(language, 'Preprint • Auteur principal', 'Preprint • First author'),
  title:
    "Novel putative PETase candidates from metagenomic mining of Ebrié lagoon and Kassembié lake, Côte d'Ivoire",
  authors: 'Hongo K.A., Ouattara K.N., Kouadio A.I.E., Yao K.O.',
  venue: `Access Microbiology (Microbiology Society) • ${tr(language, 'Septembre 2026 (v2)', 'September 2026 (v2)')} • DOI: 10.1099/acmi.0.001231.v2`,
  abstract: tr(
    language,
    "Métagénomique shotgun de cinq échantillons d'eau (baie de Biétry, lagune Ébrié, et lac Kassembié) : 131 génomes (MAGs) non caractérisés, 15 860 gènes d'hydrolases et quatre candidats PETase (BietPETase1–4) identifiés par prédiction de structure ColabFold/AlphaFold2 pour la bioremédiation du PET.",
    'Shotgun metagenomics of five water samples (Biétry bay, Ébrié lagoon, and Kassembié lake): 131 uncharacterized genome bins, 15,860 hydrolase genes, and four PETase-like candidates (BietPETase1–4) identified by ColabFold/AlphaFold2 structure prediction for PET bioremediation.',
  ),
  url: 'https://www.microbiologyresearch.org/content/journal/acmi/10.1099/acmi.0.001231.v2',
});

export const getMemberships = (language: string) => [
  {
    name: tr(
      language,
      "Alliance de Santé Publique pour l'Épidémiologie Génomique (PHA4GE)",
      'Public Health Alliance for Genomic Epidemiology (PHA4GE)',
    ),
    description: tr(language, "Réseau international pour l'épidémiologie génomique", 'International network for genomic epidemiology'),
  },
  {
    name: tr(language, 'Projet Africain du Biogénome (AfricaBP)', 'African BioGenome Project (AfricaBP)'),
    description: tr(language, 'Initiative panafricaine pour la génomique de la biodiversité', 'Pan-African initiative for biodiversity genomics'),
  },
  {
    name: tr(
      language,
      'Centres de Contrôle et de Prévention des Maladies Afrique (AfricaCDC)',
      'Centres for Disease Control and Prevention (AfricaCDC)',
    ),
    description: tr(language, 'Réseau continental de santé publique', 'Continental public health network'),
  },
  {
    name: tr(
      language,
      "Laboratoire Local d'ADN Environnemental et Microbiologie (eDNA Lab)",
      'Local lab for environmental DNA and microbiology (eDNA Lab)',
    ),
    description: tr(language, 'Laboratoire de recherche en biodiversité', 'Biodiversity research laboratory'),
  },
];

export const contact = {
  location: "Abidjan, Treichville, Côte d'Ivoire",
  email: 'hkoffianderson@gmail.com',
  phone: '+225 0748915342',
  links: [
    { label: 'GitHub', url: 'https://github.com/Bboy010' },
    { label: 'Kaggle', url: 'https://www.kaggle.com/hongokoffianderson' },
    { label: 'ORCID', url: 'https://orcid.org/0009-0007-9997-3070' },
  ],
};
