import { motion } from 'framer-motion';
import { Lightbulb, Code2, Target, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Think Creatively',
    description:
      'Break conventions and approach every challenge from angles nobody else considered. Wild ideas welcome.',
    accent: 'electric',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,212,255,0.25)]',
  },
  {
    icon: Code2,
    title: 'Build Innovatively',
    description:
      'Turn bold concepts into working prototypes. Any tech stack, any domain — ship something real.',
    accent: 'neon',
    glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
  },
  {
    icon: Target,
    title: 'Solve Real Problems',
    description:
      'Tackle problem statements that matter — for your campus, your community, and the world beyond.',
    accent: 'cyan',
    glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]',
  },
];

const accentText = {
  electric: 'text-electric',
  neon: 'text-neon',
  cyan: 'text-cyan',
};

const accentBorder = {
  electric: 'border-electric/40',
  neon: 'border-neon/40',
  cyan: 'border-cyan/40',
};

const accentBg = {
  electric: 'from-electric/20 to-cyan/5',
  neon: 'from-neon/20 to-electric/5',
  cyan: 'from-cyan/20 to-neon/5',
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-electric tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          ABOUT HACKSPHERE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
        >
          Where Ideas Become{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-neon">
            Innovation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          HACKSPHERE 2.0 brings together creative minds, passionate developers and future
          innovators to solve real-world challenges through technology, teamwork and innovation.
        </motion.p>

        {/* Feature cards */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl p-8 md:p-9 glass border ${accentBorder[f.accent]} overflow-hidden transition-shadow duration-500 ${f.glow}`}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-60 ${accentText[f.accent]}`}
              />
              {/* Corner glow */}
              <div
                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${accentBg[f.accent]} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-7">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentBg[f.accent]} border ${accentBorder[f.accent]} grid place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <f.icon className={`w-7 h-7 ${accentText[f.accent]}`} strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-electric group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-3">
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">
                  {f.description}
                </p>

                {/* Index number */}
                <span className="absolute bottom-6 right-7 font-mono text-5xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none">
                  0{i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
