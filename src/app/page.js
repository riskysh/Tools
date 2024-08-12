import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import NavBar from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
      <h1 className="text-white text-center text-7xl font-extrabold mt-44">A collection of the<br></br>
      best tools. Just for you</h1>
      <p className="text-gray-400 text-center text-xl font-bold mt-3">
      Cool tools is a collection of online tools you  can use without even signing up</p>
      <div className="mt-4 flex w-full items-center justify-center gap-4">
        <Link href="#tools"><Button variant='toolsBtn' size='lg'>Get Started</Button></Link>
        <Link href="https://github.com/riskysh/Tools"><Button variant='toolsBtnOutline' size='lg'><GitHubLogoIcon className="mr-2" />Github</Button></Link>
      </div>
      </div>
      <div className="">
        <h1 id="tools" className="text-white text-center text-6xl font-extrabold mt-48">Cool Tools</h1>
        <p className="text-gray-400 text-center text-1xl font-semibold mt-3">This project has a lot of tools that will help you</p>
        <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-3 sm:grid-cols-2 mt-10">

        <div className="relative overflow-hidden rounded-lg border border-[#27272a] p-2 text-left">
          <div className="flex h-44 flex-col justify-between rounded-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-white ">Password Generator</h3>
                <p className="text-gray-400">Generate complex password in just minutes</p>
              </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#27272a] p-2 text-left">
          <div className="flex h-44 flex-col justify-between rounded-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-white ">Write Notes</h3>
                <p className="text-gray-400">Write and retrive your notes efficiently using write notes</p>
              </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#27272a] p-2 text-left">
          <div className="flex h-44 flex-col justify-between rounded-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-check"><path d="M11 18H3"/><path d="m15 18 2 2 4-4"/><path d="M16 12H3"/><path d="M16 6H3"/></svg>
              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-white ">Todo List</h3>
                <p className="text-gray-400">Manage your task and todos using a comprehensive todo list</p>
              </div>
          </div>
        </div>

        </div>
      </div>
      <div className="">
        <h1 className="text-white text-center text-6xl font-extrabold mt-28">Open Source</h1>
        <p className="text-gray-400 text-center font-semibold text-1xl mt-3">Cool Projects is a open source project and it supports open source projects<br></br>
        The code is available on <a href="https://github.com/riskysh/Tools" className="text-[#a333ff] underline underline-offset-4">Github</a></p>
      </div>

      <Footer className="mt-96" />
      
      </>
  );
}
