import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip/Brotli asset compression
  compress: true,

  // Remove X-Powered-By header (saves bytes + security best practice)
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    // deviceSizes used when `sizes` is provided on an <Image fill /> or responsive image
    deviceSizes: [
      640,   // Standard mobile landscape / small tablet
      750,   // iPhone standard @2x (~375px)
      828,   // iPhone Plus/Max @2x (~414px)
      1080,  // Standard HD / common mobile screen @3x (~360px)
      1200,  // Small desktop / large tablet
      1350,  // High-DPR mobile threshold: covers 412px-430px @3x (1236px-1290px)
      1600,  // Intermediate desktop / laptop
      1920,  // Full HD desktop
    ],

    // imageSizes used for smaller, fixed-size icons and avatars
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },
};

export default nextConfig;
