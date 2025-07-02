import { MapLink } from "@/components/mdx/map-links"
import { PageTitle } from "@/components/mdx/page-title"
import { PageView } from "@/components/page-view"
import Golang from "@/content/golang/main.mdx"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Golang (Go)',
    authors: [{ name: "Luoyangwei", url: "https://luoyangwei.com" }],
    keywords: ['Golang', 'Go', 'golang', 'go', 'Go语言', 'Go语言博客', 'Go语言学习', 'Go语言总结', 'Go语言实践'],
    description: 'Go 是一个开源的编程语言, 它能让构造简单、可靠且高效的软件变得容易。Go是从2007年末由Robert Griesemer, Rob Pike, Ken Thompson主持开发, 后来还加入了Ian Lance Taylor, Russ Cox等人, 并最终于2009年11月开源, 在2012年早些时候发布了Go 1稳定版本。现在Go的开发已经是完全开放的, 并且拥有一个活跃的社区。'
}

const mapLinks = [
    {
        title: 'Go 语言环境安装',
        description: 'Go 语言环境安装',
        link: '/blog/posts/golang/install'
    }
]

export default function GolangPage() {
    return (
        <PageView
            {...metadata}
            releaseTime="2025-07-01"
            mapLinks={mapLinks}>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <Golang />
            </div>
        </PageView>
    )
}