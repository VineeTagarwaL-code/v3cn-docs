import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "v3cn.vineet.pro",
        port: "",
        pathname: "**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/r/:path',
        destination: '/r/:path.json',
      },
    ];
  },
};
export default nextConfig;