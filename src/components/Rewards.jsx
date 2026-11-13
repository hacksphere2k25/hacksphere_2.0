import { motion } from 'framer-motion';
import { Trophy, Medal, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { rewards, participationRewards } from '../data/eventConfig.js';

const iconMap = { Trophy, Medal, Award };

export default function Rewards() {
  return (
    <section id="rewards" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full bg-neon/12 blur-[120px]" />
      <div className="absolute -top-32 right-1/4 w-[400px] h-[400px] rounded-full bg-electric/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-neon tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          REWARDS & RECOGNITION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Celebrate{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-neon">
            Innovation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-center text-white/60 text-base md:text-lg max-w-2xl mx-auto"
        >
          Bragging rights, real rewards, and unforgettable memories.
        </motion.p>

        {/* Award cards */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {rewards.map((r, i) => {
            const Icon = iconMap[r.icon] || Trophy;
            const isWinner = i === 0;
            return (
              <motion.div
                key={r.rank}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 md:p-9 flex flex-col text-center overflow-hidden transition-shadow duration-500 ${
                  isWinner
                    ? 'glass border border-electric/50 md:-translate-y-3 md:scale-[1.03] shadow-[0_0_60px_rgba(0,212,255,0.15)]'
                    : 'glass border border-white/10'
                }`}
              >
                {/* Top gradient hairline */}
                <div
                  className={`absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-electric to-transparent ${
                    isWinner ? 'opacity-80' : 'opacity-30'
                  }`}
                />
                {isWinner && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.15em] text-electric bg-electric/10 border border-electric/40 px-3 py-1 rounded-full">
                    TOP PRIZE
                  </span>
                )}

                {/* Icon medallion */}
                <div
                  className={`relative mx-auto w-24 h-24 rounded-full grid place-items-center mb-7 ${
                    isWinner
                      ? 'bg-gradient-to-br from-electric/25 to-neon/25 border-2 border-electric/60 shadow-[0_0_35px_rgba(0,212,255,0.4)]'
                      : 'bg-white/[0.04] border border-white/15'
                  }`}
                >
                  <Icon
                    className={`w-11 h-11 ${isWinner ? 'text-electric' : 'text-white/60'}`}
                    strokeWidth={1.4}
                  />
                  {isWinner && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-electric/40"
                      animate={{ scale: [1, 1.15], opacity: [0.7, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                <h3 className="font-bold text-xl md:text-2xl tracking-tight">{r.rank}</h3>
                <p className="text-white/50 text-sm mt-1.5">{r.tagline}</p>
                <p
                  className={`font-bold text-2xl md:text-3xl mt-5 tracking-tight ${
                    isWinner
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-electric to-neon'
                      : 'text-white/85'
                  }`}
                >
                  {r.prize}
                </p>

                <ul className="mt-7 space-y-2.5 text-left">
                  {r.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Participation & recognition */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 glass rounded-2xl p-8 md:p-10 max-w-4xl mx-auto border border-neon/25 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-neon/15 blur-3xl" />
          <h3 className="relative flex items-center justify-center gap-2.5 font-bold text-xl md:text-2xl tracking-tight mb-7">
            <Sparkles className="w-5 h-5 text-neon" />
            {participationRewards.title}
          </h3>
          <ul className="relative grid sm:grid-cols-2 gap-3.5">
            {participationRewards.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                <CheckCircle2 className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
