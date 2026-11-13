import { useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

// Floating particles field
function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 5,
        drift: Math.random() * 50 - 25,
      })),
    []
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? '#8B5CF6' : '#00D4FF',
            boxShadow: '0 0 8px rgba(0,212,255,0.8)',
          }}
          animate={{ y: [0, p.drift, 0], opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// CSS-built glowing digital sphere with parallax tilt
function Sphere() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });

  return (
    <motion.div
      className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.22),rgba(139,92,246,0.14)_50%,transparent_70%)] blur-2xl" />

      {/* Rotating neon rings */}
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-electric/50" style={{ transform: 'rotateX(72deg)' }} />
        <div className="absolute inset-[7%] rounded-full border border-neon/40" style={{ transform: 'rotateY(60deg) rotateZ(30deg)' }} />
        <div className="absolute inset-[15%] rounded-full border border-cyan/30" style={{ transform: 'rotateX(50deg) rotateZ(-40deg)' }} />
      </div>
      <div className="absolute inset-[-5%] animate-[spin_32s_linear_infinite_reverse]">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-electric/25" style={{ transform: 'rotateX(75deg)' }} />
      </div>

      {/* Sphere body */}
      <motion.div
        className="absolute inset-[14%] rounded-full overflow-hidden"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 32% 28%, rgba(0,212,255,0.6), rgba(34,211,238,0.2) 35%, rgba(11,16,38,0.15) 55%, rgba(5,8,22,0.65) 100%)',
          boxShadow:
            'inset -20px -25px 60px rgba(139,92,246,0.35), inset 15px 15px 50px rgba(0,212,255,0.25), 0 0 90px rgba(0,212,255,0.35)',
          border: '1px solid rgba(0,212,255,0.4)',
        }}
      >
        {/* specular highlight */}
        <div className="absolute top-[12%] left-[18%] w-[30%] h-[22%] rounded-full bg-white/25 blur-xl" />
        {/* tech grid texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.45) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(circle at center, black 25%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 72%)',
          }}
        />
        {/* equator glow */}
        <div className="absolute inset-x-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" />
      </motion.div>

      {/* Orbiting satellites */}
      <div className="absolute inset-[8%] animate-[spin_24s_linear_infinite]">
        <span className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-electric shadow-[0_0_14px_#00D4FF]" />
        <span className="absolute bottom-6 -right-1.5 w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_12px_#8B5CF6]" />
      </div>
      <div className="absolute inset-[22%] animate-[spin_16s_linear_infinite_reverse]">
        <span className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#22D3EE]" />
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-electric/20 blur-[110px] animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-neon/20 blur-[110px] animate-pulse [animation-delay:1.5s]" />
      <Particles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-electric/30 bg-electric/5 backdrop-blur text-[11px] md:text-xs tracking-[0.25em] text-electric mb-8"
          >
            <Sparkles className="w-4 h-4" />
            INNOVATION • CREATIVITY • TECHNOLOGY
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="font-bold text-[15vw] sm:text-7xl lg:text-[5.2rem] leading-[0.95] tracking-tight"
          >
            HACK
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-neon">
              SPHERE
            </span>
            <span className="text-neon"> 2.0</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="mt-5 text-electric/90 font-semibold tracking-[0.3em] text-sm md:text-base"
          >
            THE FUTURE IS BUILT BY INNOVATORS
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="mt-4 text-white/65 text-lg md:text-xl max-w-lg mx-auto lg:mx-0"
          >
            Think Beyond Limits. Build Beyond Imagination.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.55}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="#challenges"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-deep bg-gradient-to-r from-electric to-cyan hover:shadow-[0_0_40px_rgba(0,212,255,0.55)] transition-shadow duration-300"
            >
              Explore Challenges
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white border border-electric/40 bg-electric/5 backdrop-blur hover:bg-electric/15 hover:shadow-[0_0_30px_rgba(0,212,255,0.25)] transition-all duration-300"
            >
              Discover The Event
            </motion.a>
          </motion.div>
        </div>

        {/* Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <Sphere />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40 hover:text-electric transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.a>
    </section>
  );
}
