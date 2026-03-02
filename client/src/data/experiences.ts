import { 
  Code2, Microscope, BookOpen, Briefcase, Users, Zap, 
  BarChart3, Cpu, GitBranch, FileText, Award, Lightbulb,
  TrendingUp, CheckCircle2, Users2, Zap as ZapIcon
} from 'lucide-react';

export interface Activity {
  icon: any;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
}

export interface DetailedAchievement {
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  metric?: string;
}

export interface Experience {
  id: string;
  title: string;
  titleFr: string;
  company: string;
  period: string;
  periodFr: string;
  description: string;
  descriptionFr: string;
  activities: Activity[];
  achievements: DetailedAchievement[];
  keyResults: string[];
  keyResultsFr: string[];
  technologies: string[];
  impact: string;
  impactFr: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 'nextflow-ambassador',
    title: 'Nextflow/nf-core Ambassador',
    titleFr: 'Ambassadeur Nextflow/nf-core',
    company: 'Freelance',
    period: 'Since 2026 - Present',
    periodFr: 'Depuis 2026 - Présent',
    description: 'Design and train people in Nextflow/nf-core tools in Côte d\'Ivoire. Assist individuals and organizations with bioinformatics consulting.',
    descriptionFr: 'Concevoir et former les gens aux outils Nextflow/nf-core en Côte d\'Ivoire. Assister les individus et les organisations en conseil bioinformatique.',
    activities: [
      {
        icon: BookOpen,
        title: 'Training Design',
        titleFr: 'Conception de Formation',
        description: 'Create comprehensive Nextflow/nf-core training modules',
        descriptionFr: 'Créer des modules de formation complets Nextflow/nf-core',
      },
      {
        icon: Users,
        title: 'Community Training',
        titleFr: 'Formation Communautaire',
        description: 'Train individuals and organizations in bioinformatics best practices',
        descriptionFr: 'Former les individus et les organisations aux meilleures pratiques bioinformatiques',
      },
      {
        icon: Briefcase,
        title: 'Consulting Services',
        titleFr: 'Services de Conseil',
        description: 'Provide bioinformatics consulting for pipeline development',
        descriptionFr: 'Fournir des services de conseil en bioinformatique pour le développement de pipelines',
      },
      {
        icon: Code2,
        title: 'Pipeline Development',
        titleFr: 'Développement de Pipelines',
        description: 'Design and implement nf-core workflows',
        descriptionFr: 'Concevoir et mettre en œuvre des workflows nf-core',
      },
    ],
    achievements: [
      {
        title: 'Nextflow Expertise',
        titleFr: 'Expertise Nextflow',
        description: 'Mastered advanced Nextflow features including process optimization, error handling, and workflow scaling',
        descriptionFr: 'Maîtrisé les fonctionnalités avancées de Nextflow, y compris l\'optimisation des processus et la mise à l\'échelle des workflows',
        metric: '1+ workflows'
      },
      {
        title: 'Community Impact',
        titleFr: 'Impact Communautaire',
        description: 'Trained 7+ professionals in bioinformatics pipeline development and best practices',
        descriptionFr: 'Formé 7+ professionnels au développement de pipelines bioinformatiques',
        metric: '10+ trainees'
      },
      {
        title: 'nf-core Contribution',
        titleFr: 'Contribution nf-core',
        description: 'Contributed to nf-core community with validated pipeline modules and documentation',
        descriptionFr: 'Contribué à la communauté nf-core avec des modules de pipeline validés',
        metric: '1+ modules'
      },
    ],
    keyResults: [
      'Established training program for bioinformatics pipeline development',
      'Developed 1+ production-ready Nextflow workflows',
      'Mentored junior bioinformaticians in pipeline optimization',
      'Created comprehensive documentation and training materials'
    ],
    keyResultsFr: [
      'Établi un programme de formation pour le développement de pipelines bioinformatiques',
      'Développé 1+ workflows Nextflow prêts pour la production',
      'Mentorné les bioinformaticiens juniors en optimisation de pipelines',
      'Créé une documentation complète et du matériel de formation'
    ],
    technologies: ['Nextflow', 'nf-core', 'Groovy', 'Docker', 'Singularity', 'Git'],
    impact: 'Empowering African bioinformaticians with cutting-edge pipeline development skills',
    impactFr: 'Autonomiser les bioinformaticiens africains avec des compétences avancées en développement de pipelines',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'edna-lab',
    title: 'Bioinformatician',
    titleFr: 'Bioinformaticien',
    company: 'eDNA Lab',
    period: '2023 - 2025',
    periodFr: '2023 - 2025',
    description: 'Antimicrobial resistance profiling, phylogenetic reconstruction, and pipeline validation under resource-constrained computational environments.',
    descriptionFr: 'Profilage de la résistance aux antimicrobiens, reconstruction phylogénétique et validation de pipeline dans des environnements informatiques limités.',
    activities: [
      {
        icon: Microscope,
        title: 'AMR Profiling',
        titleFr: 'Profilage AMR',
        description: 'Perform antimicrobial resistance analysis and interpretation',
        descriptionFr: 'Effectuer l\'analyse et l\'interprétation de la résistance aux antimicrobiens',
      },
      {
        icon: BarChart3,
        title: 'Phylogenetic Analysis',
        titleFr: 'Analyse Phylogénétique',
        description: 'Reconstruct phylogenetic trees from genomic data',
        descriptionFr: 'Reconstruire les arbres phylogénétiques à partir de données génomiques',
      },
      {
        icon: BookOpen,
        title: 'Training Modules',
        titleFr: 'Modules de Formation',
        description: 'Design and create bioinformatics training materials',
        descriptionFr: 'Concevoir et créer du matériel de formation en bioinformatique',
      },
      {
        icon: Code2,
        title: 'Pipeline Implementation',
        titleFr: 'Implémentation de Pipelines',
        description: 'Design and implement NGS, Ampliseq, and Shotgun analysis pipelines',
        descriptionFr: 'Concevoir et mettre en œuvre des pipelines d\'analyse NGS, Ampliseq et Shotgun',
      },
      {
        icon: Cpu,
        title: 'Resource Optimization',
        titleFr: 'Optimisation des Ressources',
        description: 'Validate pipelines under resource-constrained environments',
        descriptionFr: 'Valider les pipelines dans des environnements à ressources limitées',
      },
    ],
    achievements: [
      {
        title: 'AMR Database Development',
        titleFr: 'Développement de Base de Données AMR',
        description: 'Created comprehensive AMR profiling database with 500+ reference genomes',
        descriptionFr: 'Créé une base de données complète de profilage AMR avec 500+ génomes de référence',
        metric: '50+ genomes'
      },
      {
        title: 'Pipeline Optimization',
        titleFr: 'Optimisation de Pipeline',
        description: 'Reduced pipeline execution time by 30% through resource optimization',
        descriptionFr: 'Réduit le temps d\'exécution du pipeline de 30% grâce à l\'optimisation des ressources',
        metric: '30% faster'
      },
      {
        title: 'Research Publications',
        titleFr: 'Publications de Recherche',
        description: 'Co-authored 1 peer-reviewed publications on genomic epidemiology',
        descriptionFr: 'Co-auteur de 1 publications évaluées par les pairs sur l\'épidémiologie génomique',
        metric: '1 papers'
      },
    ],
    keyResults: [
      'Analyzed 5+ bacterial genomes for antimicrobial resistance patterns',
      'Developed 1 validated NGS analysis pipelines',
      'Trained 15+ lab members in bioinformatics analysis'
    ],
    keyResultsFr: [
      'Analysé 5+ génomes bactériens pour les motifs de résistance aux antimicrobiens',
      'Développé 1 pipelines d\'analyse NGS validés',
      'Formé 15+ membres du laboratoire en analyse bioinformatique'
    ],
    technologies: ['QIIME2', 'BLAST', 'RAxML', 'Nextflow', 'Python', 'R', 'Linux'],
    impact: 'Advanced antimicrobial resistance surveillance and genomic epidemiology in West Africa',
    impactFr: 'Avancé la surveillance de la résistance aux antimicrobiens en Afrique de l\'Ouest',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'freelance-data-scientist',
    title: 'Data Scientist & Statistics Trainer',
    titleFr: 'Data Scientist & Formateur en Statistiques',
    company: 'Freelance',
    period: 'Since 2023 - Present',
    periodFr: 'Depuis 2023 - Présent',
    description: 'Training in Applied Statistics, Advanced Excel, and project-based learning with active feedback and progress monitoring.',
    descriptionFr: 'Formation en Statistiques Appliquées, Excel Avancé, et apprentissage basé sur des projets avec retours actifs et suivi des progrès.',
    activities: [
      {
        icon: BarChart3,
        title: 'Statistics Training',
        titleFr: 'Formation en Statistiques',
        description: 'Teach descriptive, inferential, and regression analyses',
        descriptionFr: 'Enseigner les analyses descriptives, inférentielles et les régressions',
      },
      {
        icon: Zap,
        title: 'Excel Mastery',
        titleFr: 'Maîtrise d\'Excel',
        description: 'Advanced Excel training with Power Query and interactive dashboards',
        descriptionFr: 'Formation Excel avancée avec Power Query et tableaux de bord interactifs',
      },
      {
        icon: Users,
        title: 'Project-Based Learning',
        titleFr: 'Apprentissage Basé sur des Projets',
        description: 'Step-by-step training with active feedback and progress monitoring',
        descriptionFr: 'Formation étape par étape avec retours actifs et suivi des progrès',
      },
      {
        icon: Lightbulb,
        title: 'Custom Solutions',
        titleFr: 'Solutions Personnalisées',
        description: 'Tailor training content to learner needs and skill levels',
        descriptionFr: 'Adapter le contenu de formation aux besoins et niveaux de compétence',
      },
    ],
    achievements: [
      {
        title: 'Student Success Rate',
        titleFr: 'Taux de Réussite des Étudiants',
        description: 'Achieved 95% student satisfaction with comprehensive statistical training',
        descriptionFr: 'Atteint 95% de satisfaction des étudiants avec une formation statistique complète',
        metric: '95% satisfaction'
      },
      {
        title: 'Excel Expertise',
        titleFr: 'Expertise Excel',
        description: 'Trained 200+ professionals in advanced Excel and data visualization',
        descriptionFr: 'Formé 200+ professionnels en Excel avancé et visualisation de données',
        metric: '200+ trainees'
      },
      {
        title: 'Custom Dashboards',
        titleFr: 'Tableaux de Bord Personnalisés',
        description: 'Created 50+ interactive dashboards for business analytics',
        descriptionFr: 'Créé 50+ tableaux de bord interactifs pour l\'analyse commerciale',
        metric: '50+ dashboards'
      },
    ],
    keyResults: [
      'Trained 100+ professionals in statistics and data analysis',
      'Created 10+ interactive Excel dashboards',
      'Developed comprehensive statistics curriculum',
      'Achieved 95% student satisfaction rate'
    ],
    keyResultsFr: [
      'Formé 100+ professionnels en statistiques et analyse de données',
      'Créé 10+ tableaux de bord Excel interactifs',
      'Développé un programme complet de statistiques',
      'Atteint un taux de satisfaction de 95%'
    ],
    technologies: ['Excel', 'Power Query', 'Python', 'R', 'Tableau', 'Power BI'],
    impact: 'Empowering professionals with data literacy and analytical skills',
    impactFr: 'Autonomiser les professionnels avec des compétences en littératie des données',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'leanerworld-ai',
    title: 'Artificial Intelligence Trainer',
    titleFr: 'Formateur en Intelligence Artificielle',
    company: 'Leanerworld (Co-director)',
    period: 'Since 2024 - Present',
    periodFr: 'Depuis 2024 - Présent',
    description: 'Design and creation of AI training modules, training in AI tools for content creation and scientific article writing.',
    descriptionFr: 'Conception et création de modules de formation en IA, formation aux outils d\'IA pour la création de contenu et la rédaction d\'articles scientifiques.',
    activities: [
      {
        icon: Lightbulb,
        title: 'AI Module Design',
        titleFr: 'Conception de Modules IA',
        description: 'Create comprehensive AI training curriculum',
        descriptionFr: 'Créer un programme de formation en IA complet',
      },
      {
        icon: FileText,
        title: 'Content Creation',
        titleFr: 'Création de Contenu',
        description: 'Train in AI tools for documents, images, and videos',
        descriptionFr: 'Former aux outils d\'IA pour documents, images et vidéos',
      },
      {
        icon: Award,
        title: 'Scientific Writing',
        titleFr: 'Rédaction Scientifique',
        description: 'Guide learners in AI-assisted scientific article writing',
        descriptionFr: 'Guider les apprenants dans la rédaction d\'articles scientifiques assistée par l\'IA',
      },
      {
        icon: Users,
        title: 'Learner Support',
        titleFr: 'Support des Apprenants',
        description: 'Assist learners in prompting and AI skill acquisition',
        descriptionFr: 'Assister les apprenants dans l\'acquisition de compétences en IA',
      },
    ],
    achievements: [
      {
        title: 'AI Curriculum Development',
        titleFr: 'Développement du Curriculum IA',
        description: 'Created comprehensive AI training program with 10+ modules',
        descriptionFr: 'Créé un programme de formation en IA complet avec 10+ modules',
        metric: '10+ modules'
      },
      {
        title: 'Learner Growth',
        titleFr: 'Croissance des Apprenants',
        description: 'Trained 300+ learners in AI tools and prompt engineering',
        descriptionFr: 'Formé 300+ apprenants aux outils d\'IA et à l\'ingénierie des prompts',
        metric: '300+ learners'
      },
      {
        title: 'Content Generation',
        titleFr: 'Génération de Contenu',
        description: 'Helped learners generate 1000+ AI-assisted documents and articles',
        descriptionFr: 'Aidé les apprenants à générer 1000+ documents et articles assistés par l\'IA',
        metric: '1000+ documents'
      },
    ],
    keyResults: [
      'Designed and launched comprehensive AI training program',
      'Trained 300+ professionals in AI tools and prompt engineering',
      'Created 10+ AI training modules with hands-on projects',
      'Helped learners generate 1000+ AI-assisted documents'
    ],
    keyResultsFr: [
      'Conçu et lancé un programme complet de formation en IA',
      'Formé 300+ professionnels aux outils d\'IA et à l\'ingénierie des prompts',
      'Créé 10+ modules de formation en IA avec des projets pratiques',
      'Aidé les apprenants à générer 1000+ documents assistés par l\'IA'
    ],
    technologies: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering', 'LLM Optimization', 'Python'],
    impact: 'Democratizing AI access and skills for African professionals',
    impactFr: 'Démocratiser l\'accès et les compétences en IA pour les professionnels africains',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'iam-ci-webmaster',
    title: 'Webmaster & IT Services',
    titleFr: 'Webmaster & Services Informatiques',
    company: 'IAM-CI',
    period: 'Jan 2024 - Jan 2025',
    periodFr: 'Jan 2024 - Jan 2025',
    description: 'Website design with Figma, website management, technical expertise in CMS, hosting, security, content creation, SEO optimization, and digital strategy.',
    descriptionFr: 'Conception de site web avec Figma, gestion de site web, expertise technique en CMS, hébergement, sécurité, création de contenu, optimisation SEO et stratégie numérique.',
    activities: [
      {
        icon: Cpu,
        title: 'Website Design',
        titleFr: 'Conception de Site Web',
        description: 'Design mockups with Figma and implement websites',
        descriptionFr: 'Concevoir des maquettes avec Figma et implémenter des sites web',
      },
      {
        icon: Code2,
        title: 'Technical Management',
        titleFr: 'Gestion Technique',
        description: 'Manage CMS, hosting, and security infrastructure',
        descriptionFr: 'Gérer CMS, hébergement et infrastructure de sécurité',
      },
      {
        icon: FileText,
        title: 'Content Strategy',
        titleFr: 'Stratégie de Contenu',
        description: 'Create and optimize content for SEO',
        descriptionFr: 'Créer et optimiser le contenu pour le SEO',
      },
      {
        icon: BarChart3,
        title: 'Digital Analytics',
        titleFr: 'Analyse Numérique',
        description: 'Analyze data and develop digital strategy',
        descriptionFr: 'Analyser les données et développer la stratégie numérique',
      },
    ],
    achievements: [
      {
        title: 'Website Portfolio',
        titleFr: 'Portefeuille de Sites Web',
        description: 'Designed and deployed 8 professional websites',
        descriptionFr: 'Conçu et déployé 8 sites web professionnels',
        metric: '8 websites'
      },
      {
        title: 'SEO Performance',
        titleFr: 'Performance SEO',
        description: 'Improved organic traffic by 150% through SEO optimization',
        descriptionFr: 'Amélioré le trafic organique de 150% grâce à l\'optimisation SEO',
        metric: '150% increase'
      },
      {
        title: 'Security Management',
        titleFr: 'Gestion de la Sécurité',
        description: 'Implemented SSL certificates and security protocols for all sites',
        descriptionFr: 'Implémenté des certificats SSL et des protocoles de sécurité pour tous les sites',
        metric: '100% secured'
      },
    ],
    keyResults: [
      'Designed and deployed 8 professional websites',
      'Improved organic traffic by 150% through SEO optimization',
      'Implemented security protocols and SSL certificates',
      'Managed hosting infrastructure and CMS systems'
    ],
    keyResultsFr: [
      'Conçu et déployé 8 sites web professionnels',
      'Amélioré le trafic organique de 150% grâce à l\'optimisation SEO',
      'Implémenté les protocoles de sécurité et les certificats SSL',
      'Géré l\'infrastructure d\'hébergement et les systèmes CMS'
    ],
    technologies: ['Figma', 'WordPress', 'HTML/CSS', 'JavaScript', 'SEO', 'Google Analytics'],
    impact: 'Building professional digital presence for organizations in Côte d\'Ivoire',
    impactFr: 'Construire une présence numérique professionnelle pour les organisations',
    color: 'from-indigo-500 to-blue-500',
  },
];
