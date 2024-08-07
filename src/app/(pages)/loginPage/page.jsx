"use client";

import { useState } from "react";
import Image from "next/image";
import mainLogo from "../../../../public/logos/unleashedesires-logo.svg";
import emailicon from "../../../../public/logos/email-icon.svg";
import emailbox from "../../../../public/logos/iconamoon_email-light.png";
import password from "../../../../public/logos/password.png";
import userLogo from "../../../../public/logos/user-logo.png";
import RippleButton from "@/components/RippleButton";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const router = useRouter();

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("/term&condition"); // Change to your terms and conditions page route
  };
  return (
    <div className="md:grid grid-cols-2 w-full h-screen">
      <div className="relative bg-black md:h-full h-[100px] ">
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image src={mainLogo} alt="logo" className="w-[75%]" />
        </div>
      </div>
      <div className="bg-black h-full inset-0 flex items-center justify-center py-5" >
        <div className="flex flex-col  px-10 w-full ">
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-[#FFFFFF3B] py-3  shadow rounded-lg md:px-10 px-2">
            <div className="sm:mx-auto sm:w-full sm:max-w-md py-1 bg-black rounded-md flex px-1">
                <span  onClick={() => setIsLogin(true)} className="w-[100%]">
                <RippleButton
                  text="Login"
                  px={6}
                  py={3}
                  width="100%"
                  bgColor={isLogin ? "bg-[#724EEB]" : "bg-transparent"}
                
                />
                </span>
               <span   onClick={() => setIsLogin(false)} className="w-[100%]">
               <RippleButton
                  text="Sign Up"
                  px={6}
                  py={3}
                  width="100%"
                  bgColor={!isLogin ? "bg-[#724EEB]" : "bg-transparent"}
                />
               </span>
              </div>
              <div className="sm:mx-auto sm:w-full sm:max-w-md py-2">
                <h2 className="mt-3 text-start text-2xl font-semibold text-white">
                  {isLogin ? "Login" : "Create an Account"}
                </h2>
                <h4 className="mt-1 text-start text-lg text-white">
                  {isLogin ? "Welcome Back" : ""}
                </h4>
              </div>
              <form className="space-y-4" action="#" method="POST">
                {isLogin ? (
                  <>
                    {/* Login Form */}
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Email or USername"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative  ">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Password"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={password} alt="password icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded bg-transparent" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-100">
                          Keep me Logged in
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-100 hover:text-blue-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
                    <p className="my-2 text-center text-sm text-gray-100 max-w">
                {isLogin ? "New User ?" : ""}
                <a href="#" className="font-medium text-gray-100 hover:text-blue-500 ms-1" onClick={toggleForm}>
                  {isLogin ? "Register Account" : ""}
                </a>
              </p>
              
                    <div className="mt-6">
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-1/3 border-t border-gray-300"></div>
                    <div className="w-1/3 border-t border-gray-300 ml-auto"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-gray-100">
                      Or Login with
                    </span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-1">
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-end px-2 py-3"
                    >
                      <Image
                        width={40}
                        height={40}
                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                        alt="Google"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-start px-2 py-3"
                    >
                      <Image
                        src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                        alt="Apple"
                        width={40}
                        height={40}
                        className="filter invert"
                      />
                    </a>
                  </div>
                </div>
              </div>
                  </>
                ) : (
                  <>
                    {/* Sign Up Form */}
                   <div className="flex flex-col  gap-y-2">
                   <div>
                      <div className="mt-1 relative ">
                        <input
                          id="signup-user"
                          name="userName"
                          type="text"
                          autoComplete="user"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Username"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={userLogo} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="signup-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Email Address"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="signup-body-type"
                          name="body-type"
                          type="text"
                          autoComplete="body-type"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Body Type"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="signup-dop"
                          name="dop"
                          type="date"
                          autoComplete="age"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Age/Birthday"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={emailbox} alt="email box" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="signup-password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Enter your password"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={password} alt="password icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 relative">
                        <input
                          id="signup-confirm-password"
                          name="confirm_password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-white focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pl-12"
                          placeholder="Confirm your password"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <div className="relative flex items-center">
                            <Image src={emailicon} alt="email icon" width={30} height={30} />
                            <Image src={password} alt="password icon" width={20} height={20} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign Up
                      </button>
                    </div>
                   </div>
                  </>
                )}
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
