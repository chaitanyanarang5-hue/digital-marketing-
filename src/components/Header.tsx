import React, { useState, useEffect } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import { RouteState } from '../types';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: RouteState;
  onOpenProjectDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onOpenProjectDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    navigateTo(path);
  };

  const isActive = (pageName: string) => {
    if (pageName === 'services' && (currentRoute.page === 'services' || currentRoute.page === 'service-detail')) return true;
    if (pageName === 'work' && (currentRoute.page === 'work' || currentRoute.page === 'case-study-detail')) return true;
    return currentRoute.page === pageName;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-xl font-extrabold tracking-tight text-white hover:text-[#CCFF00] transition-colors"
          >
            <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-xs inline-block group-hover:rotate-45 transition-transform duration-300" />
            <span>{AGENCY_CONFIG.brand.name}</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300" aria-label="Main Navigation">
            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleNav('/services')}
                className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 ${
                  isActive('services') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#CCFF00]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#121216] border border-neutral-800 rounded-xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in duration-150">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-3 py-1 mb-1 border-b border-neutral-800/60">
                      Core Offerings
                    </div>
                    <div className="space-y-1">
                      {AGENCY_CONFIG.services.map((service) => (
                        <a
                          key={service.id}
                          href={`#/services/${service.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNav(`/services/${service.slug}`);
                          }}
                          className="flex flex-col px-3 py-2 rounded-lg hover:bg-neutral-800/60 transition-colors group"
                        >
                          <span className="text-xs font-semibold text-neutral-200 group-hover:text-[#CCFF00] transition-colors flex items-center justify-between">
                            {service.title}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </span>
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-neutral-800/80 px-3">
                      <a
                        href="#/services"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav('/services');
                        }}
                        className="text-xs text-[#CCFF00] font-medium hover:underline flex items-center gap-1"
                      >
                        Explore all capabilities &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#/work"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/work');
              }}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                isActive('work') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
              }`}
            >
              Work
            </a>

            <a
              href="#/about"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/about');
              }}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                isActive('about') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
              }`}
            >
              About
            </a>

            <a
              href="#/pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/pricing');
              }}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                isActive('pricing') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
              }`}
            >
              Pricing
            </a>

            <a
              href="#/insights"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/insights');
              }}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                isActive('insights') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
              }`}
            >
              Insights
            </a>

            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/contact');
              }}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
                isActive('contact') ? 'text-[#CCFF00] font-semibold' : 'hover:text-white'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenProjectDrawer}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b8e600] rounded-lg transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 shadow-lg shadow-[#CCFF00]/10 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={onOpenProjectDrawer}
              className="px-3.5 py-1.5 text-xs font-bold text-black bg-[#CCFF00] rounded-md transition-colors"
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0a0a0c]/98 border-b border-neutral-800 z-40 overflow-y-auto px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4 text-base font-medium">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              Home
            </a>

            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 py-1">Services</div>
              <div className="pl-3 mt-1 space-y-2 border-l border-neutral-800">
                <a
                  href="#/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/services');
                  }}
                  className="block text-sm text-[#CCFF00] font-semibold py-1"
                >
                  All Services Hub &rarr;
                </a>
                {AGENCY_CONFIG.services.map((s) => (
                  <a
                    key={s.id}
                    href={`#/services/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/services/${s.slug}`);
                    }}
                    className="block text-sm text-neutral-300 hover:text-white py-1"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#/work"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/work');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              Work / Case Studies
            </a>

            <a
              href="#/about"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/about');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              About Agency
            </a>

            <a
              href="#/pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/pricing');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              Pricing & Models
            </a>

            <a
              href="#/insights"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/insights');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              Insights & Blog
            </a>

            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/contact');
              }}
              className="py-2 text-neutral-200 hover:text-[#CCFF00] border-b border-neutral-800/60"
            >
              Contact Us
            </a>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectDrawer();
                }}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] rounded-xl shadow-lg shadow-[#CCFF00]/10"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
