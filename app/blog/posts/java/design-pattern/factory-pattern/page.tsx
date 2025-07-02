import { PageTitle } from "@/components/mdx/page-title"
import { PageView } from "@/components/page-view"
import FactoryPattern from "@/content/java/design-pattern/factory-pattern.mdx"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: '工厂模式 (Factory Pattern) - 设计模式',
    description: '工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一，它提供了一种创建对象的方式，使得创建对象的过程与使用对象的过程分离。',
    authors: [{ name: "Luoyangwei", url: "https://luoyangwei.com" }],
    keywords: ['工厂模式', 'Factory Pattern', 'Java', '设计模式', '设计模式实践', '面向对象', '设计模式学习', '设计模式总结', '设计模式博客'],
    openGraph: {
        title: '工厂模式',
        description: '工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一，它提供了一种创建对象的方式，使得创建对象的过程与使用对象的过程分离。',
    }
}

export default function FactoryPatternPage() {
    return (
        <PageView {...metadata} releaseTime="2025-06-24">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <FactoryPattern />
            </div>
        </PageView>
    )
}