import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/itinerary-stays", destination: "/itinerary" },
      { source: "/en/itinerary-stays", destination: "/itinerary" },
      { source: "/en/itinerary", destination: "/itinerary" },
    ];
  },
};

export default nextConfig;
