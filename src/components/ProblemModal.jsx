import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, FileText, ExternalLink, CheckCircle2, ListChecks, Tag,
  Target, Wrench, PackageCheck, Gauge, Lightbulb, Satellite,
} from 'lucide-react';
import { getDomain } from '../data/domains.js';

const difficultyStyles = {
  Easy: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  Medium: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
  Hard: 'bg-rose-400/10 text-rose-300 border-rose-400/30',
  Advanced: 'bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/40',
};

function Section({ icon: Icon, title, children, accent }) {
  return (
    <div>
      <h4
        className="flex items-center gap-2 font-semibold mb-2 text-sm"
        style={{ color: accent.color }}
      >
        <Icon className="w-4 h-4" /> {title}
      </h4>
      {children}
    </div>
  );
}

export default function ProblemModal({ problem, onClose }) {
  useEffect(() => {
    if (!problem) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [problem, onClose]);

  const theme = problem ? getDomain(problem.category) : null;

  return (
    <AnimatePresence>
      {problem && theme && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${problem.title}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-7 md:p-9 relative border border-white/10"
            style={{
              boxShadow: `0 0 0 1px rgba(${theme.rgb},0.2), 0 0 60px ${theme.glow}, 0 30px 80px rgba(0,0,0,0.6)`,
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${theme.color}, transparent)` }}
            />

            <button
              onClick={onClose}
              aria-label="Close details"
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                style={{ color: theme.color, background: `rgba(${theme.rgb},0.12)`, borderColor: `rgba(${theme.rgb},0.3)` }}
              >
                {problem.id}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${theme.chip}`}
              >
                <Tag className="w-3 h-3" /> {theme.short}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${difficultyStyles[problem.difficulty] || difficultyStyles.Medium}`}
              >
                <Gauge className="w-3 h-3" /> {problem.difficulty}
              </span>
              {problem.flagship && (
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider text-fuchsia-200 bg-gradient-to-r from-fuchsia-500/25 to-electric/20 border border-fuchsia-400/50 flex items-center gap-1">
                  <Satellite className="w-3 h-3" /> NEW · FLAGSHIP
                </span>
              )}
            </div>

            <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6">{problem.title}</h3>

            {/* Tags */}
            {problem.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {problem.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-6 text-sm leading-relaxed">
              <Section icon={FileText} title="Problem Description" accent={theme}>
                <p className="text-white/70">{problem.description}</p>
              </Section>

              <Section icon={Target} title="Objective" accent={theme}>
                <p className="text-white/70">{problem.objective}</p>
              </Section>

              <div
                className="rounded-xl p-4 border"
                style={{ background: `rgba(${theme.rgb},0.06)`, borderColor: `rgba(${theme.rgb},0.25)` }}
              >
                <Section icon={ListChecks} title="Expected Solution" accent={theme}>
                  <p className="text-white/70">{problem.expectedSolution}</p>
                </Section>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Section icon={Wrench} title="Suggested Technologies" accent={theme}>
                  <ul className="space-y-1.5">
                    {problem.technologies.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-white/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: theme.color }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section icon={PackageCheck} title="Expected Deliverables" accent={theme}>
                  <ul className="space-y-1.5">
                    {problem.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-white/70">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: theme.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {problem.pdfUrl && (
                <a
                  href={problem.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-deep transition-all"
                  style={{
                    background: `linear-gradient(90deg, ${theme.color}, ${theme.color}CC)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${theme.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <ExternalLink className="w-4 h-4" /> View Full Problem Statement
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
              >
                <Lightbulb className="w-4 h-4" /> Got It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
