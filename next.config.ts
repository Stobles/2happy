import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/main", // Перенаправление на /main
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
