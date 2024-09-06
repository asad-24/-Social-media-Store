
'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"

import group_pic from "../../../../../public/images/group_pic.png"
import senstiveContent from "../../../../../public/images/senstiveContent.svg"

import privacyKey1 from "../../../../../public/logos/privacyKey.svg"
import notSeeLogo from "../../../../../public/logos/notSeeLogo.svg"
import crossLogo from "../../../../../public/logos/crossLogo.svg"

import ChatIcon from "../../../../../public/images/Chat.svg";
import likeIcon from "../../../../../public/images/likeIcon.svg";
import shareIcon from "../../../../../public/images/shareIcon.svg";
import Image from "next/image"
import { useState } from "react"
const CreateGroupPost = () => {
  return (
    <>
    
    <FullHeader />
    <div className="flex  items-center bg-black ">
      <SideBar />
      <div
        className=" md:h-[82vh] h-[90vh] absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[10vh]  overflow-hidden"
        style={{
          background: "linear-gradient(200deg, black, #1B1919)",
          // Black gradient
        }}
      >
        <div className="  md:p-8 p-1 pb-28 overflow-y-auto h-full no-scrollbar">
        
    <div>
        <h1 className="text-3xl text-white font-bold">Create a post</h1>
    <div 
    className='w-full bg-[#1E1E1E] h-[102.55px] rounded-lg flex md:gap-x-8 gap-x-4 items-center md:px-6 px-2 my-3' 
    // key={index}
  >
    <div className="w-20 h-20 rounded-xl overflow-hidden relative ">
      <Image
        src={group_pic }
        alt="Profile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 "
      />
    </div>

 <div className="flex justify-between items-center w-full">
 <div>
     <div className="flex justify-center items-center">
     <h2 className='text-white md:text-2xl text-lg'>Gabriel Johns</h2>
     <Image src={privacyKey1} />
     </div>
     <p className="text-sm text-white ">1h ago</p>
    </div>
    <Image src={crossLogo}/>
 </div>
  </div>
    </div>
    <div className="h-full w-full my-3 mb-16 ">
    <div
  className="bg-[#2B2B2B] w-full h-full  rounded-xl flex flex-col tems-center bg-cover bg-center cursor-pointer"

>
 
  
<div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        <Image
          src={senstiveContent}
          alt="Adult Content"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 p-1 rounded-xl blur-sm"
        />
        <div className="absolute text-center flex flex-col justify-center items-center">
            <Image src={notSeeLogo}/>
          <p className="text-[#000000] mt-3 ">Sensitive Content</p>
          <p className="text-[#000000] my-3 w-2/3">This photo may be a sensitive to some people</p>
          <button className="border border-[#724EEB] bg-transparent rounded-full w-36 h-9 text-[#724EEB]">
            Tap to view
          </button>
        </div>
        <div className="w-[268px] h-14 bg-[#171717] absolute left-3 bottom-3 rounded-full flex justify-center items-center gap-x-2">
        <p className="text-2xl cursor-pointer">👍</p>
        <p className="text-2xl cursor-pointer">😍</p>
        <p className="text-2xl cursor-pointer">😂 </p>
        <p className="text-2xl cursor-pointer">😲 </p>
        <p className="text-2xl cursor-pointer">😠</p>
        <p className="text-2xl cursor-pointer">😢 </p>
        </div>
      </div>
 
   

</div>

<div className="flex justify-between items-center mt-6">
<div className=" flex justify-start items-center gap-x-6">
<div className="flex gap-x-3 items-center">
  <Image src={likeIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">120</p>
</div>
<div className="flex gap-x-3 items-center">
  <Image src={ChatIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">76</p>
</div>
<div className="flex gap-x-3 items-center">
  <Image src={shareIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">share</p>
</div>
      </div>
     <div>
     <p className="text-white text-xl ">15 comments</p>
     </div>
</div>
    </div>
   
        </div>

      
      </div>
    </div>

 
            
  </>
  )
}

export default CreateGroupPost
