'use client'
import Image from "next/image"
import blackBox from "../../../../public/logos/blackBox.png"
import handfill from "../../../../public/logos/ph_hand-fill.png"
import HeaderLogo from "@/components/HeaderLogo"
import { useRouter } from "next/navigation"
const AgeVerification = () => {
  const router = useRouter();

  const handleAgeVerificationClick = (e) => {
    e.preventDefault();
    router.push("/recaptcha"); // Change to your terms and conditions page route
  };
  const handleAgeClickDisagree = (e) => {
    e.preventDefault();
    router.push("/"); // Change to your terms and conditions page route
  };
  return (
    <>
    
    <div className="min-h-screen min-w-full bg-black relative">
    <HeaderLogo/>
    <div className="absolute inset-0 flex items-center justify-center flex-col">
    <div className="relative flex items-center ">

    <Image src={blackBox} alt="logo" width={450} />
<div className="absolute inset-0 flex items-center flex-col px-12" >
<Image src={handfill} alt="logo" className="w-[25%]"/>
<p className="text-white text-center text-sm md:text-lg">
Please verify that you are 18 years of age or older to enter this app.
</p>
<div className="flex items-center md:my-5 my-4">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded bg-transparent" required />
                        <label htmlFor="remember_me" className="ml-2 block md:text-xl text-md text-gray-100">
                        I am at least 18 years old.
                        </label>
                      </div>
                      <div className="w-2/3">
                      <button
                        type="submit"
                        // onClick={handleAgreeClick}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
                     onClick={handleAgeVerificationClick}
                     >
                        Verify
                      </button>
                    </div>
              <div className="w-2/3">
                      <button
                        type="submit"
                        // onClick={handleCancelClick}
                        className="group relative w-full flex justify-center py-3 px-4 border border-indigo-700 text-sm font-medium rounded-md text-white bg-transparant hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                        onClick={handleAgeClickDisagree}
                     >
                        Disagree
                      </button>
                    </div>
</div>
      </div>
   
        </div>
    </div>
    

    </>
  )
}

export default AgeVerification
