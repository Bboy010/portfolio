import { Experience } from '@/data/experiences';
import ActivityCard from './ActivityCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { language } = useLanguage();
  
  const title = language === 'fr' ? experience.titleFr : experience.title;
  const period = language === 'fr' ? experience.periodFr : experience.period;
  const description = language === 'fr' ? experience.descriptionFr : experience.description;

  return (
    <div className="space-y-6 pb-8">
      {/* Header with gradient accent */}
      <div className="border-l-4 border-primary pl-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-lg text-primary font-semibold mb-2">{experience.company}</p>
            <p className="text-sm text-foreground/60">{period}</p>
          </div>
          <div className={`hidden md:block w-24 h-24 rounded-lg bg-gradient-to-br ${experience.color} opacity-20`} />
        </div>
      </div>

      {/* Description */}
      <p className="text-foreground/70 leading-relaxed ml-6 text-base">
        {description}
      </p>

      {/* Activities Grid */}
      <div className="ml-6">
        <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">
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
  );
}
