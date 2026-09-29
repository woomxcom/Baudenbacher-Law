import React from 'react';
import { Language, BlogPost } from '../../types';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { BLOG_POSTS } from '../../data/blogData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  Sliders,
  ExternalLink,
  Mail
} from 'lucide-react';

interface BlogPostPageProps {
  language: Language;
  post: BlogPost;
  onBackToOverview: () => void;
  onBackToHome: () => void;
  onSelectPost: (post: BlogPost) => void;
  onNavigateToAuthor?: (memberId: string) => void;
  onOpenContact: (officeCity?: string, topic?: string) => void;
  onNavigateToTeamOverview: () => void;
  onNavigateToPracticesOverview: () => void;
  onNavigateToContactPage: () => void;
  onOpenElementorGuide: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  language,
  post,
  onBackToOverview,
  onBackToHome,
  onSelectPost,
  onNavigateToAuthor,
  onOpenContact,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';

  // Find previous and next posts
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // Related posts (from same category, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);
  const fallbackRelated = relatedPosts.length > 0 
    ? relatedPosts 
    : BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const title = isEn && post.titleEn ? post.titleEn : post.title;
  const category = isEn && post.categoryEn ? post.categoryEn : post.category;
  const date = isEn && post.dateEn ? post.dateEn : post.date;
  const readTime = isEn && post.readTimeEn ? post.readTimeEn : post.readTime;
  const leadParagraph = isEn && post.leadParagraphEn ? post.leadParagraphEn : post.leadParagraph;
  const imageCaption = isEn && post.imageCaptionEn ? post.imageCaptionEn : post.imageCaption;
  const keyTakeaways = isEn && post.keyTakeawaysEn ? post.keyTakeawaysEn : post.keyTakeaways;
  const authorRole = isEn && post.author.roleEn ? post.author.roleEn : post.author.role;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
  };

  return (
    <div id="blog-post-template-page" className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col font-sans">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={() => onOpenContact('Zürich', title)}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage}
        onNavigateToBlogOverview={onBackToOverview}
      />

      <main className="flex-grow pt-18 sm:pt-20">
        {/* =========================================================================
            1. HERO / ARTICLE HEADER (Dark Petrol + Large Image + Overlay)
            Elementor structure: 1 Container / Section with background image and overlay
        ========================================================================== */}
        <section className="relative bg-[#213134] text-white py-16 sm:py-20 md:py-24 overflow-hidden border-b border-[#31464a]">
          {/* Subtle Background Texture / Image */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#213134]/95 z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#E4D9CC]/75 mb-6">
              <button
                onClick={onBackToHome}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isEn ? 'Home' : 'Startseite'}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              <button
                onClick={onBackToOverview}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {isEn ? 'Insights & Blog' : 'Aktuelles & Publikationen'}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="text-[#C6A15B] font-medium truncate max-w-[200px]">
                {category}
              </span>
            </div>

            {/* Category Pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-white/10 border border-[#C6A15B]/50 text-[#C6A15B] text-xs font-sans tracking-widest uppercase font-semibold">
                {category}
              </span>
            </div>

            {/* Article H1 Title */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-[1.2] mb-8">
              {title}
            </h1>

            {/* Author Meta & Publishing Info */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
              {/* Author Attribution */}
              <div 
                onClick={() => post.author.memberId && onNavigateToAuthor && onNavigateToAuthor(post.author.memberId)}
                className={`flex items-center gap-3.5 ${post.author.memberId ? 'group cursor-pointer' : ''}`}
              >
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C6A15B]/60 shadow-sm"
                />
                <div>
                  <div className="font-serif text-base text-white font-medium group-hover:text-[#C6A15B] transition-colors flex items-center gap-1.5">
                    <span>{post.author.name}</span>
                    {post.author.memberId && (
                      <ExternalLink className="w-3 h-3 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="text-xs font-sans text-[#E4D9CC]/75">
                    {authorRole}
                  </div>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-xs font-sans text-[#E4D9CC]/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  {date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  {readTime}
                </span>
                <button
                  onClick={handleCopyLink}
                  title={isEn ? 'Share / Copy link' : 'Link kopieren'}
                  className="ml-2 p-1.5 bg-white/10 hover:bg-[#C6A15B] hover:text-[#213134] rounded transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={onBackToOverview}
                className="inline-flex items-center gap-2 text-xs font-sans text-[#E4D9CC] hover:text-[#C6A15B] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isEn ? 'Back to all articles' : 'Zurück zur Artikelübersicht'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FEATURED IMAGE (Max-w-4xl Container)
            Elementor structure: Featured Image widget
        ========================================================================== */}
        <section className="bg-white border-b border-[#E4D9CC] py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-[#E4D9CC] shadow-sm bg-[#213134]">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={post.imageUrl}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              {imageCaption && (
                <div className="p-3 bg-[#F8F6F2] border-t border-[#E4D9CC] text-xs font-sans text-[#213134]/70 italic">
                  {imageCaption}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. POST CONTENT (Clean Editorial Body - Max-w-3xl)
            Elementor structure: Standard Post Content widget (renders p, h2, h3, blockquote, ul)
        ========================================================================== */}
        <article className="py-12 md:py-16 bg-white border-b border-[#E4D9CC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Lead Paragraph */}
            <div className="mb-10 p-5 sm:p-6 bg-[#F8F6F2] border-l-4 border-[#C6A15B]">
              <p className="font-serif text-lg sm:text-xl text-[#213134] leading-relaxed italic font-normal">
                {leadParagraph}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-10 text-[#213134]">
              {post.sections.map((section, idx) => {
                const secHeading = isEn && section.headingEn ? section.headingEn : section.heading;
                const secParagraphs = isEn && section.paragraphsEn ? section.paragraphsEn : section.paragraphs;
                const secQuote = isEn && section.quoteEn ? section.quoteEn : section.quote;
                const secBullets = isEn && section.bulletsEn ? section.bulletsEn : section.bullets;

                return (
                  <section key={idx} className="space-y-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal tracking-tight pt-2 border-b border-[#E4D9CC]/60 pb-3">
                      {secHeading}
                    </h2>

                    {secParagraphs.map((p, pIdx) => (
                      <p 
                        key={pIdx}
                        className="font-sans text-base sm:text-[17px] text-[#213134]/85 leading-relaxed font-light"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Pull Quote if available */}
                    {secQuote && (
                      <blockquote className="my-6 p-6 bg-[#F8F6F2] border-l-4 border-[#8a6828] font-serif text-lg sm:text-xl text-[#213134] italic leading-relaxed">
                        {secQuote}
                      </blockquote>
                    )}

                    {/* Bullet Points if available */}
                    {secBullets && secBullets.length > 0 && (
                      <ul className="my-6 space-y-2.5 pl-2">
                        {secBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#213134]/85 leading-relaxed font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-2 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Key Takeaways Box (Single clean container, zero card clutter) */}
            {keyTakeaways && keyTakeaways.length > 0 && (
              <div className="mt-14 p-6 sm:p-8 bg-[#F8F6F2] border border-[#E4D9CC] shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#8a6828]" />
                  <h3 className="font-serif text-xl text-[#213134] font-medium">
                    {isEn ? 'Key Takeaways for Practice' : 'Wesentliche Praxishinweise'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#213134]/85 leading-relaxed font-light">
                      <span className="text-[#8a6828] font-bold text-sm">0{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Tags */}
            <div className="mt-12 pt-6 border-t border-[#E4D9CC] flex flex-wrap items-center gap-2">
              <span className="text-xs font-sans text-[#213134]/60 uppercase tracking-wider mr-2">
                {isEn ? 'Topics:' : 'Themen:'}
              </span>
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-[#F8F6F2] border border-[#E4D9CC] text-xs font-sans text-[#213134]/80 rounded hover:border-[#C6A15B] transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* =========================================================================
                4. AUTHOR BIO BOX
                Elementor structure: Author Box widget
            ========================================================================== */}
            <div className="mt-12 p-6 sm:p-8 bg-[#F8F6F2] border border-[#E4D9CC] flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#C6A15B] flex-shrink-0 shadow-sm"
              />
              <div className="text-center sm:text-left flex-1">
                <div className="text-xs font-sans uppercase tracking-wider text-[#8a6828] font-semibold mb-1">
                  {isEn ? 'About the Author' : 'Über die Autorin / den Autor'}
                </div>
                <h4 className="font-serif text-xl text-[#213134] font-medium mb-1">
                  {post.author.name}
                </h4>
                <div className="text-xs font-sans text-[#213134]/70 mb-3">
                  {authorRole}
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#213134]/80 leading-relaxed font-light mb-4">
                  {isEn
                    ? 'Specialized counsel in high-stakes European, EEA, and Swiss cross-border proceedings, regulatory investigations, and strategic advisory.'
                    : 'Spezialisiert auf anspruchsvolle europäische, EWR- und Schweizer Wirtschaftsverfahren, behördliche Untersuchungen und strategische Beratung.'}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {post.author.memberId && onNavigateToAuthor && (
                    <button
                      onClick={() => onNavigateToAuthor(post.author.memberId!)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#213134] hover:text-[#8a6828] transition-colors"
                    >
                      <span>{isEn ? 'View Full Profile' : 'Vollständiges Anwaltsprofil'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => onOpenContact('Zürich', `Rückfrage zu Artikel: ${title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#8a6828] hover:text-[#213134] transition-colors ml-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Direct inquiry' : 'Direkte Anfrage'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* =========================================================================
                5. PREVIOUS / NEXT NAVIGATION
                Elementor structure: Post Navigation widget
            ========================================================================== */}
            <div className="mt-12 pt-8 border-t border-[#E4D9CC] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prevPost ? (
                <div 
                  onClick={() => onSelectPost(prevPost)}
                  className="group cursor-pointer p-4 bg-[#F8F6F2] hover:bg-white border border-[#E4D9CC] transition-all"
                >
                  <div className="text-[11px] font-sans text-[#8a6828] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>{isEn ? 'Previous Article' : 'Vorheriger Beitrag'}</span>
                  </div>
                  <div className="font-serif text-sm sm:text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors line-clamp-2">
                    {isEn && prevPost.titleEn ? prevPost.titleEn : prevPost.title}
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {nextPost ? (
                <div 
                  onClick={() => onSelectPost(nextPost)}
                  className="group cursor-pointer p-4 bg-[#F8F6F2] hover:bg-white border border-[#E4D9CC] text-right transition-all sm:col-start-2"
                >
                  <div className="text-[11px] font-sans text-[#8a6828] uppercase tracking-wider mb-1 flex items-center justify-end gap-1">
                    <span>{isEn ? 'Next Article' : 'Nächster Beitrag'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-serif text-sm sm:text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors line-clamp-2">
                    {isEn && nextPost.titleEn ? nextPost.titleEn : nextPost.title}
                  </div>
                </div>
              ) : null}
            </div>

          </div>
        </article>

        {/* =========================================================================
            6. RELATED ARTICLES (Off-White Background #F8F6F2)
            Elementor structure: Loop Grid or Posts widget (Query: related by category)
        ========================================================================== */}
        <section className="py-16 md:py-20 bg-[#F8F6F2] border-b border-[#E4D9CC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E4D9CC]">
              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8a6828] font-semibold block mb-1">
                  {isEn ? 'Further Analysis' : 'Weitere Analysen'}
                </span>
                <h3 className="font-serif text-2xl text-[#213134] font-normal">
                  {isEn ? 'Related Publications' : 'Verwandte Veröffentlichungen'}
                </h3>
              </div>
              <button
                onClick={onBackToOverview}
                className="text-xs font-sans font-medium text-[#8a6828] hover:text-[#213134] flex items-center gap-1 cursor-pointer"
              >
                <span>{isEn ? 'All articles' : 'Alle Beiträge'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackRelated.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectPost(rel)}
                  className="group cursor-pointer bg-white border border-[#E4D9CC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C6A15B]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#213134]">
                      <img
                        src={rel.imageUrl}
                        alt={isEn && rel.titleEn ? rel.titleEn : rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] font-sans uppercase tracking-wider text-[#8a6828] font-semibold mb-2">
                        {isEn && rel.categoryEn ? rel.categoryEn : rel.category}
                      </div>
                      <h4 className="font-serif text-base text-[#213134] font-normal leading-snug group-hover:text-[#8a6828] transition-colors line-clamp-2 mb-2">
                        {isEn && rel.titleEn ? rel.titleEn : rel.title}
                      </h4>
                      <p className="font-sans text-xs text-[#213134]/70 line-clamp-2 font-light">
                        {isEn && rel.excerptEn ? rel.excerptEn : rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 text-xs font-sans text-[#8a6828] group-hover:text-[#213134] font-medium flex items-center gap-1">
                    <span>{isEn ? 'Read article' : 'Beitrag lesen'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. BOTTOM CALLOUT / CONTACT SECTION (Dark Petrol #213134)
            Elementor structure: Centered Callout Container
        ========================================================================== */}
        <section className="py-20 bg-[#213134] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-3">
              {isEn ? 'Mandate Inquiries & Legal Defense' : 'Mandatsanfragen & Rechtsschutz'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-6 leading-tight">
              {isEn
                ? 'Facing regulatory proceedings or cross-border sanctions issues?'
                : 'Betreffen diese regulatorischen Fragen Ihre unternehmerische Praxis?'}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              {isEn
                ? 'We evaluate your procedural options, legal risks, and prospect of success with absolute discretion across Zurich, Brussels, and Oslo.'
                : 'Wir prüfen Ihre Handlungsoptionen, Risiken und Erfolgsaussichten mit höchster Diskretion und juristischer Präzision an unseren Standorten in Zürich, Brüssel und Oslo.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenContact('Zürich', `Beratungsanfrage: ${title}`)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans text-xs tracking-widest uppercase font-semibold transition-all shadow-md cursor-pointer"
              >
                {isEn ? 'Confidential Initial Assessment' : 'Vertrauliche Ersteinschätzung anfragen'}
              </button>
              <button
                onClick={onBackToOverview}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-[#E4D9CC]/50 font-sans text-xs tracking-widest uppercase font-medium transition-all cursor-pointer"
              >
                {isEn ? 'Browse More Articles' : 'Weitere Publikationen lesen'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={() => onOpenContact('Zürich', title)}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage}
        onNavigateToBlogOverview={onBackToOverview}
      />
    </div>
  );
};
