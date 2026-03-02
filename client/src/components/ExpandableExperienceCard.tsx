import { useState } from 'react';
import { ChevronDown, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { Experience } from '@/data/experiences';
import ActivityCard from './ActivityCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExpandableExperienceCardProps {
  experience: Experience;
}

export default function ExpandableExperienceCard({ experience }: ExpandableExperienceCardProps) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const title = language === 'fr' ? experience.titleFr : experience.title;
  const period = language === 'fr' ? experience.periodFr : experience.period;
  const description = language === 'fr' ? experience.descriptionFr : experience.description;
  const impact = language === 'fr' ? experience.impactFr : experience.impact;
  const keyResults = language === 'fr' ? experience.keyResultsFr : experience.keyResults;

  return (
    <div className="space-y-0">
      {/* Main Card Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group relative overflow-hidden rounded-t-lg border border-border bg-gradient-to-r from-background to-background/80 p-6 hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-lg"
      >
        {/* Background gradient accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.color}`} />
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
              </div>
              <p className="text-lg text-primary font-semibold mb-1">{experience.company}</p>
              <p className="text-sm text-foreground/60">{period}</p>
            </div>

            {/* Expand Icon */}
            <div className={`flex-shrink-0 transition-transform duration-500 ease-out ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Preview Description */}
          <p className="text-foreground/70 leading-relaxed mt-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out rounded-b-lg border border-t-0 border-border bg-card`}
        style={{
          maxHeight: isExpanded ? '2000px' : '0px',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="p-6 space-y-8">
          {/* Full Description */}
          <div>
            <p className="text-foreground/70 leading-relaxed text-base">
              {description}
            </p>
          </div>

          {/* Key Results */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              {language === 'fr' ? 'Résultats Clés' : 'Key Results'}
            </h4>
            <ul className="space-y-3">
              {keyResults.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground/70">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Grid */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" />
              {language === 'fr' ? 'Réalisations' : 'Achievements'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 hover:bg-background transition-all duration-300"
                >
                  <h5 className="font-semibold text-primary mb-2">
                    {language === 'fr' ? achievement.titleFr : achievement.title}
                  </h5>
                  <p className="text-sm text-foreground/70 mb-3">
                    {language === 'fr' ? achievement.descriptionFr : achievement.description}
                  </p>
                  {achievement.metric && (
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                      {achievement.metric}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap size={20} className="text-primary" />
              {language === 'fr' ? 'Technologies & Outils' : 'Technologies & Tools'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
            <p className="text-foreground/80 italic">
              <span className="font-semibold text-primary">
                {language === 'fr' ? 'Impact: ' : 'Impact: '}
              </span>
              {impact}
            </p>
          </div>

          {/* Activities Grid */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {language === 'fr' ? 'Activités Principales' : 'Key Activities'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.activities.map((activity, idx) => (
                <ActivityCard
                  key={idx}
                  icon={activity.icon}
                  title={language === 'fr' ? activity.titleFr : activity.title}
                  description={language === 'fr' ? activity.descriptionFr : activity.description}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
