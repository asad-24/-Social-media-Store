'use client'


import Image from "next/image"
import headerLogo from "../../public/logos/unleashedesires-logo.svg"
import headerLogo1 from "../../public/images/mainLogo.png"
import searchIcon from "../../public/logos/Search.svg"
import mobileSearch from "../../public/logos/mobileSearch.svg"
import plusIcon from "../../public/logos/plusIcon.svg"
import back from "../../public/logos/back.svg"
import notification from "../../public/logos/notificationLogo.svg"
import settingsLogo from "../../public/logos/sidebar/settingsLogo.svg"
import chatLogo from "../../public/logos/IconAppChat.svg"
import { useState } from "react"

const FullHeader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchBar = () => {
      setIsSearchVisible(!isSearchVisible);
    };

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <>
     
   <div className="hidden md:block" >
   <div className="bg-black h-[18vh] flex justify-between items-center px-4 "
    >
  <Image src={headerLogo1} className="w-[15%]" />
<div className="w-[70%] flex justify-between  "
>
<div className="flex justify-between items-center border border-2-purple-50  w-[60%] h-[55px] rounded-full bg-transparent p-2">
    <input type="text" className="p-2 border-none bg-transparent h-full outline-none text-white" placeholder="Explore"  />
   <div className="h-10 w-10 bg-[#724EEB] rounded-full flex justify-center items-center">
   <Image src={searchIcon} alt="logo" />
   </div>
</div>
<div className="flex justify-center items-center gap-x-2">
    
    <Image src={notification} />
   <div className="relative">
   <div  className="h-10 w-10 bg-[rgb(114,78,235)] rounded-xl flex justify-center items-center">
    <Image src={chatLogo}/>
    </div>
    <div className="absolute top-[-6px] right-[-6px]">
    <div  className="h-4 w-4 bg-[rgb(114,78,235)] rounded-full flex justify-center items-center border">
    <p className="text-white font-semibold">3</p>
    </div>
    </div>
   </div>

   <div className="flex flex-col items-center justify-center ms-2">
      <div
        className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-600 bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-[10px] text-gray-400">
            No Image
          </div>
        )}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <label className="cursor-pointer text-white bg-transparent py-2 rounded-md text-[7px]">
              Choose photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        )}
        
      </div>

     
    </div>


 
</div>
</div>

    </div>
   </div>
   <div className="md:hidden block">
   <div className="bg-black h-[13vh] flex justify-between items-center px-4 "
  >

<div className=" flex justify-between items-center w-full ">
<div className=" flex justify-start items-center w-[60%] gap-x-4  ">
<p className="text-white" >Explore</p>
<p className="text-white">Friends</p>
<p className="text-white">Following</p>
</div>

          
<div className={`fixed top-0 left-0 w-full h-[55px] bg-black p-2 ${isSearchVisible ? 'block' : 'hidden'}`}>
 <div className="flex gap-x-2">
  <Image src={back} onClick={toggleSearchBar}  />

<div className="flex justify-between items-center border border-2-purple-50  w-full h-[55px] rounded-full bg-transparent p-2 ">
    <input type="text" className="p-2 border-none bg-transparent h-full outline-none text-white" placeholder="Explore"  />
   <div className="h-10 w-10 bg-[#724EEB] rounded-full flex justify-center items-center">
   <Image src={searchIcon} alt="logo" />
   </div>
</div>
</div>
</div>
<div className="flex justify-center items-center gap-x-4">
<Image src={settingsLogo} className="h-8 w-8"/>
    <Image src={notification} className="h-16 w-16"/>
    <Image src={mobileSearch} className="h-8 w-8 cursor-pointer" onClick={toggleSearchBar}/>
    <Image src={plusIcon} className="h-8 w-8"/>

   {/* <div className="relative">
   <div  className="h-10 w-10 bg-[rgb(114,78,235)] rounded-xl flex justify-center items-center">
    <Image src={sett}/>
    </div>
    <div className="absolute top-[-6px] right-[-6px]">
    <div  className="h-4 w-4 bg-[rgb(114,78,235)] rounded-full flex justify-center items-center border">
    <p className="text-white font-semibold">3</p>
    </div>
    </div>
   </div> */}

   {/* <div className="flex flex-col items-center justify-center ms-2">
      <div
        className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-600 bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-[10px] text-gray-400">
            No Image
          </div>
        )}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <label className="cursor-pointer text-white bg-transparent py-2 rounded-md text-[7px]">
              Choose photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        )}
        
      </div>

     
    </div> */}


 
</div>
</div>

    </div>
   </div>

   
    </>
  )
}

export default FullHeader
