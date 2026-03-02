import { Brain, Zap, Lightbulb, Target, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AI() {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const expertise = fr
    ? [
        { icon: Brain, title: 'Optimisation LLM', description: "Techniques avancées pour le réglage fin, l'accélération de l'inférence et le raisonnement afin d'optimiser les performances des modèles de langage et adapter le comportement aux besoins spécifiques." },
        { icon: Zap, title: 'Ingénierie des Prompts', description: "Maîtrise des techniques avancées de prompting pour extraire le maximum de valeur des modèles de langage et améliorer la qualité des réponses." },
        { icon: Lightbulb, title: 'Applications Génératives', description: "Développement d'applications d'IA génératives spécialisées pour la création de contenu, la rédaction scientifique et les tâches spécifiques à un domaine." },
        { icon: Target, title: 'Systèmes IA Agentifs', description: "Conception et déploiement d'agents IA avec bases de données vectorielles et LLMs spécialisés pour l'exécution autonome de tâches." },
        { icon: Users, title: 'Formation & Conseil en IA', description: "Programmes de formation complets en outils IA, ingénierie des prompts et meilleures pratiques pour les chercheurs et les professionnels." },
        { icon: TrendingUp, title: 'MLOps & Déploiement', description: "Conception MLOps spécialisée et stratégies de déploiement pour des systèmes IA prêts pour la production." },
      ]
    : [
        { icon: Brain, title: 'LLM Optimization', description: 'Advanced techniques for fine-tuning, inference acceleration, and reasoning to optimize language model performance and tailor behavior to specific needs.' },
        { icon: Zap, title: 'Prompt Engineering', description: 'Mastery of advanced prompting techniques to extract maximum value from language models and improve response quality.' },
        { icon: Lightbulb, title: 'Generative Applications', description: 'Development of specialized generative AI applications for content creation, scientific writing, and domain-specific tasks.' },
        { icon: Target, title: 'Agentic AI Systems', description: 'Design and deployment of AI agents with vector databases and specialized LLMs for autonomous task execution.' },
        { icon: Users, title: 'AI Training & Consulting', description: 'Comprehensive training programs in AI tools, prompt engineering, and best practices for researchers and professionals.' },
        { icon: TrendingUp, title: 'MLOps & Deployment', description: 'Specialized MLOps design and deployment strategies for production-ready AI systems.' },
      ];

  const capabilities = fr
    ? [
        {
          title: 'Techniques de Prompting Avancées',
          items: ['Prompting chaîne de pensée', 'Apprentissage few-shot', 'Prompting basé sur les rôles', 'Génération de sorties structurées', 'Raisonnement multi-étapes'],
        },
        {
          title: 'Optimisation des Modèles',
          items: ["Stratégies de réglage fin", "Accélération de l'inférence", 'Optimisation des tokens', 'Techniques de réduction des coûts', 'Benchmarking des performances'],
        },
        {
          title: 'Développement d\'Applications',
          items: ['Développement de chatbots', 'Systèmes de génération de contenu', "Pipelines d'analyse de documents", "Outils d'automatisation de la recherche", 'Workflows IA personnalisés'],
        },
      ]
    : [
        {
          title: 'Advanced Prompting Techniques',
          items: ['Chain-of-thought prompting', 'Few-shot learning', 'Role-based prompting', 'Structured output generation', 'Multi-step reasoning'],
        },
        {
          title: 'Model Optimization',
          items: ['Fine-tuning strategies', 'Inference acceleration', 'Token optimization', 'Cost reduction techniques', 'Performance benchmarking'],
        },
        {
          title: 'Application Development',
          items: ['Chatbot development', 'Content generation systems', 'Document analysis pipelines', 'Research automation tools', 'Custom AI workflows'],
        },
      ];

  const services = fr
    ? [
        { title: "Formation aux Outils IA", description: "Formation complète à l'utilisation des outils IA pour la création de contenu, la génération de documents, la création d'images et la production de vidéos.", features: ['Ateliers pratiques', 'Meilleures pratiques', 'Comparaison des outils', 'Exercices pratiques'] },
        { title: "Rédaction Scientifique avec l'IA", description: "Formation à l'utilisation des outils IA pour la rédaction, l'édition et la publication d'articles scientifiques avec rigueur académique maintenue.", features: ['Revue de littérature', 'Rédaction de manuscrits', "Assistance à l'édition", 'Stratégie de publication'] },
        { title: 'Solutions IA Personnalisées', description: "Développement d'applications IA spécialisées adaptées aux besoins de recherche et d'entreprise.", features: ["Optimisation des prompts", "Automatisation des workflows", "Services d'intégration", 'Conseil'] },
        { title: "Conseil en Ingénierie des Prompts", description: "Orientation experte pour créer des prompts efficaces et optimiser les interactions IA pour vos cas d'utilisation spécifiques.", features: ["Optimisation des prompts", 'Réglage des performances', 'Techniques avancées', 'Solutions personnalisées'] },
      ]
    : [
        { title: 'AI Tool Training', description: 'Comprehensive training in using AI tools for content creation, document generation, image creation, and video production.', features: ['Hands-on workshops', 'Best practices', 'Tool comparison', 'Practical exercises'] },
        { title: 'Scientific Writing with AI', description: 'Training in leveraging AI tools for writing, editing, and publishing scientific articles with maintained academic rigor.', features: ['Literature review', 'Manuscript drafting', 'Editing assistance', 'Publication strategy'] },
        { title: 'Custom AI Solutions', description: 'Development of specialized AI applications tailored to research and business needs.', features: ['Prompt optimization', 'Workflow automation', 'Integration services', 'Consulting'] },
        { title: 'Prompt Engineering Consulting', description: 'Expert guidance in crafting effective prompts and optimizing AI interactions for your specific use cases.', features: ['Prompt optimization', 'Performance tuning', 'Advanced techniques', 'Custom solutions'] },
      ];

  const tools = [
    { name: 'Claude AI', category: 'LLM' },
    { name: 'ChatGPT', category: 'LLM' },
    { name: 'Gemini', category: 'LLM' },
    { name: 'OpenAI API', category: 'API' },
    { name: 'LangChain', category: 'Framework' },
    { name: 'Vector Databases', category: 'Infrastructure' },
    { name: 'Consensus AI', category: fr ? 'Outils de Recherche' : 'Research Tools' },
    { name: 'Elicit', category: fr ? 'Outils de Recherche' : 'Research Tools' },
  ];

  const realWorldApps = fr
    ? [
        { color: 'border-primary', title: "Accélération de la Recherche Scientifique", text: "Utilisation de l'IA pour accélérer la revue de littérature, la génération d'hypothèses et la rédaction de manuscrits tout en maintenant la rigueur scientifique." },
        { color: 'border-purple-500', title: "Automatisation de la Bioinformatique", text: "Automatisation par IA des tâches bioinformatiques routinières, de l'analyse des données et de la génération de rapports." },
        { color: 'border-blue-500', title: "Création de Contenu & Documentation", text: "Utilisation de l'IA pour créer de la documentation technique, du matériel de formation et du contenu éducatif." },
        { color: 'border-green-500', title: "Workflows IA Personnalisés", text: "Construction de workflows IA spécialisés adaptés aux besoins spécifiques de recherche ou d'entreprise avec des performances optimales." },
      ]
    : [
        { color: 'border-primary', title: 'Scientific Research Acceleration', text: 'Using AI to accelerate literature review, hypothesis generation, and manuscript writing while maintaining scientific rigor.' },
        { color: 'border-purple-500', title: 'Bioinformatics Automation', text: 'AI-powered automation of routine bioinformatics tasks, data analysis, and report generation.' },
        { color: 'border-blue-500', title: 'Content Creation & Documentation', text: 'Leveraging AI for creating technical documentation, training materials, and educational content.' },
        { color: 'border-green-500', title: 'Custom AI Workflows', text: 'Building specialized AI workflows tailored to specific research or business needs with optimal performance.' },
      ];

  const trainingGroups = fr
    ? [
        { title: 'Pour les Chercheurs', items: ['Accélérer les workflows de recherche', 'Améliorer la rédaction et la communication', 'Automatiser les tâches répétitives', "Améliorer l'analyse des données"] },
        { title: 'Pour les Professionnels', items: ['Optimiser les processus métier', 'Développer des solutions personnalisées', 'Améliorer la productivité', "Rester à la pointe des tendances IA"] },
      ]
    : [
        { title: 'For Researchers', items: ['Accelerate research workflows', 'Improve writing and communication', 'Automate repetitive tasks', 'Enhance data analysis'] },
        { title: 'For Professionals', items: ['Optimize business processes', 'Develop custom solutions', 'Improve productivity', 'Stay ahead of AI trends'] },
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="section-padding bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-b border-border relative overflow-hidden">
        {/* Decorative pulsing nodes — neural network feel */}
        {[
          { top: '15%', left: '72%', size: 'w-3 h-3' },
          { top: '55%', left: '80%', size: 'w-2 h-2' },
          { top: '30%', left: '88%', size: 'w-4 h-4' },
          { top: '70%', left: '75%', size: 'w-2 h-2' },
          { top: '20%', left: '95%', size: 'w-3 h-3' },
          { top: '80%', left: '90%', size: 'w-3 h-3' },
        ].map((node, i) => (
          <div
            key={i}
            className={`absolute ${node.size} rounded-full bg-purple-400/30 dark:bg-purple-400/20 pointer-events-none`}
            style={{ top: node.top, left: node.left, animation: `pulse ${2 + i * 0.4}s ease-in-out infinite` }}
          />
        ))}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

        <div className="container relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40">
              <Brain size={36} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              {fr ? "Expertise en IA Agentive" : "Agentic AI Expertise"}
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl mb-6">
            {fr
              ? "Expertise avancée en optimisation de modèles de langage, ingénierie des prompts, applications génératives et développement d'agents IA. Spécialisé dans des solutions IA pratiques pour la recherche et les entreprises."
              : "Advanced expertise in language model optimization, prompt engineering, generative applications, and AI agent development. Specializing in practical AI solutions for research and business."}
          </p>
          {/* LLM / AI model badges */}
          <div className="flex flex-wrap gap-2">
            {['Claude', 'GPT-4', 'Gemini', 'LLaMA', 'Mistral', 'Prompt Engineering', 'RAG', 'MLOps'].map(label => (
              <span key={label} className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 text-sm font-medium text-purple-700 dark:text-purple-300">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Expertise Principale en IA" : "Core AI Expertise"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-purple-100 dark:bg-purple-950/30">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Capacités Clés" : "Key Capabilities"}
            </h2>
            <div className="space-y-4">
              {capabilities.map((section, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{section.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Services IA & Formation" : "AI Services & Training"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Outils & Plateformes" : "Tools & Platforms"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 smooth-transition text-center">
                  <p className="font-semibold text-foreground">{tool.name}</p>
                  <p className="text-xs text-foreground/60 mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Applications Concrètes" : "Real-World Applications"}
            </h2>
            <div className="space-y-4">
              {realWorldApps.map((app, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-l-4 ${app.color} bg-card`}>
                  <h3 className="font-semibold mb-2">{app.title}</h3>
                  <p className="text-foreground/70">{app.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Philosophie de Formation" : "Training Philosophy"}
            </h2>
            <div className="p-8 rounded-xl border-2 border-primary bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <p className="text-lg text-foreground/80 mb-6">
                {fr
                  ? "Mon approche de formation en IA combine l'expérience pratique et la compréhension théorique, garantissant que les apprenants peuvent immédiatement appliquer les connaissances à leur travail."
                  : "My AI training approach combines practical hands-on experience with theoretical understanding, ensuring learners can immediately apply knowledge to their work."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingGroups.map((group, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold mb-3 text-primary">{group.title}</h3>
                    <ul className="space-y-2 text-foreground/70">
                      {group.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
