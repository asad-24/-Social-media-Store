
'use client'
import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import searchIcon from "../../../../public/logos/Search.svg";
import mobileSearch from "../../../../public/logos/mobileSearch.svg";
import plusIcon from "../../../../public/logos/plusIcon.svg";
import notification from "../../../../public/logos/notificationLogo.svg";
import settingsLogo from "../../../../public/logos/sidebar/settingsLogo.svg";
import Image from "next/image";
import istBoy from "../../../../public/images/1stBoy.svg";
import isGirl from "../../../../public/images/isGirl.svg";
import { useState } from "react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
const Friends = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const router =useRouter()
  const handleExplore= (e) => {
    e.preventDefault();
    router.push("/explore"); // Change to your terms and conditions page route
  };
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
          
          <div className="min-w-full flex justify-between ">
          <div className="md:block hidden">
              <div className="flex justify-between gap-x-5">
                <div className=" flex justify-start items-center w-[50%] gap-x-3  ">
                  <p className="text-white text-sm cursor-pointer" onClick={handleExplore}>Explore</p>
                  <p
                    className={` text-sm cursor-pointer ${
                      activeTab === "friends" ? "text-[#724EEB]" : "text-white"
                    }`}
                    onClick={() => setActiveTab("friends")}
                  >
                    Friends
                  </p>
                  <p
                    className={` text-sm cursor-pointer ${
                      activeTab === "following" ? "text-[#724EEB]" : "text-white"
                    }`}
                    onClick={() => setActiveTab("following")}
                  >
                    Following
                  </p>
                </div>

                <div className={`flex justify-center items-center gap-x-3 `}>
                  <Image
                    src={settingsLogo}
                    className="h-5 w-5 cursor-pointer"
                  />
                  <Image
                    src={notification}
                    className="h-12 w-12 cursor-pointer"
                  />
                  <Image
                    src={mobileSearch}
                    className="h-6 w-6 cursor-pointer"
                  />
                  <Image src={plusIcon} className="h-6 w-6 cursor-pointer" />
                </div>
              </div>
              </div>
              <div className="flex justify-between items-center border border-2-purple-50  md:w-[40%] w-full h-[55px] rounded-2xl bg-transparent p-2 ">
                <input
                  type="text"
                  className="p-2 border-none bg-transparent h-full outline-none text-white"
                  placeholder="Search Here"
                />
                <div className="h-10 w-10 rounded-full flex justify-center items-center">
                  <Image src={searchIcon} alt="logo" />
                </div>
              </div>
         
          </div>
            {activeTab === 'friends' && (
    <div className="my-3">
    <h2 className="text-2xl text-white">Friend List</h2>

    <div className="flex flex-wrap justify-between">
      {friends.map((imageSrc, index) => (
        <div
          key={index}
          className="flex justify-between items-center my-2 md:w-[45%] w-full"
        >
          <div className="flex justify-center items-center">
            <div className="w-20 h-20 rounded-3xl overflow-hidden relative">
              <Image
                src={imageSrc}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 p-1"
              />
            </div>
            <div className="ms-4">
              <p className="text-white">Jenny Wilson</p>
              <p className="text-white">jenny_wilsonr5</p>
            </div>
          </div>
          <button className="text-white bg-[#724EEB] hover:bg-[#9073ee] w-24 h-8 rounded-xl">
            Friend
          </button>
        </div>
      ))}
    </div>
  </div>

)}

{activeTab === 'following' &&(

<div className="my-3">
<h2 className="text-2xl text-white">Following List</h2>

<div className="flex flex-wrap justify-between">
  {following.map((imageSrc, index) => (
    <div
      key={index}
      className="flex justify-between items-center my-2 md:w-[45%] w-full"
    >
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 rounded-3xl overflow-hidden relative">
          <Image
            src={imageSrc}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 p-1"
          />
        </div>
        <div className="ms-4">
          <p className="text-white">Jenny Wilson</p>
          <p className="text-white">jenny_wilsonr5</p>
        </div>
      </div>
      <button className="text-white bg-[#724EEB] hover:bg-[#9073ee] w-24 h-8 rounded-xl">
      Following
      </button>
    </div>
  ))}
</div>
</div>
)}
        
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
