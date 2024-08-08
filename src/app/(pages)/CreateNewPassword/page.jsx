'use client'
import HeaderLogo from "@/components/HeaderLogo"
import Image from "next/image"
import emailicon from "../../../../public/logos/email-icon.svg";
import password from "../../../../public/logos/password.png";
import newPassword from "../../../../public/logos/NewPassword.png";
import { useRouter } from "next/navigation";
const CreateNewPassword = () => {
  const router =useRouter()
  const setNewPasswordClick = (e) => {
    e.preventDefault();
    router.push("/loginPage"); // Change to your terms and conditions page route
  };
  return (
    <>
    <div className="md:grid grid-cols-2 w-full h-screen relative bg-black"> 
  <HeaderLogo/>
   <div className="  absolute left-0 top-10 md:top-0 -bottom-0 md:w-1/2 w-full  min-h-full ">
 
   <div className="lg:px-28 px-10 flex flex-col justify-center h-full  bg-black ">
 <div  className="md:hidden block">
 <div className="flex justify-center items-center ">
 <Image src={newPassword} alt="logo" className="w-[50%]"/>
 </div>
    </div >
      <div className="z-10">
      <h1 className="text-white md:text-3xl md:my-6 my-2 text-2xl">Create new Password</h1>
          <p className="text-white md:text-md text:lg w-[80%]" >Create your new Password</p>
         
          <form action="#" method="post">
  <div className="md:my-4 my-2 relative">
    <input
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      required
      className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
      placeholder="Password"
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <div className="relative flex items-center">
        <Image src={emailicon} alt="email icon" width={30} height={30} />
        <Image src={password} alt="password icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  </div>
  <div className="my-2 relative">
    <input
      id="Repeat-password"
      name="Repeat-password"
      type="password"
      autoComplete="current-password"
      required
      className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
      placeholder="Repeat Password"
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <div className="relative flex items-center">
        <Image src={emailicon} alt="email icon" width={30} height={30} />
        <Image src={password} alt="password icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  </div>

  <div className="md:my-6 my-3">
    <button
      type="submit"
      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    
    onClick={setNewPasswordClick}
    >
      Continue
    </button>
  </div>
</form>

      </div>
      </div>
      </div>
      <div className="bg-[#17102f]  md:block hidden">
    <div className="flex justify-center items-center h-full">
    <Image src={newPassword} alt="logo" className="w-[70%]"/>
    </div>
      </div>
   
     </div>
  </>
  )
}

export default CreateNewPassword
