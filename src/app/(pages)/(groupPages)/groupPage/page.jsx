'use client'

import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"
import { useRouter } from "next/navigation";
import istBoy from "../../../../../public/images/1stBoy.svg";
import katreen from "../../../../../public/images/katreen.png";
import groupphoto2 from "../../../../../public/images/groupphoto2.jpeg";
import groupphoto1 from "../../../../../public/images/groupphoto1.jpeg";
import groupphoto3 from "../../../../../public/images/groupphoto3.jpeg";
import travelGirl from "../../../../../public/images/travelGirl.jpeg";
import groupphoto4 from "../../../../../public/images/group_pic.png"
import crossLogo from "../../../../../public/logos/crossLogo.svg"
import ChatIcon from "../../../../../public/images/Chat.svg";
import likeIcon from "../../../../../public/images/likeIcon.svg";
import shareIcon from "../../../../../public/images/shareIcon.svg";
import Image from "next/image";
const GroupHomePage = () => {

    const friends = [istBoy, istBoy, istBoy, istBoy,istBoy, istBoy, istBoy, istBoy]; // Replace with actual image URLs
    const groups = [
      { image: groupphoto1, name: "Girls Group" },
      { image: groupphoto2, name: " Chat Group" },
      { image: groupphoto3, name: "Travel Group" },
      { image: groupphoto4, name: "Group Name" }
    ];
    const router =useRouter()
    const handleFriends= (e) => {
      e.preventDefault();
      router.push("/friends"); // Change to your terms and conditions page route
    };
    const handleAllGroups= (e) => {
      e.preventDefault();
      router.push("/allGroups"); // Change to your terms and conditions page route
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
<div className="lg:min-w-[58%] md:min-w-[55%] min-w-full overflow-y-auto h-full no-scrollbar p-3 px-8">
 

<div className="w-full">
  <ul className="w-full flex gap-x-10 ">
    <li className="text-white font-bold text-xl cursor-pointer">For You</li>
    <li className="text-white  text-xl cursor-pointer">Popular</li>
    <li className="text-white  text-xl cursor-pointer">Your Groups</li>
    <li className="text-white  text-xl cursor-pointer">Discover</li>
  </ul>
</div>
<div className="flex justify-between items-center cursor-pointer" onClick={handleAllGroups}>
<h3 className="text-white text-2xl md:py-4 my-1">Groups</h3>
<h3 className="text-white text-2xl md:py-4 my-1">See All</h3>
</div>
    
    <div className="flex overflow-x-auto gap-x-8 no-scrollbar w-full min-h-[100px] ">
    
      <div className="flex gap-x-8">
        {groups.map((group, index) => (
          <div className="flex flex-col items-center cursor-pointer">
            <div key={index} className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-indigo-600 relative p-2">
            <Image
              src={group.image}
              alt={group.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-2 rounded-3xl"
            />
            
          </div>
          <div>
            <p className="text-white text-sm my-2">{group.name}</p>
          </div>
          </div>
       
        ))}
      </div>
    </div>


    <h2 className="text-2xl text-white font-semibold my-4">Chats you should join</h2>
    <div  className='w-full  flex gap-x-2 cursor-pointer' >
    <div className="w-16 h-16  rounded-full overflow-hidden relative ">
      <Image
        src={groupphoto3 }
        alt="Profile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 "
      />
    </div>


 <div>
     <div className="flex justify-center items-center">
     <h2 className='text-white md:text-2xl text-lg'>Travel Group</h2>
   
     </div>
     <p className="text-sm text-white ">2286 Members</p>
    </div>
  

  </div>
<hr className="my-6"/>
    <div  className='w-full  flex gap-x-2 cursor-pointer' >
    <div className="w-16 h-16  rounded-full overflow-hidden relative ">
      <Image
        src={groupphoto2 }
        alt="Profile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 "
      />
    </div>


 <div>
     <div className="flex justify-center items-center">
     <h2 className='text-white md:text-2xl text-lg'>Chat Group</h2>
   
     </div>
     <p className="text-sm text-white ">2286 Members</p>
    </div>
  

  </div>

    
  <div className="w-full h-[526px] bg-[#1E1E1E] p-3 my-5 rounded-2xl ">
  <div  className='w-full  flex gap-x-2 ' >
    <div className="w-20 h-16  rounded-full overflow-hidden relative ">
      <Image
        src={groupphoto3 }
        alt="Profile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 "
      />
    </div>

 <div className="flex justify-between items-center w-full" >
 <div>
     <div className="flex justify-center items-center">
     <h2 className='text-white md:text-2xl text-lg'>Travel Group</h2>
   
     </div>
     <p className="text-sm text-white ">1h ago</p>
    </div>
    <Image src={crossLogo} className="cursor-pointer"/>
 </div>
  </div>
  <p className="text-white text-sm my-2">Lorem ipsum dolor sit amet consectetur. Eu neque vitae turpis facilisi eget scelerisque. Mattis tellus nunc tincidunt tortor purus. </p>
  <div className="relative w-full h-[325px] overflow-hidden flex justify-center items-center">
        <Image
          src={travelGirl}
          alt="Adult Content"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 p-1 rounded-xl "
        />
      
        <div className="w-[268px] h-14 bg-[#171717] absolute left-3 bottom-3 rounded-full flex justify-center items-center gap-x-2">
        <p className="text-2xl cursor-pointer">👍</p>
        <p className="text-2xl cursor-pointer">😍</p>
        <p className="text-2xl cursor-pointer">😂 </p>
        <p className="text-2xl cursor-pointer">😲 </p>
        <p className="text-2xl cursor-pointer">😠</p>
        <p className="text-2xl cursor-pointer">😢 </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
<div className=" flex justify-start items-center gap-x-6">
<div className="flex gap-x-3 items-center cursor-pointer">
  <Image src={likeIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">120</p>
</div>
<div className="flex gap-x-3 items-center cursor-pointer">
  <Image src={ChatIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">76</p>
</div>
<div className="flex gap-x-3 items-center cursor-pointer">
  <Image src={shareIcon} alt="like" className="h-7 w-7"/>
  <p className="text-white text-xl ">share</p>
</div>
      </div>
     <div>
     <p className="text-white text-xl cursor-pointer">15 comments</p>
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

export default GroupHomePage
