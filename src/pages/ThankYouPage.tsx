import React, { useEffect, useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { getStoredLeads, navigateTo } from '../utils/storage';
import { LeadInquiry } from '../types';
import {
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  ShieldCheck,
  Mail
} from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const [latestInquiry, setLatestInquiry] = useState<LeadInquiry | null>(null);

  useEffect(() => {
    const leads = getStoredLeads();
    const lastId = sessionStorage.getItem('vortex_last_lead_id');
    if (lastId) {
      const found = leads.find(l => l.id === lastId);
      if (found) setLatestInquiry(found);
    } else if (leads.length > 0) {
      setLatestInquiry(leads[0]);
    }
  }, []);

  const downloadReceipt = () => {
    if (!latestInquiry) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(latestInquiry, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `VORTEX-Brief-${latestInquiry.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] mx-auto animate-in zoom-in duration-300">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
          Brief Successfully Received
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Thank You. We Are Reviewing Your Project.
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Your project discovery brief has been routed to our senior strategy desk. We will evaluate your current digital presence and respond within 24 business hours.
        </p>

        {latestInquiry && (
          <div className="inline-block bg-[#121216] border border-neutral-800 px-4 py-2 rounded-xl text-xs font-mono text-neutral-300 mt-2">
            Inquiry Reference: <span className="text-[#CCFF00] font-bold">{latestInquiry.id}</span>
          </div>
        )}
      </div>

      {/* What Happens Next Timeline */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#CCFF00]" />
          <span>What Happens Next (Our 24-Hour Review Protocol)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#0a0a0c] border border-neutral-800/80 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-mono text-[#CCFF00] font-bold">Step 01 · 0–6 Hours</span>
            <h3 className="text-sm font-bold text-white">Technical & Competitor Recon</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We audit your domain crawl health, review competitor ad copy, and assess your current positioning.
            </p>
          </div>

          <div className="bg-[#0a0a0c] border border-neutral-800/80 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-mono text-[#CCFF00] font-bold">Step 02 · 6–18 Hours</span>
            <h3 className="text-sm font-bold text-white">Strategy Brief Synthesis</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our discipline lead outlines 3 immediate growth levers tailored to your unit economics.
            </p>
          </div>

          <div className="bg-[#0a0a0c] border border-neutral-800/80 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-mono text-[#CCFF00] font-bold">Step 03 · 18–24 Hours</span>
            <h3 className="text-sm font-bold text-white">Executive Consultation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We invite your team to a 30-minute discovery call to review the strategic roadmap and milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Brief Summary Receipt */}
      {latestInquiry && (
        <div className="bg-[#0e0e12] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Brief Submission Summary
            </div>
            <button
              onClick={downloadReceipt}
              className="text-xs text-[#CCFF00] hover:underline flex items-center gap-1 font-mono cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON Copy</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div>
              <span className="text-neutral-500 block font-mono">Company</span>
              <span className="text-white font-medium">{latestInquiry.companyName}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-mono">Primary Contact</span>
              <span className="text-white font-medium">{latestInquiry.fullName}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-mono">Work Email</span>
              <span className="text-white font-medium">{latestInquiry.businessEmail}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-mono">Budget Tier</span>
              <span className="text-white font-medium">{latestInquiry.budgetRange}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-mono">Target Timeline</span>
              <span className="text-white font-medium">{latestInquiry.timeline}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-mono">Preferred Channel</span>
              <span className="text-white font-medium capitalize">{latestInquiry.preferredContact}</span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
        >
          Return to Homepage
        </button>

        <button
          type="button"
          onClick={() => navigateTo('/insights')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#121216] hover:bg-[#18181f] text-neutral-200 border border-neutral-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
        >
          Browse Growth Insights
        </button>
      </div>
    </div>
  );
};
