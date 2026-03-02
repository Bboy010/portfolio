import { Microscope, Zap, Shield, Database, GitBranch, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Bioinformatics() {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const workflows = fr
    ? [
        { title: 'Contrôle Qualité & Prétraitement', description: 'Évaluation de la qualité avec FastQC, rognage des adaptateurs avec fastp/Trimmomatic, déduplication UMI et suppression des lectures hôtes avec Kraken2.', tools: ['FastQC', 'fastp', 'Trimmomatic', 'HUMID', 'Kraken2'] },
        { title: 'Assemblage De Novo', description: 'Assemblage avec SPAdes/TRINITY/megahit, extension de contigs avec sspace_basic, filtrage avec prinseq++ et classification taxonomique.', tools: ['SPAdes', 'TRINITY', 'megahit', 'CD-HIT-EST', 'Kraken2', 'Kaiju'] },
        { title: 'Cartographie de Référence & Appel de Variants', description: 'Cartographie des lectures avec Bowtie2/BWA-MEM2, appel de variants avec BCFtools/iVar et création du génome de consensus.', tools: ['Bowtie2', 'BWA-MEM2', 'BCFtools', 'iVar', 'Picard', 'samtools'] },
        { title: 'Annotation & Analyse du Génome', description: 'Annotation de variants avec SnpEff/SnpSift, annotation du génome avec Prokka et évaluation du consensus avec QUAST/CheckV.', tools: ['SnpEff', 'SnpSift', 'Prokka', 'QUAST', 'CheckV', 'MAFFT'] },
        { title: 'Analyse Phylogénétique & Épidémiologique', description: 'MLST et typage de séquences, identification du locus capsulaire, extraction des SNP du génome de base et inférence phylogénétique.', tools: ['MLST', 'Colabfold', 'ECPred', 'MeTarEnz', 'MultiQC'] },
        { title: 'Profilage de la Résistance aux Antimicrobiens (AMR)', description: 'Détection complète des gènes AMR, identification des mécanismes de résistance et interprétation clinique pour la surveillance.', tools: ['AMRFinderPlus', 'ResFinder', 'CARD', 'Custom Python scripts'] },
      ]
    : [
        { title: 'Quality Control & Preprocessing', description: 'FastQC for quality assessment, adapter trimming with fastp/Trimmomatic, UMI deduplication, and host-read removal using Kraken2.', tools: ['FastQC', 'fastp', 'Trimmomatic', 'HUMID', 'Kraken2'] },
        { title: 'De Novo Assembly', description: 'Assembly with SPAdes/TRINITY/megahit, contig extension with sspace_basic, filtering with prinseq++, and taxonomic classification.', tools: ['SPAdes', 'TRINITY', 'megahit', 'CD-HIT-EST', 'Kraken2', 'Kaiju'] },
        { title: 'Reference Mapping & Variant Calling', description: 'Read mapping with Bowtie2/BWA-MEM2, variant calling with BCFtools/iVar, and consensus genome creation.', tools: ['Bowtie2', 'BWA-MEM2', 'BCFtools', 'iVar', 'Picard', 'samtools'] },
        { title: 'Genome Annotation & Analysis', description: 'Variant annotation with SnpEff/SnpSift, genome annotation with Prokka, and consensus evaluation with QUAST/CheckV.', tools: ['SnpEff', 'SnpSift', 'Prokka', 'QUAST', 'CheckV', 'MAFFT'] },
        { title: 'Phylogenetic & Epidemiological Analysis', description: 'MLST and sequence typing, capsular locus identification, core genome SNP extraction, and phylogenetic inference.', tools: ['MLST', 'Colabfold', 'ECPred', 'MeTarEnz', 'MultiQC'] },
        { title: 'Antimicrobial Resistance (AMR) Profiling', description: 'Comprehensive AMR gene detection, resistance mechanism identification, and clinical interpretation for surveillance.', tools: ['AMRFinderPlus', 'ResFinder', 'CARD', 'Custom Python scripts'] },
      ];

  const pathogens = fr
    ? [
        { name: 'Neisseria meningitidis', description: "Taux de recombinaison élevés nécessitant un masquage. Les événements de commutation capsulaire impactent l'interprétation épidémiologique.", expertise: 'Surveillance WGS, typage capsulaire, profilage AMR' },
        { name: 'Streptococcus pneumoniae', description: "Le transfert horizontal de gènes et les éléments mobiles influencent le profilage AMR. Nécessite des workflows adaptables à la diversité de l'espèce.", expertise: "Identification des sérotypes, suivi de la résistance aux antimicrobiens" },
        { name: 'Haemophilus influenzae', description: "Faible charge bactérienne ou infections mixtes dans les échantillons cliniques. La qualité et la complétude des métadonnées sont essentielles pour l'analyse des épidémies.", expertise: 'Détermination du biotype, analyse des profils de résistance' },
      ]
    : [
        { name: 'Neisseria meningitidis', description: 'High recombination rates requiring recombination masking. Capsular switching events impact epidemiological interpretation.', expertise: 'WGS surveillance, capsular typing, AMR profiling' },
        { name: 'Streptococcus pneumoniae', description: 'Horizontal gene transfer and mobile elements influence AMR profiling. Requires adaptable workflows for species diversity.', expertise: 'Serotype identification, antimicrobial resistance tracking' },
        { name: 'Haemophilus influenzae', description: 'Low bacterial load or mixed infections in clinical samples. Quality and completeness of metadata critical for outbreak analysis.', expertise: 'Biotype determination, resistance pattern analysis' },
      ];

  const toolCategories = fr
    ? [
        { category: 'Gestion des Workflows', items: ['Nextflow', 'nf-core', 'Conda', 'Singularity', 'Docker'] },
        { category: 'Contrôle Qualité', items: ['FastQC', 'MultiQC', 'Samtools', 'Picard', 'mosdepth'] },
        { category: 'Assemblage & Cartographie', items: ['SPAdes', 'Bowtie2', 'BWA-MEM2', 'Minimap2', 'BLAST'] },
        { category: 'Analyse de Variants', items: ['BCFtools', 'iVar', 'SnpEff', 'VEP', 'GATK'] },
        { category: 'Métagénomique', items: ['Kraken2', 'Bracken', 'Kaiju', 'QIIME2', 'MetaPhlAn4'] },
        { category: 'Phylogénétique', items: ['IQ-TREE', 'RAxML', 'MAFFT', 'Clustal', 'MUSCLE'] },
      ]
    : [
        { category: 'Workflow Management', items: ['Nextflow', 'nf-core', 'Conda', 'Singularity', 'Docker'] },
        { category: 'Quality Control', items: ['FastQC', 'MultiQC', 'Samtools', 'Picard', 'mosdepth'] },
        { category: 'Assembly & Mapping', items: ['SPAdes', 'Bowtie2', 'BWA-MEM2', 'Minimap2', 'BLAST'] },
        { category: 'Variant Analysis', items: ['BCFtools', 'iVar', 'SnpEff', 'VEP', 'GATK'] },
        { category: 'Metagenomics', items: ['Kraken2', 'Bracken', 'Kaiju', 'QIIME2', 'MetaPhlAn4'] },
        { category: 'Phylogenetics', items: ['IQ-TREE', 'RAxML', 'MAFFT', 'Clustal', 'MUSCLE'] },
      ];

  const pipelineSteps = fr
    ? [
        'Évaluation et filtrage de la qualité des lectures brutes',
        'Rognage des adaptateurs et dépistage des contaminations',
        "Suppression des contaminations de l'hôte (le cas échéant)",
        'Assemblage de référence et de novo',
        "Évaluation de la qualité et annotation de l'assemblage",
        'MLST et typage de séquences',
        'Identification du locus capsulaire',
        "Détection des gènes de résistance aux antimicrobiens (AMR)",
        'Extraction des SNP du génome de base',
        "Inférence phylogénétique et construction d'arbres",
        'Harmonisation et standardisation des métadonnées',
        'Rapports reproductibles et visualisation',
      ]
    : [
        'Raw read quality assessment and filtering',
        'Adapter trimming and contamination screening',
        'Host contamination removal (where applicable)',
        'Reference-based and de novo assembly',
        'Assembly quality assessment and annotation',
        'MLST and sequence typing',
        'Capsular locus identification',
        'Antimicrobial resistance (AMR) gene detection',
        'Core genome SNP extraction',
        'Phylogenetic inference and tree construction',
        'Metadata harmonization and standardization',
        'Reproducible reporting and visualization',
      ];

  const considerations = fr
    ? [
        { color: 'border-primary', title: 'Masquage de la Recombinaison', text: "Les taux de recombinaison élevés chez Neisseria meningitidis peuvent biaiser l'inférence phylogénétique. Le masquage est essentiel pour une analyse évolutive précise." },
        { color: 'border-purple-500', title: 'Événements de Commutation Capsulaire', text: "La commutation capsulaire impacte l'interprétation épidémiologique et le suivi de l'efficacité vaccinale. Nécessite des protocoles de typage spécialisés." },
        { color: 'border-blue-500', title: 'Transfert Horizontal de Gènes', text: "Les éléments mobiles et le transfert horizontal de gènes influencent le profilage AMR. Une analyse minutieuse du contexte génétique est critique." },
        { color: 'border-green-500', title: 'Qualité des Échantillons & Métadonnées', text: "La faible charge bactérienne ou les infections mixtes nécessitent un contrôle qualité robuste. Les métadonnées complètes sont essentielles pour l'analyse des épidémies." },
      ]
    : [
        { color: 'border-primary', title: 'Recombination Masking', text: 'High recombination rates in Neisseria meningitidis can bias phylogenetic inference. Recombination masking is essential for accurate evolutionary analysis.' },
        { color: 'border-purple-500', title: 'Capsular Switching Events', text: 'Capsular switching impacts epidemiological interpretation and vaccine efficacy tracking. Requires specialized typing protocols.' },
        { color: 'border-blue-500', title: 'Horizontal Gene Transfer', text: 'Mobile elements and horizontal gene transfer influence AMR profiling. Careful analysis of genetic context is critical.' },
        { color: 'border-green-500', title: 'Sample Quality & Metadata', text: 'Low bacterial load or mixed infections in clinical samples require robust quality control. Complete metadata is critical for outbreak analysis.' },
      ];

  const resourceItems = fr
    ? ["Utilisation optimisée de la mémoire et allocation du CPU", "Workflows conteneurisés pour la reproductibilité", "Conception de pipelines indépendante du cloud", "Traitement parallèle et optimisation par lots"]
    : ['Optimized memory usage and CPU allocation', 'Containerized workflows for reproducibility', 'Cloud-agnostic pipeline design', 'Parallel processing and batch optimization'];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-b border-border relative overflow-hidden">
        {/* Decorative DNA sequence strings */}
        <div className="absolute top-0 right-0 h-full flex items-center pr-6 opacity-[0.07] dark:opacity-[0.05] select-none pointer-events-none font-mono text-lg leading-loose tracking-widest text-blue-800 dark:text-blue-300">
          <div>
            <div>ATCGATCGTAGCGATCGAT</div>
            <div>GCTAGCTATCGATCGTAGC</div>
            <div>TACGATCGTAGCGATCGAT</div>
            <div>CGTATCGATCGTAGCGATC</div>
            <div>ATCGATCGTAGCGATCGAT</div>
          </div>
        </div>
        {/* Decorative blob */}
        <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40">
              <Microscope size={36} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              {fr ? 'Expertise en Bioinformatique' : 'Bioinformatics Expertise'}
            </h1>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl mb-6">
            {fr
              ? "Analyse complète du séquençage bactérien du génome entier, surveillance des pathogènes et développement de pipelines bioinformatiques à l'aide des frameworks Nextflow/nf-core."
              : 'Comprehensive bacterial whole genome sequencing analysis, pathogen surveillance, and bioinformatics pipeline development using Nextflow/nf-core frameworks.'}
          </p>
          {/* Tool badges */}
          <div className="flex flex-wrap gap-2">
            {['Nextflow', 'nf-core', 'FastQC', 'SPAdes', 'BCFtools', 'AMRFinderPlus', 'Prokka', 'MAFFT'].map(tool => (
              <span key={tool} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-mono text-primary">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Shield size={36} className="text-primary" />
              {fr ? 'Expertise en Surveillance des Pathogènes' : 'Pathogen Surveillance Expertise'}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {pathogens.map((pathogen, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{pathogen.name}</h3>
                  <p className="text-foreground/70 mb-3">{pathogen.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground/60">{fr ? 'Expertise clé :' : 'Key Expertise:'}</span>
                    <span className="text-sm text-primary font-medium">{pathogen.expertise}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <GitBranch size={36} className="text-primary" />
              {fr ? 'Workflows Bioinformatiques' : 'Bioinformatics Workflows'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflows.map((workflow, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 smooth-transition">
                  <h3 className="text-lg font-semibold mb-3">{workflow.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{workflow.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {workflow.tools.map((tool, tidx) => (
                      <span key={tidx} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp size={36} className="text-primary" />
              {fr ? "Pipeline d'Analyse Complet" : 'Complete Analysis Pipeline'}
            </h2>
            <div className="space-y-4">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 smooth-transition">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-foreground/80 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Database size={36} className="text-primary" />
              {fr ? 'Outils & Technologies' : 'Tools & Technologies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolCategories.map((toolGroup, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{toolGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolGroup.items.map((tool, tidx) => (
                      <span key={tidx} className="px-3 py-2 rounded-lg bg-muted text-foreground/80 text-sm font-medium hover:bg-primary hover:text-primary-foreground smooth-transition">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Zap size={36} className="text-primary" />
              {fr ? 'Considérations Critiques pour les Pathogènes de la Méningite' : 'Critical Considerations for Meningitis Pathogens'}
            </h2>
            <div className="space-y-4">
              {considerations.map((c, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-l-4 ${c.color} bg-card`}>
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-foreground/70">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              {fr ? 'Optimisation en Ressources Limitées' : 'Resource-Constrained Optimization'}
            </h2>
            <div className="p-8 rounded-xl border-2 border-primary bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              <p className="text-lg text-foreground/80 mb-4">
                {fr
                  ? "Expertise spécialisée dans la conception et la validation de pipelines bioinformatiques pour les environnements à ressources informatiques limitées. Cela inclut :"
                  : 'Specialized expertise in designing and validating bioinformatics pipelines for environments with limited computational resources. This includes:'}
              </p>
              <ul className="space-y-3 text-foreground/70">
                {resourceItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
