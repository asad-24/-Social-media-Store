'use client'

import HeaderLogo from "@/components/HeaderLogo"
import verificationLogo from "../../../../public/logos/verificationLogo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {
  
  const [secondsLeft, setSecondsLeft] = useState(59);
  const [showResendLink, setShowResendLink] = useState(false);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clear the timer on cleanup
    } else {
      setShowResendLink(true); // Show the resend link when the countdown is over
    }
  }, [secondsLeft]);
const router =useRouter();
  const GoToNewPassword=(e)=>{
    e.preventDefault();
router.push('/CreateNewPassword')
  }

  return (
    <>
    <div className="md:grid grid-cols-2 w-full h-screen relative bg-black"> 
    <HeaderLogo/>
     <div className="  absolute left-0 top-24 md:top-0 -bottom-0 md:w-1/2 w-full  min-h-full ">
   
     <div className="lg:px-28 px-10 flex flex-col justify-center h-full  bg-black ">
   <div  className="md:hidden block">
   <div className="flex justify-center items-center ">
   <Image src={verificationLogo} alt="logo" className="w-[45%]"/>
   </div>
   </div>
       <div className="z-10">
       <h1 className="text-white text-3xl my-6">Verify </h1>
         <p className="text-white text-md w-[80%]" >Code has been send to your Email</p>
         <div className="my-5">
  <form action="" method="post">
    <div className="flex flex-col space-y-16">
      <div className="flex flex-row items-center justify-between">
        <div className="w-16 h-16">
          <input
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border  ring-blue-700 text-white text-2xl focus:ring-1 bg-transparent"
            type="text"
            maxLength="1"
            pattern="\d*"
            inputMode="numeric"
          />
        </div>
      
        <div className="w-16 h-16 ">
          <input
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border ring-blue-700 text-white text-2xl  focus:ring-1 bg-transparent"
            type="text"
            maxLength="1"
            pattern="\d*"
            inputMode="numeric"
          />
        </div>
        <div className="w-16 h-16">
          <input
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border  ring-blue-700 text-white text-2xl  focus:ring-1 bg-transparent"
            type="text"
            maxLength="1"
            pattern="\d*"
            inputMode="numeric"
          />
        </div>
        <div className="w-16 h-16">
          <input
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border  ring-blue-700 text-white text-2xl  focus:ring-1 bg-transparent"
            type="text"
            maxLength="1"
            pattern="\d*"
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={GoToNewPassword}
         
         >
            Verify Account
          </button>
        </div>

        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
      {showResendLink ? (
        <>
          <p>Didn't receive code?</p>
          <a className="flex flex-row items-center text-blue-600" href="#" rel="noopener noreferrer">
            Resend
          </a>
        </>
      ) : (
        <p>Resend code in {secondsLeft} seconds</p>
      )}
    </div>
      </div>
    </div>
  </form>
</div>
       </div>
      
         
     </div>
     </div>
     <div className="bg-[#17102f]  md:block hidden ">
   <div className="flex justify-center items-center h-full">
   <Image src={verificationLogo} alt="logo" className="w-[70%]"/>
   </div>
     </div>
  
    </div>
 </>
  
  )
}

export default VerifyEmail
