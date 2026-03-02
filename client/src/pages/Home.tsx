import { Button } from '@/components/ui/button';
import { ArrowRight, Microscope, Brain, BarChart3, Code2, Award, Zap, Github, Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { icon: Github,   href: 'https://github.com/Bboy010',                                          label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/hongo-koffi-anderson-a0b5a7289/',        label: 'LinkedIn' },
  { icon: Youtube,  href: 'https://www.youtube.com/@HongoKoffiAnderson',                        label: 'YouTube' },
  { icon: Mail,     href: 'mailto:hkoffianderson@gmail.com',                                    label: 'Email' },
  { icon: ExternalLink, href: 'https://orcid.org/0009-0007-9997-3070',                          label: 'ORCID' },
];

export default function Home() {
  const { t, language } = useLanguage();
  const fr = language === 'fr';

  const expertise = fr
    ? [
        { icon: Microscope, title: 'Analyse WGS Bactérienne', description: 'Expertise en Séquençage du Génome Entier pour la surveillance de Neisseria meningitidis, Streptococcus pneumoniae et Haemophilus influenzae.' },
        { icon: Brain, title: 'IA Agentive', description: "Ingénierie des prompts, optimisation LLM et développement d'applications génératives avec MLOps spécialisé." },
        { icon: BarChart3, title: 'Science des Données', description: 'Analyse statistique avancée, apprentissage automatique et visualisation de données avec R et Python.' },
        { icon: Code2, title: 'Pipelines Bioinformatiques', description: 'Workflows Nextflow/nf-core, profilage AMR, reconstruction phylogénétique et validation de pipelines.' },
        { icon: Award, title: 'Formation & Conseil', description: "Formation spécialisée en bioinformatique, statistiques et outils IA pour la recherche et l'industrie." },
        { icon: Zap, title: 'Solutions à Ressources Limitées', description: 'Workflows bioinformatiques optimisés pour les environnements à ressources informatiques limitées.' },
      ]
    : [
        { icon: Microscope, title: 'Bacterial WGS Analysis', description: 'Expertise in Whole Genome Sequencing for Neisseria meningitidis, Streptococcus pneumoniae, and Haemophilus influenzae surveillance.' },
        { icon: Brain, title: 'Agentic AI', description: 'Prompt engineering, LLM optimization, and development of generative applications with specialized MLOps.' },
        { icon: BarChart3, title: 'Data Science', description: 'Advanced statistical analysis, machine learning, and data visualization with R and Python.' },
        { icon: Code2, title: 'Bioinformatics Pipelines', description: 'Nextflow/nf-core workflows, AMR profiling, phylogenetic reconstruction, and pipeline validation.' },
        { icon: Award, title: 'Training & Consulting', description: 'Specialized training in bioinformatics, statistics, and AI tools for research and industry.' },
        { icon: Zap, title: 'Resource-Constrained Solutions', description: 'Optimized bioinformatics workflows for environments with limited computational resources.' },
      ];

  const bullets = fr
    ? [
        { label: 'Surveillance des pathogènes', value: 'Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae' },
        { label: 'Compétences techniques', value: 'Analyse WGS, profilage AMR, phylogénétique, Nextflow/nf-core' },
        { label: 'Expertise en IA', value: 'Optimisation LLM, ingénierie des prompts, applications génératives' },
      ]
    : [
        { label: 'Pathogen Surveillance', value: 'Neisseria meningitidis, Streptococcus pneumoniae, Haemophilus influenzae' },
        { label: 'Technical Skills', value: 'WGS analysis, AMR profiling, phylogenetics, Nextflow/nf-core' },
        { label: 'AI Expertise', value: 'LLM optimization, prompt engineering, generative applications' },
      ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20 relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">{t('home.title')}</span>
                  <br />
                  <span className="text-foreground">{t('home.subtitle')}</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
                {t('home.description')}
              </p>

              <ul className="space-y-3 text-foreground/80">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>{b.label} :</strong> {b.value}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/services">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-all duration-300 ease-out">
                    {t('home.cta')} <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <a href="/cv">
                  <Button variant="outline" className="px-8 py-6 text-lg transition-all duration-300 ease-out">
                    {t('home.cv')}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — Profile Photo + Social Links */}
            <div className="hidden lg:flex flex-col items-center gap-6">
              {/* Photo circle */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl opacity-60 scale-110 pointer-events-none" />
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl ring-4 ring-primary/10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Hongo Koffi Anderson"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  
                </div>
                <div
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30 pointer-events-none"
                  style={{ animation: 'spin 20s linear infinite' }}
                />
              </div>

              {/* Name + title badge */}
              <div className="text-center">
                <p className="font-bold text-lg text-foreground">Hongo Koffi Anderson</p>
                <p className="text-sm text-foreground/60">
                  {fr ? 'Doctorant · Bioinformaticien · Spécialiste IA' : 'PhD Student· Bioinformatician · AI Specialist'}
                </p>
              </div>

              {/* Social links row */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-sm"
                    title={label}
                  >
                    <Icon size={16} className="text-foreground/70 group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile social links — shown on small screens */}
          <div className="flex lg:hidden justify-center gap-3 mt-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Icon size={16} className="text-foreground/70 group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Expertise ── */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('home.expertise')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {fr ? 'Solutions complètes en bioinformatique, science des données et IA' : 'Comprehensive solutions spanning bioinformatics, data science, and AI'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 ease-out hover:scale-105">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-blue-100 dark:bg-blue-950/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ease-out">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.ready')}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">{t('home.ready_desc')}</p>
          <a href="/services">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg transition-all duration-300 ease-out">
              {t('home.explore')} <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
