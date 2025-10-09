import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, Navbar, Footer } from "../../components/import";
import { blogPosts } from "../../../constants";
import { BlogPostType } from "../../../types";
import MedicalDisclaimer from "../../components/molecule/MedicalDisclaimer";

interface BlogPostPageProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostPageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));

      // Update active heading
      const headings = document.querySelectorAll('.blog-content h2, .blog-content h3');
      let currentHeading = '';
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentHeading = heading.id;
        }
      });
      setActiveHeading(currentHeading);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate table of contents from blog content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    const headings = tempDiv.querySelectorAll('h2, h3');
    const toc = Array.from(headings).map((heading, index) => {
      const text = heading.textContent || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const level = parseInt(heading.tagName.substring(1));

      // Add IDs to headings in temp div
      heading.setAttribute('id', id);

      return { id, text, level };
    });

    // Update the actual DOM headings with IDs after render
    setTimeout(() => {
      const actualHeadings = document.querySelectorAll('.blog-content h2, .blog-content h3');
      actualHeadings.forEach((heading, index) => {
        if (toc[index]) {
          heading.setAttribute('id', toc[index].id);
        }
      });
    }, 100);

    setTableOfContents(toc);
  }, [post.content]);

  const shareUrl = `https://www.do.co.uk/blog/${post.slug}`;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const imageUrl = typeof post.image === 'string' ? post.image : post.image.src;

  // Structured Data - Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Dr Ali",
      "jobTitle": "Dentist",
      "worksFor": {
        "@type": "Dentist",
        "name": "Dental Opulence"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dental Opulence",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.do.co.uk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.do.co.uk/blog/${post.slug}`
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.do.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.do.co.uk/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.do.co.uk/blog/${post.slug}`
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>{post.title} | Dental Opulence Hall Green</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, Dental advice Hall Green, ${post.title}`} />
        <link rel="canonical" href={`https://www.do.co.uk/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | Dental Opulence Hall Green`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.do.co.uk/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />

        {/* Structured Data - Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Structured Data - Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-[#100E10] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Hero Section with Featured Image */}
      <div className="bg-white pt-[140px] md:pt-[180px] pb-[40px] md:pb-[60px] w-full lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="max-w-[1000px] mx-auto">
          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-Pangram-Medium text-white bg-[#100E10] px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#8A8A8A] font-Pangram-Regular">
              {post.readTime}
            </span>
            <span className="text-xs text-[#8A8A8A] font-Pangram-Regular">
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-Pangram-Bold text-[32px] sm:text-[40px] md:text-[48px] text-[#161616] leading-[40px] sm:leading-[48px] md:leading-[56px] mb-6">
            {post.title}
          </h1>

          {/* Author and Share */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <p className="text-base text-[#8A8A8A] font-Pangram-Regular">
              By Dr Ali
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-lg border border-[#E8E8E8] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white transition-all duration-200"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 rounded-lg border border-[#E8E8E8] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white transition-all duration-200"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-lg border border-[#E8E8E8] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white transition-all duration-200"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg border border-[#E8E8E8] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white transition-all duration-200"
                aria-label="Copy link"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Author only for desktop (share is in sidebar) */}
          <div className="hidden lg:block mb-8">
            <p className="text-base text-[#8A8A8A] font-Pangram-Regular">
              By Dr Ali
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <img
              src={typeof post.image === 'string' ? post.image : post.image.src}
              alt={post.title}
              title={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 relative items-start">
            {/* Table of Contents - Desktop Only */}
            {tableOfContents.length > 0 && (
              <div className="hidden lg:block w-[280px] flex-shrink-0">
                <div className="sticky top-[120px]">
                {/* Floating Card */}
                <div className="bg-white border border-[#F0F0F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Table of Contents */}
                    <div className="mb-6">
                      <h3 className="text-[10px] font-Pangram-Bold text-[#999] mb-5 uppercase tracking-[0.1em]">
                        On This Page
                      </h3>
                      <nav className="space-y-2.5 relative">
                        {/* Active indicator line */}
                        <div className="absolute left-0 top-0 w-0.5 h-full bg-[#F0F0F0]"></div>
                        {tableOfContents.map((item, index) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block text-[13px] leading-[1.6] transition-all duration-200 relative pl-3 ${
                              item.level === 3 ? 'pl-7' : ''
                            } ${
                              activeHeading === item.id
                                ? 'text-[#100E10] font-Pangram-Medium'
                                : 'text-[#666] font-Pangram-Regular hover:text-[#100E10] hover:translate-x-0.5'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(item.id);
                              if (element) {
                                const yOffset = -100;
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }}
                          >
                            {/* Active indicator dot */}
                            {activeHeading === item.id && (
                              <span className="absolute left-[-1px] top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#100E10] rounded-full"></span>
                            )}
                            {item.text}
                          </a>
                        ))}
                      </nav>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#E8E8E8] to-transparent mb-6"></div>

                    {/* Social Share Buttons */}
                    <div>
                      <h3 className="text-[10px] font-Pangram-Bold text-[#999] mb-4 uppercase tracking-[0.1em]">
                        Share
                      </h3>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          onClick={() => handleShare('twitter')}
                          className="p-2.5 rounded-xl border border-[#F0F0F0] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Share on Twitter"
                        >
                          <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="p-2.5 rounded-xl border border-[#F0F0F0] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Share on Facebook"
                        >
                          <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-2.5 rounded-xl border border-[#F0F0F0] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Share on LinkedIn"
                        >
                          <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className="p-2.5 rounded-xl border border-[#F0F0F0] hover:border-[#100E10] hover:bg-[#100E10] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Copy link"
                        >
                          <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1 max-w-[800px]">
              <MedicalDisclaimer position="top" />
              <div
                className="blog-content font-Pangram-Regular text-[17px] md:text-[18px] text-[#454545] leading-[28px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <MedicalDisclaimer position="bottom" />

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-[#E8E8E8]">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-[#100E10] font-Pangram-Medium hover:underline text-[15px]"
                >
                  ← Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#F5F5F5] py-[60px] md:py-[80px] lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h3 className="font-Pangram-Bold text-[28px] md:text-[36px] text-[#161616] mb-4">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#454545] font-Pangram-Regular mb-8 max-w-[600px] mx-auto">
            Book a consultation with our expert team at Dental Opulence in Hall Green, Birmingham.
          </p>
          <Link
            href="https://book.do.co.uk/?utm_source=ig_bio&fbclid=PAZXh0bgNhZW0CMTEAAaeVB8Sg96VedwGan1nAVtPXXdiTJ1C6s8Agqjqu-pgpjvvyvcDoCICiCE6sLg_aem_oT_dmApmZVEyFHD25KvFLQ"
            target="_blank"
            className="inline-block py-4 px-8 rounded-[32px] bg-[#100E10] text-white font-Pangram-Medium text-base hover:bg-[#2D2D2D] transition-colors duration-300"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="w-full bg-white py-[60px] md:py-[80px] lg:px-[100px] sm:px-[40px] px-[20px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-Pangram-Bold text-[28px] md:text-[36px] text-[#161616] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`} className="w-full group cursor-pointer bg-white border border-[#E8E8E8] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <img
                        src={typeof relatedPost.image === 'string' ? relatedPost.image : relatedPost.image.src}
                        alt={relatedPost.title}
                        title={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[18px] font-Pangram-Bold text-[#161616] leading-6 mb-2 group-hover:text-[#100E10] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[14px] text-[#8A8A8A] font-Pangram-Regular">
                        {relatedPost.readTime}
                      </p>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .blog-content h2 {
          font-family: 'Pangram-Bold', sans-serif;
          font-size: 28px;
          color: #161616;
          margin-top: 32px;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .blog-content h3 {
          font-family: 'Pangram-Bold', sans-serif;
          font-size: 22px;
          color: #161616;
          margin-top: 24px;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .blog-content p {
          margin-bottom: 20px;
        }

        .blog-content ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        .blog-content li {
          margin-bottom: 12px;
          list-style-type: disc;
        }

        .blog-content strong {
          font-family: 'Pangram-Bold', sans-serif;
          color: #161616;
        }

        .blog-content a {
          color: #100E10;
          text-decoration: underline;
        }

        .blog-content a:hover {
          color: #2D2D2D;
        }
      `}</style>

      <Footer />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};
