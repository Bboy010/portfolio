import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Microscope, Brain, BarChart3, Code2, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = fr
    ? [
        { title: 'Conseil en Bioinformatique', description: "Expertise en analyse WGS, surveillance des pathogènes, développement de pipelines et interprétation des données génomiques.", features: ["Conception d'étude et méthodologie", 'Optimisation de pipeline', 'Analyse et interprétation des données', 'Dépannage technique', 'Préparation de manuscrits'], price: 'Devis Personnalisé' },
        { title: 'Formation en Bioinformatique', description: "Programmes de formation complets en analyse WGS, Nextflow/nf-core et meilleures pratiques bioinformatiques.", features: ['Ateliers pratiques', 'Formation aux pipelines', 'Maîtrise des outils', 'Meilleures pratiques', 'Support certification'], price: 'Devis Personnalisé' },
        { title: 'Développement de Pipelines', description: "Conception et implémentation de pipelines bioinformatiques personnalisés avec Nextflow/nf-core.", features: ['Conception de workflows', "Intégration d'outils", 'Optimisation', 'Documentation', 'Validation'], price: 'Devis Personnalisé' },
        { title: 'Analyse Statistique', description: "Analyse de données professionnelle, conseil statistique et développement de modèles d'apprentissage automatique.", features: ['Analyse exploratoire', 'Tests statistiques', 'Modélisation par régression', 'Développement de modèles ML', 'Visualisation'], price: 'Devis Personnalisé' },
        { title: 'Formation IA & LLM', description: "Formation en ingénierie des prompts, optimisation LLM et utilisation des outils IA pour la recherche et les entreprises.", features: ["Ingénierie des prompts", 'Comparaison des outils', 'Meilleures pratiques', 'Solutions personnalisées', 'Pratique intensive'], price: 'Devis Personnalisé' },
        { title: 'Projets de Data Science', description: "Solutions data science de bout en bout incluant analyse, visualisation et modélisation prédictive.", features: ['Nettoyage des données', 'EDA et visualisation', 'Développement de modèles', 'Génération de rapports', 'Support au déploiement'], price: 'Devis Personnalisé' },
      ]
    : [
        { title: 'Bioinformatics Consulting', description: 'Expert guidance on WGS analysis, pathogen surveillance, pipeline development, and genomic data interpretation.', features: ['Study design and methodology', 'Pipeline optimization', 'Data analysis and interpretation', 'Technical troubleshooting', 'Manuscript preparation'], price: 'Custom Quote' },
        { title: 'Bioinformatics Training', description: 'Comprehensive training programs in WGS analysis, Nextflow/nf-core, and bioinformatics best practices.', features: ['Hands-on workshops', 'Pipeline training', 'Tool mastery', 'Best practices', 'Certification support'], price: 'Custom Quote' },
        { title: 'Pipeline Development', description: 'Custom bioinformatics pipeline design and implementation using Nextflow/nf-core for your specific needs.', features: ['Workflow design', 'Tool integration', 'Optimization', 'Documentation', 'Validation'], price: 'Custom Quote' },
        { title: 'Statistical Analysis', description: 'Professional data analysis, statistical consulting, and machine learning model development.', features: ['Exploratory analysis', 'Statistical testing', 'Regression modeling', 'ML model development', 'Visualization'], price: 'Custom Quote' },
        { title: 'AI & LLM Training', description: 'Training in prompt engineering, LLM optimization, and AI tool usage for research and business.', features: ['Prompt engineering', 'Tool comparison', 'Best practices', 'Custom solutions', 'Hands-on practice'], price: 'Custom Quote' },
        { title: 'Data Science Projects', description: 'End-to-end data science solutions including analysis, visualization, and predictive modeling.', features: ['Data cleaning', 'EDA and visualization', 'Model development', 'Report generation', 'Deployment support'], price: 'Custom Quote' },
      ];

  const processSteps = fr
    ? [
        { step: '1', title: 'Consultation Initiale', description: 'Discuter de vos besoins, objectifs et exigences du projet en détail.' },
        { step: '2', title: 'Proposition & Planification', description: 'Élaborer une proposition personnalisée avec calendrier et livrables.' },
        { step: '3', title: 'Exécution', description: 'Mettre en œuvre la solution avec des mises à jour et communications régulières.' },
        { step: '4', title: 'Livraison & Support', description: 'Livrer les résultats avec documentation et support continu.' },
      ]
    : [
        { step: '1', title: 'Initial Consultation', description: 'Discuss your needs, goals, and project requirements in detail.' },
        { step: '2', title: 'Proposal & Planning', description: 'Develop a customized proposal with timeline and deliverables.' },
        { step: '3', title: 'Execution', description: 'Implement the solution with regular updates and communication.' },
        { step: '4', title: 'Delivery & Support', description: 'Deliver results with documentation and ongoing support.' },
      ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b border-border relative overflow-hidden">
        {/* Floating service icon silhouettes */}
        <div className="absolute top-4 right-8 flex gap-6 opacity-[0.07] dark:opacity-[0.05] pointer-events-none select-none">
          <Microscope size={64} className="text-orange-700 dark:text-orange-300" />
          <Brain size={64} className="text-orange-700 dark:text-orange-300 mt-4" />
          <BarChart3 size={64} className="text-orange-700 dark:text-orange-300" />
          <Code2 size={64} className="text-orange-700 dark:text-orange-300 mt-4" />
          <Award size={64} className="text-orange-700 dark:text-orange-300" />
          <Zap size={64} className="text-orange-700 dark:text-orange-300 mt-4" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="container relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {fr ? 'Services & Conseil' : 'Services & Consulting'}
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-6">
            {fr
              ? 'Services professionnels de bioinformatique, statistiques et conseil en IA adaptés à vos besoins de recherche et entreprise.'
              : 'Professional bioinformatics, statistics, and AI consulting services tailored to your research and business needs.'}
          </p>
          {/* Service category chips */}
          <div className="flex flex-wrap gap-2">
            {(fr
              ? ['Bioinformatique', 'IA & LLM', 'Statistiques', 'Pipelines', 'Formation', 'Data Science']
              : ['Bioinformatics', 'AI & LLM', 'Statistics', 'Pipelines', 'Training', 'Data Science']
            ).map(label => (
              <span key={label} className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/40 border border-orange-200/60 dark:border-orange-800/40 text-sm font-medium text-orange-700 dark:text-orange-300">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Nos Services' : 'Our Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition hover:shadow-lg">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Comment Nous Travaillons' : 'How We Work'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight size={24} className="text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                {fr ? 'Contactez-Moi' : 'Get In Touch'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hkoffianderson@gmail.com" className="text-primary hover:underline">hkoffianderson@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{fr ? 'Téléphone' : 'Phone'}</h3>
                    <a href="tel:+225748915342" className="text-primary hover:underline">+225 0748915342</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{fr ? 'Localisation' : 'Location'}</h3>
                    <p className="text-foreground/70">Abidjan, Treichville, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-border">
                <h3 className="font-semibold mb-3">{fr ? 'Délai de Réponse' : 'Response Time'}</h3>
                <p className="text-foreground/70 text-sm">
                  {fr
                    ? 'Je réponds généralement aux demandes dans les 24 à 48 heures. Pour les urgences, appelez directement.'
                    : 'I typically respond to inquiries within 24-48 hours. For urgent matters, please call directly.'}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">
                {fr ? 'Envoyer un Message' : 'Send a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{fr ? 'Nom' : 'Name'}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                    placeholder={fr ? 'Votre nom' : 'Your name'} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{fr ? 'Sujet' : 'Subject'}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition"
                    placeholder={fr ? "De quoi s'agit-il ?" : 'What is this about?'} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{fr ? 'Message' : 'Message'}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary smooth-transition resize-none"
                    placeholder={fr ? 'Parlez-moi de votre projet...' : 'Tell me about your project or inquiry...'} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 smooth-transition">
                  {submitted
                    ? (fr ? 'Message Envoyé !' : 'Message Sent!')
                    : (fr ? 'Envoyer le Message' : 'Send Message')}
                </Button>
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-300 text-sm">
                    {fr
                      ? 'Merci pour votre message ! Je vous répondrai sous peu.'
                      : 'Thank you for your message! I will get back to you shortly.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {fr ? 'Prêt à Démarrer Votre Projet ?' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {fr
              ? "Discutons de la façon dont je peux vous aider avec vos besoins en bioinformatique, statistiques ou IA."
              : "Let's discuss how I can help you with your bioinformatics, statistics, or AI needs."}
          </p>
          <a href="#contact" className="inline-block">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg smooth-transition">
              {fr ? 'Commencer' : 'Get Started'} <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
