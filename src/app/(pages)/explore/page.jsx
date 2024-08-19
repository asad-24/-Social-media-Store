'use client'

import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"
import istBoy from "../../../../public/images/1stBoy.svg";
import exploreGirl from "../../../../public/images/exploreGirl.svg"
import exploreUserName from "../../../../public/images/exploreUserName.svg"
import musicVector from "../../../../public/logos/musicVector.svg"
import heart from "../../../../public/logos/heart.svg"
import comment from "../../../../public/logos/comment.svg"
import micLogo from "../../../../public/logos/micLogo.svg"
import Image from "next/image"
import { useRouter } from "next/navigation";
const ExploreReels = () => {
    const friends = [istBoy, istBoy, istBoy, istBoy,istBoy, istBoy, istBoy, istBoy]; // Replace with actual image URLs

    const router =useRouter()
    const handleFriends= (e) => {
      e.preventDefault();
      router.push("/friends"); // Change to your terms and conditions page route
    };
  return (
    <> 
    <FullHeader / >
    <div className="flex  items-center bg-black "  >
      <SideBar />
      <div className=" md:h-[82vh] h-[90vh] absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[10vh]  overflow-hidden"
       style={{
        background: "linear-gradient(200deg, black, #1B1919)",
    // Black gradient
      }}>
<div className="flex justify-between h-full" >
<div className="lg:min-w-[58%] md:min-w-[55%] min-w-full  flex flex-col justify-center items-center overflow-y-auto h-full no-scrollbar ">
 
  <div className="md:w-[70%] w-full h-full  relative " >
<Image src={exploreGirl} className=" absolute inset-0 "
 layout="fill"
    objectFit="cover"
/>

<div className="absolute left-6 bottom-12  gap-x-4 ">
<div className="flex gap-x-4  items-center">
<div className="relative w-16 h-16 rounded-3xl">
        <div className="w-16 h-16 rounded-3xl overflow-hidden  relative">
          <Image
            src={exploreUserName}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 p-1"
          />
        </div>
        <div className="h-6 w-6 rounded-full bg-[#724EEB] text-white text-lg absolute bottom-1 right-[1px] flex justify-center items-center z-50">
          <p className="text-white text-3xl">+</p>
        </div>
      </div> 
      <h3 className="text-2xl text-white">Williams</h3>
</div>
<p className="text-white text-sm w-[80%] my-3">Lorem ipsum dolor sit amet consectetur. Suspendisse id faucibus lobortis ac.</p>
<div className="flex items-center gap-x-7 justify-between">
<div className="flex items-center gap-x-7">
<Image src={musicVector}/>
<p className="text-white text-sm w-[80%] ">Yella habibi yalla</p>
</div>
<div className="relative w-16 h-16 rounded-3xl">
        <div className="w-16 h-16 rounded-3xl overflow-hidden  relative">
          <Image
            src={micLogo}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 p-1"
          />
        </div>
      
      </div> 
</div>
</div>
<div className="absolute right-6 bottom-[30%]  gap-x-4 ">
<div className="flex flex-col gap-y-3">
<div className="w-10 h-20 bg-white/25 rounded-lg flex flex-col justify-center items-center gap-y-2">
<Image src={heart}/>
<p className="text-white">2k</p>
</div>
<div className="w-10 h-20 bg-white/25 rounded-lg flex flex-col justify-center items-center gap-y-2">
<Image src={comment}/>
<p className="text-white">2k</p>
</div>
</div>
</div>
  </div>
  
</div>
<div className="p-3 md:w-full h-full">


<div className="bg-[#1B1919] w-full rounded-xl my-2 overflow-y-auto no-scrollbar p-2"
     style={{ height: 'calc(100vh - 0px)', minHeight: '150px', maxHeight: '80vh' }}>
  <div className="flex justify-between items-center gap-x-9 text-white px-2">
    <div className="flex justify-between items-center gap-x-4 w-[30%]">
      <h4 className="text-lg text-[#724EEB]">Friends</h4>
      <h4 className="text-lg">Following</h4>
    </div>
    <h4 className="text-lg cursor-pointer" onClick={handleFriends}>See All</h4>
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
  )
}

export default ExploreReels
