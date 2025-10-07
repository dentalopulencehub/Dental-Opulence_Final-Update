import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout, Navbar, Footer } from "../../components/import";
import { blogPosts } from "../../../constants";
import { BlogPostType } from "../../../types";

interface BlogPostPageProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostPageProps) {
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
      </Head>
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

          {/* Author */}
          <p className="text-base text-[#8A8A8A] font-Pangram-Regular mb-8">
            By Dr Ali
          </p>

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
        <div className="max-w-[800px] mx-auto">
          <div
            className="blog-content font-Pangram-Regular text-[17px] md:text-[18px] text-[#454545] leading-[28px] md:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
            href="https://book.do.co.uk/"
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
                <Link key={index} href={`/blog/${relatedPost.slug}`}>
                  <div className="w-full group cursor-pointer bg-white border border-[#E8E8E8] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
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
