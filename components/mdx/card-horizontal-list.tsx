import { ArrowRightIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import Link from "next/link"

export function CardHorizontalList({ children }: { children: React.ReactNode[] }) {
    return (
        <div className="grid grid-cols-3 w-full gap-6 items-center justify-center my-6">
            {children.map((child, index) => (
                <div key={index} className="w-full h-full rounded-lg shadow-md">
                    {child}
                </div>
            ))}
        </div>
    )
}

export function CardHorizontalListItem({ title, description, content, link }: { title: string, description: string, content: string, link?: string }) {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
                <CardAction>
                    <Button asChild>
                        <Link href={link ?? "#"} target="_blank">
                            Link <ArrowRightIcon />
                        </Link>
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    )
}
