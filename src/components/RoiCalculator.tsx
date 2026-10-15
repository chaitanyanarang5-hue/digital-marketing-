import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, AlertCircle } from 'lucide-react';

interface RoiCalculatorProps {
  onSelectTier?: (tierName: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onSelectTier }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [adSpend, setAdSpend] = useState<number>(200000); // 2 Lakhs INR default
  const [industry, setIndustry] = useState<'ecommerce' | 'saas' | 'services' | 'hospitality'>('ecommerce');
  const [avgTicket, setAvgTicket] = useState<number>(2500); // INR 2,500 average order

  // Industry benchmark estimates (conservative and realistic)
  const industryBenchmarks = {
    ecommerce: { roas: 3.2, cpaMultiplier: 0.28, label: 'E-commerce & D2C' },
    saas: { roas: 2.8, cpaMultiplier: 0.35, label: 'B2B Software & SaaS' },
    services: { roas: 4.1, cpaMultiplier: 0.22, label: 'Professional Services' },
    hospitality: { roas: 3.8, cpaMultiplier: 0.25, label: 'Hospitality & Dining' },
  };

  const selectedBench = industryBenchmarks[industry];
  const projectedRevenue = Math.round(adSpend * selectedBench.roas);
  const estimatedOrders = Math.max(1, Math.round(projectedRevenue / (avgTicket || 1)));
  const estimatedCPA = Math.round(adSpend / estimatedOrders);

  // Recommended plan based on spend
  let recommendedPlan = 'Starter Growth';
  let planId = 'starter';
  if (adSpend >= 500000) {
    recommendedPlan = 'Enterprise Domination';
    planId = 'scale';
  } else if (adSpend >= 150000) {
    recommendedPlan = 'Performance Scale';
    planId = 'growth';
  }

  const formatNumber = (num: number) => {
    if (currency === 'INR') {
      return `₹${num.toLocaleString('en-IN')}`;
    }
    return `$${Math.round(num / 83).toLocaleString('en-US')}`;
  };

  return (
    <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Growth & Budget Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Estimate Marketing Efficiency & Channel Sizing
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xl">
            Simulate expected return scenarios based on your target platform ad spend and industry unit economics.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center self-start md:self-auto bg-neutral-900 border border-neutral-800 rounded-lg p-1 text-xs">
          <button
            type="button"
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
              currency === 'INR' ? 'bg-[#CCFF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
              currency === 'USD' ? 'bg-[#CCFF00] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Industry Selection */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-2">
              Select Your Industry Model
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(industryBenchmarks) as Array<keyof typeof industryBenchmarks>).map((key) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setIndustry(key)}
                  className={`p-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                    industry === key
                      ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white font-bold'
                      : 'bg-[#0a0a0c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {industryBenchmarks[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Ad Spend Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-medium text-neutral-300">Target Monthly Media Spend (Paid to Meta / Google)</span>
              <span className="font-mono text-sm font-bold text-[#CCFF00]">{formatNumber(adSpend)} / mo</span>
            </div>
            <input
              type="range"
              min={50000}
              max={1500000}
              step={25000}
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
            />
            <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
              <span>₹50,000 / mo</span>
              <span>₹7.5 Lakhs</span>
              <span>₹15 Lakhs+ / mo</span>
            </div>
          </div>

          {/* Average Order Value or Deal Size */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Average Order Value (AOV) or First-Year Contract Value ({currency})
            </label>
            <div className="relative">
              <input
                type="number"
                min={500}
                max={500000}
                step={500}
                value={avgTicket}
                onChange={(e) => setAvgTicket(Math.max(100, Number(e.target.value)))}
                className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
              />
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              Used to calculate estimated transaction volume and targeted cost per acquisition (CPA).
            </p>
          </div>
        </div>

        {/* Projection Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0a0a0c] border border-neutral-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
              Estimated Monthly Output Model
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-neutral-400">Projected Attributed Pipeline / Gross Revenue</div>
                <div className="text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                  {formatNumber(projectedRevenue)}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                  ~{selectedBench.roas}x Estimated Return on Ad Spend (ROAS)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-neutral-800">
                <div>
                  <div className="text-[11px] text-neutral-400">Est. Conversions / Orders</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">{estimatedOrders} units</div>
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Target CPA / CPL</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">{formatNumber(estimatedCPA)}</div>
                </div>
              </div>

              {/* Recommended Tier */}
              <div className="pt-4 border-t border-neutral-800">
                <div className="text-[11px] uppercase font-mono tracking-wider text-[#CCFF00]">
                  Recommended Engagement Model
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {recommendedPlan}
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Engineered to support {formatNumber(adSpend)} in monthly media throughput with weekly creative testing.
                </p>

                {onSelectTier && (
                  <button
                    type="button"
                    onClick={() => onSelectTier(planId)}
                    className="w-full mt-4 py-2.5 bg-neutral-800 hover:bg-[#CCFF00] hover:text-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View {recommendedPlan} Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-start gap-2 text-[10px] text-neutral-400 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
              <span>
                Calculations are illustrative models based on category averages. Ad spend is paid directly to advertising platforms.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
