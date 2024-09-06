import FullHeader from '@/components/FullHeader'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import React from 'react'
import manLogo from "../../../../public/images/notificationMan.svg"
import istBoy from "../../../../public/images/1stBoy.svg";
import isGirl from "../../../../public/images/isGirl.svg";
const Notifications = () => {
    const notification = [manLogo,istBoy,isGirl,istBoy,manLogo,isGirl,manLogo,]
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
        <div className="  md:p-8 p-1 pb-10 overflow-y-auto h-full no-scrollbar">
        
        <h2 className='text-white text-2xl '>Notifications</h2>
      <p className='text-white text-md my-5 '>This week (8)</p>
      {notification.map((imgSrc, index) => (
  <div 
    className='w-full h-[102.55px] bg-[#221D1C] rounded-lg flex md:gap-x-8 gap-x-4 items-center md:px-6 px-2 my-3' 
    key={index}
  >
    <div className="w-20 h-20 rounded-xl overflow-hidden relative border-2 border-[#724EEB]">
      <Image
        src={imgSrc}
        alt="Profile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 p-1"
      />
    </div>

    <div>
      <p className='text-white md:text-md text-sm'>john11 liked your comment: Awesome! Nice.</p>
      <p className='text-white text-sm'>1 day</p>
    </div>
  </div>
))}

      
       
        </div>
      </div>
    </div>
  </>
  )
}

export default Notifications
