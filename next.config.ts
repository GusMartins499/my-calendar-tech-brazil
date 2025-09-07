import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true
  },
  output: 'standalone'
};

export default nextConfig;
