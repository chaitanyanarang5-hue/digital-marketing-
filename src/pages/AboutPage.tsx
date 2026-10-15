import React from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import {
  ShieldCheck,
  Compass,
  Eye,
  Award,
  Users,
  Building2,
  Check,
  ArrowRight,
  Globe
} from 'lucide-react';

interface AboutPageProps {
  onOpenProjectDrawer: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProjectDrawer }) => {
  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header & Brand Statement */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          About {AGENCY_CONFIG.brand.name}
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          We Believe Great Brands Win On Substance, Not Buzzwords.
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Founded in {AGENCY_CONFIG.brand.foundedYear} in {AGENCY_CONFIG.brand.location}, VORTEX Digital was established by senior practitioners tired of agency bureaucracy, fabricated vanity reports, and superficial design that fails to generate business.
        </p>
      </div>

      {/* Hero Studio Banner */}
      <div className="rounded-3xl overflow-hidden border border-neutral-800 aspect-[21/9] shadow-2xl relative">
        <img
          src={AGENCY_CONFIG.images.heroStudio}
          alt="VORTEX Agency workspace"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 sm:left-10 text-white space-y-1">
          <div className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider">
            Operational Hub
          </div>
          <div className="text-xl font-bold">
            DLF Cyber City, Gurugram & Indiranagar, Bengaluru
          </div>
        </div>
      </div>

      {/* 2. Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center text-[#CCFF00]">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            To provide high-ambition founders and enterprise marketing leaders with clear strategic direction, rigorous data engineering, and unforgettable brand creative that produces measurable, sustainable commercial growth.
          </p>
        </div>

        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center text-[#CCFF00]">
            <Eye className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            To establish the new global standard for modern creative agencies—where creative intuition and technical precision collaborate seamlessly, eliminating all friction between marketing expenditure and financial returns.
          </p>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
            The Principles That Guide Us
          </div>
          <h2 className="text-3xl font-bold text-white">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Scientific Rigor",
              desc: "We treat marketing as an empirical discipline. Every hypothesis is tested, measured against baseline data, and proven before scaling budget."
            },
            {
              title: "Uncompromising Taste",
              desc: "Performance without aesthetic care creates disposable brands. We build high-fidelity design systems and narratives that earn long-term prestige."
            },
            {
              title: "Radical Transparency",
              desc: "No hidden media markups. No opaque billing. Clients receive direct access to raw analytics and platform accounts from day one."
            },
            {
              title: "Aligned Incentives",
              desc: "We measure our success by your company's P&L, customer lifetime value, and bottom-line health—not by how much ad spend we can convince you to burn."
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono text-[#CCFF00] font-bold">0{idx + 1}.</div>
              <h3 className="text-base font-bold text-white">{val.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Leadership & Subject-Matter Experts */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
              Practitioners, Not Account Salespeople
            </div>
            <h2 className="text-3xl font-bold text-white">Agency Leadership</h2>
            <p className="text-xs text-neutral-400 mt-1">
              Direct engagement with seasoned discipline heads on every strategic call.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Editable Founder & Team Configuration
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_CONFIG.leadership.map((leader, idx) => (
            <div key={idx} className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0a0a0c] border border-neutral-800 flex items-center justify-center font-bold text-lg text-[#CCFF00] font-mono">
                {leader.initials}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{leader.name}</h3>
                <div className="text-xs text-[#CCFF00] font-medium mt-0.5">{leader.role}</div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Why Choose VORTEX */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
              Strategic Differentiation
            </div>
            <h2 className="text-3xl font-bold text-white">Why Modern Brands Choose Us</h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              We operate as an agile, high-caliber growth division embedded directly alongside your executive and product leadership.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Zero junior delegation: senior leads directly execute strategy",
              "Direct platform ad billing with zero hidden markup percentages",
              "First-party server-side tracking (GA4 + Meta CAPI compliant)",
              "Live 24/7 Looker Studio dashboards instead of delayed monthly slide decks",
              "Modular creative production delivering 6+ new hooks weekly",
              "Global timezone overlap covering US, UK, UAE, and APAC"
            ].map((point, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 flex items-start gap-3">
                <Check className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-300 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#181820] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Meet the Minds Behind Your Next Campaign
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          Schedule an introductory discovery session to discuss your company's growth targets and competitive whitespace.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenProjectDrawer}
            className="px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
