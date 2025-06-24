import AnchorListView from "@/components/anchor-list-view";
import NavigatorView from "@/components/navigator-view";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background w-full">
            <NavigatorView />
            <div className="flex items-start justify-between w-full">
                <div className="w-[300px] h-full fixed top-0 bottom-0 left-0"></div>
                <div className="h-fit flex-1">
                    {children}                    
                </div>
                <div className="w-[300px] h-full fixed top-0 bottom-0 right-0"></div>
            </div>
        </div>
    )
}