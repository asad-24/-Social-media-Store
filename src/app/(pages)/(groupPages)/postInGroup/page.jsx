'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"
import nextLogo from "../../../../../public/logos/sidebar/nextLogo.svg";
import group_pic from "../../../../../public/images/group_pic.png"
import grobal from "../../../../../public/logos/global.svg"
import arrowBottom from "../../../../../public/logos/arrow-bottom.svg"
import addGroupPhotoLogo from "../../../../../public/logos/addGroupPhotoLogo.svg";
import loader from "../../../../../public/logos/loader.png";
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import allGroupPic from "../../../../../public/images/allGroups.jpeg";    
const PostInGroup = () => {

    const [frontSideFile, setFrontSideFile] = useState(null);
    const [privacy, setPrivacy] = useState(false);
    const frontSideImageURL = frontSideFile ? URL.createObjectURL(frontSideFile) : '';
    const setPrivacyHandle=()=>{
        setPrivacy(true)
    }
    const handleBox=()=>{
        setPrivacy(false)
    }
    const handleFileChange = (e, side) => {
      const file = e.target.files[0];
      if (side === 'front') {
        setFrontSideFile(file);
      } 
    };

    const router =useRouter();
    const handlePostClick=(e)=>{
      e.preventDefault();
  router.push('/postCreated')
    }
  
    const allGroups = [
        {
          id: 1,
          name: 'Girls Travel Groups',
          members: 217,
          image: allGroupPic,
        },
    ]
  return (
    <>
    <div className={` relative ${privacy === true? 'blur-sm' : ''}`}>
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
            
    {allGroups.map((group, index) => (
  <div 
    
    key={index}
    onClick={() => handleGroupClick(group.id)}
  >
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
        </div>
))}

<hr className="my-6"/>

    <div 
    className='w-full h-[102.55px] rounded-lg flex md:gap-x-8 gap-x-4 items-center md:px-6 px-2 my-3' 
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

    <div>
      <h2 className='text-white md:text-2xl text-lg'>Gabriel Johns</h2>
      <button className="flex justify-center items-center bg-[#272424] p-1 my-2 rounded-xl gap-x-1" onClick={setPrivacyHandle} >
<Image src={grobal} className=""/>
<p className="flex justify-center items-center gap-x-2 text-[#d6d5d5]">Private 
<Image src={arrowBottom}/>
</p>
      </button>
    </div>
  </div>
  <hr className="my-6"/>

    </div>
    <div className="h-[300px] w-full my-3  ">
    <div
  className="bg-[#2B2B2B] w-full h-full p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center cursor-pointer"
  style={{ backgroundImage: `url(${frontSideImageURL})` }}
>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => handleFileChange(e, 'front')}
    className="hidden"
    id="uploadFrontSide"
    required
  />
  
  {/* Wrapping the content inside a label to make the whole box clickable */}
  <label
    htmlFor="uploadFrontSide"
    className="flex justify-center items-center flex-col cursor-pointer"
  >
    <Image src={addGroupPhotoLogo} alt="logo" className="cursor-pointer" />
    <h4 className="text-[#9E9E9E] font-bold">
      Add a Photo/Video
    </h4>
    <p className="text-sm text-[#9E9E9E] my-1">
      Select photo or video you want to post
    </p>
    <p className="text-sm text-[#EF1A1A]">
      *maximum 5 minutes videos can be uploaded
    </p>
    <span className="text-[#9E9E9E]">
      Choose File
    </span>
  </label>


</div>


    </div>
    <h3 className="text-3xl text-white">Write about post</h3>

    <input type="text" className="p-3 h-16 md:w-1/3 w-full my-3 text-white bg-transparent border rounded-xl border-[bg-[#2B2B2B]]" />
    <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded bg-transparent" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-100">
                         Mark as Adult
                        </label>
                      </div>

                      <button
        type="submit"
        className="group relative md:w-1/3 w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        onClick={handlePostClick}
      >
        Post
      </button>
        </div>

      
      </div>
    </div>
    </div>
    
    {privacy === true && (   <div className="w-[716px] h-[391px] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center p-4 w-full cursor-pointer hover:bg-[#3c3c3c]" >
        <div className="" >
            <p className="text-white text-2xl my-5">Public</p>
            <p className="text-white text-md ">Anyone can see who’s  in the group and what they post</p>
            <p className="text-white text-md ">you can change to private later.</p>
          </div>
<Image src={nextLogo} />
        </div >
        <div className="flex justify-between items-center p-4 w-full cursor-pointer hover:bg-[#3c3c3c]"  >
        <div className="">
            <p className="text-white text-2xl my-5">Private</p>
            <p className="text-white text-md ">Only members can see who’s in the group and what they post. </p>
            <p className="text-white text-md ">you can change to public later.</p>
          </div>
<Image src={nextLogo}/>
        </div>
      </div>)}
  </>
  )
}

export default PostInGroup
