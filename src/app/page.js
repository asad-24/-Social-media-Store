import BootingPage from "@/pages/bootingPage/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <h1>Main page.js</h1> */}
     <BootingPage/>
    </main>
  );
}
