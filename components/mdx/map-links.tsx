import Link from "next/link";

export interface MapLinksProps {
    links?: MapLink[];
}

export interface MapLink {
    title: string;
    description: string;
    link: string;
}

export function MapLinks(props: MapLinksProps) {
    return (
        <div className="flex flex-col gap-4 py-20 px-2">
            {props.links?.map((link, index) => (
                <div key={index} className="flex items-center gap-2 group">
                    <div className="size-1 rounded-full bg-primary group-hover:bg-primary/80 transition-colors" />
                    <Link href={link.link} className="text-foreground group-hover:text-primary group-hover:underline">{link.title}</Link>
                </div>
            ))}
        </div>
    )
}
