import Link from "next/link";
import { MainNavItem, Header } from "./components.client";

export default function SiteHeader() {
    return (
        <>
        <Header className="container z-40 top-0 sticky flex h-20 items-center justify-between py-6 w-full transition-[height]">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="items-center gap-1 flex group">
                        {/* <EmailThing /> */}
                    </Link>
                    <div className="flex gap-6">
                        <MainNavItem href="/" title="Features" />
                        <MainNavItem href="/" title="Pricing" mobileShow />
                        <MainNavItem href="/" title="Documentation" />
                    </div>
                </div>
            </Header>
            </>
    )
}