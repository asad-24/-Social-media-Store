'use client'
import FullHeader from '@/components/FullHeader'
import SideBar from '@/components/SideBar'
import Image from 'next/image'

import OtherProfilepic from "../../../../../public/images/OtherProfilepic.jpeg"
import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { VscCompassActive } from "react-icons/vsc";
import { MdExpandMore } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";

import { MdOutlineDatasetLinked } from "react-icons/md";
import RippleButton from '@/components/RippleButton'
const OtherProfile = () => {

    const [selectedIcon, setSelectedIcon] = useState(4);

   
    const eventPhotos = [eventPic, eventPic2, eventPic2];

    const [activeTab, setActiveTab] = useState('About');


    const BusinessEventPhotos = [eventPic, eventPic2, eventPic2];
  const EventPhotos = [eventPic2, eventPic2, eventPic];

  const [isBusiness, setIsBusiness] = useState(true);

  const icons = [
    { id: 1, icon: <IoMdInformationCircleOutline className="h-10 w-10 text-white" /> },
    { id: 2, icon: <CiLock className="h-10 w-10 text-white" /> },
    { id: 3, icon: <FaRegHeart className="h-10 w-10 text-white" /> },
    { id: 4, icon: <FiYoutube className="h-10 w-10 text-white" /> },
  ];



const data = [
  { id: 1, icon: <FaHeart className='text-white h-6 w-6' />, title: 'Relationships', subtitle: 'Single' },
  { id: 2, icon: <VscCompassActive className='text-white h-6 w-6' />, title: 'Active', subtitle: 'I Live The Lifestyle When I Can' },
  { id: 3, icon: <MdOutlineDatasetLinked className='text-white h-6 w-6' />, title: 'Role', subtitle: 'Goddess,Princess,Good girl,Versatile' },
  { id: 4, icon: <CiSearch className='text-white h-6 w-6' />, title: 'Looking For', subtitle: 'Relationship' },
  { id: 5, icon: <FaHeart className='text-white h-6 w-6' />, title: 'Orientation', subtitle: 'Straight Bicurious' },
];
  const aboutSections = [
    {
      id: 1,
      title: 'About',
      content: "I like to pretend I’m a Goddess but deep down I’m a brat. Regardless, I’LL still squirt for you. I’LL fill out more later",
    },
    {
      id: 2,
      title: 'Websites',
      content: "https://onlyfans.com/catechaos",
    },
    {
      id: 3,
      title: 'Kinks ',
      content: "Lorem ipsum dolor sit amet consectetur. Ut sed sed vitae id elit eget laoreet facilisis duis.",
    },
    {
      id: 4,
      title: 'Fetishes',
      content: "Lorem ipsum dolor sit amet consectetur. Ut sed sed vitae id elit eget laoreet facilisis duis.",
    },
  ];
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
        <div className="  md:p-8 p-1 pb-10 overflow-y-auto h-full no-scrollbar w-full">
        
   
   <div className='flex items-center flex-wrap p-3 justify-center  '  >
<div className='flex lg:justify-start justify-center items-end gap-x-6 lg:w-[70%] w-full  flex-wrap'>
<div className='h-44 w-44 rounded-full bg-transparent relative'>
    <Image src={OtherProfilepic}
    className='absolute inset-0 rounded-full'
    layout="fill"
          objectFit="cover"
    />

</div>
<div className='flex flex-col gap-y-4 items-center'>
    <p className='text-2xl text-white font-semibold'>Cate_chaos</p>
    <p className='text-sm text-white '>Body Type: Ectomorph</p>
    <p className='text-sm text-white '>Birthday: 20 December</p>
    <div className='flex justify-start gap-x-3 my-2'>
    <button
          type="submit"
          className="group relative  mx-auto flex justify-center items-center gap-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <CiCirclePlus className='h-5 w-5 font-bold' />
          Follow
        </button>
    <button
          type="submit"
          className="group relative  mx-auto flex justify-center items-center gap-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <FaRegUser  className='h-5 w-5 font-bold' />
          Friend
        </button>
    <button
          type="submit"
          className="group relative  mx-auto flex justify-center items-center gap-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <BiMessageRoundedDots className='h-5 w-5 font-bold' />
          Message
        </button>
    </div>
</div>
<p className='text-white my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eius repellendus iusto consequuntur, corrupti magnam! Odit numquam libero esse hic obcaecati corrupti ex?</p>

<div className='flex justify-start items-center gap-x-2 my-5'>
    <div className='h-10 w-10 border border-[#724EEB] flex justify-center items-center rounded-full'>
    <FaLocationDot className='h-6 w-6 text-[#724EEB]'/>
    </div>
    <div>
        <p className='text-white font-medium text-md'>New York, USA</p>
        <p className='text-white text-sm'>260-C North El Camino Real</p>
    </div>
</div>
</div>
<div className='lg:w-[30%] flex flex-col w-full ' >
    <div className='h-[79px] w-full bg-[#171717] flex justify-between gap-x-5 items-center rounded-2xl p-4'>
    <div className='flex flex-col gap-y-2 items-center'>
        <p className='font-semibold text-2xl text-white'>550</p>
        <p className=' text-white'>Following</p>
        </div>    
    <div className='flex flex-col gap-y-2 items-center'>
        <p className='font-semibold text-2xl text-white'>880</p>
        <p className=' text-white'>Follower</p>
        </div>    
    <div className='flex flex-col gap-y-2 items-center'>
        <p className='font-semibold text-2xl text-white'>480</p>
        <p className=' text-white'>Friends</p>
        </div>    

    </div>
</div>


   </div>

   <div className="flex justify-center items-center w-full gap-x-14">
      {icons.map(({ id, icon }) => (
        <div
          key={id}
          onClick={() => setSelectedIcon(id)}
          className="flex flex-col items-center cursor-pointer"
        >
          {icon}
          <div
            className={`h-2 w-full rounded-2xl ${
              selectedIcon === id ? 'bg-[#724EEB]' : 'bg-transparent'
            }`}
          />
        </div>
      ))}
    </div>

    {selectedIcon==4 && <div>
    <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => {
                return (
                  <div class="flex flex-col bg-[#272424]  shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[250px] md:mx-1 mx-auto relative">
                    <Image
                      class="w-full h-[216.13px]  rounded-2xl "
                      src={imageSrc}
                      alt="Card Image"
                    />
                    <div class="p-2">
                      <div className="flex justify-between items-center gap-x-2 text-white">
                 <div className='flex justify-center items-center gap-x-2'>
                 <div className='h-12 w-12 rounded-full relative '>
                     <Image src={OtherProfilepic} className='h-12 w-12 rounded-full absolute inset-0 '
                         layout="fill"
          objectFit="cover"
                     />
                     </div>
                        <p className=" text-lg font-bold">Williams</p>
                 </div>
                        <div className='flex ms-4'>
                        <FaRegHeart className='h-5 w-5 mx-2'/>
                        <p className="">3.3k</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <p className="text-sm text-white dark:text-white">
                        Lorem ipsum dolor sit amet consectetur. Suspendisse id faucibus lobortis ac.
                        </p>
                      </div>

               
                    </div>
                    <div>
                        <FaRegCirclePlay className='absolute top-5 left-3 h-9 w-9 text-white'/>
                    </div>
                  </div>
                );
              })}
            </div>
    </div> }


{selectedIcon==1 && <><div className='flex flex-wrap gap-x-4 justify-between items-center my-10 px-10'>
      {data.map((item) => (
        <div key={item.id} className='flex justify-start items-stretch gap-x-3 border-b md:w-[40%] w-full my-4'>
          {item.icon} 
          <div>
            <p className='text-white text-xl font-semibold'>{item.title}</p>
            <p className='text-slate-700 my-1'>{item.subtitle}</p>
          </div>
          <MdExpandMore className='text-white h-9 w-9' />
        </div>
      ))}
    </div>


    <div className="py-3 shadow rounded-lg md:px-10 px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-md py-1 bg-black rounded-md flex px-1">
        <span onClick={() => setActiveTab('About')} className="w-[100%]">
          <RippleButton
            text="About"
            px={6}
            py={3}
            width="100%"
            bgColor={activeTab === 'About' ? "bg-[#724EEB]" : "bg-transparent"}
          />
        </span>
        <span onClick={() => setActiveTab('Active')} className="w-[100%]">
          <RippleButton
            text="Active"
            px={6}
            py={3}
            width="100%"
            bgColor={activeTab === 'Active' ? "bg-[#724EEB]" : "bg-transparent"}
          />
        </span>
        <span onClick={() => setActiveTab('Pics 15')} className="w-[100%]">
          <RippleButton
            text="Pics 15"
            px={6}
            py={3}
            width="100%"
            bgColor={activeTab === 'Pics 15' ? "bg-[#724EEB]" : "bg-transparent"}
          />
        </span>
      </div>
      <div className="space-y-4">
        {activeTab === 'About' && (
          <div>
            {aboutSections.map((section) => (
              <div key={section.id} className="my-10">
                <h2 className="text-white font-medium text-2xl">
                  {section.title}
                </h2>
                <p className="text-[#5e5e5e] text-sm mt-4">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Active' && (
          <div>
            {/* Active content goes here */}
            <p className="text-white text-xl">Active content section</p>
            <div>
            <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-[#272424] shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[170px] md:mx-1 mx-auto relative"
                >
                  <Image
                    className="w-full h-[216.13px] rounded-2xl"
                    src={imageSrc}
                    alt="Card Image"
                  />
                  <div>
                    <FaRegCirclePlay className='absolute top-5 left-3 h-9 w-9 text-white'/>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        )}
        {activeTab === 'Pics 15' && (
            
          <div>
               <p className="text-white text-xl">pics 15 content section</p>
            <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-[#272424] shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[170px] md:mx-1 mx-auto relative"
                >
                  <Image
                    className="w-full h-[216.13px] rounded-2xl"
                    src={imageSrc}
                    alt="Card Image"
                  />
                  <div>
                    <FaRegCirclePlay className='absolute top-5 left-3 h-9 w-9 text-white'/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div></>}
      
       
        </div>
      </div>
    </div>
  </>
  )
}

export default OtherProfile
