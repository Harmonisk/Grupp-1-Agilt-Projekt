import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
	domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
  },
}