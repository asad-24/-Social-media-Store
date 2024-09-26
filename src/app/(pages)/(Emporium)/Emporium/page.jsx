
'use client'
import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";
import Image from "next/image";
import istBoy from "../../../../../public/images/1stBoy.svg";
import isGirl from "../../../../../public/images/isGirl.svg";
import { useState } from "react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import OtherProfilepic from "../../../../../public/images/OtherProfilepic.jpeg"
import laptop1 from "../../../../../public/images/laptop2.jpeg"
import laptop2 from "../../../../../public/images/laptop.jpeg"
import tab1 from "../../../../../public/images/tab1.jpeg"
import location from "../../../../../public/logos/location.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const EmporiumStore = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const router =useRouter()
  const handleExplore= (e) => {
    e.preventDefault();
    router.push("/explore"); // Change to your terms and conditions page route
  };

  const eventPhotos = [laptop2, laptop1, tab1];
  const friends = [
    istBoy,
    istBoy,
    istBoy,
    istBoy,
    istBoy,
    istBoy,
    istBoy,
    istBoy,
  ];
  const following = [
    isGirl,
    isGirl,
    isGirl,
    isGirl,
    isGirl,
    isGirl,
    isGirl,
    isGirl,
  ];

  


  const eventData = [
    {
      id: 1,
      name: "Product name",
      category: "Tablet",
      price: "30$",
      imageSrc: tab1,
      totalSale:40
    },
    {
      id: 2,
      name: "Product name",
      category: "Tablet",
      price: "30$",
      imageSrc: tab1,
      totalSale:40
    },
  
    // Add more event data if needed
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
   <div className="  p-8  overflow-y-auto h-full no-scrollbar">

 <div className="flex justify-between items-center">
      <h1 className="text-3xl text-white ">Welcome To “UNLEASHED Emporium”</h1>
      <p className="text-2xl text-white cursor-pointer">See All</p>
            </div>
        
            <div>
    <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => {
                return (
                  <div class="flex flex-col bg-[#272424]  shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[300px] md:mx-1 mx-auto relative p-2">
                    <Image
                      class="w-full h-[216.13px]  rounded-2xl "
                      src={imageSrc}
                      alt="Card Image"
                    />
                    <div class="p-2">
                      <div className="flex justify-between items-center gap-x-2 text-white">
                 <div className='text-lg font-medium'>
              
                   Smart laptop
                  
                        
                 </div>
                        <div className='flex ms-4'>
                        
                        <p className="">$3000</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <p className="text-sm text-white dark:text-white">
                       category
                        </p>
                      </div>

               
                    </div>
                    <div>
                
                    </div>
                  </div>
                );
              })}
            </div>
    </div>

    <div className="flex justify-between items-center">
      <h1 className="text-3xl text-white ">Best Performing</h1>
      <p className="text-2xl text-white cursor-pointer">See All</p>
            </div>

            <div className="flex w-full flex-wrap justify-between gap-y-6 gap-x-2 mt-5">
        {eventData.map((event, index) => (
          <div
            key={event.id}
            className="bg-[#191a1b] h-[175px] md:w-[48%] w-full rounded-3xl flex items-center gap-x-3 p-3"
          >
            <div className="relative">
              <Image
                src={event.imageSrc}
                className="h-36 w-[176.51px] rounded-2xl"
                alt="Event Image"
              />
         
            </div>
            <div className="flex flex-col gap-y-5 w-full">
              <div className=" flex justify-between items-center w-full">
               <p className="text-white font-medium text-2xl"> {event.name}</p>
                <p className="text-white font-medium text-2xl">{event.price}</p>
              </div>

              <div className="flex justify-start items-center gap-x-2">
            
                <p className="text-white text-sm">
                  {event.category}
                </p>

               
              </div>
              <p className="text-white text-md">Total sales : {event.totalSale}</p>
            </div>
          </div>
        ))}
      </div>
         
            </div>
        </div>
      </div>
    </>
  );
};

export default EmporiumStore;
