import { Download, Code, Briefcase, BookOpen, Award, Camera, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ExpandableExperienceCard from '@/components/ExpandableExperienceCard';
import CertificateFlipCard from '@/components/CertificateFlipCard';
import { experiences } from '@/data/experiences';
import {
  getProfileTitle,
  getSummary,
  getBioinfSkills,
  getDataScienceSkills,
  getCertifications,
  getEducation,
  getPublication,
  getMemberships,
} from '@/data/cvData';

export default function CV() {
  const { language, t } = useLanguage();

  const profileTitle = getProfileTitle(language);
  const summaryText = getSummary(language);
  const bioinfSkills = getBioinfSkills(language).map((s) => `• ${s}`);
  const dataScienceSkills = getDataScienceSkills(language).map((s) => `• ${s}`);
  const certifications = getCertifications(language);
  const education = getEducation(language);
  const publication = getPublication(language);
  const memberships = getMemberships(language);

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
                  <p>🔗 <a href="https://github.com/Bboy010" className="text-primary hover:underline">GitHub</a> • <a href="https://www.kaggle.com/hongokoffianderson" className="text-primary hover:underline">Kaggle</a> • <a href="https://orcid.org/0009-0007-9997-3070" className="text-primary hover:underline">ORCID</a></p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="/cv-print" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 smooth-transition">
                  <Download size={20} className="mr-2" />
                  {t('cv.download')}
                </Button>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1zu4fyvIU0VxKyaRED-ZKg9rJ8K2NF7WH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-primary hover:underline"
              >
                {language === 'fr' ? 'Version PDF statique' : 'Static PDF version'}
              </a>
            </div>
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
              {education.map((item, idx) => (
                <div key={idx} className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.institution}</p>
                  <p className="text-foreground/70">{item.theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen size={32} className="text-primary" />
              Publications
            </h2>
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">
                {publication.status}
              </p>
              <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
              <p className="text-foreground/70 mb-2">
                <strong>Hongo K.A.</strong>, {publication.authors.replace('Hongo K.A., ', '')}
              </p>
              <p className="text-sm text-foreground/60 mb-3">{publication.venue}</p>
              <p className="text-foreground/70 mb-3">{publication.abstract}</p>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                {language === 'fr' ? "Voir l'article →" : 'View article →'}
              </a>
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
              {memberships.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-foreground">{m.name}</p>
                  <p className="text-sm text-foreground/70">{m.description}</p>
                </div>
              ))}
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
