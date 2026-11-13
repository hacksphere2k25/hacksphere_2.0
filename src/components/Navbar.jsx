import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <motion.img
            src="/logo.jpg"
            alt="HACKSPHERE 2.0 logo"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 rounded-xl group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow"
          />
          <span className="font-bold tracking-wider text-lg md:text-xl">
            HACK<span className="text-electric">SPHERE</span>
            <span className="text-neon"> 2.0</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2 }}
                className="relative text-sm text-white/70 hover:text-electric transition-colors font-medium tracking-wide after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-electric after:to-neon hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <motion.a
            href="#challenges"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-deep bg-gradient-to-r from-electric to-cyan hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-shadow duration-300"
          >
            Explore Challenges
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden p-2 rounded-lg border border-white/10 text-white hover:border-electric/50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden bg-navy/90 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-white/80 hover:text-electric font-medium border-b border-white/5 last:border-0 transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="#challenges"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-deep bg-gradient-to-r from-electric to-cyan hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-shadow"
                >
                  Explore Challenges
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
