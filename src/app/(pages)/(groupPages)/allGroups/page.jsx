'use client'

import FullHeader from '@/components/FullHeader'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import React from 'react'
import manLogo from "../../../../../public/images/notificationMan.svg"
import istBoy from "../../../../../public/images/1stBoy.svg";
import isGirl from "../../../../../public/images/isGirl.svg";
import allGroupPic from "../../../../../public/images/allGroups.jpeg";
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AllGroups = () => {
  const allGroups = [
    {
      id: 1,
      name: 'Girls Travel Groups',
      members: 217,
      image: allGroupPic,
    },
    {
      id: 2,
      name: 'Adventure Seekers',
      members: 120,
      image: allGroupPic,
    },
    {
      id: 3,
      name: 'Nature Lovers',
      members: 345,
      image: allGroupPic,
    },
    // Add more groups as needed
  ];

 // Inside your component
const router = useRouter();

const handleGroupClick = (id) => {
  if(id===1){
    router.push(`/groupInfo`);
  }
 
};
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
        
        <h2 className='text-white text-2xl '>All Groups</h2>
      
        {allGroups.map((group, index) => (
  <div 
    
    key={index}
    onClick={() => handleGroupClick(group.id)}
  >
    <div 
      className='w-full h-[102.55px] bg-[#221D1C] rounded-lg flex md:gap-x-8 gap-x-4 items-center md:px-6 px-2 my-3 cursor-pointer' 
    >
      <div className='flex justify-between items-center w-full'>
        <div className='flex justify-start items-center w-full gap-x-4'>
          <div className="w-20 h-20 rounded-full overflow-hidden relative">
            <Image
              src={group.image} // Accessing the image from the group object
              alt={group.name}   // Setting alt text to group name
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1"
            />
          </div>

          <div>
            <p className='text-white md:text-md text-lg font-semibold'>{group.name}</p>
            <p className='text-white text-sm'>Private group . {group.members} members</p>
          </div>
        </div>
        <button
          type="submit"
          className="group relative md:w-1/12 w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Join
        </button>
      </div>
    </div>
  </div>
))}
      
       
        </div>
      </div>
    </div>
  </>
  )
}

export default AllGroups
