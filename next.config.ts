import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Le immagini sono già ritagliate e dimensionate in public/media (vedi MANIFEST.md).
    // Il loader custom mappa la larghezza richiesta sulla variante nativa più vicina:
    // è l'unico modo di avere srcset reali con `output: "export"` senza upscalare nulla.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1280, 1500, 1920, 3200],
    imageSizes: [300, 400, 480, 640, 800, 960],
  },
};

export default nextConfig;
