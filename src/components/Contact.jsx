import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { contactInfo } from '../data/eventConfig.js';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-32 left-1/3 w-[460px] h-[460px] rounded-full bg-electric/12 blur-[120px]" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-neon/12 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-electric tracking-[0.35em] text-xs md:text-sm font-semibold mb-4"
        >
          GET IN TOUCH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
        >
          Let's Build The{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan to-neon">
            Future
          </span>{' '}
          Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-center text-white/60 text-base md:text-lg max-w-2xl mx-auto"
        >
          Questions about HACKSPHERE 2.0? Reach out — we'd love to hear from you.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-electric/10 blur-3xl" />
            <div className="relative">
              <h3 className="font-bold text-2xl tracking-tight">{contactInfo.collegeName}</h3>
              <p className="text-sm text-white/45 mt-1">{contactInfo.department}</p>
              <p className="text-xs font-mono text-neon mt-2">{contactInfo.eventDates} · {contactInfo.venue}</p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4 text-sm text-white/70">
                  <span className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/25 grid place-items-center shrink-0">
                    <MapPin className="w-5 h-5 text-electric" />
                  </span>
                  <span className="pt-2">{contactInfo.address}</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-white/70">
                  <span className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/25 grid place-items-center shrink-0">
                    <Mail className="w-5 h-5 text-electric" />
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="pt-2 hover:text-electric transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                {contactInfo.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-4 text-sm text-white/70">
                    <span className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/25 grid place-items-center shrink-0">
                      <Phone className="w-5 h-5 text-electric" />
                    </span>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                      className="pt-2 hover:text-electric transition-colors"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-xl glass border border-white/10 text-white/60 hover:text-electric hover:border-electric/50 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl glass border border-white/10 text-white/60 hover:text-electric hover:border-electric/50 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-electric bg-electric/10 border border-electric/40 hover:bg-electric/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border border-electric/30"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,212,255,0.14), rgba(11,16,38,0.6) 45%, rgba(139,92,246,0.14))',
            }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-electric/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-neon/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-bold text-2xl md:text-3xl leading-tight tracking-tight">
                Ready to{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric to-neon">
                  Hack the Future?
                </span>
              </h3>
              <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                Registration details and problem statement PDFs will be announced soon.
                Follow our social channels for updates.
              </p>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-4">
              <a
                href="#challenges"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold text-deep bg-gradient-to-r from-electric to-cyan hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Challenges
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/25 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
