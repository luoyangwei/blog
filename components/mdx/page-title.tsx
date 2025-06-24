import Image from "next/image";

export interface PageTitleProps {
    title: string;
    description: string;
    releaseTime: string;
    userInfo?: PageUserInfo;
}

export interface PageUserInfo {
    avatar: string;
    name: string;
    description?: string;
}

export function PageTitle({ title, description, releaseTime, userInfo }: PageTitleProps) {
    return (
        <div className="flex flex-col gap-10 pt-18 pb-10 tracking-tight">
            <p className="text-muted-foreground text-center">{releaseTime}</p>
            <h1>{title}</h1>
            <p className="text-muted-foreground text-center">{description}</p>
            {userInfo && (
                <div className="flex items-center gap-4 justify-center py-4">
                    <Image className="rounded-full overflow-hidden" src={userInfo.avatar} alt={userInfo.name} width={32} height={32} />
                    <div>
                        <p>{userInfo.name}</p>
                        <p className="text-muted-foreground text-sm">{userInfo.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}