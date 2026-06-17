import { useState } from 'react';
import { RotateCcw, Loader2, ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CertificateFlipCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
}

function getDriveViewUrl(url: string): string {
  // Extract the Drive FILE_ID from any supported URL shape and build a canonical view link.
  // Supports: lh3.googleusercontent.com/d/ID, drive.google.com/thumbnail?id=ID, drive.google.com/file/d/ID/view
  const match =
    url.match(/lh3\.googleusercontent\.com\/d\/([^?&/]+)/) ||
    url.match(/[?&]id=([^?&/]+)/) ||
    url.match(/\/file\/d\/([^?&/]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/view`;
  return url;
}

export default function CertificateFlipCard({ title, issuer, date, imageUrl }: CertificateFlipCardProps) {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const [flipped, setFlipped] = useState(false);
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const isPdf = imgStatus === 'error';
  const viewUrl = imageUrl ? getDriveViewUrl(imageUrl) : undefined;

  const handleClick = (e: React.MouseEvent) => {
    // If showing PDF fallback, don't flip when clicking the external link
    if ((e.target as HTMLElement).closest('a')) return;
    setFlipped(!flipped);
  };

  return (
    <div
      className="cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '190px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Front ── */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 p-4 rounded-lg border border-border hover:border-primary/50 bg-card transition-colors duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start gap-2 mb-2">
              <Award size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="font-semibold text-primary text-sm leading-tight">{title}</p>
            </div>
            <p className="text-xs text-foreground/70 ml-6">{issuer}</p>
            <p className="text-xs text-foreground/50 mt-1 ml-6">{date}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-foreground/40">
            <RotateCcw size={12} />
            <span>{fr ? 'Cliquer pour voir le certificat' : 'Click to view certificate'}</span>
          </div>
        </div>

        {/* ── Back ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 rounded-lg border border-primary/30 bg-white dark:bg-card overflow-hidden"
        >
          {/* Image — always rendered so onLoad/onError fires */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-contain transition-opacity duration-300 ${imgStatus === 'loaded' ? 'opacity-100' : 'opacity-0 absolute'}`}
              onLoad={() => setImgStatus('loaded')}
              onError={() => setImgStatus('error')}
            />
          )}

          {/* Loading */}
          {imageUrl && imgStatus === 'loading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Loader2 size={26} className="text-primary animate-spin mb-2" />
              <p className="text-xs text-foreground/50">{fr ? 'Chargement...' : 'Loading...'}</p>
            </div>
          )}

          {/* PDF / error fallback */}
          {(!imageUrl || isPdf) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4">
              <div className="text-3xl">🏆</div>
              <p className="text-xs font-semibold text-primary text-center leading-tight">{title}</p>
              <p className="text-xs text-foreground/60 text-center">{issuer}</p>
              {viewUrl && (
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={11} />
                  {fr ? 'Voir le certificat' : 'View certificate'}
                </a>
              )}
            </div>
          )}

          {/* Flip back hint */}
          {imgStatus !== 'loading' && (
            <div className="absolute bottom-1.5 right-2 flex items-center gap-1 text-xs text-foreground/30 bg-white/60 dark:bg-black/30 rounded px-1">
              <RotateCcw size={9} />
              <span>{fr ? 'Retourner' : 'Flip back'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
