import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.cv', href: '/cv' },
    { label: 'nav.bioinformatics', href: '/bioinformatics' },
    { label: 'nav.ai', href: '/ai' },
    { label: 'nav.statistics', href: '/statistics' },
    { label: 'nav.services', href: '/services' },
  ];

  const isActive = (href: string) => location === href;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold gradient-text hover:opacity-80 transition-all duration-300 ease-out"
          onClick={handleNavClick}
        >
          Hongo Koffi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 ease-out ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              onClick={handleNavClick}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2 border border-border rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              FR
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 hover:bg-muted rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-3 rounded-lg transition-all duration-300 ease-out ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:bg-muted'
                }`}
                onClick={handleNavClick}
              >
                {t(item.label)}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-border">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLanguage('en');
                    handleNavClick();
                  }}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground/70 hover:text-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage('fr');
                    handleNavClick();
                  }}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-300 ${
                    language === 'fr'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
