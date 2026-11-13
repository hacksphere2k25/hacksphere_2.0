import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { galleryImages } from '../data/eventConfig.js';

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [broken, setBroken] = useState({});

  const close = () => setActive(null);
  const step = (dir) =>
    setActive((i) => (i === null ? i : (i + dir + galleryImages.length) % galleryImages.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-navy/40 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-cyan/10 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-cyan tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          GALLERY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Moments of{' '}
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
          Coding sprints, team collaboration, presentations, and everything in between.
        </motion.p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-electric/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric"
              aria-label={`View image: ${img.alt}`}
            >
              {broken[img.src] ? (
                <div className="absolute inset-0 grid place-items-center text-white/30">
                  <ImageOff className="w-8 h-8" />
                </div>
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={() => setBroken((b) => ({ ...b, [img.src]: true }))}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 ring-1 ring-inset ring-electric/0 group-hover:ring-electric/40 transition-all duration-300 rounded-2xl" />
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-electric">
                  {img.category}
                </p>
                <p className="text-sm text-white/80 mt-0.5">{img.alt}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 backdrop-blur-md p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={close}
              aria-label="Close image viewer"
              className="absolute top-5 right-5 p-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 p-3 rounded-full border border-white/15 text-white/70 hover:text-electric hover:border-electric/50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 p-3 rounded-full border border-white/15 text-white/70 hover:text-electric hover:border-electric/50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                className="w-full max-h-[75vh] object-contain rounded-2xl border border-electric/25 shadow-[0_0_60px_rgba(0,212,255,0.1)]"
              />
              <figcaption className="mt-4 text-center">
                <p className="text-electric text-sm font-semibold tracking-wide uppercase">
                  {galleryImages[active].category}
                </p>
                <p className="text-white/60 text-sm mt-1">{galleryImages[active].alt}</p>
                <p className="text-white/30 text-xs mt-1.5 font-mono">
                  {active + 1} / {galleryImages.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
