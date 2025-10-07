import React from "react";
import Link from "next/link";
import { blogPosts } from "../../../constants";
import BlogCard from "../molecule/BlogCard";

const HomeBlogSection = () => {
  return (
    <div className="w-full bg-[#F5F5F5] py-[80px] md:py-[120px]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 lg:px-[100px] sm:px-[40px] px-[20px]">
          <div>
            <h2 className="font-Pangram-Bold text-[32px] sm:text-[40px] md:text-[48px] text-[#161616] leading-[40px] sm:leading-[48px] md:leading-[56px]">
              Latest from Our Blog
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#454545] font-Pangram-Regular mt-4 max-w-[600px]">
              Stay informed with expert dental advice, treatment guides, and the latest news from Dental Opulence.
            </p>
          </div>
          <Link
            href="/blog"
            className="py-3 px-6 rounded-[32px] bg-[#100E10] text-white font-Pangram-Medium text-base hover:bg-[#2D2D2D] transition-colors duration-300 mt-6 md:mt-0 w-fit"
          >
            View All Posts
          </Link>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar-mobile lg:px-[100px] sm:px-[40px] px-[20px]">
            <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
              {blogPosts.map((post, index) => (
                <div key={index} className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0">
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #100E10 #E8E8E8;
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #E8E8E8;
          border-radius: 10px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #100E10;
          border-radius: 10px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #2D2D2D;
        }

        @media (max-width: 768px) {
          .hide-scrollbar-mobile::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar-mobile {
            scrollbar-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBlogSection;
