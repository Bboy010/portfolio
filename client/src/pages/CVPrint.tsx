import { Printer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/data/experiences';
import {
  contact,
  getProfileTitle,
  getSummary,
  getBioinfSkills,
  getDataScienceSkills,
  getCertifications,
  getEducation,
  getPublication,
  getMemberships,
} from '@/data/cvData';

export default function CVPrint() {
  const { language, setLanguage } = useLanguage();
  const fr = language === 'fr';

  const education = getEducation(language);
  const publication = getPublication(language);
  const certifications = getCertifications(language);
  const memberships = getMemberships(language);

  const sectionTitle = (text: string) => (
    <h2 className="cv-section-title">{text}</h2>
  );

  return (
    <div className="cv-print-root">
      <div className="no-print cv-toolbar">
        <div className="cv-toolbar-inner">
          <div className="flex gap-2">
            {(['fr', 'en'] as const).map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLanguage(lng)}
                className={`cv-lang-btn ${language === lng ? 'cv-lang-btn-active' : ''}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => window.print()} className="cv-print-btn">
            <Printer size={16} />
            {fr ? 'Imprimer / Enregistrer en PDF' : 'Print / Save as PDF'}
          </button>
        </div>
      </div>

      <main className="cv-page">
        <header className="cv-header">
          <h1>Hongo Koffi Anderson</h1>
          <p className="cv-title">{getProfileTitle(language)}</p>
          <p className="cv-contact">
            {contact.location} • {contact.email} • {contact.phone}
          </p>
          <p className="cv-contact">
            {contact.links.map((l, i) => (
              <span key={l.label}>
                {i > 0 && ' • '}
                <a href={l.url}>{l.label}</a>
              </span>
            ))}
          </p>
        </header>

        <section>
          {sectionTitle(fr ? 'Résumé' : 'Summary')}
          <p>{getSummary(language)}</p>
        </section>

        <section>
          {sectionTitle(fr ? 'Compétences techniques' : 'Technical Skills')}
          <div className="cv-two-cols">
            <div>
              <h3>{fr ? 'Bioinformatique' : 'Bioinformatics'}</h3>
              <ul>
                {getBioinfSkills(language).map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3>{fr ? 'Science des données & IA' : 'Data Science & AI'}</h3>
              <ul>
                {getDataScienceSkills(language).map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section>
          {sectionTitle(fr ? 'Expérience professionnelle' : 'Professional Experience')}
          {experiences.map((exp) => (
            <div key={exp.id} className="cv-item">
              <div className="cv-item-head">
                <strong>{fr ? exp.titleFr : exp.title}</strong>
                <span>{exp.company} • {fr ? exp.periodFr : exp.period}</span>
              </div>
              <p>{fr ? exp.descriptionFr : exp.description}</p>
              <ul>
                {(fr ? exp.keyResultsFr : exp.keyResults).slice(0, 2).map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          {sectionTitle(fr ? 'Formation' : 'Education')}
          {education.map((e) => (
            <div key={e.title} className="cv-item">
              <div className="cv-item-head">
                <strong>{e.title}</strong>
                <span>{e.institution}</span>
              </div>
              <p>{e.theme}</p>
            </div>
          ))}
        </section>

        <section>
          {sectionTitle('Publications')}
          <div className="cv-item">
            <div className="cv-item-head">
              <strong>{publication.title}</strong>
            </div>
            <p>{publication.authors} — {publication.status}</p>
            <p>{publication.venue}</p>
          </div>
        </section>

        <section>
          {sectionTitle(fr ? 'Certifications & Formation' : 'Certifications & Training')}
          <ul className="cv-certs">
            {certifications.map((c) => (
              <li key={c.title + c.issuer}>
                <strong>{c.title}</strong> — {c.issuer}, {c.date}
              </li>
            ))}
          </ul>
        </section>

        <section>
          {sectionTitle(fr ? 'Adhésions professionnelles' : 'Professional Memberships')}
          <ul>
            {memberships.map((m) => <li key={m.name}>{m.name}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}
