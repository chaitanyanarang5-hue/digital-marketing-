import React from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import { ArrowLeft, FileText, ShieldAlert } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div>
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          Standard Commercial Engagement Terms
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-xs text-neutral-400 font-mono">
          Last Updated: March 2026 · Governing Law: Gurugram, Haryana, India
        </p>
      </div>

      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">1. Scope of Engagement</h2>
          <p>
            These Terms and Conditions govern the professional marketing, design, development, and strategic advisory services provided by {AGENCY_CONFIG.brand.legalName} ("VORTEX Digital") to clients ("Client"). Specific deliverables, milestone schedules, and financial terms are set forth in mutually executed Statements of Work (SOW) or Retainer Agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">2. Third-Party Advertising & Media Budgets</h2>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-neutral-200 space-y-2">
            <span className="font-bold text-amber-400 block">Crucial Media Spend Principle:</span>
            <p className="text-xs leading-relaxed">
              Agency professional fees are strictly compensation for strategy, creative production, ad account management, engineering, and data attribution. All media advertising spend (including payments to Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads) is billed directly by the advertising platforms to Client's designated payment credentials. VORTEX does not mark up media spend.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">3. Intellectual Property Rights</h2>
          <p>
            Upon full settlement of all invoiced fees for a given deliverable or milestone:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-neutral-400">
            <li><strong className="text-white">Custom Assets:</strong> All final custom graphic assets, copywriting, website code, and creative video deliverables transfer exclusively to Client.</li>
            <li><strong className="text-white">Ad Accounts & Data:</strong> All advertising accounts, Google Analytics properties, and Tag Manager containers remain the sole property of Client. VORTEX accesses accounts via agency manager permissions.</li>
            <li><strong className="text-white">Agency Know-How:</strong> Proprietary internal agency templates, testing scripts, and benchmark libraries remain the intellectual property of VORTEX Digital.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">4. Realistic Performance & No False Guarantees</h2>
          <p>
            Digital marketing performance is inherently influenced by macro-economic market conditions, competitor auction bids, platform algorithm changes, client sales responsiveness, and underlying product-market fit. While VORTEX adheres to rigorous empirical methodologies and industry best practices, we explicitly do not guarantee specific monetary sales figures, lead counts, or Google #1 search rankings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">5. Mutual Confidentiality (NDA)</h2>
          <p>
            Both parties agree to hold all non-public commercial data, customer records, financial metrics, and product roadmaps in strict confidence. This obligation survives termination of the engagement for a minimum period of three (3) years.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">6. Invoicing & Cancellation</h2>
          <p>
            Monthly retainer services are invoiced in advance of each 30-day operating sprint. Retainer engagements may be terminated by either party with thirty (30) days prior written notice, ensuring complete transition of assets and active campaign management.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-neutral-800">
          <h2 className="text-base sm:text-lg font-bold text-white">7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by and construed in accordance with the substantive laws of the Republic of India. Any legal dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Gurugram, Haryana, India.
          </p>
        </section>
      </div>
    </div>
  );
};
