import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Layers, SlidersHorizontal, RotateCcw, ChevronDown, Satellite, Brain, HeartPulse, ShieldCheck, Tractor, Building2, GraduationCap, Landmark, Leaf, Factory, Sparkles } from 'lucide-react';
import problemStatements from '../data/problemStatements.js';
import DOMAINS, { DIFFICULTIES, getDomain } from '../data/domains.js';
import ProblemModal from './ProblemModal.jsx';

const difficultyStyles = {
  Easy: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  Medium: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
  Hard: 'bg-rose-400/10 text-rose-300 border-rose-400/30',
  Advanced: 'bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/40 shadow-[0_0_12px_rgba(232,121,249,0.2)]',
};

const TOTAL = problemStatements.length;

const DOMAIN_ICONS = {
  'Artificial Intelligence & Agentic AI': Brain,
  'Healthcare & MedTech': HeartPulse,
  'Cybersecurity & Digital Trust': ShieldCheck,
  'Smart Agriculture & AgriTech': Tractor,
  'Smart City & Internet of Things': Building2,
  'Education & EdTech': GraduationCap,
  'FinTech & Blockchain': Landmark,
  'Climate Tech & Sustainability': Leaf,
  'Industry 4.0 & Physical AI': Factory,
  'Open Innovation & Emerging Technology': Sparkles,
  'Satellite, GIS & Geospatial Intelligence': Satellite,
};

export default function ProblemStatements() {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState(null);
  const [difficulty, setDifficulty] = useState('All');
  const [selected, setSelected] = useState(null);

  // Per-category challenge counts
  const domainCounts = useMemo(() => {
    const counts = {};
    problemStatements.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const q = query.trim().toLowerCase();
  // Cards are revealed once a domain is picked, or when the user searches.
  const browsingAll = domain === 'All' || (domain === null && q !== '');
  const showPrompt = domain === null && q === '';

  const filtered = useMemo(() => {
    if (showPrompt) return [];
    return problemStatements.filter((p) => {
      const matchesDomain = browsingAll || p.category === domain;
      const matchesDifficulty = difficulty === 'All' || p.difficulty === difficulty;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDomain && matchesDifficulty && matchesQuery;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, domain, difficulty, showPrompt, browsingAll]);

  const hasFilters = q !== '' || domain !== null || difficulty !== 'All';
  const resetFilters = () => {
    setQuery('');
    setDomain(null);
    setDifficulty('All');
  };

  return (
    <section id="challenges" className="relative py-24 md:py-32 bg-navy/40 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-neon/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-[420px] h-[420px] rounded-full bg-electric/10 blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold tracking-[0.2em] text-electric bg-electric/10 border border-electric/30 shadow-[0_0_20px_rgba(0,212,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            HACKSPHERE 2.0 | 24-HOUR HACKATHON
          </span>
        </motion.div>

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-neon tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          PROBLEM STATEMENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Explore The{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-neon">
            Challenges
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-center text-white/60 text-base md:text-lg max-w-2xl mx-auto"
        >
          {TOTAL} Challenges. {DOMAINS.length} Domains. Unlimited Possibilities.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-4"
        >
          {/* Search + difficulty */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, ID, domain or keyword..."
                aria-label="Search problem statements"
                className="w-full rounded-full pl-12 pr-5 py-4 text-sm text-white placeholder:text-white/35 bg-white/[0.04] backdrop-blur-xl border border-white/10 focus:outline-none focus:border-electric/60 focus:shadow-[0_0_25px_rgba(0,212,255,0.15)] transition-all"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                aria-label="Filter by difficulty"
                className="appearance-none w-full md:w-52 rounded-full pl-11 pr-10 py-4 text-sm font-medium text-white/80 bg-white/[0.04] backdrop-blur-xl border border-white/10 focus:outline-none focus:border-electric/60 transition-all cursor-pointer [&>option]:bg-navy [&>option]:text-white"
              >
                <option value="All">All Difficulties</option>
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
            </div>
          </div>

          {/* Domain tabs */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-white/40" />
              <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                Choose a Domain
              </span>
              <span className="ml-auto text-xs text-white/35 font-mono">{DOMAINS.length} domains · {TOTAL} challenges</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2.5">
              {/* All Categories */}
              <motion.button
                layout
                onClick={() => setDomain(domain === 'All' ? null : 'All')}
                className={`relative flex flex-col items-start gap-1.5 p-3.5 rounded-xl border text-left transition-all duration-300 ${
                  domain === 'All'
                    ? 'bg-electric/15 border-electric/60 text-electric shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                    : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.06]'
                }`}
              >
                <Layers className="w-5 h-5" />
                <span className="text-xs font-semibold leading-tight">All Categories</span>
                <span className={`text-[10px] font-mono ${domain === 'All' ? 'text-electric/80' : 'text-white/35'}`}>
                  {TOTAL} challenges
                </span>
              </motion.button>

              {DOMAINS.map((d) => {
                const Icon = DOMAIN_ICONS[d.name] || Layers;
                const count = domainCounts[d.name] || 0;
                const active = domain === d.name;
                return (
                  <motion.button
                    layout
                    key={d.name}
                    onClick={() => setDomain(active ? null : d.name)}
                    className={`relative flex flex-col items-start gap-1.5 p-3.5 rounded-xl border text-left transition-all duration-300 overflow-hidden ${
                      active
                        ? `${d.bg} ${d.border} ${d.text} shadow-[0_0_22px_${d.glow}]`
                        : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    {/* Active glow sweep */}
                    {active && (
                      <motion.span
                        layoutId="domain-glow"
                        className="absolute inset-0 rounded-xl"
                        style={{ boxShadow: `inset 0 0 24px ${d.glow}` }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon className="w-5 h-5 relative" />
                    <span className="text-xs font-semibold leading-tight relative">{d.short}</span>
                    <span className={`text-[10px] font-mono relative ${active ? 'opacity-80' : 'text-white/35'}`}>
                      {count} {count === 1 ? 'challenge' : 'challenges'}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Result counts */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-white/50">
            {showPrompt ? (
              <>
                <span className="text-electric font-semibold">{TOTAL}</span> Challenges across{' '}
                <span className="text-white/80 font-semibold">{DOMAINS.length}</span> Domains — select a category above
              </>
            ) : (
              <>
                Showing <span className="text-electric font-semibold">{filtered.length}</span> of{' '}
                <span className="text-white/80 font-semibold">{TOTAL}</span> Challenges
              </>
            )}
          </p>
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/70 border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset filters
            </button>
          )}
        </div>

        {/* Cards */}
        {showPrompt ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-2xl glass border border-dashed border-white/15 p-14 md:p-20 text-center"
          >
            <div className="mx-auto w-16 h-16 rounded-2xl bg-electric/10 border border-electric/25 grid place-items-center mb-6">
              <Layers className="w-8 h-8 text-electric" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-2">
              Choose a Domain to Explore
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto">
              Select any category above to reveal its problem statements, or hit{' '}
              <span className="text-electric font-medium">All Categories</span> to view all {TOTAL} challenges.
            </p>
          </motion.div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-2xl glass border border-white/10 p-14 text-center"
          >
            <p className="text-white/50 text-lg mb-2">No challenges match your filters.</p>
            <p className="text-white/35 text-sm mb-6">Try a different keyword, domain or difficulty level.</p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-electric bg-electric/10 border border-electric/40 hover:bg-electric/20 transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Clear all filters
            </button>
          </motion.div>
        ) : (
          <motion.div layout className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => {
                const theme = getDomain(p.category);
                return (
                  <motion.article
                    layout
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-2xl p-6 glass border border-white/10 hover:border-white/25 transition-colors duration-300 flex flex-col overflow-hidden"
                    style={{ boxShadow: `0 0 0 1px rgba(${theme.rgb},0.10), 0 20px 50px rgba(0,0,0,0.35)` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px rgba(${theme.rgb},0.25), 0 0 40px ${theme.glow}, 0 24px 60px rgba(0,0,0,0.45)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px rgba(${theme.rgb},0.10), 0 20px 50px rgba(0,0,0,0.35)`;
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${theme.color}, transparent)` }}
                    />
                    {/* Hover glow */}
                    <div
                      className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: theme.color }}
                    />

                    <div className="relative flex items-center justify-between mb-5">
                      <span
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border"
                        style={{ color: theme.color, background: `rgba(${theme.rgb},0.12)`, borderColor: `rgba(${theme.rgb},0.3)` }}
                      >
                        {p.id}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyStyles[p.difficulty] || difficultyStyles.Medium}`}
                      >
                        {p.difficulty}
                      </span>
                    </div>

                    <h3 className="relative font-bold text-lg leading-snug mb-2 group-hover:text-white transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className={`relative text-xs font-semibold mb-3 ${theme.text}`}>
                      {theme.short}
                    </p>
                    {p.flagship && (
                      <span className="relative inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-fuchsia-200 bg-gradient-to-r from-fuchsia-500/25 to-electric/20 border border-fuchsia-400/50 shadow-[0_0_14px_rgba(232,121,249,0.3)]">
                        <Satellite className="w-3 h-3" /> NEW · FLAGSHIP
                      </span>
                    )}
                    <p className="relative text-sm text-white/60 leading-relaxed flex-1">
                      {p.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-6 flex items-center gap-3">
                      <button
                        onClick={() => setSelected(p)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                        style={{
                          color: theme.color,
                          background: `rgba(${theme.rgb},0.12)`,
                          border: `1px solid rgba(${theme.rgb},0.4)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${theme.rgb},0.22)`;
                          e.currentTarget.style.boxShadow = `0 0 20px ${theme.glow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `rgba(${theme.rgb},0.12)`;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <ProblemModal problem={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
