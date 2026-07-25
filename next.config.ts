import type { NextConfig } from "next";

// Su GitHub Pages il sito vive sotto /DrRobDemo, su Vercel sotto la root.
// BASE_PATH viene impostato dal workflow di deploy.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // export statico: niente image optimizer a runtime, le varianti
    // responsive sono pre-generate da tools/fetch-images.mjs
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
