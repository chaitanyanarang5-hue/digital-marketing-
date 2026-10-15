import { LeadInquiry, NewsletterSubscriber, PageRoute, RouteState } from '../types';

const LEADS_STORAGE_KEY = 'vortex_agency_leads_v1';
const NEWSLETTER_STORAGE_KEY = 'vortex_agency_newsletter_v1';
const COOKIE_CONSENT_KEY = 'vortex_agency_cookie_consent_v1';

export function saveLeadInquiry(inquiry: Omit<LeadInquiry, 'id' | 'createdAt' | 'status'>): LeadInquiry {
  const newLead: LeadInquiry = {
    ...inquiry,
    id: `VX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  try {
    const existing = getStoredLeads();
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([newLead, ...existing]));
  } catch (e) {
    console.error('Failed to store lead inquiry in localStorage', e);
  }

  return newLead;
}

export function getStoredLeads(): LeadInquiry[] {
  try {
    const data = localStorage.getItem(LEADS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse stored leads', e);
    return [];
  }
}

export function subscribeNewsletter(email: string, source: string = 'website_footer'): { success: boolean; message: string } {
  try {
    const existing: NewsletterSubscriber[] = JSON.parse(localStorage.getItem(NEWSLETTER_STORAGE_KEY) || '[]');
    const alreadySubscribed = existing.some(item => item.email.toLowerCase() === email.toLowerCase());

    if (alreadySubscribed) {
      return { success: true, message: 'You are already subscribed to VORTEX Insights.' };
    }

    const newSubscriber: NewsletterSubscriber = {
      email,
      subscribedAt: new Date().toISOString(),
      source
    };

    localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify([newSubscriber, ...existing]));
    return { success: true, message: 'Thank you for subscribing to VORTEX Insights.' };
  } catch (e) {
    console.error('Failed to store newsletter subscriber', e);
    return { success: true, message: 'Thank you for subscribing.' };
  }
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  responded: boolean;
}

export function getCookieConsent(): CookiePreferences {
  try {
    const data = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to get cookie consent', e);
  }
  return { essential: true, analytics: false, marketing: false, responded: false };
}

export function saveCookieConsent(prefs: Partial<CookiePreferences>): void {
  try {
    const updated = { ...getCookieConsent(), ...prefs, responded: true };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save cookie consent', e);
  }
}

// Route parsing helpers
export function parseCurrentRoute(): RouteState {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const segments = hash.split('/').filter(Boolean);

  if (!segments.length || segments[0] === 'home') {
    return { page: 'home' };
  }

  const [main, sub] = segments;

  switch (main) {
    case 'services':
      if (sub) {
        return { page: 'service-detail', serviceSlug: sub };
      }
      return { page: 'services' };

    case 'work':
    case 'case-studies':
    case 'portfolio':
      if (sub) {
        return { page: 'case-study-detail', caseStudySlug: sub };
      }
      return { page: 'work' };

    case 'about':
      return { page: 'about' };

    case 'pricing':
      return { page: 'pricing' };

    case 'insights':
    case 'blog':
      if (sub) {
        return { page: 'insights', articleSlug: sub };
      }
      return { page: 'insights' };

    case 'contact':
      return { page: 'contact' };

    case 'thank-you':
      return { page: 'thank-you' };

    case 'privacy':
    case 'privacy-policy':
      return { page: 'privacy' };

    case 'terms':
    case 'terms-and-conditions':
      return { page: 'terms' };

    default:
      return { page: '404' };
  }
}

export function navigateTo(path: string): void {
  const formatted = path.startsWith('/') ? path.slice(1) : path;
  window.location.hash = formatted;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
