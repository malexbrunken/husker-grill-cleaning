import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/f69kw8ao/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/schedule-2",
        destination: "/schedule",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
