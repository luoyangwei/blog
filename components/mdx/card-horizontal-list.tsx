import { ArrowRightIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

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

export function CardHorizontalListItem({ title, description, content }: { title: string, description: string, content: string }) {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
                <CardAction>
                    <Button>Link <ArrowRightIcon /> </Button>
                </CardAction>
            </CardFooter>
        </Card>
    )
}
