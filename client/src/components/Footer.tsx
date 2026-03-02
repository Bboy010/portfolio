import { Mail, Github, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hongo Koffi Anderson</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {fr
                ? 'Docteur en Microbiologie & Bioinformaticien spécialisé en surveillance des pathogènes bactériens et solutions IA agentives.'
                : 'PhD Microbiologist & Bioinformatician specializing in bacterial pathogen surveillance and agentic AI solutions.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{fr ? 'Liens Rapides' : 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/cv" className="text-foreground/70 hover:text-primary smooth-transition">
                  {fr ? 'Télécharger CV' : 'Download CV'}
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/70 hover:text-primary smooth-transition">
                  {fr ? 'Services' : 'Services'}
                </a>
              </li>
              <li>
                <a href="mailto:hkoffianderson@gmail.com" className="text-foreground/70 hover:text-primary smooth-transition">
                  {fr ? 'Contact' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{fr ? 'Réseaux' : 'Connect'}</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Bboy010" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hongo-koffi-anderson-a0b5a7289/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@HongoKoffiAnderson" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="mailto:hkoffianderson@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; {currentYear} Hongo Koffi Anderson. {fr ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
            <p>{fr ? 'Conçu avec précision et expertise en bioinformatique.' : 'Crafted with precision and expertise in bioinformatics.'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
