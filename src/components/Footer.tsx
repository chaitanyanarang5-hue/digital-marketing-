import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo, subscribeNewsletter } from '../utils/storage';
import { ArrowUp, ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ message: string; success: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterStatus({ message: 'Please enter a valid work email address.', success: false });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const res = subscribeNewsletter(newsletterEmail, 'footer');
      setNewsletterStatus(res);
      setIsSubmitting(false);
      if (res.success) {
        setNewsletterEmail('');
      }
    }, 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="bg-[#0e0e12] border-t border-neutral-800 text-neutral-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/');
              }}
              className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white group"
            >
              <span className="w-3 h-3 bg-[#CCFF00] rounded-xs inline-block group-hover:rotate-45 transition-transform" />
              <span>{AGENCY_CONFIG.brand.name}</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              {AGENCY_CONFIG.brand.tagline} We combine sharp strategy, breakthrough creative, and disciplined performance engineering to help ambitious brands get discovered, win customers, and scale sustainably.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              Operating from Gurugram & Bengaluru · Serving international clients across US, UK, UAE, and APAC.
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="bg-[#141419] border border-neutral-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Subscribe to VORTEX Insights</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Bi-weekly strategic breakdowns on performance media, SEO engineering, and brand positioning. No fluff.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#CCFF00] uppercase tracking-wider shrink-0">
                  Read by 4,200+ Growth Leaders
                </div>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterStatus) setNewsletterStatus(null);
                      }}
                      placeholder="Enter your business email"
                      className="w-full bg-[#0a0a0c] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00] transition-colors"
                      aria-label="Work Email Address"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b8e600] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Join</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {newsletterStatus && (
                  <div
                    className={`text-xs flex items-center gap-2 ${
                      newsletterStatus.success ? 'text-[#CCFF00]' : 'text-rose-400'
                    }`}
                  >
                    {newsletterStatus.success && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                    <span>{newsletterStatus.message}</span>
                  </div>
                )}
                <p className="text-[11px] text-neutral-500">
                  We respect your privacy. Unsubscribe at any time. Read our{' '}
                  <a
                    href="#/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('/privacy');
                    }}
                    className="underline hover:text-neutral-300"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-neutral-800/80">
          {/* Services Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Growth Services</h4>
            <ul className="space-y-2 text-xs">
              {AGENCY_CONFIG.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#/services/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/services/${s.slug}`);
                    }}
                    className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Creative & Tech</h4>
            <ul className="space-y-2 text-xs">
              {AGENCY_CONFIG.services.slice(4).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#/services/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/services/${s.slug}`);
                    }}
                    className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#/about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/about');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  About Us & Leadership
                </a>
              </li>
              <li>
                <a
                  href="#/work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/work');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Case Studies & Work
                </a>
              </li>
              <li>
                <a
                  href="#/pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/pricing');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Pricing & Models
                </a>
              </li>
              <li>
                <a
                  href="#/insights"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/insights');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Insights & Blog
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/contact');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/privacy');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Privacy Policy (DPDP / GDPR)
                </a>
              </li>
              <li>
                <a
                  href="#/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/terms');
                  }}
                  className="text-neutral-400 hover:text-[#CCFF00] transition-colors inline-block py-0.5"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <span className="text-neutral-500 block">GST / Compliance Registered</span>
              </li>
              <li>
                <span className="text-neutral-500 block">Zero Fake Results Policy</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Headquarters</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>Cyber City, DLF Phase 2, Gurugram, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.brand.email}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.brand.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <a href={`tel:${AGENCY_CONFIG.brand.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.brand.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} {AGENCY_CONFIG.brand.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>All media ad spends paid directly to platforms</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={AGENCY_CONFIG.brand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#CCFF00] transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={AGENCY_CONFIG.brand.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#CCFF00] transition-colors"
                aria-label="X / Twitter"
              >
                X / Twitter
              </a>
              <a
                href={AGENCY_CONFIG.brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#CCFF00] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-[#CCFF00] hover:border-neutral-700 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
