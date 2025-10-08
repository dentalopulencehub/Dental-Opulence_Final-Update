import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout, Navbar, Footer } from "../../components/import";
import { blogPosts } from "../../../constants";

export default function Blog() {
  console.log('Blog posts count:', blogPosts.length);
  console.log('First blog post:', blogPosts[0]?.title);

  return (
    <Layout>
      <Head>
        <title>Dental Blog | Expert Advice & Tips | Dental Opulence Hall Green</title>
        <meta
          name="description"
          content="Read the latest dental health advice, cosmetic dentistry tips, and treatment guides from the expert team at Dental Opulence in Hall Green, Birmingham."
        />
        <meta name="keywords" content="Dental blog, Dental advice Hall Green, Cosmetic dentistry tips, Teeth whitening guide, Invisalign information" />
        <link rel="canonical" href="https://www.do.co.uk/blog" />
        <meta property="og:title" content="Dental Blog | Expert Advice & Tips | Dental Opulence Hall Green" />
        <meta property="og:description" content="Read the latest dental health advice, cosmetic dentistry tips, and treatment guides from the expert team at Dental Opulence in Hall Green, Birmingham." />
        <meta property="og:url" content="https://www.do.co.uk/blog" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#100E10] pt-[180px] md:pt-[220px] pb-[60px] md:pb-[80px] w-full lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-Pangram-Bold text-[44px] sm:text-[56px] md:text-[64px] text-white leading-[52px] sm:leading-[64px] md:leading-[76px]">
            Dental Insights & Tips
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] leading-7 md:leading-8 text-[#A2A2A2] max-w-[700px]">
            Expert advice from our Hall Green practice to help you achieve and maintain your best smile.
          </p>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="w-full bg-white py-[60px] md:py-[80px] lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => {
              const imageSrc = typeof post.image === 'string' ? post.image : post.image.src;
              return (
                <Link key={index} href={`/blog/${post.slug}`} className="group cursor-pointer bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
                    <div className="relative w-full md:w-[400px] h-[240px] md:h-[280px] flex-shrink-0 overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={post.title}
                        title={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-Pangram-Medium text-[#100E10] bg-[#F5F5F5] px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-[#8A8A8A] font-Pangram-Regular">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-[24px] md:text-[28px] font-Pangram-Bold text-[#161616] leading-8 md:leading-9 mb-3 group-hover:text-[#100E10] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-[15px] md:text-[16px] text-[#454545] font-Pangram-Regular leading-6 mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                        <p className="text-sm text-[#8A8A8A] font-Pangram-Regular">
                          By Dr Ali
                        </p>
                        <p className="text-sm text-[#8A8A8A] font-Pangram-Regular">
                          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
