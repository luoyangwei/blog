// next.config.mjs

import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'; // 👈 推荐一并添加

// 修正点 1: 使用 Node.js 内置模块稳定地读取 JSON 文件
import { readFileSync } from 'fs';
import { join } from 'path';

// 读取并解析你的自定义主题
const themePath = join(process.cwd(), 'assets', 'moonlight-ii.json');
const moonlightTheme = JSON.parse(readFileSync(themePath, 'utf-8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 建议将 'output: export' 暂时注释，除非你明确需要纯静态导出。
  // 它会禁用很多 Next.js 的服务端功能，可能会引起其他问题。
  // output: 'export', 
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  experimental: {
    mdxRs: true, // 确保这个选项存在，以使用 Rust 版本的 MDX 编译器
  },
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: moonlightTheme, // 👈 使用我们手动加载的主题
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
};

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    // 修正点 2: 调整插件顺序并添加 autolink-headings
    rehypePlugins: [
      rehypeSlug, // 首先为标题生成 id
      [
        rehypeAutolinkHeadings, // 然后根据 id 添加锚点链接
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      [rehypePrettyCode, prettyCodeOptions], // 最后处理代码块高亮
    ],
  },
});

// 修正点 3: 使用更直观、更简洁的方式导出配置
export default withMDX(nextConfig);