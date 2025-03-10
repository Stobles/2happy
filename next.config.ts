import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [];
  },
};

export default nextConfig;
