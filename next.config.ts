import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,         // Match karega sirf .svg files ko
      use: ["@svgr/webpack"], // SVG files ko React components banata hai
    });

    return config; // Config ko return karna zaroori hai
  },

};



export default nextConfig;
