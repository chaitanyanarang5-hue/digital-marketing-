export interface LeadInquiry {
  id: string;
  fullName: string;
  businessEmail: string;
  phone: string;
  countryCode: string;
  companyName: string;
  websiteUrl?: string;
  industry: string;
  services: string[];
  budgetRange: string;
  primaryObjective: string;
  currentChallenges?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  timeline: string;
  consent: boolean;
  createdAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
  source: string;
}

export type PageRoute = 
  | 'home'
  | 'services'
  | 'service-detail'
  | 'work'
  | 'case-study-detail'
  | 'about'
  | 'pricing'
  | 'insights'
  | 'contact'
  | 'thank-you'
  | 'privacy'
  | 'terms'
  | '404';

export interface RouteState {
  page: PageRoute;
  serviceSlug?: string;
  caseStudySlug?: string;
  articleSlug?: string;
}
