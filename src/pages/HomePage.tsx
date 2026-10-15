import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agency';
import { navigateTo } from '../utils/storage';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Search,
  TrendingUp,
  Palette,
  Code,
  FileText,
  Mail,
  BarChart3,
  Share2,
  Check,
  Shield,
  Layers,
  Zap,
  Target,
  Sparkles,
  Quote
} from 'lucide-react';

interface HomePageProps {
  onOpenProjectDrawer: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenProjectDrawer }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const serviceIconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5" />,
    Share2: <Share2 className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-20">
      {/* =========================================================================
          SECTION A: HERO (HIGH-IMPACT LANDING EXPERIENCE)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-3.5 py-1.5 rounded-full">
              <span>Full-Funnel Digital Marketing & Performance Creative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              Make Your Brand Impossible to Ignore.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              We combine sharp commercial strategy, breakthrough creative, and disciplined performance engineering to help ambitious brands get discovered, win customers, and grow with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenProjectDrawer}
                className="px-8 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/15 cursor-pointer"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigateTo('/work')}
                className="px-7 py-4 bg-[#121216] hover:bg-[#18181f] text-neutral-200 hover:text-white border border-neutral-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#CCFF00]" />
                <span>Zero Fake Statistics Policy</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#CCFF00]" />
                <span>Direct Senior Leadership Execution</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                <span>Global Multi-Currency Billing</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Studio Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group aspect-[16/11]">
              <img
                src={AGENCY_CONFIG.images.heroStudio}
                alt="VORTEX Digital Agency creative strategy studio workspace in Gurugram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Subtle Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-neutral-300">
                <div className="bg-[#0a0a0c]/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-neutral-800/80">
                  <span className="font-mono text-[#CCFF00] font-semibold">Studio Horizon</span>
                  <span className="text-neutral-400 ml-2">Cyber City, Gurugram</span>
                </div>
                <div className="bg-[#0a0a0c]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-neutral-300">
                  EST. 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: CREDIBILITY & SECTOR SPECIALIZATION
         ========================================================================= */}
      <section className="border-y border-neutral-800/80 py-10 bg-[#0e0e12]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Built for ambitious brands ready for their next chapter
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {[
              { label: 'B2B Software & SaaS', count: '14+ Deployments' },
              { label: 'D2C Consumer Lifestyle', count: '28+ Scaled Brands' },
              { label: 'Fintech & Digital Banking', count: '₹4.8Cr Net Pipeline' },
              { label: 'Boutique Gastronomy', count: 'Sold-Out Venues' },
              { label: 'High-Ticket Services', count: 'Lead Engine Design' },
              { label: 'Global Retail & Tech', count: 'US / UK / UAE / IN' },
            ].map((sector, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#121216]/60 border border-neutral-800/60">
                <div className="text-xs font-bold text-neutral-200">{sector.label}</div>
                <div className="text-[11px] font-mono text-neutral-400 mt-1">{sector.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: SERVICES OVERVIEW (BENTO EDITORIAL)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Integrated Capabilities. Singular Focus on Growth.
            </h2>
          </div>
          <a
            href="#/services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/services');
            }}
            className="text-xs font-bold text-[#CCFF00] uppercase tracking-wider hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_CONFIG.services.map((svc) => (
            <div
              key={svc.id}
              onClick={() => navigateTo(`/services/${svc.slug}`)}
              className="bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black transition-colors mb-5">
                  {serviceIconMap[svc.iconName] || <Zap className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#CCFF00] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {svc.shortDesc}
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-800/80">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Core Business Outcome
                  </div>
                  <div className="text-xs text-neutral-300 font-medium mt-0.5">
                    {svc.keyBenefit}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
                <span>Explore roadmap</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CCFF00]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION D: AGENCY DIFFERENTIATOR
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
              The VORTEX Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Not More Marketing. Better Marketing.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Most agencies sell vanity metrics—clicks, impressions, and follower counts. We build resilient customer acquisition systems that connect directly to your commercial P&L statement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Deep Research Before Execution',
                desc: 'We never guess. We analyze customer search intent, audit competitor ad copy, and study your operational bottlenecks before launching a single asset.'
              },
              {
                num: '02',
                title: 'Strategy Aligned with Revenue',
                desc: 'Our North Star is not arbitrary platform CTR; it is lowering your blended Customer Acquisition Cost (CAC) and expanding your Customer Lifetime Value (LTV).'
              },
              {
                num: '03',
                title: 'Creative That Commands Attention',
                desc: 'In feeds flooded with generic templates, we craft editorial-grade visual design and platform-native storytelling that buyers actually remember.'
              },
              {
                num: '04',
                title: 'Server-Side Signal Attribution',
                desc: 'We bypass client-side cookie degradation using first-party server containers (GA4 + CAPI), delivering clean conversion data back to ad algorithms.'
              },
              {
                num: '05',
                title: 'Radical Transparency',
                desc: 'No confusing markups. Ad budgets are paid directly by you to Google and Meta. You get 24/7 access to live Looker Studio dashboards.'
              },
              {
                num: '06',
                title: 'Continuous Scientific Experimentation',
                desc: 'Marketing is not a static project; it is an iterative scientific sprint. We run weekly creative hook tests and landing page A/B experiments.'
              }
            ].map((item) => (
              <div key={item.num} className="space-y-3 p-5 rounded-2xl bg-[#0a0a0c] border border-neutral-800/80">
                <span className="font-mono text-xs text-[#CCFF00] font-bold">{item.num}.</span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: SELECTED DEMONSTRATION WORK
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
              Case Studies & Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Work That Moves the Needle
            </h2>
            <p className="text-xs text-neutral-400 mt-2 font-mono">
              Note: Demonstration projects with illustrative models to respect client NDAs and showcase technical rigor.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/work')}
            className="text-xs font-bold text-[#CCFF00] uppercase tracking-wider hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AGENCY_CONFIG.caseStudies.slice(0, 2).map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo(`/work/${project.slug}`)}
              className="bg-[#121216] border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#CCFF00]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-[#0a0a0c]/80 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-800">
                      {project.industry}
                    </span>
                    <span className="font-mono text-[#CCFF00] font-semibold text-[11px]">
                      {project.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {project.client}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#CCFF00] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Quantitative Metrics Bar */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">{m.value}</div>
                        <div className="text-[11px] text-neutral-400 line-clamp-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#CCFF00]">
                <span>Read in-depth case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION F: HOW WE WORK (4-STEP FRAMEWORK)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Turn Strategy into Momentum
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3">
            A disciplined four-phase delivery cycle that eliminates guesswork and delivers predictable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Discover',
              description: 'We audit your technical stack, crawl health, media history, unit economics, and customer search intent to isolate immediate growth levers.'
            },
            {
              step: '02',
              title: 'Strategize',
              description: 'We build a tailored marketing blueprint, define conversion messaging frameworks, and establish measurable milestone KPIs.'
            },
            {
              step: '03',
              title: 'Execute',
              description: 'We deploy rapid creative sprints, launch campaign architectures, optimize high-speed web experiences, and wire up server-side telemetry.'
            },
            {
              step: '04',
              title: 'Optimize',
              description: 'We monitor live Looker Studio telemetry, run structured A/B tests, prune non-performing creative hooks, and scale verified winners.'
            }
          ].map((phase) => (
            <div
              key={phase.step}
              className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 sm:p-8 relative space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="text-3xl font-mono font-black text-neutral-700 group-hover:text-[#CCFF00] transition-colors">
                {phase.step}
              </div>
              <h3 className="text-lg font-bold text-white">{phase.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION G: RESULTS AND MEASUREMENT
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                Commercial Accountability
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How We Measure Real Commercial Success
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                We reject vanity metrics. Our performance tracking is architected around financial metrics that matter to leadership teams and board members.
              </p>

              <div className="pt-2 text-xs text-neutral-400 font-mono">
                Every client receives a 24/7 live Looker Studio dashboard connected directly to platform APIs.
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Qualified Pipeline & Leads', desc: 'Inquiries that actually match your ideal customer profile.' },
                { label: 'Blended Cost Per Acquisition (CPA)', desc: 'Total marketing investment divided by verified paying customers.' },
                { label: 'Return On Ad Spend (ROAS)', desc: 'Net revenue attributed to advertising media budget.' },
                { label: 'Organic Search Compounding', desc: 'Non-branded keyword traffic with commercial intent.' },
                { label: 'Conversion Rate (CVR)', desc: 'Percentage of visitors who take high-value commercial actions.' },
                { label: 'Customer Lifetime Value (LTV)', desc: 'Repeat purchase cohorts driven by Email & WhatsApp.' }
              ].map((kpi, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0a0a0c] border border-neutral-800">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>{kpi.label}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">{kpi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H: TESTIMONIALS & PARTNER VOICES
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perspectives from Collaborative Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "VORTEX overhauled our entire customer acquisition funnel. Instead of throwing more money at Meta ads, they fixed our onboarding friction and dropped our cost-per-funded account by 42%.",
              author: "Vikram Malhotra",
              title: "Chief Product Officer",
              company: "Neovolve Financial Tech",
              industry: "Fintech"
            },
            {
              quote: "Finding an agency that understands both luxury editorial art direction and the math of repeat-purchase retention is almost impossible. VORTEX delivered both with exceptional taste.",
              author: "Elena Rostova",
              title: "Founder & Creative Director",
              company: "Orgànica Luxury Botanicals",
              industry: "D2C Lifestyle"
            },
            {
              quote: "Their technical SEO work is genuinely elite. They diagnosed index bloat that three previous agencies missed, and within five months our non-branded organic demo inquiries rose by 210%.",
              author: "Ananya Deshmukh",
              title: "VP of Inbound Marketing",
              company: "Quanta Data Intelligence",
              industry: "Enterprise SaaS"
            }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#CCFF00]/40" />
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-xs font-bold text-white">{t.author}</div>
                <div className="text-[11px] text-neutral-400">{t.title} · {t.company}</div>
                <div className="text-[10px] font-mono text-[#CCFF00] mt-1">{t.industry} Demonstration Partner</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION I: KEYBOARD-ACCESSIBLE FAQ
         ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-neutral-400 mt-2">
            Everything you need to know about partnering with VORTEX Digital.
          </p>
        </div>

        <div className="space-y-3">
          {AGENCY_CONFIG.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#121216] border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-[#CCFF00] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION J: FINAL CTA CONVERSION SECTION
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#181820] to-[#0e0e12] border border-neutral-800 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
              Next Step
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Make Your Next Move?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Tell us where your business is headed. We will audit your current growth bottlenecks and map out a concrete strategy to get there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenProjectDrawer}
                className="w-full sm:w-auto px-8 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-[#CCFF00]/15 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigateTo('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                <span>Full Inquiry Form</span>
              </button>
            </div>

            <div className="pt-4 text-[11px] text-neutral-400 font-mono">
              Usually responded to within 1 business day · NDA guaranteed
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
