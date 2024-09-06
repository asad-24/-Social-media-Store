'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"

import group_pic from "../../../../../public/images/group_pic.png"
import grobal from "../../../../../public/logos/global.svg"
import arrowBottom from "../../../../../public/logos/arrow-bottom.svg"
import addGroupPhotoLogo from "../../../../../public/logos/addGroupPhotoLogo.svg";
import loader from "../../../../../public/logos/loader.png";
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
const GroupCreate = () => {

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
    {privacy === true && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="bg-[#2B2B2B] w-[900px] h-[552px] flex flex-col rounded-3xl">
                <div className="flex flex-col  w-full p-3 px-5">
                  
                 <div className="flex justify-between items-center w-full  my-3 ">
                    <h4 className="font-bold text-[#724EEB] cursor-pointer text-3xl">Done</h4>
                    <p  className="font-bold text-white  text-xl">Post Audience</p>
                    <div className="h-9 w-9  bg-transparent flex justify-center items-center text-2xl border text-white  rounded-full cursor-pointer" onClick={handleBox}>
x
                    </div>
                 </div>
                 <p className="text-white text-md font-semibold ">Who can see this post?</p>
                <p className="text-[#bcbbbb] text-sm my-2">Your post may appear in feed, on your profile , in search results.</p>
                <p className="text-[#bcbbbb] text-sm mb-3 ">Your default audience is set to Public/Private, but you can change the audience of this specific post.</p>

                <hr/>
        <h3 className="text-white text-xl font-semibold my-3">Choose Audiance</h3>
        <div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                         Public 
                         <p className="text-white text-opacity-35">Anyone on or off Unleashed Desires</p>
                        </label>
                      </div>
                      <hr/>
        <div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                        Friends and Friends of Friends 
                         <p className="text-white text-opacity-35">Friends and friends of friends?</p>
                        </label>
                      </div>
                      <hr/>
        <div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                        Hide Location
                         <p className="text-white text-opacity-35">No one see your location</p>
                        </label>
                      </div>
                      <hr/>
        <div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                        Friends Only 
                         <p className="text-white text-opacity-35">Friends & friends of friends, or public</p>
                        </label>
                      </div>
                      <hr/>
        <div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                        Comments
                         <p className="text-white text-opacity-35">Do you allow comments</p>
                        </label>
                      </div>
                      
                  
                </div>
               
              </div>
            </div>
          )}
  </>
  )
}

export default GroupCreate
