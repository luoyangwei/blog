// next.config.mjs

import nextMDX from '@next/mdx';
// 移除所有 rehype-pretty-code 相关的 import 和配置
// import rehypePrettyCode from 'rehype-pretty-code';
// import { readFileSync } from 'fs';
// import { join } from 'path';

// ... 其他插件，比如 rehypeSlug 和 rehypeAutolinkHeadings 仍然可以保留
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... 你的 Next.js 配置
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      // 只保留这些结构性插件
      rehypeSlug,
      rehypeAutolinkHeadings,
      // 彻底移除 [rehypePrettyCode, prettyCodeOptions] 这一项
    ],
  },
});

export default withMDX(nextConfig);