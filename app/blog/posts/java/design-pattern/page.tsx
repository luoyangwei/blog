import { PageTitle } from "@/components/mdx/page-title"
import DesignPattern from "@/content/java/design-pattern/main.mdx"

export default function DesignPatternPage() {
    return (
        <>
            <PageTitle
                title="设计模式"
                description={`
        设计模式(Design pattern)代表了最佳的实践, 通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。
    `}
                releaseTime="2025-06-24"
            />
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <DesignPattern />
            </div>
        </>
    )
}