import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

import rehypeHighlightLines from "rehype-highlight-code-lines";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight, rehypeHighlightLines],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
