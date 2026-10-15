import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { saveLeadInquiry, navigateTo } from '../utils/storage';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    countryCode: '+91',
    phone: '',
    companyName: '',
    websiteUrl: '',
    industry: 'B2B Software & SaaS',
    services: ['Paid Advertising & Performance Marketing'] as string[],
    budgetRange: '₹1,50,000 – ₹3,00,000 / month ($2,000 – $4,000)',
    primaryObjective: 'Scale customer acquisition and optimize conversion rate',
    currentChallenges: '',
    preferredContact: 'email' as 'email' | 'phone' | 'whatsapp',
    timeline: 'Within 2–4 weeks',
    additionalInfo: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    'B2B Software & SaaS',
    'D2C E-commerce & Consumer Goods',
    'Fintech & Digital Banking',
    'Gastronomy & Boutique Hospitality',
    'Professional Consulting & Legal',
    'Healthcare & Wellness',
    'Real Estate & Architecture',
    'Other / Emerging Sector'
  ];

  const timelines = [
    'Immediately (within 7 days)',
    'Within 2–4 weeks',
    'Next Quarter planning',
    'Exploring options for future'
  ];

  const budgetRanges = [
    '₹75,000 – ₹1,50,000 / month ($1,000 – $2,000)',
    '₹1,50,000 – ₹3,00,000 / month ($2,000 – $4,000)',
    '₹3,00,000 – ₹6,00,000 / month ($4,000 – $8,000)',
    '₹6,00,000+ / month ($8,000+)',
    'Fixed Project Sprint (Website / Brand Overhaul)'
  ];

  const toggleService = (title: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(title)
        ? prev.services.filter(s => s !== title)
        : [...prev.services, title]
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.businessEmail.trim() || !/^\S+@\S+\.\S+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid business email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (formData.services.length === 0) errs.services = 'Select at least one capability';
    if (!formData.consent) errs.consent = 'Consent is required to submit your project brief';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = saveLeadInquiry({
        fullName: formData.fullName,
        businessEmail: formData.businessEmail,
        phone: formData.phone,
        countryCode: formData.countryCode,
        companyName: formData.companyName,
        websiteUrl: formData.websiteUrl,
        industry: formData.industry,
        services: formData.services,
        budgetRange: formData.budgetRange,
        primaryObjective: formData.primaryObjective,
        currentChallenges: formData.currentChallenges,
        preferredContact: formData.preferredContact,
        timeline: formData.timeline,
        consent: formData.consent
      });

      setIsSubmitting(false);
      sessionStorage.setItem('vortex_last_lead_id', created.id);
      navigateTo('/thank-you');
    }, 500);
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          Initiate Project Brief
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let's Discuss Where Your Business Is Headed
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Complete the strategic discovery form below. Our leadership team audits your digital footprint, analyzes competitor positioning, and responds with a concrete scope within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Column */}
        <div className="lg:col-span-8 bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] border-b border-neutral-800 pb-2">
                01. Your Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Siddharth Narula"
                    className={`w-full bg-[#0a0a0c] border ${errors.fullName ? 'border-rose-500' : 'border-neutral-800'} rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="siddharth@brand.com"
                    className={`w-full bg-[#0a0a0c] border ${errors.businessEmail ? 'border-rose-500' : 'border-neutral-800'} rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
                  />
                  {errors.businessEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.businessEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Country Code
                  </label>
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">United States (+1)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+65">Singapore (+65)</option>
                    <option value="+61">Australia (+61)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98765 43210"
                    className={`w-full bg-[#0a0a0c] border ${errors.phone ? 'border-rose-500' : 'border-neutral-800'} rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Business & Project */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] border-b border-neutral-800 pb-2">
                02. Brand & Industry Profile
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Company or Brand Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Growth Labs"
                    className={`w-full bg-[#0a0a0c] border ${errors.companyName ? 'border-rose-500' : 'border-neutral-800'} rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]`}
                  />
                  {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Current Website URL (optional)
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourbrand.com"
                    className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Primary Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
                >
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Section 3: Scope & Budget */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] border-b border-neutral-800 pb-2">
                03. Growth Capabilities & Investment
              </h3>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Required Capabilities (Multi-select) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AGENCY_CONFIG.services.map(s => {
                    const isSelected = formData.services.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.title)}
                        className={`text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#CCFF00]/10 border-[#CCFF00] text-white font-semibold'
                            : 'bg-[#0a0a0c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span className="line-clamp-1">{s.title}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-[11px] text-rose-400 mt-1">{errors.services}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
                  >
                    {budgetRanges.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Target Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#CCFF00]"
                  >
                    {timelines.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Main Business Objective or Critical Obstacle
                </label>
                <textarea
                  rows={3}
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                  placeholder="e.g. Inbound leads are expensive and unqualified, website has poor mobile conversions, or we need an updated visual brand system..."
                  className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Preferred Communication Method
                </label>
                <div className="flex gap-4">
                  {[
                    { id: 'email', label: 'Email Brief' },
                    { id: 'phone', label: 'Phone Call' },
                    { id: 'whatsapp', label: 'WhatsApp' }
                  ].map(method => (
                    <label key={method.id} className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method.id}
                        checked={formData.preferredContact === method.id}
                        onChange={() => setFormData({ ...formData, preferredContact: method.id as any })}
                        className="accent-[#CCFF00]"
                      />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Consent & Submit */}
            <div className="pt-4 border-t border-neutral-800 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer text-xs text-neutral-400">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded accent-[#CCFF00]"
                />
                <span>
                  I consent to {AGENCY_CONFIG.brand.name} storing and processing my project inquiry in accordance with the Privacy Policy. We maintain strict non-disclosure obligations.
                </span>
              </label>
              {errors.consent && <p className="text-[11px] text-rose-400">{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/15 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting Strategic Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar: Direct Contacts & Operating Standards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Direct Contacts */}
          <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-white">Direct Communication</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-neutral-400 text-[10px] uppercase">Official Inquiries</div>
                  <a href={`mailto:${AGENCY_CONFIG.brand.email}`} className="text-white hover:text-[#CCFF00] transition-colors font-medium">
                    {AGENCY_CONFIG.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-neutral-400 text-[10px] uppercase">Telephone</div>
                  <a href={`tel:${AGENCY_CONFIG.brand.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[#CCFF00] transition-colors font-medium">
                    {AGENCY_CONFIG.brand.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-neutral-400 text-[10px] uppercase">WhatsApp Business</div>
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.brand.whatsappNumber}?text=Hi%20VORTEX%20team,%20I'd%20like%20to%20discuss%20a%20marketing%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors font-medium inline-flex items-center gap-1"
                  >
                    <span>Connect on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-neutral-400 text-[10px] uppercase">Headquarters</div>
                  <p className="text-neutral-300 leading-relaxed">
                    {AGENCY_CONFIG.brand.headquarters}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-neutral-400 text-[10px] uppercase">Working Hours</div>
                  <p className="text-neutral-300">
                    {AGENCY_CONFIG.brand.operatingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CRM / Backend Integration Note */}
          <div className="bg-[#0e0e12] border border-neutral-800 rounded-2xl p-5 text-xs text-neutral-400 space-y-2">
            <div className="flex items-center gap-2 text-neutral-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
              <span>Production Lead Data Pipeline</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Submissions are captured into our secure local operational store and formatted for automatic webhook dispatch to HubSpot, Salesforce, or Slack channels in production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
