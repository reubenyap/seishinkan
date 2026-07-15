import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The site ships its own local image assets. Serving them directly keeps
    // the Cloudflare Worker independent of an external image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
