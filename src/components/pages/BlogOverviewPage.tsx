import React, { useState } from 'react';
import { Language, BlogPost } from '../../types';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../data/blogData';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  ChevronRight, 
  BookOpen, 
  Sliders,
  Filter
} from 'lucide-react';

interface BlogOverviewPageProps {
  language: Language;
  onBackToHome: () => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenContact: (officeCity?: string, topic?: string) => void;
  onNavigateToTeamOverview: () => void;
  onNavigateToPracticesOverview: () => void;
  onNavigateToContactPage: () => void;
  onOpenElementorGuide: () => void;
}

export const BlogOverviewPage: React.FC<BlogOverviewPageProps> = ({
  language,
  onBackToHome,
  onSelectPost,
  onOpenContact,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isEn = language === 'en';

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const postCategory = isEn && post.categoryEn ? post.categoryEn : post.category;
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'sanktionen' && post.category.includes('Sanktionen')) ||
      (selectedCategory === 'europarecht' && post.category.includes('Europarecht')) ||
      (selectedCategory === 'kartellrecht' && post.category.includes('Kartell')) ||
      (selectedCategory === 'schiedsrecht' && post.category.includes('Schieds'));

    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchLower) ||
      (post.titleEn && post.titleEn.toLowerCase().includes(searchLower)) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      (post.excerptEn && post.excerptEn.toLowerCase().includes(searchLower)) ||
      post.author.name.toLowerCase().includes(searchLower) ||
      post.tags.some((t) => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div id="blog-overview-page" className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col font-sans">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={() => onOpenContact('Zürich')}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage}
        onNavigateToBlogOverview={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <main className="flex-grow pt-18 sm:pt-20">
        {/* =========================================================================
            1. HERO SECTION (Dark Petrol + Large Image + Overlay - consistent with all subpages)
            Elementor structure: 1 Section / Container with background image and overlay
        ========================================================================== */}
        <section className="relative bg-[#213134] text-white py-20 sm:py-24 md:py-32 overflow-hidden border-b border-[#31464a]">
          {/* Large Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
              alt="Baudenbacher Law Bibliothek und Publikationen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Multi-layered dark petrol overlay for refined contrast and optimal legibility */}
            <div className="absolute inset-0 bg-[#213134]/90 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-[#213134]/70 to-[#182426]/85"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#E4D9CC]/70 mb-6">
              <button
                onClick={onBackToHome}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isEn ? 'Home' : 'Startseite'}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="text-[#C6A15B] font-medium">
                {isEn ? 'Insights & Publications' : 'Aktuelles & Publikationen'}
              </span>
            </div>

            {/* Section Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#C6A15B]"></span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                {isEn ? 'Baudenbacher Law Insights' : 'Baudenbacher Law Publikationen'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
              {isEn ? 'Legal Analysis & Strategic Perspectives' : 'Juristische Analysen & Strategische Einordnungen'}
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-[#E4D9CC]/90 leading-relaxed max-w-2xl font-light">
              {isEn
                ? 'Current developments in European, EEA, and Swiss business law, sanctions compliance, and international dispute resolution.'
                : 'Aktuelle Entwicklungen im europäischen, EWR- und Schweizer Wirtschaftsrecht, Sanktions-Compliance sowie internationaler Streitbeilegung.'}
            </p>

            {/* Elementor Architecture Info Badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-[#E4D9CC]/75">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[11px] text-[#C6A15B]">
                <BookOpen className="w-3.5 h-3.5" />
                {isEn ? 'Elementor Archive Template' : 'Elementor Archiv-Vorlage'}
              </span>
              <button
                onClick={onOpenElementorGuide}
                className="inline-flex items-center gap-1.5 text-xs text-[#E4D9CC] hover:text-[#C6A15B] transition-colors underline underline-offset-4 decoration-[#C6A15B]/50"
              >
                <Sliders className="w-3 h-3 text-[#C6A15B]" />
                {isEn ? 'View Elementor conversion guide' : 'Elementor-Struktur ansehen'}
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FEATURED ARTICLE SECTION (Off-White Background #F8F6F2)
            Elementor structure: 2-column container with post query (featured = true)
        ========================================================================== */}
        {featuredPost && selectedCategory === 'all' && searchQuery.trim() === '' && (
          <section className="py-12 sm:py-16 bg-[#F8F6F2] border-b border-[#E4D9CC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-5 h-[2px] bg-[#C6A15B]"></span>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8a6828] font-semibold">
                  {isEn ? 'Featured Publication' : 'Aktuelle Leitpublikation'}
                </span>
              </div>

              <div 
                onClick={() => onSelectPost(featuredPost)}
                className="group cursor-pointer bg-white border border-[#E4D9CC] overflow-hidden shadow-sm hover:shadow-md hover:border-[#C6A15B]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#213134]">
                  <img
                    src={featuredPost.imageUrl}
                    alt={isEn && featuredPost.titleEn ? featuredPost.titleEn : featuredPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#213134]/90 backdrop-blur-xs border border-[#C6A15B]/50 text-white text-[11px] font-sans tracking-wider uppercase font-medium">
                    {isEn && featuredPost.categoryEn ? featuredPost.categoryEn : featuredPost.category}
                  </span>
                </div>

                {/* Content (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="hidden lg:flex items-center gap-3 text-xs font-sans text-[#8a6828] font-semibold uppercase tracking-wider mb-3">
                      <span>{isEn && featuredPost.categoryEn ? featuredPost.categoryEn : featuredPost.category}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#213134] font-normal tracking-tight group-hover:text-[#8a6828] transition-colors leading-[1.2] mb-4">
                      {isEn && featuredPost.titleEn ? featuredPost.titleEn : featuredPost.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-[#213134]/80 leading-relaxed font-light mb-6 line-clamp-3">
                      {isEn && featuredPost.excerptEn ? featuredPost.excerptEn : featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E4D9CC] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatarUrl}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#E4D9CC]"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-[#213134]">
                          {featuredPost.author.name}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-sans text-[#213134]/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#C6A15B]" />
                            {isEn && featuredPost.dateEn ? featuredPost.dateEn : featuredPost.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C6A15B]" />
                            {isEn && featuredPost.readTimeEn ? featuredPost.readTimeEn : featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#8a6828] group-hover:text-[#213134] transition-colors uppercase tracking-wider">
                      <span>{isEn ? 'Read Article' : 'Artikel lesen'}</span>
                      <ArrowRight className="w-4 h-4 text-[#8a6828] group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            3. FILTER & SEARCH BAR SECTION
            Elementor structure: Simple Form or Tab container
        ========================================================================== */}
        <section className="py-8 bg-white border-b border-[#E4D9CC] sticky top-18 sm:top-20 z-20 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                <span className="text-xs text-[#213134]/60 font-sans uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-[#C6A15B]" />
                  {isEn ? 'Filter:' : 'Filter:'}
                </span>
                {BLOG_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-2 text-xs font-sans rounded whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#213134] text-white font-medium shadow-xs'
                          : 'bg-[#F8F6F2] hover:bg-[#E4D9CC]/50 text-[#213134]/80'
                      }`}
                    >
                      {isEn ? cat.nameEn : cat.nameDe}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar Input */}
              <div className="relative w-full md:w-72 flex-shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isEn ? 'Search articles...' : 'Artikel durchsuchen...'}
                  className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-[#F8F6F2] border border-[#E4D9CC] focus:border-[#C6A15B] focus:bg-white text-[#213134] placeholder-[#213134]/50 rounded outline-none transition-colors"
                />
                <Search className="w-4 h-4 text-[#213134]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#213134]/50 hover:text-[#213134]"
                  >
                    ✕
                  </button>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. MAIN ARTICLES ARCHIVE GRID
            Elementor structure: Loop Grid or Posts Archive widget (3 columns)
        ========================================================================== */}
        <section className="py-16 md:py-24 bg-[#F8F6F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header info */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#E4D9CC]">
              <div className="font-serif text-xl sm:text-2xl text-[#213134] font-normal">
                {isEn ? 'All Articles' : 'Alle Veröffentlichungen'}
                <span className="ml-3 text-xs font-sans text-[#8a6828] font-semibold bg-[#E4D9CC]/50 px-2.5 py-0.5 rounded">
                  {filteredPosts.length} {isEn ? 'Articles' : 'Beiträge'}
                </span>
              </div>

              {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-xs font-sans text-[#8a6828] hover:text-[#213134] underline cursor-pointer"
                >
                  {isEn ? 'Reset filters' : 'Filter zurücksetzen'}
                </button>
              )}
            </div>

            {/* Empty state */}
            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center bg-white border border-[#E4D9CC] p-8 max-w-lg mx-auto">
                <BookOpen className="w-10 h-10 text-[#C6A15B] mx-auto mb-4 opacity-75" />
                <h3 className="font-serif text-xl text-[#213134] mb-2">
                  {isEn ? 'No articles found' : 'Keine Beiträge gefunden'}
                </h3>
                <p className="font-sans text-xs text-[#213134]/70 mb-6 font-light">
                  {isEn
                    ? 'No publications match your filter criteria. Please try a different search query.'
                    : 'Zu Ihren Suchkriterien wurden keine Publikationen gefunden. Bitte versuchen Sie einen anderen Suchbegriff.'}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-[#213134] text-white text-xs font-sans uppercase tracking-wider hover:bg-[#2c4044] transition-colors"
                >
                  {isEn ? 'Show all articles' : 'Alle Beiträge anzeigen'}
                </button>
              </div>
            ) : (
              /* 3-Column Posts Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    id={`blog-card-${post.id}`}
                    onClick={() => onSelectPost(post)}
                    className="group cursor-pointer bg-white border border-[#E4D9CC] flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md hover:border-[#C6A15B]/50 transition-all duration-300"
                  >
                    <div>
                      {/* Post Thumbnail Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#213134]">
                        <img
                          src={post.imageUrl}
                          alt={isEn && post.titleEn ? post.titleEn : post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-[#213134]/90 backdrop-blur-xs border border-[#C6A15B]/40 text-white text-[10px] font-sans tracking-wider uppercase font-medium">
                            {isEn && post.categoryEn ? post.categoryEn : post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6">
                        {/* Meta: Date and Read Time */}
                        <div className="flex items-center gap-3 text-[11px] font-sans text-[#213134]/60 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#C6A15B]" />
                            {isEn && post.dateEn ? post.dateEn : post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C6A15B]" />
                            {isEn && post.readTimeEn ? post.readTimeEn : post.readTime}
                          </span>
                        </div>

                        {/* Title in Georgia serif */}
                        <h3 className="font-serif text-lg sm:text-xl text-[#213134] font-normal leading-[1.25] group-hover:text-[#8a6828] transition-colors mb-3 line-clamp-2">
                          {isEn && post.titleEn ? post.titleEn : post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-sans text-xs sm:text-[13px] text-[#213134]/75 leading-relaxed font-light line-clamp-3 mb-6">
                          {isEn && post.excerptEn ? post.excerptEn : post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Author & Link */}
                    <div className="px-6 py-4 bg-[#F8F6F2]/50 border-t border-[#E4D9CC] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatarUrl}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#E4D9CC]"
                        />
                        <span className="text-xs font-sans text-[#213134] font-medium truncate max-w-[130px]">
                          {post.author.name}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#8a6828] group-hover:text-[#213134] transition-colors">
                        <span>{isEn ? 'Read' : 'Lesen'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8a6828] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* =========================================================================
            5. EDITORIAL NEWSLETTER & CONTACT CALLOUT (Dark Petrol #213134)
            Elementor structure: Centered Content Section
        ========================================================================== */}
        <section className="py-20 sm:py-24 bg-[#213134] text-white border-t border-[#31464a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-3">
              {isEn ? 'Legal Advisory & Briefings' : 'Rechtliche Beratung & Briefings'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-6 leading-tight">
              {isEn
                ? 'Do you have questions regarding specific regulatory developments?'
                : 'Haben Sie Fragen zu spezifischen regulatorischen Entwicklungen?'}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              {isEn
                ? 'Our partners in Zurich, Brussels, and Oslo are at your disposal for confidential initial assessments and tailored briefings for boards and legal departments.'
                : 'Unsere Partner in Zürich, Brüssel und Oslo stehen Ihnen für vertrauliche Ersteinschätzungen sowie maßgeschneiderte Briefings für Vorstände und Rechtsabteilungen zur Verfügung.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenContact('Zürich', 'Publikationen & Beratung')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-200 shadow-md cursor-pointer"
              >
                {isEn ? 'Request Confidential Assessment' : 'Vertrauliche Ersteinschätzung anfragen'}
              </button>
              <button
                onClick={onNavigateToContactPage}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-[#E4D9CC]/50 font-sans text-xs tracking-widest uppercase font-medium transition-all duration-200 cursor-pointer"
              >
                {isEn ? 'View Law Firm Offices' : 'Standorte einsehen'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={() => onOpenContact('Zürich')}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage}
        onNavigateToBlogOverview={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
};
