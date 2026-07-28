import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? "/DrRobDemo" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    // Le immagini sono già ritagliate e dimensionate in public/media (vedi MANIFEST.md).
    // Il loader custom mappa la larghezza richiesta sulla variante nativa più vicina.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1280, 1500, 1920, 3200],
    imageSizes: [300, 400, 480, 640, 800, 960],
  },
};

export default nextConfig;
