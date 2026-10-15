import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import {
  Search,
  Share2,
  TrendingUp,
  Palette,
  Code,
  FileText,
  Mail,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Layers,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onOpenProjectDrawer: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenProjectDrawer }) => {
  const [filter, setFilter] = useState<'all' | 'performance' | 'creative' | 'technology'>('all');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'paid-advertising',
    'analytics-cro'
  ]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5" />,
    Share2: <Share2 className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />
  };

  const getCategory = (id: string): 'performance' | 'creative' | 'technology' => {
    if (id === 'paid-advertising' || id === 'seo' || id === 'email-whatsapp') return 'performance';
    if (id === 'branding' || id === 'social-media' || id === 'content-marketing') return 'creative';
    return 'technology';
  };

  const filteredServices = AGENCY_CONFIG.services.filter(s => {
    if (filter === 'all') return true;
    return getCategory(s.id) === filter;
  });

  const toggleSelect = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
          Capabilities & Practices
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Engineered for Attention. Built for Measurable Revenue.
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
          We don't sell disconnected tactics. Our eight specialized disciplines integrate into a cohesive customer acquisition and brand equity engine. Select any offering below for deep-dive deliverables and processes.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {[
            { id: 'all', label: 'All 8 Disciplines' },
            { id: 'performance', label: 'Performance & Acquisition' },
            { id: 'creative', label: 'Creative & Narrative' },
            { id: 'technology', label: 'Technology & Conversion' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#CCFF00] text-black shadow-sm'
                  : 'bg-[#121216] text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map(svc => (
          <div
            key={svc.id}
            className="bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-8 space-y-6 flex flex-col justify-between transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center text-[#CCFF00]">
                  {serviceIconMap[svc.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Practice #{svc.id.toUpperCase()}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white hover:text-[#CCFF00] transition-colors cursor-pointer" onClick={() => navigateTo(`/services/${svc.slug}`)}>
                  {svc.title}
                </h2>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {svc.fullDesc}
                </p>
              </div>

              {/* Problems Solved */}
              <div className="space-y-2 pt-3 border-t border-neutral-800/80">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Typical Symptoms We Address
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {svc.problemsSolved.slice(0, 3).map((prob, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#CCFF00] font-mono font-bold">›</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Snippet */}
              <div className="space-y-2 pt-3 border-t border-neutral-800/80">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Key Deliverables Included
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {svc.deliverables.slice(0, 3).map((deliv, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#0a0a0c] border border-neutral-800/80 text-neutral-300 px-2.5 py-1 rounded-md"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => navigateTo(`/services/${svc.slug}`)}
                className="text-xs font-bold text-[#CCFF00] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Full Scope & Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => toggleSelect(svc.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedServices.includes(svc.id)
                    ? 'bg-[#CCFF00]/15 border-[#CCFF00] text-[#CCFF00] font-semibold'
                    : 'bg-[#0a0a0c] border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {selectedServices.includes(svc.id) ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included in Scope</span>
                  </>
                ) : (
                  <span>+ Add to Scope</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Custom Engagement Planner */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
              Customized Engagement
            </div>
            <h3 className="text-2xl font-bold text-white">
              Do I Need Every Service, or Can I Combine Specific Ones?
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              No service exists in a silo, and you are never forced into a cookie-cutter bundle. You can commission a targeted sprint or a blended full-funnel engagement.
            </p>
          </div>

          <div className="bg-[#0a0a0c] border border-neutral-800 px-4 py-2.5 rounded-xl text-xs text-neutral-300 font-mono">
            Selected in Scope: <span className="text-[#CCFF00] font-bold">{selectedServices.length} Disciplines</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <div className="text-xs text-neutral-400">
            Ready to review your tailored strategy brief with our leadership team?
          </div>
          <button
            type="button"
            onClick={onOpenProjectDrawer}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Request Tailored Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
