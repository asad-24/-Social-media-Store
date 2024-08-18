'use client'

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import placeholder from "../../../../public/images/placeholder.png";
import istBoy from "../../../../public/images/1stBoy.svg";
import katreen from "../../../../public/images/katreen.png";
import blueTIck from "../../../../public/images/blueTick.svg";
import threeDots from "../../../../public/images/threeDots.svg";
import ChatIcon from "../../../../public/images/Chat.svg";
import likeIcon from "../../../../public/images/likeIcon.svg";
import shareIcon from "../../../../public/images/shareIcon.svg";
import girlAdultContent from "../../../../public/images/girlAdultContent.svg";
import laptop from "../../../../public/images/laptop.svg";
import mobile from "../../../../public/images/mobile.svg";


const MainDashboardHome = () => {
  const images = [placeholder, placeholder, placeholder, placeholder, placeholder]; // Replace with actual image URLs
  const store = [laptop, mobile, laptop, mobile]; // Replace with actual image URLs
  const friends = [istBoy, istBoy, istBoy, istBoy]; // Replace with actual image URLs

  return (
    <> 
      <FullHeader / >
      <div className="flex  items-center bg-black" >
        <SideBar />
        <div className=" h-[82vh]  absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[13vh] p-3 overflow-hidden"
         style={{
          background: "linear-gradient(200deg, black, #1B1919)", // Black gradient
        }}>
 <div className="flex justify-between h-full" >
 <div className="lg:min-w-[58%] md:min-w-[55%] min-w-full  flex flex-col overflow-y-auto h-full no-scrollbar py-2 pb-14 ">
    <h3 className="text-white text-2xl md:py-4 my-1">Stories</h3>
    
    <div className="flex overflow-x-auto gap-x-8 no-scrollbar w-full min-h-[100px] ">
      <div className="relative w-24 h-24 rounded-3xl">
        <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-indigo-600 relative">
          <Image
            src={placeholder}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 p-1"
          />
        </div>
        <div className="h-9 w-9 rounded-full bg-black text-white text-lg absolute bottom-2 right-[-10px] flex justify-center items-center z-50">
          <p className="text-white text-3xl">+</p>
        </div>
      </div>
      
      <div className="flex gap-x-8">
        {images.map((imageSrc, index) => (
          <div key={index} className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-indigo-600 relative">
            <Image
              src={imageSrc}
              alt={`Profile ${index}`}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="w-full rounded-xl  md:hidden block ">
    <div className="flex justify-between items-center p-3">
      <h3 className="text-white text-bold text-lg">Unleashed Emporium</h3>
      <p className="text-white text-bold text-lg">See All</p>
    </div>
    <div>
      <div className="flex justify-between items-center overflow-x-auto no-scrollbar w-full">
        {store.map((imageSrc, index) => (
          <div key={index} className="w-[300px]  h-24 rounded-3xl relative">
            <Image
              src={imageSrc}
              alt={`Profile ${index}`}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1 w-[300px] "
            />
          </div>
        ))}
      </div>
    </div>
  </div>
<div className="">
  
<div >
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-x-3">
          <div className="h-16 w-16 border p-1 rounded-full relative overflow-hidden">
            <Image
              src={katreen}
              alt="Katreen"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white flex gap-x-2">
              Katreen John
              <Image src={blueTIck} alt="Verified" />
            </h3>
            <p className="text-white">1h Ago</p>
          </div>
        </div>
        <Image src={threeDots} alt="Menu" className="w-10 h-10" />
      </div>

      <div className="relative w-full h-[348px] overflow-hidden flex justify-center items-center p-2">
        <Image
          src={girlAdultContent}
          alt="Adult Content"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 p-1 rounded-xl blur-sm"
        />
        <div className="absolute text-center">
          <p className="text-white my-3">Adult Content</p>
          <button className="border bg-transparent rounded-full w-36 h-9 text-white">
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
      <p className="text-white my-3 text-xl">My new click? What do you think about my this Photoshot . Any Suggestions !</p>
      <div className="mt-6 flex justify-start items-center gap-x-6">
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
    </div>
</div>
  </div>
  <div className="p-3 md:w-full h-full">
  <div className="bg-[#1B1919]  h-[256px] md:w-full rounded-xl justify-center items-center">
    <div className="flex justify-between items-center p-3">
      <h3 className="text-white text-bold md:text-lg">Unleashed Emporium</h3>
      <p className="text-white text-bold md:text-lg">See All</p>
    </div>
    <div>
      <div className="flex flex-wrap justify-between items-center">
        {store.map((imageSrc, index) => (
          <div key={index} className="w-[50%]  h-24 rounded-3xl overflow-hidden relative">
            <Image
              src={imageSrc}
              alt={`Profile ${index}`}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="bg-[#1B1919] w-full rounded-xl my-2 overflow-y-auto no-scrollbar p-2"
       style={{ height: 'calc(100vh - 395px)', minHeight: '150px', maxHeight: '80vh' }}>
    <div className="flex justify-between items-center gap-x-9 text-white px-2">
      <div className="flex justify-between items-center gap-x-4 w-[30%]">
        <h4 className="text-lg text-[#724EEB]">Friends</h4>
        <h4 className="text-lg">Following</h4>
      </div>
      <h4 className="text-lg">See All</h4>
    </div>

    {friends.map((imageSrc, index) => (
      <div key={index} className="flex justify-between items-center my-4">
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
        <button className="text-white bg-[#724EEB] w-24 h-8 rounded-2xl">Friend</button>
      </div>
    ))}
  </div>
</div>

 </div>
</div>


        </div>
      
    </>
  );
};

export default MainDashboardHome;
