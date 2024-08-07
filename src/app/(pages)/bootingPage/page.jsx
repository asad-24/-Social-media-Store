'use client'

import Image from "next/image"

import mainBG from "../../../../public/images/main-pic.png"
import mainLogo from "../../../../public/logos/unleashedesires-logo.svg"
import loader from "../../../../public/logos/loader.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
const BootingPage = () => {

  const router = useRouter();

 
  useEffect(() => {
    if (!router) return;

    const timer = setTimeout(() => {
      router.push("/loginPage"); // Change to your login page route
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [router]);
  return (
    <>
     <div className="relative w-full h-screen">
        <Image src={mainBG} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <Image src={mainLogo} alt="logo" />
          <Image src={loader} alt="logo" className="w-10 h-10 my-4 animate-spinOnce" />
        </div>
      </div>
    </>
  )
}

export default BootingPage
