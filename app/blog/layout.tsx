import NavigatorView from "@/components/navigator-view";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background w-[1200px] mx-auto">
            <NavigatorView />
            {children}
        </div>
    )
}