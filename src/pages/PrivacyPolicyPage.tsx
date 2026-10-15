import React from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import { ShieldCheck, ArrowLeft, Lock, FileText, Check } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
          Legal Governance & Compliance
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-400 font-mono">
          Last Updated: March 2026 · Compliant with Digital Personal Data Protection (DPDP) Act 2023 (India) & GDPR
        </p>
      </div>

      <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">1. Introduction & Scope</h2>
          <p>
            {AGENCY_CONFIG.brand.legalName} ("VORTEX Digital", "we", "our", or "us") operates the website vortexdigital.agency. This Privacy Policy outlines our principles and practices regarding the collection, processing, storage, and protection of personal and commercial data provided by website visitors, prospective clients, and partners.
          </p>
          <p>
            We take a privacy-first approach to performance marketing. We never sell, rent, or trade your personal or business data to third-party data brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">2. Information We Collect</h2>
          <p>We only collect data necessary to evaluate business inquiries, deliver strategic services, and maintain website security:</p>
          <ul className="space-y-2 list-disc pl-5 text-neutral-400">
            <li><strong className="text-white">Business Inquiries:</strong> Full name, corporate email address, telephone/WhatsApp number, company name, website URL, industry sector, and self-disclosed marketing budget.</li>
            <li><strong className="text-white">Analytical Signals:</strong> Aggregated, anonymized website telemetry (pages visited, session duration, device type, referrer URL) via privacy-compliant Google Analytics 4 (GA4).</li>
            <li><strong className="text-white">Direct Correspondence:</strong> Emails, Slack messages, and meeting notes generated during strategic consultations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">3. Lawful Basis & Purpose of Processing</h2>
          <p>Under the Indian DPDP Act 2023 and GDPR Article 6, we process data based on:</p>
          <ul className="space-y-2 list-disc pl-5 text-neutral-400">
            <li><strong className="text-white">Explicit Consent:</strong> Granted when submitting an inquiry form or subscribing to our newsletter.</li>
            <li><strong className="text-white">Contractual Necessity:</strong> Delivering marketing audits, performance roadmaps, and service deliverables.</li>
            <li><strong className="text-white">Legitimate Interests:</strong> Safeguarding website infrastructure against spam, abuse, and security vulnerabilities.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">4. Cookies & Tracking Technologies</h2>
          <p>
            We classify cookies into three clear categories:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 space-y-1">
              <span className="font-bold text-white block">Strictly Essential</span>
              <p className="text-[11px] text-neutral-400">Required for navigation, CSRF security, and route preservation. Always active.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 space-y-1">
              <span className="font-bold text-white block">Analytics (GA4)</span>
              <p className="text-[11px] text-neutral-400">Measures anonymous traffic trends. Activated only upon user consent.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 space-y-1">
              <span className="font-bold text-white block">Attribution (CAPI)</span>
              <p className="text-[11px] text-neutral-400">Validates campaign conversions. Activated only upon user consent.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">5. Data Retention & Security Standards</h2>
          <p>
            Project inquiry data is retained in our secure operational environment for up to 24 months, after which inactive lead records are permanently expunged. We implement TLS 1.3 encryption in transit, strict role-based access control (RBAC), and regular vulnerability testing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white">6. Your Data Rights</h2>
          <p>Regardless of your geographic jurisdiction, you have the right to:</p>
          <ul className="space-y-2 list-disc pl-5 text-neutral-400">
            <li>Request a full export of personal data held about you.</li>
            <li>Request immediate rectification of inaccurate contact records.</li>
            <li>Request permanent deletion of your inquiry data ("Right to be Forgotten").</li>
            <li>Withdraw consent to our newsletter or communications at any time.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-neutral-800">
          <h2 className="text-base sm:text-lg font-bold text-white">7. Data Protection Officer (DPO) Contact</h2>
          <p>
            For privacy inquiries or data erasure requests, please contact our designated compliance team:
          </p>
          <div className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800 space-y-1 font-mono text-xs">
            <div>Email: <a href={`mailto:${AGENCY_CONFIG.brand.email}`} className="text-[#CCFF00] hover:underline">{AGENCY_CONFIG.brand.email}</a></div>
            <div>Address: Level 6, Horizon Tower, Cyber City, DLF Phase 2, Gurugram, Haryana 122002, India</div>
          </div>
        </section>
      </div>
    </div>
  );
};
