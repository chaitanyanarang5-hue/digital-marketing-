import React, { useState, useEffect } from 'react';
import { getCookieConsent, saveCookieConsent, CookiePreferences } from '../utils/storage';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true,
    responded: false
  });

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing.responded) {
      // Delay showing by 1.5s so it doesn't jarringly block the hero
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    saveCookieConsent({ essential: true, analytics: true, marketing: true });
    setVisible(false);
  };

  const handleRejectNonEssential = () => {
    saveCookieConsent({ essential: true, analytics: false, marketing: false });
    setVisible(false);
  };

  const handleSaveCustom = () => {
    saveCookieConsent(prefs);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#121216] border border-neutral-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 text-neutral-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Privacy & Cookie Preferences</h4>
        </div>
        <button
          onClick={handleRejectNonEssential}
          className="text-neutral-400 hover:text-white p-1 rounded-sm"
          aria-label="Close cookie banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-xs text-neutral-400 leading-relaxed mb-4">
        We use essential cookies to maintain system security and optional analytical signals to measure campaign performance. In accordance with Indian DPDP Act and international privacy frameworks, you have full control over non-essential telemetry.
      </p>

      {showCustomize ? (
        <div className="space-y-3 mb-4 pt-2 border-t border-neutral-800">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-semibold text-white block">Strictly Essential</span>
              <span className="text-[11px] text-neutral-400">Required for routing, security, and inquiries</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">Always Active</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-semibold text-white block">Performance & Analytics</span>
              <span className="text-[11px] text-neutral-400">Aggregated usage metrics (GA4)</span>
            </div>
            <input
              type="checkbox"
              checked={prefs.analytics}
              onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
              className="rounded accent-[#CCFF00] cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-semibold text-white block">Attribution & Ads</span>
              <span className="text-[11px] text-neutral-400">Meta CAPI and Google Ads conversion events</span>
            </div>
            <input
              type="checkbox"
              checked={prefs.marketing}
              onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
              className="rounded accent-[#CCFF00] cursor-pointer"
            />
          </div>

          <button
            type="button"
            onClick={handleSaveCustom}
            className="w-full py-2 bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#b8e600] transition-colors mt-2"
          >
            Save My Preferences
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2 text-xs">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 bg-[#CCFF00] text-black font-bold uppercase tracking-wider rounded-lg hover:bg-[#b8e600] transition-colors text-center"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="py-2 px-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors text-center font-medium"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => setShowCustomize(true)}
            className="py-2 px-2 text-neutral-400 hover:text-white underline text-[11px] text-center"
          >
            Customize
          </button>
        </div>
      )}
    </div>
  );
};
