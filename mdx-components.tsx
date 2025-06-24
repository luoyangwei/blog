import type { MDXComponents } from 'mdx/types'
import { Pre } from '@/components/mdx/pre-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        // 当 MDX 遇到一个代码块（它会生成一个 <pre> 标签）时，
        // 使用我们自定义的 Pre 组件来渲染它。
        pre: Pre,
    }
}