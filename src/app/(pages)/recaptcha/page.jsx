import HeaderLogo from "@/components/HeaderLogo"
import Image from "next/image"
import emailicon from "../../../../public/logos/email-icon.svg";
import emailbox from "../../../../public/logos/iconamoon_email-light.png";
import captchaShow from "../../../../public/logos/captchaShow.png";
import recaptcha from "../../../../public/logos/recaptcha.png";
const Recaptcha = () => {
  return (
    <>
      <div className="md:grid grid-cols-2 w-full h-screen relative bg-black scroll-py-32"> 
    <HeaderLogo/>
     <div className="  absolute left-0 top-24 md:top-0 -bottom-0 md:w-1/2 w-full  min-h-full ">
   
     <div className="lg:px-28 px-10 flex flex-col justify-center h-full  bg-black ">
   <div  className="md:hidden block">
   <div className="flex justify-center items-center ">
   <Image src={recaptcha} alt="logo" className="w-[25%]"/>
   </div>
      </div >
        <div className="z-10 flex flex-col md:gap-y-5 gap-y-2 md:mt-10 mt-2 ">
        <h1 className="text-white md:text-3xl text-2xl ">Verify</h1>
            <p className="text-white md:text-lg w-[85%] text-md" >Enter your email or phone number to be used in case of a forgotten password</p>
            <div className="mt-1 relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Email"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative  ">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                        <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center ">
                    <div className="w-[10%] border-t border-gray-300"></div>
                    <span className="px-3 bg-transparent text-gray-100">
                   CAPTCHA
                    </span>
                    <div className="w-[70%] border-t border-gray-300 ml-auto"></div>
                  </div>
                 
                </div>
           <div className="mt-2">
           <Image src={captchaShow} className="w-[90%]"/>
            <p className="text-sm text-white w-2/3 md:my-2 my-1">What code is in the image?</p>
            <input type="text" className="border my-3 md:w-2/3 w-full bg-transparent rounded-lg text-white text-lg" />
            <p className="text-sm text-white md:w-2/3 md:mt-2 mt-1 w-full">Enter the characters(without spaces) shown in the images.</p>
           </div>
        </div>
        </div>
        </div>
        <div className="bg-[#17102f]  md:block hidden">
      <div className="flex justify-center items-center h-full">
      <Image src={recaptcha} alt="logo" className="w-[40%]"/>
      </div>
        </div>
     
       </div>
    </>
  )
}

export default Recaptcha
