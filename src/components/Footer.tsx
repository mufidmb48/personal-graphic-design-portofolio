import React from 'react';
import { ArrowUp, Github, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { MxtLogo } from './ui/MxtLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-surface-container-highest/60 border-t border-outline-variant py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Brand info with MXT Logo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <MxtLogo size={34} />
              <h3 className="text-xl font-bold tracking-tight text-on-surface">
                MXT · Mufid Muhammad Baihaqi
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-sm mb-4">
              Graphic designer specializing in Posters & Flyers, Social Media Design, Banners, Event Visuals, Promotional Design, and Brand Identity.
            </p>
            <p className="text-xs text-outline">
              Available for commercial commissions, freelance projects, and creative collaborations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-secondary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">
                Connect Directly
              </h4>
              <div className="flex flex-col gap-2 text-xs text-secondary">
                <a
                  href="https://wa.me/6283198512127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-primary" />
                  <span>WhatsApp (+62 831-9851-2127)</span>
                </a>
                <a
                  href="mailto:mufidmb085@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>mufidmb085@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/mufidmb38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram (@mufidmb38)</span>
                </a>
                <a
                  href="https://github.com/mufidmb48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (mufidmb48)</span>
                </a>
                <a
                  href="https://facebook.com/mufidmb48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
          <p>© 2026 MXT · Mufid Muhammad Baihaqi. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Material 3 Expressive Design System</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
