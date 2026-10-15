import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import { RoiCalculator } from '../components/RoiCalculator';
import {
  Check,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';

interface PricingPageProps {
  onOpenProjectDrawer: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenProjectDrawer }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const scrollToTier = (tierId: string) => {
    const el = document.getElementById(`pricing-card-${tierId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header & Controls */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          Transparent Investment Models
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Clear, Predictable Partnership Tiers
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          No percentage-of-ad-spend conflicts of interest. Fixed, transparent monthly management fees with full ownership of all assets, accounts, and campaign data.
        </p>

        {/* Billing & Currency Toggles */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          {/* Monthly vs Quarterly */}
          <div className="bg-[#121216] border border-neutral-800 p-1 rounded-xl flex items-center text-xs">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-[#CCFF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'quarterly' ? 'bg-[#CCFF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Quarterly Sprint</span>
              <span className="text-[10px] bg-black text-[#CCFF00] px-1.5 py-0.5 rounded-sm font-mono">10% OFF</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="bg-[#121216] border border-neutral-800 p-1 rounded-xl flex items-center text-xs">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-3 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                currency === 'INR' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-3 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                currency === 'USD' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Critical Transparency Notice */}
      <div className="p-5 rounded-2xl bg-[#121216] border border-neutral-800 max-w-4xl mx-auto flex items-start gap-3 text-xs text-neutral-300">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-white">Direct Platform Billing Protection:</span>
          <p className="text-neutral-400 leading-relaxed">
            All advertising media budgets (Meta, Google, TikTok, LinkedIn) and third-party software subscriptions (Klaviyo, Shopify, HubSpot) are paid directly by your company to the providers. VORTEX never marks up third-party media spend.
          </p>
        </div>
      </div>

      {/* 2. Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {AGENCY_CONFIG.pricing.map(plan => {
          const fee = currency === 'INR'
            ? (billingCycle === 'monthly' ? `${plan.monthlyFeeINR} / mo` : `${plan.quarterlyFeeINR} / qtr`)
            : (billingCycle === 'monthly' ? `${plan.monthlyFeeUSD} / mo` : `${plan.quarterlyFeeUSD} / qtr`);

          return (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#14141c] border-2 border-[#CCFF00] shadow-2xl shadow-[#CCFF00]/10 scale-[1.02]'
                  : 'bg-[#121216] border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" />
                  <span>Most Recommended</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{plan.tagline}</p>
                </div>

                <div className="py-2 border-y border-neutral-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {fee}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    Agency Service Fee (Excl. Media Spend & Taxes)
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Intended For
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {plan.bestFor}
                  </p>
                </div>

                {/* Recommended Ad Spend */}
                <div className="p-3 rounded-xl bg-[#0a0a0c] border border-neutral-800/80">
                  <div className="text-[11px] font-mono text-[#CCFF00] uppercase tracking-wider">
                    Recommended Monthly Media
                  </div>
                  <div className="text-xs text-neutral-200 mt-0.5 font-mono">
                    {plan.recommendedAdSpendINR}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Deliverables Included
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {plan.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="text-[11px] font-mono text-neutral-400 border-t border-neutral-800 pt-3">
                  <span className="text-neutral-500 block">Reporting Cadence:</span>
                  <span className="text-neutral-300">{plan.reportingCadence}</span>
                </div>

                <button
                  type="button"
                  onClick={onOpenProjectDrawer}
                  className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-lg shadow-[#CCFF00]/15'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  <span>Inquire for {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Interactive ROI & Sizing Calculator */}
      <div className="pt-8">
        <RoiCalculator onSelectTier={scrollToTier} />
      </div>

      {/* 4. Responsive Feature Comparison Matrix */}
      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
            Granular Breakdown
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Plan Feature Comparison Matrix
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Compare capabilities, creative throughput, telemetry, and senior strategist involvement.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 font-mono text-[11px] uppercase">
                <th className="py-4 px-4 font-semibold">Capability / Specification</th>
                <th className="py-4 px-4 font-semibold">Starter Growth</th>
                <th className="py-4 px-4 font-semibold text-[#CCFF00]">Performance Scale</th>
                <th className="py-4 px-4 font-semibold">Enterprise Domination</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
              <tr>
                <td className="py-3 px-4 font-medium text-white">Primary Growth Channels</td>
                <td className="py-3 px-4">1 Channel (Paid OR SEO)</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Meta Ads + Google Ads + On-Page SEO</td>
                <td className="py-3 px-4">Full-Funnel Omnichannel (All Platforms)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Creative Iteration Cadence</td>
                <td className="py-3 px-4">Bi-Weekly Sprints</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Weekly Multi-Hook Sprints</td>
                <td className="py-3 px-4">Continuous High-Cadence Studio</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Tracking & Attribution</td>
                <td className="py-3 px-4">Standard GA4 & GTM</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Server-Side GA4 + Meta CAPI Container</td>
                <td className="py-3 px-4">Custom Multi-Touch Attribution Modeling</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Landing Page Design & CRO</td>
                <td className="py-3 px-4">Audit & Recommendations</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Custom CVR Variations & A/B Testing</td>
                <td className="py-3 px-4">Dedicated Headless Funnel Architecture</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Email & WhatsApp Lifecycle</td>
                <td className="py-3 px-4">Not Included</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Up to 4 Core Automated Flows</td>
                <td className="py-3 px-4">Comprehensive VIP Retention & Broadcasts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Live Dashboard Telemetry</td>
                <td className="py-3 px-4">Looker Studio Bi-Weekly</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">24/7 Live Looker Studio + Weekly Sync</td>
                <td className="py-3 px-4">Executive Board Dashboard + Slack Alerts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-white">Direct Leadership Access</td>
                <td className="py-3 px-4">Monthly Review</td>
                <td className="py-3 px-4 text-[#CCFF00] font-medium">Senior Growth Lead + Dedicated Slack</td>
                <td className="py-3 px-4">Agency Founders & VP of Strategy Direct</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
