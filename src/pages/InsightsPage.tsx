import React, { useState } from 'react';
import { AGENCY_CONFIG, BlogPostItem } from '../config/agency';
import { navigateTo, subscribeNewsletter } from '../utils/storage';
import {
  Search,
  Clock,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  Share2,
  Sparkles
} from 'lucide-react';

interface InsightsPageProps {
  articleSlug?: string;
  onOpenProjectDrawer: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ articleSlug, onOpenProjectDrawer }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState<{ text: string; success: boolean } | null>(null);

  const categories = ['all', 'Paid Advertising', 'Analytics', 'Branding', 'SEO'];

  const selectedArticle = articleSlug
    ? AGENCY_CONFIG.blogPosts.find(p => p.slug === articleSlug)
    : null;

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterMsg({ text: 'Please enter a valid business email address.', success: false });
      return;
    }
    const res = subscribeNewsletter(newsletterEmail, 'insights_page');
    setNewsletterMsg({ text: res.message, success: res.success });
    if (res.success) setNewsletterEmail('');
  };

  // If viewing a specific article
  if (selectedArticle) {
    const related = AGENCY_CONFIG.blogPosts.filter(p => p.id !== selectedArticle.id).slice(0, 2);

    return (
      <div className="pt-28 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <button
            type="button"
            onClick={() => navigateTo('/insights')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </button>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{selectedArticle.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {selectedArticle.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs text-[#CCFF00] font-mono">
              {selectedArticle.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-xs font-bold text-white">{selectedArticle.author.name}</div>
              <div className="text-[11px] text-neutral-400">{selectedArticle.author.role}</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
            <Sparkles className="w-4 h-4" />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs text-neutral-200">
            {selectedArticle.takeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Prose Content */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed pt-4 border-t border-neutral-800">
          {selectedArticle.content.map((paragraph, idx) => (
            <p key={idx} className="text-base leading-relaxed text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer & Consultation CTA */}
        <div className="bg-[#141419] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-white">Need strategic execution on this topic?</h3>
          <p className="text-xs text-neutral-400">
            Our team builds and deploys customized performance creative engines and attribution stacks.
          </p>
          <button
            type="button"
            onClick={onOpenProjectDrawer}
            className="px-6 py-2.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Inquire for Consultation
          </button>
        </div>

        {/* Related Articles */}
        <div className="pt-10 border-t border-neutral-800 space-y-6">
          <h3 className="text-xl font-bold text-white">More Dispatches from VORTEX</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map(art => (
              <div
                key={art.id}
                onClick={() => navigateTo(`/insights/${art.slug}`)}
                className="p-6 rounded-2xl bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/40 transition-colors cursor-pointer group space-y-2"
              >
                <div className="text-[10px] font-mono uppercase text-[#CCFF00]">{art.category}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#CCFF00] transition-colors">
                  {art.title}
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">{art.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Browse Mode: Articles Listing
  const filteredArticles = AGENCY_CONFIG.blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesQuery = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featured = AGENCY_CONFIG.blogPosts.find(p => p.featured) || AGENCY_CONFIG.blogPosts[0];

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Search */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
          VORTEX Insights & Editorial
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Field Notes on Modern Growth Engineering
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Tactical frameworks, real-world data attribution analysis, and creative strategy written by practitioners managing active client budgets.
        </p>

        {/* Search Input & Category Filters */}
        <div className="space-y-4 pt-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frameworks, SEO, Meta Ads..."
              className="w-full bg-[#121216] border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#CCFF00] text-black shadow-sm'
                    : 'bg-[#121216] text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article Spotlight */}
      {!searchQuery && selectedCategory === 'all' && (
        <div
          onClick={() => navigateTo(`/insights/${featured.slug}`)}
          className="bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 rounded-3xl p-8 sm:p-12 transition-all duration-300 group cursor-pointer space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
            <span className="text-black bg-[#CCFF00] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
              Featured Dispatch
            </span>
            <span aria-hidden="true">·</span>
            <span>{featured.category}</span>
            <span aria-hidden="true">·</span>
            <span>{featured.readingTime}</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#CCFF00] transition-colors leading-snug">
              {featured.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {featured.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs">
            <div className="text-neutral-400">
              By <span className="text-white font-medium">{featured.author.name}</span> · {featured.publishDate}
            </div>
            <div className="text-xs font-bold text-[#CCFF00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Read article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(article => (
          <div
            key={article.id}
            onClick={() => navigateTo(`/insights/${article.slug}`)}
            className="bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="text-[#CCFF00]">{article.category}</span>
                <span>{article.readingTime}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#CCFF00] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
              <span>{article.publishDate}</span>
              <span className="font-bold text-[#CCFF00] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Read &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-[#121216] border border-neutral-800 rounded-2xl">
          <p className="text-neutral-400 text-sm">No articles match your search criteria.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-3 text-xs text-[#CCFF00] font-bold underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Newsletter Signup Banner */}
      <div className="bg-[#141419] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white">
          Receive Our Bi-Weekly Dispatches Directly
        </h3>
        <p className="text-xs text-neutral-400 max-w-md mx-auto">
          No automated promotions. Just strategic playbooks on paid media, crawl optimization, and brand positioning.
        </p>

        <form onSubmit={handleNewsletter} className="max-w-md mx-auto space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="name@company.com"
              className="flex-1 bg-[#0a0a0c] border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#CCFF00]"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </div>
          {newsletterMsg && (
            <p className={`text-xs ${newsletterMsg.success ? 'text-[#CCFF00]' : 'text-rose-400'}`}>
              {newsletterMsg.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
