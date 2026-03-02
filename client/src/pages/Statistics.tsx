import { BarChart3, LineChart, PieChart, Zap, BookOpen, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Statistics() {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const expertise = fr
    ? [
        { icon: BarChart3, title: 'Statistiques Descriptives', description: "Résumé complet des données, analyse des distributions et techniques d'analyse exploratoire des données (EDA)." },
        { icon: LineChart, title: 'Statistiques Inférentielles', description: "Tests d'hypothèses, intervalles de confiance, analyse de régression et modélisation statistique." },
        { icon: PieChart, title: 'Visualisation des Données', description: "Création de visualisations percutantes avec R (ggplot2, plotly) et Python (matplotlib, seaborn)." },
        { icon: Zap, title: 'Apprentissage Automatique', description: "Classification, clustering, NLP et modélisation prédictive avec scikit-learn et TensorFlow." },
        { icon: BookOpen, title: 'Formation en Statistiques', description: "Enseignement des statistiques appliquées avec guidance étape par étape et apprentissage basé sur des projets." },
        { icon: Code2, title: 'Programmation & Scripts', description: "Programmation avancée en R et Python pour l'analyse statistique et la manipulation des données." },
      ]
    : [
        { icon: BarChart3, title: 'Descriptive Statistics', description: 'Comprehensive data summarization, distribution analysis, and exploratory data analysis (EDA) techniques.' },
        { icon: LineChart, title: 'Inferential Statistics', description: 'Hypothesis testing, confidence intervals, regression analysis, and statistical modeling.' },
        { icon: PieChart, title: 'Data Visualization', description: 'Creating compelling visualizations with R (ggplot2, plotly) and Python (matplotlib, seaborn).' },
        { icon: Zap, title: 'Machine Learning', description: 'Classification, clustering, NLP, and predictive modeling with scikit-learn and TensorFlow.' },
        { icon: BookOpen, title: 'Statistical Training', description: 'Teaching applied statistics with step-by-step guidance and project-based learning approaches.' },
        { icon: Code2, title: 'Programming & Scripting', description: 'Advanced R and Python programming for statistical analysis and data manipulation.' },
      ];

  const methods = fr
    ? [
        { category: 'Analyse Descriptive', items: ['Statistiques résumées et distributions', 'Analyse de corrélation et covariance', 'Analyse des séries temporelles', 'Analyse exploratoire des données (EDA)', 'Évaluation de la qualité des données'] },
        { category: 'Statistiques Inférentielles', items: ["Tests d'hypothèses (t-tests, ANOVA, chi-carré)", "Intervalles de confiance et estimation d'erreur", 'Régression linéaire et logistique', 'Modèles linéaires généralisés (GLM)', 'Modèles à effets mixtes'] },
        { category: 'Apprentissage Automatique', items: ['Apprentissage supervisé (classification, régression)', 'Apprentissage non supervisé (clustering, réduction dimensionnelle)', 'Traitement du Langage Naturel (NLP)', "Ingénierie et sélection de features", "Évaluation et validation de modèles"] },
        { category: 'Techniques Avancées', items: ['Statistiques bayésiennes et inférence', 'Analyse de survie', 'Analyse multivariée', 'Inférence causale', 'Méthodes ensemblistes'] },
      ]
    : [
        { category: 'Descriptive Analysis', items: ['Summary statistics and distributions', 'Correlation and covariance analysis', 'Time series analysis', 'Exploratory data analysis (EDA)', 'Data quality assessment'] },
        { category: 'Inferential Statistics', items: ['Hypothesis testing (t-tests, ANOVA, chi-square)', 'Confidence intervals and error estimation', 'Linear and logistic regression', 'Generalized linear models (GLM)', 'Mixed effects models'] },
        { category: 'Machine Learning', items: ['Supervised learning (classification, regression)', 'Unsupervised learning (clustering, dimensionality reduction)', 'Natural Language Processing (NLP)', 'Feature engineering and selection', 'Model evaluation and validation'] },
        { category: 'Advanced Techniques', items: ['Bayesian statistics and inference', 'Survival analysis', 'Multivariate analysis', 'Causal inference', 'Ensemble methods'] },
      ];

  const tools = fr
    ? [
        { name: 'R/RStudio', category: 'Calcul Statistique', proficiency: 'Expert' },
        { name: 'Python', category: 'Science des Données', proficiency: 'Expert' },
        { name: 'ggplot2', category: 'Visualisation (R)', proficiency: 'Expert' },
        { name: 'Plotly', category: 'Visualisation Interactive', proficiency: 'Avancé' },
        { name: 'pandas', category: 'Manipulation de Données', proficiency: 'Expert' },
        { name: 'scikit-learn', category: 'Apprentissage Automatique', proficiency: 'Avancé' },
        { name: 'TensorFlow/Keras', category: 'Apprentissage Profond', proficiency: 'Intermédiaire' },
        { name: 'Power BI', category: 'Business Intelligence', proficiency: 'Avancé' },
        { name: 'Excel', category: 'Analyse de Données', proficiency: 'Expert' },
        { name: 'Jupyter', category: 'Notebooks', proficiency: 'Expert' },
      ]
    : [
        { name: 'R/RStudio', category: 'Statistical Computing', proficiency: 'Expert' },
        { name: 'Python', category: 'Data Science', proficiency: 'Expert' },
        { name: 'ggplot2', category: 'Visualization (R)', proficiency: 'Expert' },
        { name: 'Plotly', category: 'Interactive Visualization', proficiency: 'Advanced' },
        { name: 'pandas', category: 'Data Manipulation (Python)', proficiency: 'Expert' },
        { name: 'scikit-learn', category: 'Machine Learning', proficiency: 'Advanced' },
        { name: 'TensorFlow/Keras', category: 'Deep Learning', proficiency: 'Intermediate' },
        { name: 'Power BI', category: 'Business Intelligence', proficiency: 'Advanced' },
        { name: 'Excel', category: 'Data Analysis', proficiency: 'Expert' },
        { name: 'Jupyter', category: 'Notebooks', proficiency: 'Expert' },
      ];

  const services = fr
    ? [
        { title: 'Conseil Statistique', description: "Orientation experte sur la conception d'étude, l'analyse des données et l'interprétation statistique pour les projets de recherche.", offerings: ["Conception d'étude et analyse de puissance", "Planification de l'analyse des données", "Interprétation statistique", "Rédaction de rapports"] },
        { title: "Formation en Analyse de Données", description: "Formation complète en statistiques appliquées, des concepts de base aux techniques avancées.", offerings: ['Statistiques descriptives', 'Analyse inférentielle', 'Modélisation par régression', "Bases de l'apprentissage automatique"] },
        { title: 'Formation Excel Avancée', description: "Maîtriser Excel pour l'analyse de données incluant Power Query, tableaux de bord et fonctions avancées.", offerings: ['Power Query et transformation des données', 'Tableaux de bord interactifs', 'Formules avancées', 'Visualisation de données'] },
        { title: "Projets d'Apprentissage Automatique", description: "Développement de solutions ML personnalisées pour la classification, la prédiction et la découverte de patterns.", offerings: ['Développement de modèles', "Ingénierie de features", 'Évaluation de modèles', 'Support au déploiement'] },
      ]
    : [
        { title: 'Statistical Consulting', description: 'Expert guidance on study design, data analysis, and statistical interpretation for research projects.', offerings: ['Study design and power analysis', 'Data analysis planning', 'Statistical interpretation', 'Report writing'] },
        { title: 'Data Analysis Training', description: 'Comprehensive training in applied statistics, from basic concepts to advanced techniques.', offerings: ['Descriptive statistics', 'Inferential analysis', 'Regression modeling', 'Machine learning basics'] },
        { title: 'Advanced Excel Training', description: 'Master Excel for data analysis including Power Query, dashboards, and advanced functions.', offerings: ['Power Query and data transformation', 'Interactive dashboards', 'Advanced formulas', 'Data visualization'] },
        { title: 'Machine Learning Projects', description: 'Development of custom ML solutions for classification, prediction, and pattern discovery.', offerings: ['Model development', 'Feature engineering', 'Model evaluation', 'Deployment support'] },
      ];

  const trainingPhilosophy = fr
    ? [
        { color: 'border-primary', title: "Apprentissage Étape par Étape", text: "Décomposer les concepts statistiques complexes en étapes gérables et compréhensibles avec des exemples clairs." },
        { color: 'border-green-500', title: "Formation Basée sur des Projets", text: "Projets pratiques qui appliquent les concepts statistiques à des données et scénarios de recherche réels." },
        { color: 'border-blue-500', title: "Feedback Actif & Suivi", text: "Évaluation continue des progrès des apprenants avec feedback personnalisé et ajustement du contenu." },
        { color: 'border-purple-500', title: "Application Pratique", text: "Accent sur l'application des connaissances statistiques pour résoudre de vrais problèmes en recherche et entreprise." },
      ]
    : [
        { color: 'border-primary', title: 'Step-by-Step Learning', text: 'Breaking down complex statistical concepts into manageable, understandable steps with clear examples.' },
        { color: 'border-green-500', title: 'Project-Based Training', text: 'Hands-on projects that apply statistical concepts to real-world data and research scenarios.' },
        { color: 'border-blue-500', title: 'Active Feedback & Monitoring', text: 'Continuous assessment of learner progress with personalized feedback and content adjustment.' },
        { color: 'border-purple-500', title: 'Practical Application', text: 'Focus on applying statistical knowledge to solve real problems in research and business.' },
      ];

  const mlApps = fr
    ? [
        { title: 'Tâches de Classification', items: ['Prédiction de maladies à partir de données génomiques', 'Identification de pathogènes', 'Classification de phénotypes de résistance', 'Automatisation du typage de souches'] },
        { title: 'Traitement du Langage Naturel', items: ['Exploration de la littérature scientifique', 'Classification de textes', "Extraction d'informations", 'Analyse de sentiment'] },
        { title: 'Clustering & Réduction Dimensionnelle', items: ['Analyse des communautés microbiennes', "Clustering d'expression génique", 'Visualisation PCA et t-SNE', 'Clustering hiérarchique'] },
        { title: 'Modélisation Prédictive', items: ["Prédiction d'épidémies", "Prévision de l'émergence de résistances", 'Analyse de séries temporelles', 'Modélisation épidémiologique'] },
      ]
    : [
        { title: 'Classification Tasks', items: ['Disease prediction from genomic data', 'Pathogen identification', 'Resistance phenotype classification', 'Strain typing automation'] },
        { title: 'Natural Language Processing', items: ['Scientific literature mining', 'Text classification', 'Information extraction', 'Sentiment analysis'] },
        { title: 'Clustering & Dimensionality Reduction', items: ['Microbial community analysis', 'Gene expression clustering', 'PCA and t-SNE visualization', 'Hierarchical clustering'] },
        { title: 'Predictive Modeling', items: ['Outbreak prediction', 'Resistance emergence forecasting', 'Time series analysis', 'Epidemiological modeling'] },
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20 border-b border-border relative overflow-hidden">
        {/* Decorative bar chart in the corner */}
        <div className="absolute right-8 bottom-0 flex items-end gap-1.5 h-full opacity-[0.08] dark:opacity-[0.06] pointer-events-none select-none">
          {[38, 62, 45, 78, 55, 90, 48, 72, 60, 85, 42, 68].map((h, i) => (
            <div
              key={i}
              className="w-5 bg-emerald-600 dark:bg-emerald-400 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="absolute -top-6 -left-6 w-52 h-52 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
              <BarChart3 size={36} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              {fr ? 'Statistiques & Science des Données' : 'Statistics & Data Science'}
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl mb-6">
            {fr
              ? "Expertise avancée en analyse statistique, apprentissage automatique, visualisation de données et formation. Transformer les données en insights avec R, Python et les outils modernes de data science."
              : "Advanced expertise in statistical analysis, machine learning, data visualization, and training. Transforming data into insights with R, Python, and modern data science tools."}
          </p>
          {/* Stack badges */}
          <div className="flex flex-wrap gap-2">
            {['R', 'Python', 'ggplot2', 'scikit-learn', 'TensorFlow', 'pandas', 'plotly', 'SPSS'].map(label => (
              <span key={label} className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-sm font-mono text-emerald-700 dark:text-emerald-300">
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
              {fr ? 'Expertise Principale' : 'Core Expertise'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-green-100 dark:bg-green-950/30">
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
              {fr ? 'Méthodes & Techniques Statistiques' : 'Statistical Methods & Techniques'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methods.map((method, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{method.category}</h3>
                  <ul className="space-y-2">
                    {method.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Outils & Technologies' : 'Tools & Technologies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 smooth-transition">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{tool.name}</h3>
                    <span className="text-xs font-medium text-primary bg-blue-100 dark:bg-blue-950/30 px-2 py-1 rounded">
                      {tool.proficiency}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Services & Formation' : 'Services & Training'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.offerings.map((offering, oidx) => (
                      <div key={oidx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Philosophie de Formation' : 'Training Philosophy'}
            </h2>
            <div className="space-y-4">
              {trainingPhilosophy.map((item, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-l-4 ${item.color} bg-card`}>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              {fr ? "Applications de l'Apprentissage Automatique" : 'Machine Learning Applications'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mlApps.map((app, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3 text-primary">{app.title}</h3>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    {app.items.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
