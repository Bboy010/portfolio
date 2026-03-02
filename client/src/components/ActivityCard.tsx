import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ActivityCard({ icon: Icon, title, description, index = 0 }: ActivityCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
          <Icon size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Title */}
        <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle animation indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
