import Footer from "@/components/footer";
import NavBar from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";


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
        <h1 className="mx-14  block mt-6 text-sm text-white">Number of characters</h1>
        <div className="flex items-center mx-14 mt-4">
            <Slider min={4} max={40} />
        </div>
        <div className="flex items-center gap-8 mx-14 mt-4">
            <div className="flex items-center gap-2">
                <input className="accent-[#a333ff] cursor-pointer rounded-md h-4 w-4" type="checkbox" />
                <label className="text-white">A-Z</label>
            </div>
            <div className="flex items-center gap-2">
                <input className="accent-[#a333ff] cursor-pointer rounded-md h-4 w-4" type="checkbox" />
                <label className="text-white">0-9</label>
            </div>
            <div className="flex items-center gap-2">
                <input className="accent-[#a333ff] cursor-pointer rounded-md h-4 w-4" type="checkbox" />
                <label className="text-white">a-z</label>
            </div>
            <div className="flex items-center gap-2">
                <input className="accent-[#a333ff] cursor-pointer rounded-md h-4 w-4" type="checkbox" />
                <label className="text-white">!@#$%^&*</label>
            </div>
        </div>
        <div className="flex items-center mx-14 mt-8">
            <Button variant="toolsBtn" className="gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>Generate</Button>
        </div>
        <Footer />
        </>
    )
}