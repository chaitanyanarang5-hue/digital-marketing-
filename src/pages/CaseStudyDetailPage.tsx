import React from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Lightbulb,
  Sparkles,
  Target,
  BarChart,
  Layers
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
  onOpenProjectDrawer: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onOpenProjectDrawer }) => {
  const caseStudy = AGENCY_CONFIG.caseStudies.find(c => c.slug === slug) || AGENCY_CONFIG.caseStudies[0];
  const otherProjects = AGENCY_CONFIG.caseStudies.filter(c => c.id !== caseStudy.id).slice(0, 2);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={() => navigateTo('/work')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      {/* Case Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-3 py-1 rounded-full">
            {caseStudy.industry}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            Timeline: {caseStudy.timeline}
          </span>
          <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
            Demonstration Brief & Illustrative Metrics
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {caseStudy.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          {caseStudy.summary}
        </p>

        {/* Services Delivered */}
        <div className="flex flex-wrap gap-2 pt-2">
          {caseStudy.servicesDelivered.map((svc, i) => (
            <span
              key={i}
              className="text-xs font-mono text-neutral-300 bg-[#121216] border border-neutral-800 px-3 py-1 rounded-md"
            >
              {svc}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Visual Asset */}
      <div className="rounded-3xl overflow-hidden border border-neutral-800 aspect-[16/9] shadow-2xl relative">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Quantitative Impact Strip */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-6">
          Illustrative Commercial Outcomes
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{m.value}</div>
              <div className="text-xs font-semibold text-neutral-200">{m.label}</div>
              <div className="text-[11px] font-mono text-neutral-500">{m.period}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Deep Dive: Challenge -> Strategy -> Execution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Challenge */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400">
              <Target className="w-4 h-4" />
              <span>01. The Business Challenge</span>
            </div>
            <h2 className="text-2xl font-bold text-white">The Commercial Bottleneck</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* Strategy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
              <Lightbulb className="w-4 h-4" />
              <span>02. The Strategic Hypothesis</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Our Strategic Pivot</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">{caseStudy.strategy}</p>
          </div>

          {/* Execution */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400">
              <Layers className="w-4 h-4" />
              <span>03. Implementation & Engineering</span>
            </div>
            <h2 className="text-2xl font-bold text-white">How It Was Executed</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">{caseStudy.execution}</p>
          </div>

          {/* Key Learnings */}
          <div className="bg-[#0e0e12] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
              <Sparkles className="w-4 h-4" />
              <span>Strategic Learning & Principle</span>
            </div>
            <h3 className="text-lg font-bold text-white">Key Takeaway</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
              "{caseStudy.learnings}"
            </p>
          </div>
        </div>

        {/* Sidebar Info & Action */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white">
              Want Similar Results for Your Brand?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We apply these exact performance engineering and creative methodologies to your growth engine.
            </p>

            <button
              type="button"
              onClick={onOpenProjectDrawer}
              className="w-full py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#CCFF00]/10"
            >
              <span>Schedule Strategic Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-4 border-t border-neutral-800 space-y-3 text-xs text-neutral-400">
              <div>
                <span className="font-mono text-neutral-500 block">Demonstration Brand</span>
                <span className="text-white font-medium">{caseStudy.client}</span>
              </div>
              <div>
                <span className="font-mono text-neutral-500 block">Industry</span>
                <span className="text-white font-medium">{caseStudy.industry}</span>
              </div>
              <div>
                <span className="font-mono text-neutral-500 block">Primary Disciplines</span>
                <span className="text-white font-medium">{caseStudy.servicesDelivered.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="pt-12 border-t border-neutral-800 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Explore More Case Studies</h3>
          <button
            type="button"
            onClick={() => navigateTo('/work')}
            className="text-xs font-bold text-[#CCFF00] hover:underline cursor-pointer"
          >
            All Work &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map(p => (
            <div
              key={p.id}
              onClick={() => navigateTo(`/work/${p.slug}`)}
              className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 hover:border-[#CCFF00]/40 transition-colors group cursor-pointer flex gap-4 items-center"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-neutral-800">
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#CCFF00] uppercase tracking-wider">{p.industry}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#CCFF00] transition-colors line-clamp-2">
                  {p.title}
                </h4>
                <div className="text-xs text-neutral-400 font-mono">{p.metrics[0]?.value} {p.metrics[0]?.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
