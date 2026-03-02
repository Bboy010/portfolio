import { Download, Code, Briefcase, BookOpen, Award, Camera, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ExpandableExperienceCard from '@/components/ExpandableExperienceCard';
import CertificateFlipCard from '@/components/CertificateFlipCard';
import { experiences } from '@/data/experiences';

export default function CV() {
  const { language, t } = useLanguage();

  const profileTitle = language === 'fr'
    ? 'Doctorant en Microbiologie • Bioinformaticien • Spécialiste en IA'
    : 'PhD Student Microbiologist • Bioinformatician • AI Specialist';

  const summaryTitle = language === 'fr' ? 'Résumé Professionnel' : 'Professional Summary';
  const skillsTitle = language === 'fr' ? 'Compétences Techniques' : 'Technical Skills';
  const experienceTitle = language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience';
  const educationTitle = language === 'fr' ? 'Formation' : 'Education';
  const certificationsTitle = language === 'fr' ? 'Certifications & Formation' : 'Certifications & Training';
  const membershipsTitle = language === 'fr' ? 'Adhésions Professionnelles' : 'Professional Memberships';
  const conferenceGalleryTitle = language === 'fr' ? 'Galerie des Conférences' : 'Conference Gallery';
  const conferenceGallerySubtitle = language === 'fr'
    ? 'Moments mémorables lors des conférences et événements scientifiques'
    : 'Memorable moments from conferences and scientific events';

  const summaryText = language === 'fr'
    ? 'Bioinformaticien et microbiologiste spécialisé dans les pathogènes ESKAPE et les micro-organismes impliqués dans la dégradation des microplastiques, avec expertise en science des données, IA agentive, bioinformatique et développement de pipelines utilisant les outils Nextflow/nf-core. Bilan éprouvé dans la conception et la validation de workflows d\'analyse génomique dans des environnements informatiques à ressources limitées.'
    : 'Bioinformatician and microbiologist focused on ESKAPE pathogens and microorganisms involved in microplastics degradation, with expertise in data science, agentic AI, bioinformatics, and pipeline development using Nextflow/nf-core tools. Proven track record in designing and validating genomic analysis workflows under resource-constrained computational environments.';

  const bioinfSkills = language === 'fr'
    ? [
        '• Analyse du séquençage du génome entier (WGS)',
        '• Génomique comparative et phylogénétique',
        '• Profilage de la résistance aux antimicrobiens (AMR)',
        '• Développement de pipelines Nextflow/nf-core',
        '• Métagénomique et analyse virale',
        '• Annotation du génome et appel de variants',
      ]
    : [
        '• Whole Genome Sequencing (WGS) analysis',
        '• Comparative genomics & phylogenetics',
        '• Antimicrobial Resistance (AMR) profiling',
        '• Nextflow/nf-core pipeline development',
        '• Metagenomics & viral analysis',
        '• Genome annotation & variant calling',
      ];

  const dataScienceSkills = language === 'fr'
    ? [
        '• Scripts Python et R et statistiques',
        '• Machine Learning (NLP, classifications)',
        '• Optimisation LLM et ingénierie des prompts',
        '• IA agentive et applications génératives',
        '• Visualisation de données et tableaux de bord',
        '• Contrôle de version Git/GitHub',
      ]
    : [
        '• Python & R scripting & statistics',
        '• Machine Learning (NLP, classifications)',
        '• LLM optimization & prompt engineering',
        '• Agentic AI & generative applications',
        '• Data visualization & dashboards',
        '• Git/GitHub version control',
      ];

  const certifications = [
    {
      title: language === 'fr'
        ? 'Fondamentaux de la Science des Données en Médecine de Précision'
        : 'Fundamentals of Data Science in Precision Medicine',
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
      title: language === 'fr' ? 'Métagénomique pour Débutants' : 'Metagenomics for Beginners',
      issuer: 'NyBerMan Bioinformatics Europe',
      date: 'August 2024 (Score: 100%)',
      imageUrl: 'https://lh3.googleusercontent.com/d/1RQi3AdoDOKhRw-sBOB9vz_NanShr2UPP',
    },
    {
      title: language === 'fr' ? 'Bioinformatique pour Biologistes' : 'Bioinformatics for Biologists',
      issuer: 'Wellcome Connecting Science',
      date: 'Oct 2023 (Score: 90%)',
      imageUrl: 'https://lh3.googleusercontent.com/d/1HSPjCr7c1IFbZsqIRAMuG5c9bodsyS2I',
    },
    {
      title: language === 'fr' ? 'Formation en Ingénierie Logicielle' : 'Software Engineering Training',
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

  // Conference photos — add your photos to /public/conferences/ and list them here
  const conferencePhotos: { src: string; caption: string; captionFr: string }[] = [
    // Example entries — replace with your actual files:
    { src: 'https://lh3.googleusercontent.com/d/100ycZiM1uvKCjYhGJPiwS0JT_Fsy4Bqz', caption: 'AI and students - NANGUI Abrogoua University 2025', captionFr: "L'IA et les étudiants - Université NANGUI Abrogoua 2025" },
    { src: 'https://lh3.googleusercontent.com/d/1XiFb1TyhCvUcPIt26op5_fzsA9OnDdmn', caption: 'AI for research writing and publishing', captionFr: "L'IA pour la recherche et la publication" },
    { src: 'https://lh3.googleusercontent.com/d/1pxF3bu-M1OnGCP0RPpTD9WbR5BtYRwSx', caption: 'eDNA Lab training from lab to Bioinformatics : first step', captionFr: 'Formation eDNA Lab, du laboratoire à la bioinformatique : premier pas' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-b border-border relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-start gap-6">
              {/* Profile photo — small, beside name */}
              <div className="hidden sm:block flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Hongo Koffi Anderson"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Hongo Koffi Anderson</h1>
                <p className="text-xl text-foreground/70 mb-4">{profileTitle}</p>
                <div className="flex flex-col gap-2 text-foreground/60">
                  <p>📍 Abidjan, Treichville, Côte d'Ivoire</p>
                  <p>📧 hkoffianderson@gmail.com • 📱 +225 0748915342</p>
                  <p>🔗 <a href="https://github.com/Bboy010" className="text-primary hover:underline">GitHub</a> • <a href="https://www.kaggle.com/hongo" className="text-primary hover:underline">Kaggle</a> • <a href="https://orcid.org/0009-0007-9997-3070" className="text-primary hover:underline">ORCID</a></p>
                </div>
              </div>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1zu4fyvIU0VxKyaRED-ZKg9rJ8K2NF7WH" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 smooth-transition">
                <Download size={20} className="mr-2" />
                {t('cv.download')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          {/* Professional Summary */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {summaryTitle}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {summaryText}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Code size={32} className="text-primary" />
              {skillsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {language === 'fr' ? 'Bioinformatique' : 'Bioinformatics'}
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  {bioinfSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {language === 'fr' ? 'Science des Données & IA' : 'Data Science & AI'}
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  {dataScienceSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience with Activity Cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase size={32} className="text-primary" />
              {experienceTitle}
            </h2>
            <div className="space-y-4">
              {experiences.map((experience) => (
                <ExpandableExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen size={32} className="text-primary" />
              {educationTitle}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-1">
                  {language === 'fr' ? 'Doctorant - Microbiologie Bioinformatique' : 'PhD Student - Microbiology Bioinformatics'}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {language === 'fr'
                    ? 'Université NANGUI Abrogoua • Mars 2024 - 2026'
                    : 'NANGUI Abrogoua University • March 2024 - 2026'}
                </p>
                <p className="text-foreground/70">
                  {language === 'fr'
                    ? 'Thème : Évaluation du potentiel génomique des communautés microbiennes du lac Kassembie pour la dégradation des microplastiques'
                    : 'Theme: Evaluation of the genomic potential of microbial communities in Lake Kassembie for microplastics degradation'}
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-1">
                  {language === 'fr' ? 'Master - Génétique et Amélioration des Bioressources' : 'Master\'s Degree - Genetics and Improvement of Bioresources'}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {language === 'fr'
                    ? 'Université NANGUI Abrogoua • Fév 2022 - Sept 2023 (GPA: 14.21/20)'
                    : 'NANGUI Abrogoua University • Feb 2022 - Sept 2023 (GPA: 14.21/20)'}
                </p>
                <p className="text-foreground/70">
                  {language === 'fr'
                    ? 'Thème : Caractérisation morphométrique de l\'abeille Apis mellifera adansonii'
                    : 'Theme: Morphometric characterization of the honeybee Apis mellifera adansonii'}
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-1">
                  {language === 'fr' ? 'Licence - Production Animale' : 'Bachelor\'s Degree - Animal Production'}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {language === 'fr'
                    ? 'Université NANGUI Abrogoua • Mars 2020 - Jan 2021 (GPA: 12.30/20)'
                    : 'NANGUI Abrogoua University • March 2020 - Jan 2021 (GPA: 12.30/20)'}
                </p>
                <p className="text-foreground/70">
                  {language === 'fr'
                    ? 'Thème : Relation longueur-longueur des espèces de requins du genre Carcharhinus'
                    : 'Theme: Length-length relationship of shark species of the genus Carcharhinus'}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications — flip cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Award size={32} className="text-primary" />
              {certificationsTitle}
            </h2>
            <p className="text-sm text-foreground/50 mb-6">
              {language === 'fr'
                ? 'Cliquez sur une carte pour voir le certificat'
                : 'Click a card to reveal the certificate'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <CertificateFlipCard
                  key={idx}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  imageUrl={cert.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{membershipsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-semibold text-foreground">
                  {language === 'fr'
                    ? 'Alliance de Santé Publique pour l\'Épidémiologie Génomique (PHA4GE)'
                    : 'Public Health Alliance for Genomic Epidemiology (PHA4GE)'}
                </p>
                <p className="text-sm text-foreground/70">
                  {language === 'fr'
                    ? 'Réseau international pour l\'épidémiologie génomique'
                    : 'International network for genomic epidemiology'}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-semibold text-foreground">
                  {language === 'fr'
                    ? 'Projet Africain du Biogénome (AfricaBP)'
                    : 'African BioGenome Project (AfricaBP)'}
                </p>
                <p className="text-sm text-foreground/70">
                  {language === 'fr'
                    ? 'Initiative panafricaine pour la génomique de la biodiversité'
                    : 'Pan-African initiative for biodiversity genomics'}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-semibold text-foreground">
                  {language === 'fr'
                    ? 'Centres de Contrôle et de Prévention des Maladies Afrique (AfricaCDC)'
                    : 'Centres for Disease Control and Prevention (AfricaCDC)'}
                </p>
                <p className="text-sm text-foreground/70">
                  {language === 'fr'
                    ? 'Réseau continental de santé publique'
                    : 'Continental public health network'}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-semibold text-foreground">
                  {language === 'fr'
                    ? 'Laboratoire Local d\'ADN Environnemental et Microbiologie (eDNA Lab)'
                    : 'Local lab for environmental DNA and microbiology (eDNA Lab)'}
                </p>
                <p className="text-sm text-foreground/70">
                  {language === 'fr'
                    ? 'Laboratoire de recherche en biodiversité'
                    : 'Biodiversity research laboratory'}
                </p>
              </div>
            </div>
          </div>

          {/* Conference Gallery */}
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Camera size={32} className="text-primary" />
              {conferenceGalleryTitle}
            </h2>
            <p className="text-foreground/60 mb-6 text-sm">{conferenceGallerySubtitle}</p>

            {conferencePhotos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {conferencePhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Fixed height container so all cards align regardless of image ratio */}
                    <div className="h-48 overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={photo.src}
                        alt={language === 'fr' ? photo.captionFr : photo.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-foreground/80">
                        {language === 'fr' ? photo.captionFr : photo.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Placeholder grid shown when no photos are added yet */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center aspect-video text-foreground/30 gap-2"
                  >
                    <ImageIcon size={32} />
                    <p className="text-xs text-center px-4">
                      {language === 'fr'
                        ? 'Ajoutez vos photos de conférence dans /public/conferences/'
                        : 'Add your conference photos to /public/conferences/'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
