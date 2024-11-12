import type { NextConfig } from "next";

import createMDX from "@next/mdx";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
