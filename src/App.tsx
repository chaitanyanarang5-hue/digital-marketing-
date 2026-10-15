import React, { useState, useEffect } from 'react';
import { parseCurrentRoute } from './utils/storage';
import { RouteState } from './types';
import { AGENCY_CONFIG } from './config/agency';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LeadDrawerModal } from './components/LeadDrawerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteState>(parseCurrentRoute());
  const [projectDrawerOpen, setProjectDrawerOpen] = useState(false);
  const [drawerDefaultService, setDrawerDefaultService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseCurrentRoute();
      setCurrentRoute(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync Document Title and Meta Description for SEO
  useEffect(() => {
    let title = `${AGENCY_CONFIG.brand.name} – ${AGENCY_CONFIG.brand.tagline}`;
    let desc = AGENCY_CONFIG.brand.subtagline;

    switch (currentRoute.page) {
      case 'services':
        title = `Capabilities & Services – ${AGENCY_CONFIG.brand.name}`;
        desc = "Explore our 8 specialized digital marketing capabilities: SEO, Performance Media, Brand Strategy, Web Engineering, and CRO.";
        break;
      case 'service-detail': {
        const found = AGENCY_CONFIG.services.find(s => s.slug === currentRoute.serviceSlug);
        if (found) {
          title = `${found.title} – ${AGENCY_CONFIG.brand.name}`;
          desc = found.shortDesc;
        }
        break;
      }
      case 'work':
        title = `Case Studies & Demonstration Work – ${AGENCY_CONFIG.brand.name}`;
        desc = "Explore our case studies across Fintech, D2C Lifestyle, Enterprise SaaS, and Hospitality.";
        break;
      case 'case-study-detail': {
        const found = AGENCY_CONFIG.caseStudies.find(c => c.slug === currentRoute.caseStudySlug);
        if (found) {
          title = `${found.title} – Case Study – ${AGENCY_CONFIG.brand.name}`;
          desc = found.summary;
        }
        break;
      }
      case 'about':
        title = `About Us & Leadership – ${AGENCY_CONFIG.brand.name}`;
        desc = "Learn about our mission, core values, leadership team, and empirical philosophy of digital growth.";
        break;
      case 'pricing':
        title = `Pricing & Engagement Models – ${AGENCY_CONFIG.brand.name}`;
        desc = "Transparent monthly retainer tiers, pass-through media spend policies, and interactive ROI estimator.";
        break;
      case 'insights': {
        if (currentRoute.articleSlug) {
          const found = AGENCY_CONFIG.blogPosts.find(p => p.slug === currentRoute.articleSlug);
          if (found) {
            title = `${found.title} – ${AGENCY_CONFIG.brand.name} Insights`;
            desc = found.excerpt;
            break;
          }
        }
        title = `Insights & Growth Field Notes – ${AGENCY_CONFIG.brand.name}`;
        desc = "Tactical playbooks on performance creative, crawl architecture, and customer acquisition.";
        break;
      }
      case 'contact':
        title = `Initiate Project Brief – ${AGENCY_CONFIG.brand.name}`;
        desc = "Submit your digital marketing project brief. Receive a customized strategy review within 24 hours.";
        break;
      case 'thank-you':
        title = `Brief Received – ${AGENCY_CONFIG.brand.name}`;
        desc = "Your inquiry has been successfully received by our senior strategy desk.";
        break;
      case 'privacy':
        title = `Privacy Policy – ${AGENCY_CONFIG.brand.name}`;
        desc = "Our DPDP Act and GDPR compliant privacy policy regarding inquiry data and telemetry.";
        break;
      case 'terms':
        title = `Terms & Conditions – ${AGENCY_CONFIG.brand.name}`;
        desc = "Standard commercial engagement terms, direct media spend billing, and IP rights.";
        break;
      case '404':
        title = `Page Not Found – ${AGENCY_CONFIG.brand.name}`;
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentRoute]);

  const handleOpenDrawer = (service?: string) => {
    setDrawerDefaultService(service);
    setProjectDrawerOpen(true);
  };

  const renderContent = () => {
    switch (currentRoute.page) {
      case 'home':
        return <HomePage onOpenProjectDrawer={() => handleOpenDrawer()} />;
      case 'services':
        return <ServicesPage onOpenProjectDrawer={() => handleOpenDrawer()} />;
      case 'service-detail':
        return (
          <ServiceDetailPage
            slug={currentRoute.serviceSlug || ''}
            onOpenProjectDrawer={() => handleOpenDrawer(currentRoute.serviceSlug)}
          />
        );
      case 'work':
        return <PortfolioPage onOpenProjectDrawer={() => handleOpenDrawer()} />;
      case 'case-study-detail':
        return (
          <CaseStudyDetailPage
            slug={currentRoute.caseStudySlug || ''}
            onOpenProjectDrawer={() => handleOpenDrawer()}
          />
        );
      case 'about':
        return <AboutPage onOpenProjectDrawer={() => handleOpenDrawer()} />;
      case 'pricing':
        return <PricingPage onOpenProjectDrawer={() => handleOpenDrawer()} />;
      case 'insights':
        return (
          <InsightsPage
            articleSlug={currentRoute.articleSlug}
            onOpenProjectDrawer={() => handleOpenDrawer()}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'thank-you':
        return <ThankYouPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case '404':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-neutral-100 selection:bg-[#CCFF00] selection:text-black">
      {/* Strict Top Bar Contract Header */}
      <Header
        currentRoute={currentRoute}
        onOpenProjectDrawer={() => handleOpenDrawer()}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Comprehensive Global Footer */}
      <Footer />

      {/* Persistent Privacy Cookie Consent Banner */}
      <CookieBanner />

      {/* Quick Access Project Brief Modal */}
      <LeadDrawerModal
        isOpen={projectDrawerOpen}
        onClose={() => setProjectDrawerOpen(false)}
        defaultService={drawerDefaultService}
      />
    </div>
  );
}
