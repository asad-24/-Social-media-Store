
'use client'
import HeaderLogo from "@/components/HeaderLogo"
import Image from "next/image"
import whitebox from "../../../../public/logos/created-account-logo.png"
import lockLogo from "../../../../public/logos/lock-logo.png"
import loader from "../../../../public/logos/loader.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const AccountCreated = () => {

  const router = useRouter();

 
  useEffect(() => {
    if (!router) return;

    const timer = setTimeout(() => {
      router.push("/accountVerification"); // Change to your login page route
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [router]);
  return (
    <>
    
    <div className="min-h-screen min-w-full bg-black relative">
    <HeaderLogo/>
    <div className="absolute inset-0 flex items-center justify-center flex-col">
    <div className="relative flex items-center ">

    <Image src={whitebox} alt="logo" width={400}/>
    <Image src={lockLogo} alt="logo" width={200} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Image src={loader} alt="logo" className="w-10 h-10 my-4 animate-spinOnce" />
        </div>
    </div>
    

    </>
  )
}

export default AccountCreated
