export default function AnchorListView({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="fixed top-0 left-0 w-[200px] h-full bg-amber-100">
            </div>
        </>
        // <div className="flex items-start justify-between gap-2 size-full py-4">
        // {/* <div className="w-[200px] h-full bg-amber-100 sticky top-0"></div>
        // <div className="flex flex-col">
        //     {children}
        // </div>
        // <div className="w-[200px] h-full bg-amber-100 sticky top-0">
        // </div> */}
        // </div>
    )
}