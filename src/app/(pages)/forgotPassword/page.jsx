'use client';

import { useState } from 'react';
import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";
import emailicon from "../../../../public/logos/email-icon.svg";
import emailbox from "../../../../public/logos/iconamoon_email-light.png";
import textIcon from "../../../../public/logos/textIcon.png";
import forgotPassword from "../../../../public/logos/forgotpassword.png";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleForgotClick = (e) => {
    e.preventDefault();
    if (selectedMethod==='phone') {
      // Proceed based on the selected method
      // console.log("Selected Method:", selectedMethod);
      // You can pass the selected method to the next page via router.push or use it directly here
      router.push("/verifyPhoneNumber"); // Adjust this route as needed
    } 
    
    else if (selectedMethod==='email') {
      // Proceed based on the selected method
      // console.log("Selected Method:", selectedMethod);
      // You can pass the selected method to the next page via router.push or use it directly here
      router.push("/emailVerification"); // Adjust this route as needed
    } 
    
    else {
      alert("Please select a method to reset your password.");
    }
  };

  return (
    <>
      <div className="md:grid grid-cols-2 w-full h-screen relative bg-black"> 
        <HeaderLogo/>
        <div className="absolute left-0 top-24 md:top-0 -bottom-0 md:w-1/2 w-full min-h-full ">
          <div className="lg:px-28 px-10 flex flex-col justify-center h-full bg-black">
            <div className="md:hidden block">
              <div className="flex justify-center items-center">
                <Image src={forgotPassword} alt="logo" className="w-[65%]"/>
              </div>
            </div>
            <div className="z-10">
              <h1 className="text-white text-3xl my-6">Forgot Password</h1>
              <p className="text-white text-md w-[80%]">Select Which Contact Details Should we use to reset password</p>
              <div 
                className={`flex items-center border gap-x-6 p-3 rounded-3xl my-6 cursor-pointer ${selectedMethod === 'email' ? 'border-indigo-600' : ''}`}
                onClick={() => handleSelection('email')}
              >
                <div className="relative">
                  <Image src={emailicon} alt="email icon" width={40} height={40} />
                  <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div>
                  <p className="text-white">Via Email</p>
                  <p className="text-white">ex********le@gmail.com</p>
                </div>
              </div>
              <div 
                className={`flex items-center border gap-x-6 p-3 rounded-3xl my-6 cursor-pointer ${selectedMethod === 'phone' ? 'border-indigo-600' : ''}`}
                onClick={() => handleSelection('phone')}
              >
                <div className="relative">
                  <Image src={emailicon} alt="email icon" width={40} height={40} />
                  <Image src={textIcon} alt="phone icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div>
                  <p className="text-white">Via Number</p>
                  <p className="text-white">+6282*******39</p>
                </div>
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleForgotClick}
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#17102f] md:block hidden">
          <div className="flex justify-center items-center h-full">
            <Image src={forgotPassword} alt="logo" className="w-[70%]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
