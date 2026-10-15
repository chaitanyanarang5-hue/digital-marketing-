import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface PortfolioPageProps {
  onOpenProjectDrawer: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenProjectDrawer }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & Banking' },
    { id: 'd2c', label: 'D2C Lifestyle & Luxury' },
    { id: 'hospitality', label: 'Gastronomy & Hospitality' },
    { id: 'saas', label: 'Enterprise B2B SaaS' }
  ];

  const filteredProjects = AGENCY_CONFIG.caseStudies.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'fintech') return p.industry.toLowerCase().includes('fintech');
    if (activeCategory === 'd2c') return p.industry.toLowerCase().includes('d2c') || p.industry.toLowerCase().includes('lifestyle');
    if (activeCategory === 'hospitality') return p.industry.toLowerCase().includes('hospitality');
    if (activeCategory === 'saas') return p.industry.toLowerCase().includes('saas') || p.industry.toLowerCase().includes('software');
    return true;
  });

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          Work & Case Studies
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Evidence of Impact Across High-Growth Markets
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Explore how we deploy creative storytelling, technical search infrastructure, and performance media to solve complex acquisition and positioning challenges.
        </p>

        {/* NDA & Authenticity Transparency Notice */}
        <div className="p-4 rounded-xl bg-[#121216] border border-neutral-800 flex items-start gap-3 text-xs text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-white">Integrity Notice:</span> To honor strict client Non-Disclosure Agreements (NDAs), the cases below represent demonstration models and anonymized client accounts with explicitly illustrative performance metrics. We never manufacture fake client logos or fabricate customer testimonials.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#CCFF00] text-black shadow-sm'
                  : 'bg-[#121216] text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => navigateTo(`/work/${project.slug}`)}
            className="bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 rounded-3xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-[#0a0a0c]/80 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-800">
                    {project.industry}
                  </span>
                  <span className="font-mono text-[#CCFF00] text-[11px] font-semibold">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {project.client}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#CCFF00] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Services Delivered */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.servicesDelivered.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-neutral-400 bg-[#0a0a0c] px-2 py-0.5 rounded-sm border border-neutral-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-extrabold text-white font-mono">{m.value}</div>
                      <div className="text-[11px] text-neutral-400 line-clamp-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#CCFF00]">
              <span>Read complete case study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#141419] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Have a unique challenge in mind?</h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          We build custom strategic roadmaps across paid media, search architecture, and creative positioning.
        </p>
        <button
          type="button"
          onClick={onOpenProjectDrawer}
          className="px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
        >
          Discuss Your Project
        </button>
      </div>
    </div>
  );
};
