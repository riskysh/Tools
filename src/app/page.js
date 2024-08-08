;import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-white text-center text-7xl font-extrabold mt-44">A collection of the<br></br>
      best <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-[#b912b1] to-[#2926c9]"> tools</span>. Just for you</h1>
      <p className="text-gray-400 text-center text-xl font-bold mt-3">
      Cool tools is a collection of online tools in you daily without even signing up</p>
      <div className="mt-4 flex w-full items-center justify-center gap-4">
        <Button size='lg'>Get Started</Button>
        <Button variant='outline' size='lg'>Github</Button>
      </div>
    </main>
  );
}
