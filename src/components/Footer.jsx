import { Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/eventConfig.js';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-navy/60 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-electric/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <img src="/logo.jpg" alt="HACKSPHERE 2.0 logo" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-bold tracking-wider text-lg">
                HACK<span className="text-electric">SPHERE</span>
                <span className="text-neon"> 2.0</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              The Future is Built by Innovators. A premier college hackathon for creative
              minds, passionate developers, and future innovators.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg glass border border-white/10 text-white/60 hover:text-electric hover:border-electric/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg glass border border-white/10 text-white/60 hover:text-electric hover:border-electric/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-white/80 mb-5">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-electric transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + back to top */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-white/80 mb-5">
              CONTACT
            </h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li className="font-medium text-white/70">{contactInfo.collegeName}</li>
              <li className="max-w-xs">{contactInfo.address}</li>
              <li className="text-xs text-electric/80">{contactInfo.eventDates}</li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-electric transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-electric transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#home"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric hover:gap-3 transition-all"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {year} HACKSPHERE 2.0. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for innovators
          </p>
        </div>
      </div>
    </footer>
  );
}
