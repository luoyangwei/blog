// components/pre-block.tsx
'use client'

import { useState, isValidElement, type ComponentProps } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// 选择一个你喜欢的主题，例如 oneDark
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

// 这个组件现在是通过 mdx-components.tsx 接收 <pre> 标签的 props
export function Pre(props: ComponentProps<'pre'>) {
    // --- 数据提取 ---
    // MDX 的默认输出是 <pre><code className="language-js" title="some-title">...</code></pre>
    // 所以，我们需要从 children (也就是 <code> 元素) 中提取信息
    const codeElement = props.children;

    // 做一个安全检查，确保 children 是一个有效的 React 元素
    if (!isValidElement(codeElement) || !(codeElement.props as any)?.className) {
        // 如果结构不符合预期，直接渲染原始的 <pre> 以免报错
        return <pre {...props} />;
    }

    const codeElementProps = codeElement.props as { className?: string; children?: any; title?: string }
    const language = codeElementProps.className?.replace('language-', '') ?? 'plaintext'
    const code = String(codeElementProps.children).trim()
    const title = codeElementProps.title

    // --- 状态和事件处理 ---
    const [hasCopied, setHasCopied] = useState(false)

    const onCopy = () => {
        navigator.clipboard.writeText(code)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    // --- 渲染逻辑 ---
    return (
        <div className="relative my-6 rounded-lg border bg-zinc-950 text-sm group">
            {/* 标题栏 */}
            {title && (
                <div className="flex items-center justify-between rounded-t-lg border-b border-zinc-800 bg-zinc-900 px-4 py-2">
                    <p className="text-xs font-semibold text-zinc-300">{title}</p>
                    {language && (
                        <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
                            {language}
                        </span>
                    )}
                </div>
            )}

            {/* 复制按钮 */}
            <Button
                onClick={onCopy}
                variant="ghost"
                size="icon"
                className="absolute right-2 h-7 w-7 text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-800 hover:text-zinc-100 group-hover:opacity-100"
                style={{ top: title ? '2.8rem' : '0.5rem' }}
            >
                {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy code</span>
            </Button>

            {/* 语法高亮组件 */}
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                // 自定义样式以覆盖默认值，更好地与 Tailwind/Shadcn 集成
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    backgroundColor: 'transparent',
                    borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
                }}
                codeTagProps={{
                    style: {
                        fontFamily: 'var(--font-mono)', // 使用 Tailwind CSS 变量
                        fontSize: '0.875rem',
                    },
                }}
                showLineNumbers={false} // 你可以根据需要开启行号
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}