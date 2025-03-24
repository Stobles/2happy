import { env } from "@/config/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [];
  },

  async rewrites() {
    const rewrites = [
      {
        source: "/api/:path*",
        destination: `${env.API_URL}/:path*`,
      },
    ];

    return {
      beforeFiles: rewrites,
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
