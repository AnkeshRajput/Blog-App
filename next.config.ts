import type { NextConfig } from "next";

// Extend NextConfig locally to include serverActions for TypeScript
type NextConfigWithServerActions = NextConfig & {
  serverActions?: {
    bodySizeLimit?: number | string;
  };
};

const nextConfig: NextConfigWithServerActions = {
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
  // Increase Server Actions body size limit from default 1 MB to 4 MB
  serverActions: {
    bodySizeLimit: 10 * 1024 * 1024, // 10 MB
  },
};

export default nextConfig;
