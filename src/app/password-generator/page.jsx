import Footer from "@/components/footer";
import NavBar from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function PasswordGenerator() {
    return (
        <>
        <NavBar />
        <h1 className="text-white text-6xl text-left ml-14 mt-40 font-extrabold">Password Generator</h1>
        <div className="flex items-center gap-4 mx-14 mt-4">
            <Input type="text" readOnly />
            <Button variant="toolsBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </Button>
        </div>
        <Footer />
        </>
    )
}