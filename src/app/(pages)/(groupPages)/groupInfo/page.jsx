"use client";
import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import nextLogo from "../../../../../public/logos/sidebar/nextLogo.svg";
import group_pic from "../../../../../public/images/group_pic.png";
import senstiveContent from "../../../../../public/images/senstiveContent.svg";
import katreen from "../../../../../public/images/katreen.png";
import girlAdultContent from "../../../../../public/images/girlAdultContent.svg";
import blueTIck from "../../../../../public/images/blueTick.svg";
import threeDots from "../../../../../public/images/threeDots.svg";
import inviteLogo from "../../../../../public/logos/inviteLogo.svg";
import joinedLogo from "../../../../../public/logos/joinedLogo.svg";
import crossLogo from "../../../../../public/logos/crossLogo.svg";
import editLogo from "../../../../../public/logos/editLogo.svg";
import groupphoto2 from "../../../../../public/images/groupphoto2.jpeg";
import groupphoto1 from "../../../../../public/images/groupphoto1.jpeg";
import groupphoto3 from "../../../../../public/images/groupphoto3.jpeg";
import travelGirl from "../../../../../public/images/travelGirl.jpeg";
import groupphoto4 from "../../../../../public/images/group_pic.png"
import ChatIcon from "../../../../../public/images/Chat.svg";
import likeIcon from "../../../../../public/images/likeIcon.svg";
import shareIcon from "../../../../../public/images/shareIcon.svg";
import CoverPhoto from "../../../../../public/images/GroupInfoCoverPhoto.jpeg";
import Image from "next/image";
import { useState } from "react";
const GroupInfo = () => {
    const groups = [
        { image: groupphoto1, name: "Girls Group" },
        { image: groupphoto2, name: " Chat Group" },
        { image: groupphoto3, name: "Travel Group" },
        { image: groupphoto4, name: "Group Name" },
        { image: groupphoto4, name: "Group Name" },
        { image: groupphoto4, name: "Group Name" },
        { image: groupphoto4, name: "Group Name" }
      ];
// State for managing the edit mode and the text
const [isEditing, setIsEditing] = useState(false);
const [groupName, setGroupName] = useState('Girls Travel Group');

const [join, setjoin] = useState(false);
const [Rules, setRules] = useState(false);
const [Questions, setQuestions] = useState(false);




const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};


const setjoinHandle=()=>{
  setjoin(true)
}
const setRulesHandle=()=>{
  setjoin(false)
  setRules(true)
}
const setQuestionsHandle=()=>{
 
  setRules(false)
  setQuestions(true)

}

// Toggle edit mode
const handleEditClick = () => {
  setIsEditing(!isEditing);
};

// Handle input change
const handleInputChange = (e) => {
  setGroupName(e.target.value);
};

// Handle save (exit edit mode)
const handleSave = () => {
  setIsEditing(false);
};

  const [frontSideFile, setFrontSideFile] = useState(null);
  // const [join, setjoin] = useState(false);
  const frontSideImageURL = frontSideFile
    ? URL.createObjectURL(frontSideFile)
    : "";
  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (side === "front") {
      setFrontSideFile(file);
    }
  };
  return (
    <>
     <div>
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
            <div className="h-full w-[100%]">
              <h1 className="text-3xl text-white font-bold my-4">Group Info</h1>
              <div
                className="bg-[#2B2B2B] relative w-full h-[298px] p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${frontSideImageURL})` }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "front")}
                  className="hidden"
                  id="uploadFrontSide"
                  required
                />

                {/* Wrapping the content inside a label to make the whole box clickable */}
                <label
                  htmlFor="uploadFrontSide"
                  className="absolute top-3 right-3 cursor-pointer h-12 w-12 rounded-full flex justify-center items-center bg-white "
                >
                  <Image src={editLogo} alt="logo" className="cursor-pointer" />
                </label>
              </div>

      <div className="w-full relative">
      <div className="flex justify-start items-center gap-x-4 my-3">
      {isEditing ? (
        <input
          type="text"
          value={groupName}
          onChange={handleInputChange}
          onBlur={handleSave} // Save when the input loses focus
          autoFocus // Automatically focus the input when in edit mode
          className="text-3xl text-white font-bold my-4 bg-transparent border border-white p-2 rounded"
        />
      ) : (
        <p className="text-3xl text-white font-bold my-4">{groupName}</p>
      )}
      <div
        className="cursor-pointer h-7 w-7 rounded-full flex justify-center items-center bg-white"
        onClick={handleEditClick} // Handle edit button click
      >
        <Image src={editLogo} alt="edit logo" className="cursor-pointer h-5 w-5" />
      </div>
    </div>

    <p className="text-lg text-white ">Private group . 217 members</p>

    <div className="lg:w-[60%] w-full ">
    <div className="flex my-4 w-full">
  {groups.map((group, index) => (
    <div
      key={index}
      className={`flex flex-col items-center cursor-pointer ${
        index > 0 ? 'ml-[-13px]' : ''
      }`}
    >
      <div className="w-14 h-14 rounded-3xl overflow-hidden relative border-2 border-black">
        <Image
          src={group.image}
          alt={group.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-3xl"
        />
           {/* Show the ellipsis on the last image */}
           {index === groups.length - 1 && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-3xl">
            <span className="text-white text-xl">...</span>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
<div className="flex md:w-1/4 w-full justify-between items-center gap-x-6">
<button
        type="submit"
        className="group relative md:w-36 w-1/2 px-9  flex justify-center py-3  border bg-transparent   items-center text-white text-lg rounded-2xl gap-x-2"
        onClick={setjoinHandle}
      >
        <Image src={joinedLogo} className="h-7 w-7"/>
        Joined
      </button>
<button
        type="submit"
        className="group relative md:w-36 w-1/2 px-9  flex justify-center py-3  border bg-transparent items-center text-white text-lg rounded-2xl gap-x-2"
        
      >
        <Image src={inviteLogo} className="h-7 w-7"/>
        Invite
      </button>
</div>

<div className="w-full my-6">
  <ul className="w-full flex gap-x-2  justify-between">
    <li className="text-white  text-lg cursor-pointer bg-[#3A3B3D] rounded-full p-4">Reels</li>
    <li className="text-white  text-lg cursor-pointer bg-[#3A3B3D] rounded-full p-4">Photo</li>
    <li className="text-white  text-lg cursor-pointer bg-[#3A3B3D] rounded-full p-4">About</li>
    <li className="text-white  text-lg cursor-pointer bg-[#3A3B3D] rounded-full p-4">Featured</li>
    <li className="text-white  text-lg cursor-pointer bg-[#3A3B3D] rounded-full p-4">Videos</li>
  </ul>
</div>

<div className="w-full">
<div className="flex items-center justify-between my-4 w-full">
        <div className="flex items-center gap-x-3 w-full j">
          <div className="h-16 w-16 border p-1 rounded-full relative overflow-hidden">
            <Image
              src={katreen}
              alt="Katreen"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 p-1 rounded-full"
            />
          </div>
          <div className="w-full ">
          <input type="text" className="p-4 text-white border rounded-full bg-transparent w-full" placeholder="Write Something" />
          </div>
        </div>
       
      </div>
</div>

<div className="flex justify-end gap-x-4 items-center">
<button
        type="submit"
        className="group relative  w-1/2 px-9  flex justify-center py-3  border bg-[#3A3B3D]   items-center text-white text-lg rounded-2xl gap-x-2"
        
      >
        
        Photos
      </button>
<button
        type="submit"
        className="group relative w-1/2 px-9  flex justify-center py-3  border bg-[#3A3B3D] items-center text-white text-lg rounded-2xl gap-x-2"
        
      >
   
        Videos
      </button>
</div>

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


    <div className="w-[35%] h-[280px] bg-[#222020] absolute top-24 right-2 lg:block hidden p-2 rounded-2xl">
<h2 className="text-white font-bold text-3xl ">About me</h2>
<p className="text-white text-sm my-2">Lorem ipsum dolor sit amet consectetur. Eleifend posuere nunc ac semper aliquet velit nullam tincidunt pellentesque. Read More</p>
<h3 className="text-white text-3xl ">Audiance</h3>
<div className="flex  my-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-sm text-gray-100">
                         Public 
                         <p className="text-white text-opacity-35">Anyone on or off Unleashed Desires</p>
                        </label>
                      </div>

    </div>
      </div>
            </div>
          </div>
        </div>
      </div>

     </div>

     {join === true && (   <div className="w-[418px] h-[347.58px)] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center p-4 w-full" >
       <h3 className="text-white font-bold text-3xl">Request Join</h3>
       <p className="text-white font-md my-2">Private group . 217 members</p>

       <button
       onClick={setRulesHandle}
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-3"
      
      >
        join
      </button>

       <button
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border text-sm font-medium rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-600 focus:ring-indigo-500 "
      
      >
        cancel
      </button>
        </div >
       
      </div>)}
     {Rules === true && (   <div className="w-[533px] h-[491.59px)] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center p-4 w-full" >
       <h3 className="text-white font-bold text-3xl">Group Rules</h3>
     <ul className="text-white flex flex-col gap-y-3 my-2 ">
      <li className="relative pl-6 before:content-['\2022'] before:absolute before:left-0 before:text-white before:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing.  
      </li>
      <li className="relative pl-6 before:content-['\2022'] before:absolute before:left-0 before:text-white before:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing.  
      </li>
      <li className="relative pl-6 before:content-['\2022'] before:absolute before:left-0 before:text-white before:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing.  
      </li>
      <li className="relative pl-6 before:content-['\2022'] before:absolute before:left-0 before:text-white before:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing.  
      </li>
      <li className="relative pl-6 before:content-['\2022'] before:absolute before:left-0 before:text-white before:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing.  
      </li>
  
     </ul>

       <button
       onClick={setQuestionsHandle}
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-3"
      
      >
        Accept
      </button>

       <button
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border text-sm font-medium rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-600 focus:ring-indigo-500 "
      
      >
        cancel
      </button>
        </div >
       
      </div>)}
     {Questions === true && (   <div className="w-[573px] h-[491.59px)] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center p-4 w-full" >
        <section className="py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className={`accordion p-2 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl bg-[#3A3B3D] ${activeIndex === 0 ? 'bg-[#3A3B3D]' : ''}`}
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-white w-full transition duration-500 text-left hover:text-indigo-600"
              aria-controls="basic-collapse-one-with-arrow"
              onClick={() => toggleAccordion(0)}
            >
              <h5>Q1: Lorem ipsum dolor sit amet?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${activeIndex === 0 ? 'rotate-180' : ''}`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 0 && (
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-one-with-arrow"
              >
                <p className="text-base text-white leading-6 bg-[#494949] p-2 rounded-3xl">
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Volutpat lacus pretium enim lacus sit amet at lectus amet.
                </p>
              </div>
            )}
          </div>

          <div
            className={`accordion p-2 my-4 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl bg-[#3A3B3D] ${activeIndex === 1 ? 'bg-[#3A3B3D]' : ''}`}
            id="basic-heading-two-with-arrow w-full"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-white w-full transition duration-500 text-left hover:text-indigo-600"
              aria-controls="basic-collapse-two-with-arrow w-full"
              onClick={() => toggleAccordion(1)}
            >
              <h5 className="w-[100%]">Q2: Lorem ipsum dolor sit amet?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${activeIndex === 1 ? 'rotate-180' : ''}`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 1 && (
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow"
              >
                <p className="text-base text-white leading-6 bg-[#494949] p-2 rounded-3xl">
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Volutpat lacus pretium enim lacus sit amet at lectus amet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
                                            
     

       <button
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-3"
      
      >
        Accept
      </button>

       <button
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border text-sm font-medium rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-600 focus:ring-indigo-500 "
      
      >
        cancel
      </button>
        </div >
       
      </div>)}
    </>
  );
};

export default GroupInfo;
