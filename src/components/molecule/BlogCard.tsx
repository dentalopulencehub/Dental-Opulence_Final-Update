import React from "react";
import Link from "next/link";
import { BlogPostType } from "../../../types";

const BlogCard = ({ slug, title, image, date, category, readTime }: BlogPostType) => {
  // Check if image is a string (URL) or imported image object
  const imageSrc = typeof image === 'string' ? image : image.src;

  return (
    <Link href={`/blog/${slug}`} className="w-full group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block">
      <div className="relative w-full h-[320px] md:h-[380px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          title={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-Pangram-Medium text-[#100E10] bg-[#F5F5F5] px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-[#8A8A8A] font-Pangram-Regular">
            {readTime}
          </span>
        </div>
        <h3 className="text-[20px] md:text-[24px] font-Pangram-Bold text-[#161616] leading-7 md:leading-8 mb-3 group-hover:text-[#100E10] transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
          <p className="text-sm text-[#8A8A8A] font-Pangram-Regular">
            Dr Ali
          </p>
          <p className="text-sm text-[#8A8A8A] font-Pangram-Regular">
            {new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
