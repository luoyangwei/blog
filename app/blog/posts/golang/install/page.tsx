import { PageTitle } from "@/components/mdx/page-title"
import type { Metadata } from "next"
import GolangInstall from "@/content/golang/install.mdx"
import { PageView } from "@/components/page-view"

export const metadata: Metadata = {
    title: 'Golang 安装',
    authors: [{ name: "Luoyangwei", url: "https://luoyangwei.com" }],
    keywords: ['Golang', 'Go', 'golang', 'go', 'Go语言', 'Go语言博客', 'Go语言学习', 'Go语言总结', 'Go语言实践'],
    description: 'Golang 支持 Windows、Linux、Mac 等操作系统, 并且支持跨平台编译, 因此我们可以根据不同的操作系统选择不同的安装方式。'
}

export default function GolangInstallPage() {
    return (
        <>
            <PageView {...metadata} releaseTime="2025-07-01">
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <GolangInstall />
                </div>
            </PageView>
        </>
    )
}