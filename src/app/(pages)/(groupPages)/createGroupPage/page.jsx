'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"


import uploadLogo from "../../../../../public/logos/uploadLogo1.svg";
import loader from "../../../../../public/logos/loader.png";
import Image from "next/image"
import { useState } from "react"
const CreateGroupPage = () => {

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
        
        <h2 className="text-white text-2xl font-semibold">Create Group</h2>
<div className="my-4 flex flex-col gap-y-5 px-2">
<label className="text-white text-xl">  Group Name</label>
<input type="text" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="Group name"/>
<div>
  <label className="text-white text-xl">Description</label>
  <textarea
    className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4 text-white"
    placeholder="Description"
    rows="4" // Adjust the number of rows to change the height
  ></textarea>
</div>

<div className="flex justify-between items-center w-full">
<div className=" md:w-[451px] w-[50%] h-[150px] p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center border-dotted border" style={{ backgroundImage: `url(${frontSideImageURL})` }}>
<label htmlFor="uploadFrontSide" className="cursor-pointer ">
                    
                  <div className="flex justify-center items-center ">
                    <Image src={uploadLogo} alt="logo" />
                    <h4 className="text-[#9E9E9E] font-bold my-4">
                      Upload Image
                    </h4>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'front')}
                      className="hidden"
                      id="uploadFrontSide"
                      required
                    />
                    
                
                  </div>
                  </label>
                </div>

<div className="w-1/3">
<label for="countries" class="block mb-2  font-medium  text-white text-xl">Privacy</label>
  <select id="countries" class="py-4 w-full bg-black rounded-2xl border my-2 px-4 text-white text-lg">
    <option selected>Select Privacy</option>
    <option value="Public">Public</option>
    <option value="private">private</option>
    <option value="friends">friends</option>
    
  </select>
</div>
</div>
<div className="flex justify-between items-center w-full gap-x-4">
<div className="w-1/2">
<label for="countries" class="block mb-2  font-medium  text-white text-xl">Questions</label>
  <select id="countries" class="py-4 w-full bg-black rounded-2xl border my-2 px-4 text-white text-lg">
    <option selected>Select Questions</option>
    <option value="Public">Fiest pet</option>
    <option value="private">Favourite food</option>
    <option value="friends">best friends</option>
    
  </select>
</div>
<div className="flex justify-between items-center w-1/2 mt-4">
    <p className="text-white text-xl">
        Permission
    </p>
    <label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>
</div>
</div>

<button
        type="submit"
        className="group relative md:w-1/3 w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        // onClick={handleLoginClick}
      >
        Create
      </button>


</div>
   
   
  
     
        </div>

      
      </div>
    </div>
    </div>
 
  </>
  )
}

export default CreateGroupPage
