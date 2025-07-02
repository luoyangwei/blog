import type { Metadata } from "next";
import { PageTitle, PageUserInfo } from "./mdx/page-title";
import { MapLink, MapLinks } from "./mdx/map-links";

export interface PageViewProps extends Metadata {
    userInfo?: PageUserInfo;
    children: React.ReactNode;
    releaseTime: string;
    mapLinks?: MapLink[];
}

export function PageView({ children, description, releaseTime, title, mapLinks, userInfo }: PageViewProps) {
    return (
        <>
            <PageTitle
                title={`${title}`}
                description={description ?? ""}
                releaseTime={releaseTime}
            />

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                {children}
            </div>

            <MapLinks links={mapLinks} />
        </>
    )
}