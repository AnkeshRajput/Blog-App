import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "hearinghope.in",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Increase Server Actions body size limit (supports number or string like "10mb")
      bodySizeLimit: 10 * 1024 * 1024,
    },
  },
};

export default nextConfig;
