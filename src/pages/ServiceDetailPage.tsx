import React, { useState } from 'react';
import { AGENCY_CONFIG, ServiceItem } from '../config/agency';
import { navigateTo } from '../utils/storage';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Wrench,
  HelpCircle,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onOpenProjectDrawer: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onOpenProjectDrawer }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = AGENCY_CONFIG.services.find(s => s.slug === slug) || AGENCY_CONFIG.services[0];
  const relatedCaseStudy = service.relatedCaseStudyId
    ? AGENCY_CONFIG.caseStudies.find(c => c.id === service.relatedCaseStudyId)
    : null;

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb / Back button */}
      <div>
        <button
          type="button"
          onClick={() => navigateTo('/services')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Capabilities</span>
        </button>
      </div>

      {/* 1. Hero Headline & Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-block text-xs font-mono uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-3 py-1 rounded-full">
            {service.title}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.heroHeadline}
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="p-4 rounded-xl bg-[#121216] border border-neutral-800 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Primary Commercial Benefit</div>
              <p className="text-xs text-neutral-300 mt-0.5">{service.keyBenefit}</p>
            </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-4 bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Commission Practice
          </div>
          <h3 className="text-lg font-bold text-white">
            Ready to deploy {service.title}?
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Available as a stand-alone strategic sprint or integrated into our monthly performance retainers.
          </p>

          <button
            type="button"
            onClick={onOpenProjectDrawer}
            className="w-full py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#CCFF00]/10"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-[11px] text-neutral-500 font-mono text-center">
            Zero lock-in contracts · Full IP transfer
          </div>
        </div>
      </div>

      {/* 2. Problems Solved & Ideal For */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problems Solved */}
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
            Problem Diagnostics
          </div>
          <h3 className="text-xl font-bold text-white">
            Common Friction Points We Eliminate
          </h3>
          <ul className="space-y-3 pt-2 text-xs text-neutral-300">
            {service.problemsSolved.map((prob, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✕
                </span>
                <span className="leading-relaxed">{prob}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal For */}
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
            Target Fit
          </div>
          <h3 className="text-xl font-bold text-white">
            Ideal For Ambitious Teams
          </h3>
          <ul className="space-y-3 pt-2 text-xs text-neutral-300">
            {service.idealFor.map((audience, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-[#CCFF00] flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-relaxed">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Deliverables */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
            Tangible Scope
          </div>
          <h3 className="text-2xl font-bold text-white">
            Deliverables & Tangible Outputs
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Exact strategic artifacts, technical configurations, and continuous assets included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {service.deliverables.map((deliv, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span className="text-xs text-neutral-200 leading-relaxed">{deliv}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. The Working Process */}
      <div className="space-y-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
            Structured Workflow
          </div>
          <h3 className="text-2xl font-bold text-white">
            How We Execute This Discipline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map(p => (
            <div key={p.step} className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 space-y-3">
              <div className="text-2xl font-mono font-bold text-[#CCFF00]">{p.step}</div>
              <h4 className="text-sm font-bold text-white">{p.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Tools & Technology Stack */}
      <div className="bg-[#0e0e12] border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <Wrench className="w-4 h-4 text-[#CCFF00]" />
          <span>Platforms & Technology Stack Utilized</span>
        </div>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {service.tools.map((t, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-[#141419] border border-neutral-800 rounded-xl text-xs font-mono text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 6. Related Demonstration Case Study */}
      {relatedCaseStudy && (
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
            Case Evidence
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-video border border-neutral-800">
              <img
                src={relatedCaseStudy.image}
                alt={relatedCaseStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs text-neutral-400 font-mono">{relatedCaseStudy.client}</div>
              <h4 className="text-xl font-bold text-white">{relatedCaseStudy.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{relatedCaseStudy.summary}</p>

              <button
                type="button"
                onClick={() => navigateTo(`/work/${relatedCaseStudy.slug}`)}
                className="text-xs font-bold text-[#CCFF00] hover:underline flex items-center gap-1.5 pt-2 cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. FAQs for this service */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-3xl space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-[#121216] border border-neutral-800 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs font-bold text-white hover:text-[#CCFF00] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#CCFF00]" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 8. Bottom CTA */}
      <div className="bg-[#181820] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Let's Tailor {service.title} for Your Brand
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          We will review your existing assets and schedule a 30-minute strategic consultation with our discipline lead.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenProjectDrawer}
            className="px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            Start Project Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
