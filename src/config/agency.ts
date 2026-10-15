export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  fullDesc: string;
  keyBenefit: string;
  iconName: string;
  problemsSolved: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  tools: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudyId?: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  isDemonstration: boolean;
  industry: string;
  timeline: string;
  servicesDelivered: string[];
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  metrics: { value: string; label: string; period: string }[];
  outcomes: string[];
  learnings: string;
  image: string;
  featured: boolean;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: 'SEO' | 'Paid Advertising' | 'Branding' | 'Content Marketing' | 'Analytics' | 'E-commerce';
  readingTime: string;
  publishDate: string;
  author: { name: string; role: string; avatar?: string };
  excerpt: string;
  content: string[];
  takeaways: string[];
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyFeeINR: string;
  quarterlyFeeINR: string;
  monthlyFeeUSD: string;
  quarterlyFeeUSD: string;
  bestFor: string;
  recommendedAdSpendINR: string;
  deliverables: string[];
  reportingCadence: string;
  accountManager: string;
  popular?: boolean;
}

export const AGENCY_CONFIG = {
  brand: {
    name: "VORTEX Digital",
    legalName: "Vortex Digital Creative & Performance LLP",
    tagline: "We Turn Attention Into Growth.",
    subtagline: "We combine sharp strategy, breakthrough creative, and disciplined performance engineering to help ambitious brands get discovered, win customers, and scale sustainably.",
    foundedYear: 2022,
    location: "Gurugram, India (Serving Global Clients)",
    headquarters: "Level 6, Horizon Tower, Cyber City, DLF Phase 2, Gurugram, Haryana 122002, India",
    satelliteOffice: "Indiranagar 100ft Road, Bengaluru, Karnataka 560038, India",
    email: "hello@vortexdigital.agency",
    phone: "+91 98765 43210",
    phoneDisplay: "+91 (0) 98765 43210",
    whatsappNumber: "919876543210",
    operatingHours: "Monday – Friday: 09:30 AM – 06:30 PM IST",
    socials: {
      linkedin: "https://linkedin.com/company/vortex-digital-agency",
      twitter: "https://x.com/vortexdigital",
      instagram: "https://instagram.com/vortexdigital.in",
      github: "https://github.com/vortex-digital"
    }
  },
  
  images: {
    heroStudio: "/src/assets/images/agency_hero_studio_1791965255110.jpg",
    caseFintech: "/src/assets/images/case_fintech_growth_1791965255699.jpg",
    caseD2c: "/src/assets/images/case_d2c_lifestyle_1791965256038.jpg",
    caseHospitality: "/src/assets/images/case_boutique_hospitality_1791965256976.jpg",
    caseSaas: "/src/assets/images/case_b2b_saas_1791965257050.jpg",
  },

  leadership: [
    {
      name: "Aarav Sharma",
      role: "Managing Director & Head of Strategy",
      bio: "12+ years directing performance marketing and growth engines across Indian D2C and global tech firms.",
      initials: "AS"
    },
    {
      name: "Pooja Varma",
      role: "VP of Creative & Brand Direction",
      bio: "Ex-agency design director passionate about high-impact brand systems and narrative storytelling.",
      initials: "PV"
    },
    {
      name: "Rohan Sengupta",
      role: "Principal Technical SEO & Web Architect",
      bio: "Specializes in high-velocity headless web experiences, crawl efficiency, and Core Web Vitals optimization.",
      initials: "RS"
    },
    {
      name: "Meera Krishnan",
      role: "Performance Media & Paid Acquisition Lead",
      bio: "Manages scalable media budgets across Meta, Google Search, and programmatic platforms.",
      initials: "MK"
    }
  ],

  services: [
    {
      id: "seo",
      slug: "search-engine-optimization",
      title: "Search Engine Optimization (SEO)",
      shortDesc: "Technical architecture, high-intent keyword modeling, and programmatic content engines to capture sustainable organic demand.",
      heroHeadline: "Capture High-Intent Commercial Demand When Buyers Search",
      fullDesc: "We treat SEO not as a checklist of meta tags, but as an engineering discipline. We re-architect crawl budgets, eliminate rendering bottlenecks, align content with actual search intent clusters, and build genuine topical authority that competitors cannot easily copy.",
      keyBenefit: "Build an organic lead generation engine that lowers your blended customer acquisition cost (CAC) over time.",
      iconName: "Search",
      problemsSolved: [
        "Plateaued or declining organic impressions after algorithm updates",
        "Slow website performance failing Core Web Vitals thresholds",
        "Thin or duplicated content cannibalizing keyword equity",
        "Inability to connect organic search traffic with actual revenue"
      ],
      deliverables: [
        "Comprehensive 120-point Technical Crawl & Schema Audit",
        "High-Intent Keyword Mapping & Competitor Gap Matrix",
        "On-Page Optimization (Semantic HTML, Internal Links, Page Speed)",
        "Quarterly Topical Authority & Content Production Strategy",
        "Local SEO & Google Business Profile Optimization",
        "Executive SEO Dashboard in Looker Studio with Revenue Attribution"
      ],
      process: [
        { step: "01", title: "Crawl & Indexation Audit", description: "Deep analysis of server response codes, JS rendering, canonicalization, and index bloat." },
        { step: "02", title: "Search Intent Mapping", description: "Grouping commercial, informational, and transactional query clusters." },
        { step: "03", title: "Technical Remediation", description: "Fixing architecture, implementing structured data, and optimizing Core Web Vitals." },
        { step: "04", title: "Authority & Compounding", description: "Executing editorial link earning and measuring organic conversion velocity." }
      ],
      tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "Sitebulb", "Looker Studio"],
      idealFor: ["B2B SaaS companies", "Fast-growing D2C stores", "High-ticket service firms", "Multi-location regional businesses"],
      faqs: [
        { question: "How long until we see noticeable organic traction?", answer: "Technical fixes and indexation cleanups often yield initial crawl improvements within 4–6 weeks. Substantial revenue-driving keyword rank compounding typically manifests between months 3 and 6." },
        { question: "Do you guarantee first-page Google rankings?", answer: "No ethical agency guarantees #1 rankings because search algorithms evaluate hundreds of dynamic factors. What we guarantee is rigorous technical execution, adherence to Google's Search Quality Guidelines, and transparent weekly telemetry." }
      ],
      relatedCaseStudyId: "b2b-saas-demand"
    },
    {
      id: "social-media",
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      shortDesc: "Platform-native narrative storytelling, video-first creative, and community management that turns passive scrollers into passionate advocates.",
      heroHeadline: "Command Attention Across Social Feeds with Cultural Relevance",
      fullDesc: "Modern social algorithms reward retention, watch time, and authentic human perspective. We develop high-cadence short-form video concepts, thought-leadership carousels, and responsive community flywheels that build real affinity for your brand.",
      keyBenefit: "Cultivate an active, engaged audience that reduces your reliance on pure paid media.",
      iconName: "Share2",
      problemsSolved: [
        "Generic corporate posts receiving zero engagement or shares",
        "Inconsistent posting cadence without an overarching narrative arc",
        "Inability to produce video-first content efficiently",
        "Disconnect between social engagement and downstream conversions"
      ],
      deliverables: [
        "Platform-Specific Content Strategy (LinkedIn, Instagram, YouTube Shorts)",
        "Monthly Content Calendar with Scripting & Storyboards",
        "End-to-End Creative Production (Short-form video, Carousels, Motion graphics)",
        "Active Community Management & Direct Message Triage",
        "Creator & Influencer Outreach Framework",
        "Monthly Sentiment & Audience Velocity Reports"
      ],
      process: [
        { step: "01", title: "Audience Persona Deep-Dive", description: "Mapping feed consumption habits, pain triggers, and visual benchmarks." },
        { step: "02", title: "Content Pillar Architecture", description: "Establishing 4 distinct content buckets: Proof, Education, Culture, and Product." },
        { step: "03", title: "Sprint Production", description: "Filming, editing, motion design, and copywriting in 2-week production sprints." },
        { step: "04", title: "Engagement & Iteration", description: "Real-time comment management and doubling down on winning hook formats." }
      ],
      tools: ["Figma", "Adobe Premiere Pro", "CapCut Pro", "Later", "Sprout Social", "Brand24"],
      idealFor: ["D2C consumer brands", "Founders building personal authority", "Hospitality & boutique lifestyle", "Tech startups seeking viral awareness"],
      faqs: [
        { question: "Do we need to supply our own raw video footage?", answer: "We can work flexibly: either providing on-site creative direction/production, or directing your internal team through detailed smartphone recording guides and storyboards." },
        { question: "Which social platforms do you prioritize?", answer: "We prioritize where your highest-value customers actually spend their attention—typically LinkedIn and X for B2B/tech, and Instagram and YouTube for D2C/lifestyle." }
      ],
      relatedCaseStudyId: "boutique-hospitality-branding"
    },
    {
      id: "paid-advertising",
      slug: "paid-advertising-performance",
      title: "Paid Advertising & Performance Marketing",
      shortDesc: "Data-driven media buying across Meta Ads, Google Ads, and Programmatic channels with ruthless budget efficiency and creative testing.",
      heroHeadline: "Turn Paid Media Spend into Predictable, Profitable Revenue",
      fullDesc: "Performance marketing is not about spending more; it is about testing faster and attributing accurately. We deploy modern campaign structures, first-party Conversions API (CAPI) tracking, and iterative creative testing matrices to scale customer acquisition without burning cash.",
      keyBenefit: "Acquire high-intent customers at a target Cost Per Acquisition (CPA) aligned with unit economics.",
      iconName: "TrendingUp",
      problemsSolved: [
        "Rising Cost Per Acquisition (CPA) and declining Return on Ad Spend (ROAS)",
        "Ad account bans, tracking blind spots, and signal loss post-iOS updates",
        "Creative fatigue caused by running the same ad creative for months",
        "Wasted budget on broad, unqualified search query intent"
      ],
      deliverables: [
        "Full-Funnel Campaign Architecture (Meta Ads, Google Search/Performance Max)",
        "First-Party Pixel & Server-Side Conversions API (CAPI) Setup",
        "Weekly Iterative Ad Creative Sprint (Hooks, UGC, Statics, Video)",
        "Negative Keyword Shielding & Audience Exclusion Sets",
        "Dedicated High-Converting Landing Page Variations",
        "Live Executive Dashboard with Multi-Touch Contribution Modeling"
      ],
      process: [
        { step: "01", title: "Tracking & Signal Audit", description: "Validating pixel events, server containers, and offline conversion uploads." },
        { step: "02", title: "Creative Matrix Setup", description: "Developing 10+ hook and angle variations testing different consumer motivations." },
        { step: "03", title: "Controlled Scale", description: "Deploying budget across verified winners with algorithmic bid capping." },
        { step: "04", title: "Funnel Optimization", description: "Synchronizing ad creative promises directly with landing page messaging." }
      ],
      tools: ["Google Ads", "Meta Ads Manager", "Triple Whale", "Elevar Server-Side CAPI", "Google Tag Manager", "Looker Studio"],
      idealFor: ["D2C e-commerce brands ($15k+ monthly budget)", "B2B SaaS with verified product-market fit", "High-growth service businesses"],
      faqs: [
        { question: "Are media spend budgets included in your agency fee?", answer: "No. All media budgets are billed directly by the advertising platforms (Google, Meta) to your corporate payment method. Our fee covers strategy, creative production, management, and continuous optimization." },
        { question: "What is your recommended minimum monthly ad spend?", answer: "To feed platform machine-learning algorithms sufficient conversion data (50+ conversions per ad set per week), we generally recommend a minimum ad spend of ₹1,50,000 / $2,000 per month." }
      ],
      relatedCaseStudyId: "fintech-customer-acquisition"
    },
    {
      id: "branding",
      slug: "branding-creative-strategy",
      title: "Branding & Creative Strategy",
      shortDesc: "Enduring brand positioning, visual identities, editorial typography, and messaging frameworks that make your company unmistakable.",
      heroHeadline: "Craft an Iconic Identity That Elevates You Above Price Wars",
      fullDesc: "Branding is your company's reputational moat. When everyone in your industry sounds identical, customers buy on price. We articulate your unique thesis, define sharp messaging principles, and engineer sophisticated visual identities that attract premium buyers.",
      keyBenefit: "Position your brand as the premium category leader and command higher customer willingness to pay.",
      iconName: "Palette",
      problemsSolved: [
        "Your brand looks amateurish compared to funded competitors",
        "Inconsistent tone of voice across sales decks, web, and ads",
        "Difficulty communicating complex product value simply",
        "Loss of premium positioning in price-sensitive market environments"
      ],
      deliverables: [
        "Brand Thesis, Purpose, and Value Proposition Matrix",
        "Customer Persona Archetypes & Competitive Whitespace Audit",
        "Complete Visual Identity (Logo System, Color Palette, Typography Hierarchy)",
        "Brand Style Guidelines Book & Design Token Specifications",
        "Messaging Framework, Tone of Voice Matrix, and Tagline Options",
        "Collateral Suite (Pitch Decks, Business Stationery, Social Templates)"
      ],
      process: [
        { step: "01", title: "Discovery Workshop", description: "Uncovering your founders' vision, customer truths, and category conventions." },
        { step: "02", title: "Positioning Hypothesis", description: "Defining the unique wedge where your brand can win without rival contest." },
        { step: "03", title: "Visual Exploration", description: "Presenting 2 distinct art directions with real-world application mockups." },
        { step: "04", title: "Systemization", description: "Documenting guidelines and delivering accessible production asset kits." }
      ],
      tools: ["Figma", "Adobe Illustrator", "InDesign", "Fontbase", "Keynote"],
      idealFor: ["Early-stage funded startups", "Legacy businesses undergoing modern rebrands", "D2C luxury & premium lifestyle brands"],
      faqs: [
        { question: "Do you only do visual design, or also strategic positioning?", answer: "Visual design without positioning is merely decorative art. We always begin with deep category research, customer interviews, and commercial positioning before sketching visual assets." }
      ],
      relatedCaseStudyId: "d2c-sustainable-fragrance"
    },
    {
      id: "web-development",
      slug: "website-design-development",
      title: "Website Design & Development",
      shortDesc: "Editorial-grade, blisteringly fast websites engineered on modern stacks to convert qualified traffic into contracted revenue.",
      heroHeadline: "Your Digital Flagship: Fast, Beautiful, and Built to Convert",
      fullDesc: "Your website is your agency's hardest-working salesperson. We build responsive, accessible, conversion-optimized websites that tell your story with cinematic elegance while loading in under 1.2 seconds across global networks.",
      keyBenefit: "Transform your website from a passive brochure into an active commercial conversion engine.",
      iconName: "Code",
      problemsSolved: [
        "High bounce rates caused by slow page loading speeds",
        "Confusing navigation and mobile layout breakages",
        "Clunky CMS setups that require a developer just to update copy",
        "Poor conversion paths causing visitors to leave without inquiring"
      ],
      deliverables: [
        "UX Research, Information Architecture & Interactive Wireframes",
        "High-Fidelity Editorial UI Design in Figma",
        "Production-Grade React / Modern Web Build with Semantic HTML",
        "Mobile-First Responsive Layouts & WCAG 2.2 AA Accessibility Compliance",
        "Core Web Vitals Optimization (Sub-1.5s LCP, Zero CLS)",
        "Analytics, Event Tracking & CRM Integration"
      ],
      process: [
        { step: "01", title: "Information Architecture", description: "Structuring conversion funnels and friction-free user pathways." },
        { step: "02", title: "Interactive Prototyping", description: "Crafting modern layouts, typographic hierarchy, and micro-interactions." },
        { step: "03", title: "Clean Engineering", description: "Writing clean, modular, maintainable code with strict type safety." },
        { step: "04", title: "QA & Conversion Audit", description: "Cross-device stress testing, form verification, and speed benchmarks." }
      ],
      tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma", "Lighthouse", "Vercel / Cloud Run"],
      idealFor: ["High-growth technology companies", "B2B service providers", "D2C brands seeking custom digital storefronts"],
      faqs: [
        { question: "Is the code clean and easy for our internal team to maintain?", answer: "Yes. We avoid bloated page builders and write modular TypeScript and Tailwind CSS with clear documentation, making ongoing updates seamless." }
      ],
      relatedCaseStudyId: "b2b-saas-demand"
    },
    {
      id: "content-marketing",
      slug: "content-marketing",
      title: "Content Marketing & Editorial Strategy",
      shortDesc: "Original research, authoritative articles, and strategic lead magnets that educate buyers and establish clear industry leadership.",
      heroHeadline: "Earn Authority by Publishing What Your Buyers Actually Value",
      fullDesc: "Generic AI summaries fill the web. Real buyers crave nuanced perspective, primary research, and actionable frameworks. We interview subject-matter experts within your team to publish high-signal content that drives inbound leads.",
      keyBenefit: "Attract informed, ready-to-buy prospects who trust your perspective before speaking to sales.",
      iconName: "FileText",
      problemsSolved: [
        "Publishing low-quality articles that attract zero backlinks or shares",
        "Internal executives too busy to author thought leadership pieces",
        "Lack of high-converting lead magnets for email list growth",
        "Content completely detached from the sales cycle"
      ],
      deliverables: [
        "Editorial Calendar & Subject-Matter Expert Interview Series",
        "Long-Form Technical & Strategic Articles (1,500–3,000 words)",
        "Downloadable Industry Reports, Whitepapers & Interactive Checklists",
        "Executive Ghostwriting for LinkedIn & Substack",
        "Content Repurposing System (Articles into Carousels, Newsletters & Threads)",
        "Lead Magnet Gating & Inbound Nurture Workflows"
      ],
      process: [
        { step: "01", title: "Expert Extraction", description: "30-minute monthly interviews with your team to harvest proprietary insights." },
        { step: "02", title: "Research & Synthesis", description: "Backing thesis points with industry data, case evidence, and clean diagrams." },
        { step: "03", title: "Authoring & Review", description: "Polishing prose for clarity, rhythm, and actionable takeaways." },
        { step: "04", title: "Omnichannel Distribution", description: "Syndicating across newsletters, search engines, and professional communities." }
      ],
      tools: ["Notion", "Grammarly Business", "Ahrefs", "Google Docs", "Substack"],
      idealFor: ["Enterprise B2B solutions", "Financial services & fintech", "High-consideration healthcare & consulting"],
      faqs: [
        { question: "How do you ensure the technical accuracy of our specialized field?", answer: "We conduct structured interviews with your internal leadership and never publish without your final technical review and sign-off." }
      ]
    },
    {
      id: "email-whatsapp",
      slug: "email-whatsapp-marketing",
      title: "Email & WhatsApp Marketing",
      shortDesc: "Automated retention lifecycles, high-engagement broadcasts, and consent-based WhatsApp flows that maximize customer lifetime value (LTV).",
      heroHeadline: "Convert One-Time Visitors into High-LTV Repeat Customers",
      fullDesc: "Paid advertising rents attention; owned channels like Email and WhatsApp own it. We design automated nurture sequences, abandonment triggers, and VIP retention programs that generate predictable revenue without ongoing ad spend.",
      keyBenefit: "Generate 25%–40% of your total store or service revenue from owned communication channels.",
      iconName: "Mail",
      problemsSolved: [
        "Leaving money on the table through abandoned carts or abandoned forms",
        "Sending sporadic, unsegmented blasts that cause high unsubscribe rates",
        "Missing out on high-open-rate WhatsApp conversational commerce in India",
        "Poor deliverability landing emails in spam or promotion tabs"
      ],
      deliverables: [
        "Complete Deliverability Audit (DKIM, SPF, DMARC Authentication)",
        "Core Automated Email Flows (Welcome, Abandoned Cart/Browse, Post-Purchase, Win-Back)",
        "Consent-Based WhatsApp Business API Integration & Template Approval",
        "Dynamic Behavioral Customer Segmentation (RFM: Recency, Frequency, Monetary)",
        "Bi-Weekly High-Engagement Newsletter Strategy & Copywriting",
        "Revenue & Repeat Purchase Cohort Telemetry"
      ],
      process: [
        { step: "01", title: "Domain Authentication", description: "Configuring security records to ensure high inbox placement." },
        { step: "02", title: "Lifecycle Journey Architecture", description: "Mapping triggers from first inquiry to year-one renewal." },
        { step: "03", title: "Copy & Responsive Design", description: "Coding mobile-optimized templates that render crisply across clients." },
        { step: "04", title: "Segment Testing", description: "Iterating send frequency, subject lines, and personalized offers." }
      ],
      tools: ["Klaviyo", "Brevo", "Interakt / Wati (WhatsApp API)", "ActiveCampaign", "Mailgun"],
      idealFor: ["E-commerce and D2C brands", "Subscription services", "Course creators & high-ticket agencies"],
      faqs: [
        { question: "Is your WhatsApp marketing compliant with anti-spam laws?", answer: "Strictly yes. We only implement opt-in, consent-based WhatsApp API flows with compliant template approvals and instant opt-out functionality." }
      ],
      relatedCaseStudyId: "d2c-sustainable-fragrance"
    },
    {
      id: "analytics-cro",
      slug: "analytics-cro",
      title: "Analytics & Conversion Rate Optimization (CRO)",
      shortDesc: "Precision server-side tracking, funnel analysis, and hypothesis-driven A/B testing that extract more revenue from your existing traffic.",
      heroHeadline: "Double Your Conversion Efficiency Without Increasing Ad Budget",
      fullDesc: "Driving traffic to an unoptimized funnel is pouring water into a leaky bucket. We audit user friction, deploy session heatmaps, formulate data-backed hypotheses, and run statistically valid A/B tests to systematically lift your conversion rate.",
      keyBenefit: "Increase your revenue per visitor, instantly unlocking higher marketing leverage.",
      iconName: "BarChart3",
      problemsSolved: [
        "High bounce rates on key product or inquiry landing pages",
        "Discrepancies between ad platform figures and actual bank deposits",
        "Subjective internal debates over website design choices",
        "Unclear customer journey drop-offs across complex checkout paths"
      ],
      deliverables: [
        "Server-Side Google Analytics 4 (GA4) & GTM Server Container Setup",
        "Custom Conversion Funnel & Micro-Conversion Event Modeling",
        "Heuristic UX Review & Quantitative Session Recording Analysis",
        "Prioritized A/B Testing Roadmap based on Potential, Importance, and Ease (P.I.E.)",
        "Landing Page Experimentation (Copy, Form Fields, CTA Friction)",
        "Executive Attribution Dashboard with Revenue Reconciliation"
      ],
      process: [
        { step: "01", title: "Data Cleanliness Audit", description: "Eliminating duplicate events, ghost referrals, and broken UTM tags." },
        { step: "02", title: "Friction Point Diagnostics", description: "Identifying where high-intent buyers drop off using quantitative funnels." },
        { step: "03", title: "Hypothesis Formulation", description: "Creating bold, defensible variations that test single core variables." },
        { step: "04", title: "Statistical Measurement", description: "Deploying experiments with 95%+ statistical significance before roll-out." }
      ],
      tools: ["Google Analytics 4", "Google Tag Manager", "Microsoft Clarity", "Hotjar", "VWO", "Looker Studio"],
      idealFor: ["High-traffic e-commerce brands", "B2B SaaS with steady demo traffic", "Lead generation portals"],
      faqs: [
        { question: "How much traffic do we need for meaningful A/B testing?", answer: "Statistically sound A/B testing typically requires at least 25,000 monthly unique visitors. For lower-volume sites, we focus on qualitative UX audits, heuristic improvements, and high-impact friction reduction." }
      ],
      relatedCaseStudyId: "fintech-customer-acquisition"
    }
  ] as ServiceItem[],

  caseStudies: [
    {
      id: "fintech-customer-acquisition",
      slug: "fintech-customer-acquisition",
      title: "Scaling Neovolve's Next-Gen Mobile Banking User Acquisition",
      client: "Neovolve Financial Technologies",
      isDemonstration: true,
      industry: "Fintech & Mobile Banking",
      timeline: "6 Months",
      servicesDelivered: ["Paid Advertising", "Analytics & CRO", "Website Design & Development"],
      summary: "How an integrated performance media and frictionless onboarding funnel reduced cost-per-funded account by 42% for an emerging financial app.",
      challenge: "Neovolve had launched an elegant digital banking and investment application, but their early customer acquisition efforts suffered from severe drop-offs during KYC verification and a high blended CAC of ₹1,480 per activated user.",
      strategy: "We restructured their media mix from broad interest targeting into high-intent financial query clusters on Google Search paired with pain-focused video hooks on Meta. Simultaneously, we rebuilt their web onboarding flow into a three-step progressive disclosure sequence.",
      execution: "Deployed 24 iterative ad variants testing financial independence hooks vs cashback rewards. Implemented server-side CAPI to feed offline KYC completion signals back to Meta and Google algorithms. Built a lightning-fast responsive landing experience with 98 Lighthouse performance score.",
      metrics: [
        { value: "-42%", label: "Reduction in Customer Acquisition Cost (CAC)", period: "Compared to prior baseline" },
        { value: "3.4x", label: "Lift in KYC Verification Completion Rate", period: "Post onboarding redesign" },
        { value: "+185%", label: "Increase in Monthly Funded Accounts", period: "Within 180 days" },
        { value: "₹4.8 Cr", label: "Net New Deposits Attributed to Campaigns", period: "Over 6-month engagement" }
      ],
      outcomes: [
        "Reduced blended CAC from ₹1,480 to ₹858 per verified funded user",
        "Achieved 95% statistical confidence on 4 key landing page A/B tests",
        "Built self-sustaining ad creative testing pipeline producing 6 new hooks weekly"
      ],
      learnings: "In fintech marketing, creative messaging is only half the battle. Passing real downstream post-signup milestone events back to algorithmic ad platforms fundamentally improves targeting quality far better than broad manual interest tags.",
      image: "/src/assets/images/case_fintech_growth_1791965255699.jpg",
      featured: true
    },
    {
      id: "d2c-sustainable-fragrance",
      slug: "d2c-sustainable-fragrance",
      title: "Building an Organic Retention Flywheel for Orgànica Fragrance",
      client: "Orgànica Luxury Botanicals",
      isDemonstration: true,
      industry: "D2C Luxury Lifestyle & Beauty",
      timeline: "5 Months",
      servicesDelivered: ["Branding & Creative Strategy", "Email & WhatsApp Marketing", "Social Media Marketing"],
      summary: "Crafting a sensorial editorial identity and VIP retention ecosystem that increased 90-day customer repeat purchase rate to 38%.",
      challenge: "Orgànica produced exquisite artisan home and personal fragrances, but their digital storefront felt sterile and their customer journey ended at the first purchase. Over 88% of customers never bought a second product.",
      strategy: "We repositioned the brand around 'Sensorial Rituals for Mindful Spaces,' commissioned documentary-style editorial imagery, and built automated post-purchase scent care education sequences across Email and WhatsApp.",
      execution: "Redesigned product unboxing collateral with scannable QR codes linking to curated ambient playlists. Developed a 6-part automated email welcome journey and a VIP replenishment notification engine timed to average candle and diffuser burn lifecycles.",
      metrics: [
        { value: "38%", label: "90-Day Repeat Purchase Rate", period: "Up from 12% prior" },
        { value: "+64%", label: "Increase in Average Order Value (AOV)", period: "Via curated scent bundles" },
        { value: "41%", label: "Share of Total Revenue from Email & WhatsApp", period: "Zero marginal ad spend" },
        { value: "4.9/5", label: "Average Verified Customer Review Score", period: "Across 1,200+ orders" }
      ],
      outcomes: [
        "Established predictable recurring cash flow from owned audience list",
        "Reduced reliance on Meta paid ads from 82% of revenue down to 48%",
        "Achieved 44% average open rates across bi-weekly editorial dispatches"
      ],
      learnings: "Luxury consumers do not respond to aggressive discount countdown timers. They respond to evocative world-building, thoughtful product care guidance, and anticipation-driven replenishment reminders.",
      image: "/src/assets/images/case_d2c_lifestyle_1791965256038.jpg",
      featured: true
    },
    {
      id: "boutique-hospitality-branding",
      slug: "boutique-hospitality-branding",
      title: "Repositioning Astraea Culinary Atelier into a Destination Experience",
      client: "Astraea Restaurant & Cafe",
      isDemonstration: true,
      industry: "Hospitality & Boutique Gastronomy",
      timeline: "4 Months",
      servicesDelivered: ["Branding & Creative Strategy", "Social Media Marketing", "Content Marketing"],
      summary: "Transforming an upscale farm-to-table culinary project into a sold-out weekend dining experience through cinematic visual storytelling.",
      challenge: "Despite exceptional culinary craftsmanship, Astraea struggled with mid-week lunch utilization and was frequently confused with ordinary casual dining spots in a saturated urban dining district.",
      strategy: "We redefined Astraea as a 'Micro-Seasonal Culinary Atelier,' highlighting local farmer partnerships and ingredient provenance through short-form cinematic video vignettes.",
      execution: "Produced high-contrast culinary photography and chef commentary reels. Re-architected their online reservation flow to highlight seasonal tasting menus with pre-payment options.",
      metrics: [
        { value: "100%", label: "Weekend Table Reservation Occupancy", period: "Sustained over 16 consecutive weeks" },
        { value: "+82%", label: "Increase in Mid-Week Tasting Menu Bookings", period: "Driven by executive corporate campaigns" },
        { value: "1.8M", label: "Organic Video Views on Culinary Reels", period: "Across Instagram and YouTube Shorts" },
        { value: "4.8x", label: "Return on Media Production Investment", period: "Direct reservation attribution" }
      ],
      outcomes: [
        "Established a 3-week waiting list for weekend dinner services",
        "Attracted national culinary press and regional lifestyle coverage without paid PR",
        "Created an evergreen library of 50+ high-resolution visual assets"
      ],
      learnings: "In hospitality, people don't just buy a meal—they buy how an evening makes them feel. Showing the tactile preparation of single ingredients created visceral desire that traditional promotional flyers never could.",
      image: "/src/assets/images/case_boutique_hospitality_1791965256976.jpg",
      featured: true
    },
    {
      id: "b2b-saas-demand",
      slug: "b2b-saas-demand",
      title: "Building an Inbound Organic Pipeline for Quanta Enterprise Analytics",
      client: "Quanta Data Intelligence",
      isDemonstration: true,
      industry: "Enterprise B2B Software",
      timeline: "7 Months",
      servicesDelivered: ["Search Engine Optimization (SEO)", "Website Design & Development", "Content Marketing"],
      summary: "Engineering a technical SEO and topical authority architecture that scaled monthly qualified demo requests by 210%.",
      challenge: "Quanta offered an exceptional real-time data orchestration tool, but their website ranked for almost no non-branded search terms. They were paying over ₹8,200 per demo via Google Search Ads alone.",
      strategy: "We built a programmatic SEO directory of 140+ data integration documentation guides and launched a comparative research hub comparing enterprise data stack architectures.",
      execution: "Re-engineered their website on a high-speed React architecture with clean structured JSON-LD schemas. Conducted subject-matter interviews with Quanta's data engineers to produce definitive benchmark reports.",
      metrics: [
        { value: "+210%", label: "Growth in Qualified Inbound Demo Requests", period: "Within 7 months" },
        { value: "+340%", label: "Increase in Organic Search Traffic", period: "Targeting high-intent enterprise keywords" },
        { value: "-58%", label: "Reduction in Blended Cost Per Demo", period: "As organic share expanded" },
        { value: "₹6.2 Cr", label: "Pipeline Value Generated from Inbound Leads", period: "Tracked in HubSpot CRM" }
      ],
      outcomes: [
        "Captured page 1 rankings for 38 high-intent commercial software terms",
        "Reduced page load time from 4.6 seconds down to 0.9 seconds",
        "Established a scalable content production engine delivering 4 technical guides monthly"
      ],
      learnings: "Enterprise B2B buyers read documentation before they talk to sales. By treating integration guides as first-class SEO assets, we intercepted buyers during technical evaluation when purchase intent was highest.",
      image: "/src/assets/images/case_b2b_saas_1791965257050.jpg",
      featured: true
    }
  ] as CaseStudyItem[],

  pricing: [
    {
      id: "starter",
      name: "Starter Growth",
      tagline: "For early-stage startups and emerging brands establishing a high-converting digital foundation.",
      monthlyFeeINR: "₹75,000",
      quarterlyFeeINR: "₹2,02,500", // 10% discount
      monthlyFeeUSD: "$1,100",
      quarterlyFeeUSD: "$2,970",
      bestFor: "Brands spending up to ₹1,50,000 / $2,000 monthly in ad budget or looking for focused organic growth.",
      recommendedAdSpendINR: "₹50,000 – ₹1,50,000 / month (Paid directly to ad platforms)",
      deliverables: [
        "Single-Channel Growth Focus (Paid Ads OR Technical SEO)",
        "Bi-Weekly Ad Creative / Content Production Sprint",
        "Core Analytics & Conversion Tracking Verification",
        "Dedicated Campaign Setup & Keyword/Audience Modeling",
        "Bi-Weekly Performance Reporting & Telemetry",
        "Standard Slack Support (48-hour response guarantee)"
      ],
      reportingCadence: "Bi-Weekly Video Telemetry + Monthly Executive Brief",
      accountManager: "Associate Growth Strategist"
    },
    {
      id: "growth",
      name: "Performance Scale",
      tagline: "Our most popular multi-channel engagement for businesses ready to aggressively expand market share.",
      monthlyFeeINR: "₹1,50,000",
      quarterlyFeeINR: "₹4,05,000", // 10% discount
      monthlyFeeUSD: "$2,200",
      quarterlyFeeUSD: "$5,940",
      bestFor: "Established brands spending ₹1,50,000 to ₹6,000,000 / $2,000 to $8,000 monthly on marketing.",
      recommendedAdSpendINR: "₹1,50,000 – ₹6,00,000 / month (Paid directly to ad platforms)",
      deliverables: [
        "Multi-Channel Orchestration (Meta Ads + Google Search + On-Page SEO)",
        "Weekly Creative Sprints (Hooks, Static Graphics & Video Iterations)",
        "Custom Landing Page Design & Conversion Rate Optimization (CRO)",
        "First-Party Server-Side Tracking (GA4 + CAPI Infrastructure)",
        "Lifecycle Email & WhatsApp Nurture Automations (up to 4 flows)",
        "Weekly Live Strategy Sync + Dedicated Slack Channel",
        "Dedicated Senior Strategist & Art Director"
      ],
      reportingCadence: "Weekly Live Dashboard Sync + Monthly Strategy Review",
      accountManager: "Senior Growth Lead + Dedicated Art Director",
      popular: true
    },
    {
      id: "scale",
      name: "Enterprise Domination",
      tagline: "Comprehensive full-funnel partnership operating as your dedicated high-velocity growth department.",
      monthlyFeeINR: "₹2,75,000",
      quarterlyFeeINR: "₹7,42,500", // 10% discount
      monthlyFeeUSD: "$3,800",
      quarterlyFeeUSD: "$10,260",
      bestFor: "High-volume D2C, B2B SaaS, and regional multi-location enterprises scaling past ₹6,00,000 / $8,000 ad spend.",
      recommendedAdSpendINR: "₹6,00,000+ / month (Paid directly to ad platforms)",
      deliverables: [
        "Full-Funnel Omnichannel Mastery (Paid Search, Paid Social, Programmatic, Advanced SEO)",
        "High-Cadence Creative Studio (Custom Video Production, 3D Assets, Motion Graphics)",
        "Continuous Multi-Variant A/B Testing & Deep Funnel CRO",
        "Customer Lifetime Value (LTV) & Retention Engine (Email, SMS, WhatsApp VIP)",
        "Quarterly Brand Strategy & Market Whitespace Analysis",
        "Real-Time Multi-Touch Revenue Attribution Modeling in Looker Studio",
        "Direct Leadership Access (Founders & Department Heads) + Priority 4-hour SLA"
      ],
      reportingCadence: "Weekly Live Operational Sprint + Monthly Board-Level Review",
      accountManager: "VP of Growth & Strategy + Dedicated Creative Squad"
    },
    {
      id: "custom",
      name: "Custom Advisory & Sprints",
      tagline: "Tailored project sprints for website design, brand overhauls, or specialized technical audits.",
      monthlyFeeINR: "Custom Quote",
      quarterlyFeeINR: "Custom Scope",
      monthlyFeeUSD: "Custom Quote",
      quarterlyFeeUSD: "Custom Scope",
      bestFor: "Specific milestone projects: Full Website Redesigns, Rebranding, or In-Depth Technical Audits.",
      recommendedAdSpendINR: "Flexible based on project scope",
      deliverables: [
        "Custom Scope of Work with Defined Milestones & Deadlines",
        "Option for Fixed-Fee Project Delivery or Retainer Hybrid",
        "Dedicated Specialized Engineering & Creative Resources",
        "Full Intellectual Property Transfer & Source Files",
        "Comprehensive Post-Launch Training & Handover Documentation",
        "30-Day Post-Launch Warranty & Support Window"
      ],
      reportingCadence: "Milestone Deliverable Reviews",
      accountManager: "Managing Director"
    }
  ] as PricingPlan[],

  blogPosts: [
    {
      id: "performance-creative-fatigue",
      slug: "how-to-beat-ad-creative-fatigue-2026",
      title: "Why Your Ad Creative Fatigues in 14 Days (And How to Build an Iteration Engine)",
      category: "Paid Advertising",
      readingTime: "5 min read",
      publishDate: "March 2026",
      author: { name: "Meera Krishnan", role: "Performance Media Lead" },
      excerpt: "Modern platform algorithms consume static ads faster than ever. Here is our mathematical framework for testing 20+ hook and angle variations without increasing production costs.",
      content: [
        "If you manage ad spend on Meta or TikTok, you know the painful cycle: you launch a winning ad, ROAS looks fantastic for 10 days, and then your Cost Per Acquisition suddenly jumps by 60%.",
        "Most marketing teams blame 'the algorithm'. In reality, machine-learning ad platforms require constant novelty in the first 3 seconds of creative consumption. They don't need 20 entirely different video concepts; they need modular creative variations.",
        "By deconstructing videos into three independent variables—Hook (0-3s), Body Demonstration (3-15s), and Call to Action (15-20s)—a single shoot of 3 hooks, 2 body angles, and 2 CTAs generates 12 unique ads for testing.",
        "Track your 3-second hook retention rate independently from your click-through rate. When CAC rises, change only the hook while keeping the proven body intact."
      ],
      takeaways: [
        "Deconstruct ad creative into modular components rather than shooting from scratch every time.",
        "Aim for a minimum 3-second hook retention rate above 35% on video ads.",
        "Rotate creative angles based on user motivations (Status, Fear of Missing Out, Financial Efficiency, Social Proof)."
      ],
      featured: true
    },
    {
      id: "core-web-vitals-conversion-rate",
      slug: "core-web-vitals-and-bottom-line-revenue",
      title: "Core Web Vitals Aren't Just for SEO: How 0.5s Latency Destroys Conversion Rates",
      category: "Analytics",
      readingTime: "6 min read",
      publishDate: "February 2026",
      author: { name: "Rohan Sengupta", role: "Web Architect & Technical Lead" },
      excerpt: "A deep dive into how Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) directly correlate with bounce rates and lost checkout revenue.",
      content: [
        "For years, technical SEO was treated as an esoteric compliance checklist relegated to developers. But when Google tied search visibility directly to real-world user page speed metrics, the commercial impact became undeniable.",
        "In our recent analysis across 14 high-traffic e-commerce and lead-generation funnels, every 100ms delay in Largest Contentful Paint (LCP) correlated with a 1.2% drop in conversion rate.",
        "The biggest culprits are rarely server response times. They are uncompressed high-resolution images loaded above the fold, third-party tracking scripts blocking the main browser thread, and dynamic layout shifts that irritate mobile users.",
        "Fixing these bottlenecks does not require rewriting your entire company tech stack. Moving non-critical tracking to server containers and properly sizing media containers immediately stabilizes Core Web Vitals."
      ],
      takeaways: [
        "Prioritize Largest Contentful Paint (LCP) under 1.8 seconds on 4G mobile connections.",
        "Eliminate Cumulative Layout Shift (CLS) by hardcoding image aspect ratios in your markup.",
        "Audit third-party JavaScript tags quarterly—abandoned heatmaps and old pixels silently choke browser performance."
      ]
    },
    {
      id: "b2b-messaging-differentiation",
      slug: "b2b-messaging-differentiation-framework",
      title: "The Anti-Jargon Manifesto: How to Write B2B Copy That Actually Sells",
      category: "Branding",
      readingTime: "4 min read",
      publishDate: "January 2026",
      author: { name: "Pooja Varma", role: "VP of Creative Direction" },
      excerpt: "Why words like 'streamline', 'empower', and 'synergize' make your prospects tune out, and how to write sharp, concrete copy that commands attention.",
      content: [
        "Visit ten B2B software or agency websites today, and eight will claim to 'empower modern teams with seamless intelligent workflows'. This language says nothing, promises nothing, and leaves no memorable impression.",
        "B2B buyers are humans with urgent problems, demanding bosses, and limited time. They do not care about your 'holistic paradigm'. They want to know what breaks, how you fix it, and what measurable outcome occurs.",
        "To break through, apply the 'Negative Test': if your competitor could claim the exact opposite of your headline and sound ridiculous, your headline is meaningless. (No company claims to 'complicate workflows with disjointed tools').",
        "Replace vague adjectives with specific nouns and verifiable verbs. Instead of 'supercharge your sales pipeline', say 'fill your calendar with 15 qualified enterprise demos every month'."
      ],
      takeaways: [
        "Ban generic SaaS buzzwords from your website hero and sales collateral.",
        "Lead with the specific business mechanism rather than abstract emotional promises.",
        "Write to a single, concrete decision maker rather than an amorphous committee."
      ]
    },
    {
      id: "first-party-data-privacy-india",
      slug: "first-party-data-strategy-dpdp-act",
      title: "Navigating India's DPDP Act: Why First-Party Data Is Your Best Growth Asset",
      category: "SEO",
      readingTime: "7 min read",
      publishDate: "January 2026",
      author: { name: "Aarav Sharma", role: "Head of Growth & Strategy" },
      excerpt: "With stricter data privacy regulations across India and globally, relying purely on third-party ad tracking is a liability. Here is how to build an owned first-party data engine.",
      content: [
        "The Digital Personal Data Protection (DPDP) Act in India and global privacy mandates have reshaped modern performance marketing. The era of loose third-party cookie tracking is definitively over.",
        "Forward-thinking brands are not mourning the loss of third-party tracking; they are seizing it as an opportunity to build direct relationships with their customers through consent-based email, SMS, and WhatsApp channels.",
        "Building a first-party data strategy begins with value exchange: why should a customer give you their phone number or email? Offering genuine utility—interactive calculators, proprietary research, or early access—builds authentic trust.",
        "When combined with server-side conversion modeling, first-party data gives ad platforms accurate, compliant purchase signals that outperform competitors reliant on degraded client-side pixels."
      ],
      takeaways: [
        "Implement clear, transparent consent notices that explain data usage simply.",
        "Offer real informational utility in exchange for prospect contact details.",
        "Integrate server-side conversion APIs to safeguard attribution accuracy compliantly."
      ]
    }
  ] as BlogPostItem[],

  faqs: [
    {
      question: "What exact services does VORTEX Digital provide?",
      answer: "We provide comprehensive full-funnel digital marketing services: Search Engine Optimization (SEO), Paid Advertising & Performance Marketing (Google & Meta Ads), Social Media Marketing, Brand Strategy & Visual Identity, Website Design & Engineering, Content Marketing, Lifecycle Email & WhatsApp Automation, and Analytics & Conversion Rate Optimization (CRO)."
    },
    {
      question: "Who is your ideal client partner?",
      answer: "We partner with high-ambition startups, established SMEs, D2C e-commerce brands, high-growth B2B firms, and premium hospitality brands. Our clients generally have product-market fit and are looking for a rigorous, data-driven partner to scale acquisition and brand authority."
    },
    {
      question: "Do you offer customized packages or only rigid plans?",
      answer: "Our Starter, Performance Scale, and Enterprise Domination models provide structured clarity, but we frequently create bespoke scopes. We evaluate your immediate bottlenecks—whether that is a dedicated website redesign sprint, paid media takeover, or multi-channel growth engine."
    },
    {
      question: "How long does it typically take to see measurable results?",
      answer: "Paid advertising campaigns and CRO landing page optimizations can yield initial conversion signals and CPA benchmarks within 14–21 days. Compounding organic growth—such as technical SEO, topical authority content, and brand reputation—typically gains strong commercial momentum within 3 to 6 months."
    },
    {
      question: "Do you work with businesses outside India?",
      answer: "Yes. While our headquarters are in Cyber City, Gurugram, over 40% of our client base spans the United States, United Kingdom, UAE, Singapore, and Australia. Our team operates with clear overlap across North American, European, and Asia-Pacific working hours."
    },
    {
      question: "What is your client onboarding process?",
      answer: "Our onboarding follows a structured 4-step framework: 1) Initial discovery and analytics audit; 2) Strategy and messaging roadmap presentation within 10 days; 3) Technical tracking, tagging, and creative production; 4) Launch and live weekly optimization sprints."
    },
    {
      question: "How do you handle reporting and transparency?",
      answer: "We despise monthly PDF slide decks filled with vanity metrics. Every client receives a live, interactive 24/7 Looker Studio dashboard connected directly to their ad accounts and Google Analytics. In addition, we conduct scheduled weekly or bi-weekly video reviews highlighting key learnings and forward actions."
    },
    {
      question: "How do we get started?",
      answer: "You can submit an inquiry through our project form or schedule a discovery call. We will review your website and current marketing footprint, and schedule a 30-minute strategic consultation with one of our leads (never a junior salesperson)."
    }
  ]
};
