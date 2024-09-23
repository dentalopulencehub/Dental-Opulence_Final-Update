/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true, // Optimize font loading
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
      ],
      // Optional: Set device sizes for images
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96],
    },
  },
};

withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  fileExtensions: ["webp", "ico", "svg", "png", "jpg", "jpeg", "gif", "webm", "mp4", "pdf"],
})





export default withPWAInit(nextConfig);

