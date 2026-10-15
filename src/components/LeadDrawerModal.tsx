import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { saveLeadInquiry, navigateTo } from '../utils/storage';
import { X, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface LeadDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const LeadDrawerModal: React.FC<LeadDrawerModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['Paid Advertising & Performance Marketing']
  );
  const [budgetRange, setBudgetRange] = useState('₹1,50,000 – ₹3,00,000 / month');
  const [primaryObjective, setPrimaryObjective] = useState('');
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setSelectedServices(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!businessEmail.trim() || !/^\S+@\S+\.\S+$/.test(businessEmail)) {
      errs.businessEmail = 'Please provide a valid business email';
    }
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!companyName.trim()) errs.companyName = 'Company / brand name is required';
    if (selectedServices.length === 0) errs.services = 'Select at least one service';
    if (!consent) errs.consent = 'Consent is required to process your request';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = saveLeadInquiry({
        fullName,
        businessEmail,
        phone,
        countryCode: '+91',
        companyName,
        industry: 'Not specified (Quick inquiry)',
        services: selectedServices,
        budgetRange,
        primaryObjective: primaryObjective || 'Full-funnel digital marketing consultation',
        preferredContact: 'email',
        timeline: 'Within 2 weeks',
        consent
      });

      setIsSubmitting(false);
      onClose();
      // Store inquiry ID for Thank You page
      sessionStorage.setItem('vortex_last_lead_id', created.id);
      navigateTo('/thank-you');
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#121216] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-200"
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-1">
            Fast Track Project Discovery
          </div>
          <h2 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
            Let's Build Your Growth Engine
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Tell us about your brand. We will review your current presence and return a concrete strategy brief within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Aarav Mehra"
                className={`w-full bg-[#0a0a0c] border ${errors.fullName ? 'border-rose-500' : 'border-neutral-800'} rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
              />
              {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Business Email *
              </label>
              <input
                type="email"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                placeholder="aarav@company.com"
                className={`w-full bg-[#0a0a0c] border ${errors.businessEmail ? 'border-rose-500' : 'border-neutral-800'} rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
              />
              {errors.businessEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.businessEmail}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Phone Number (with country code) *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 00000"
                className={`w-full bg-[#0a0a0c] border ${errors.phone ? 'border-rose-500' : 'border-neutral-800'} rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
              />
              {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Company / Brand Name *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Acme Technologies"
                className={`w-full bg-[#0a0a0c] border ${errors.companyName ? 'border-rose-500' : 'border-neutral-800'} rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
              />
              {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
            </div>
          </div>

          {/* Services Selection */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-2">
              Capabilities Required (Select all that apply) *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {AGENCY_CONFIG.services.map((svc) => {
                const isSelected = selectedServices.includes(svc.title);
                return (
                  <button
                    type="button"
                    key={svc.id}
                    onClick={() => toggleService(svc.title)}
                    className={`text-left p-2.5 rounded-lg border text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white font-medium'
                        : 'bg-[#0a0a0c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="line-clamp-1">{svc.title}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 ml-1.5" />}
                  </button>
                );
              })}
            </div>
            {errors.services && <p className="text-[11px] text-rose-400 mt-1">{errors.services}</p>}
          </div>

          {/* Monthly Budget Range */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Estimated Monthly Marketing & Media Budget
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
            >
              <option value="₹75,000 – ₹1,50,000 / month ($1,000 – $2,000)">₹75,000 – ₹1,50,000 / month ($1,000 – $2,000)</option>
              <option value="₹1,50,000 – ₹3,00,000 / month ($2,000 – $4,000)">₹1,50,000 – ₹3,00,000 / month ($2,000 – $4,000)</option>
              <option value="₹3,00,000 – ₹6,00,000 / month ($4,000 – $8,000)">₹3,00,000 – ₹6,00,000 / month ($4,000 – $8,000)</option>
              <option value="₹6,00,000+ / month ($8,000+)">₹6,00,000+ / month ($8,000+)</option>
              <option value="One-time project sprint (Website / Branding)">One-time project sprint (Website / Branding)</option>
            </select>
          </div>

          {/* Primary Goal / Context */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Main Business Objective or Immediate Bottleneck
            </label>
            <textarea
              rows={2}
              value={primaryObjective}
              onChange={(e) => setPrimaryObjective(e.target.value)}
              placeholder="e.g. Scaling qualified demo requests, reducing CAC on Meta, or redesigning web presence..."
              className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-400">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded accent-[#CCFF00]"
              />
              <span>
                I agree to allow {AGENCY_CONFIG.brand.name} to process my contact details to evaluate this project inquiry. We never sell or share data.
              </span>
            </label>
            {errors.consent && <p className="text-[11px] text-rose-400 mt-1">{errors.consent}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Strict NDA & confidentiality guaranteed</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#CCFF00]/10"
            >
              {isSubmitting ? (
                <span>Submitting Proposal Request...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
