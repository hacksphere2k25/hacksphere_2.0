import { motion } from 'framer-motion';
import {
  Flag, Compass, Lightbulb, Code2, Presentation, Trophy,
} from 'lucide-react';
import { timelineStages, contactInfo } from '../data/eventConfig.js';

const iconMap = { Flag, Compass, Lightbulb, Code2, Presentation, Trophy };

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 bg-navy/40 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-electric/10 blur-[110px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-neon/10 blur-[110px]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-electric tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          EVENT TIMELINE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Your Journey of{' '}
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
          Six stages. One unforgettable hackathon. {contactInfo.eventDates}.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-16 md:mt-20">
          {/* Glowing connector lines */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-electric/50 via-neon/50 to-electric/50 shadow-[0_0_12px_rgba(0,212,255,0.4)]" />
          <div className="md:hidden absolute top-2 bottom-8 left-7 w-px bg-gradient-to-b from-electric/50 via-neon/50 to-electric/50 shadow-[0_0_12px_rgba(0,212,255,0.4)]" />

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-14">
            {timelineStages.map((stage, i) => {
              const Icon = iconMap[stage.icon] || Flag;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center"
                >
                  {/* Marker */}
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl glass border border-electric/30 grid place-items-center shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                    >
                      <Icon className="w-7 h-7 text-electric" strokeWidth={1.8} />
                    </motion.div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-electric to-neon text-deep text-xs font-bold grid place-items-center shadow-[0_0_15px_rgba(0,212,255,0.6)]"
                    >
                      {i + 1}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <div className="md:mt-6 md:px-2">
                    <h3 className="font-bold text-lg tracking-tight">{stage.title}</h3>
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed max-w-[16rem] md:mx-auto">
                      {stage.description}
                    </p>
                    <span className="inline-block mt-3 text-xs font-mono font-semibold text-neon bg-neon/10 border border-neon/25 px-3 py-1 rounded-full">
                      {stage.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
