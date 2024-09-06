'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"


import uploadLogo from "../../../../../public/logos/uploadLogo1.svg";
import loader from "../../../../../public/logos/loader.png";
import Image from "next/image"
import { useState } from "react"
const CreateBusinessProfile = () => {

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
        
        <h2 className="text-white text-2xl font-semibold">Create Business Profile</h2>
<div className="my-4 flex justify-between flex-wrap gap-5 px-2">
<div className="sm:w-[48%]  w-full ">
<label className="text-white text-xl"> Business Name</label>
<input type="text" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="Business Name"/>
</div>
<div className="sm:w-[48%]  w-full">
<label className="text-white text-xl">Website</label>
<input type="text" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="Website"/>
</div>
<div className="sm:w-[48%]  w-full">
<label className="text-white text-xl"> Location</label>
<input type="text" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="Location"/>
</div>
<div className="sm:w-[48%]  w-full">
<label className="text-white text-xl"> Phone 
    Number
</label>
<input type="text" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="(209) 555-0104"/>
</div>
<div className="sm:w-[48%]  w-full">
<label className="text-white text-xl"> Email</label>
<input type="Email" className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4" placeholder="info@email.com"/>
</div>
<div className="w-full">
  <label className="text-white text-xl">Description</label>
  <textarea
    className="py-4 w-full bg-transparent rounded-2xl border my-2 px-4 text-white"
    placeholder="Description"
    rows="4" // Adjust the number of rows to change the height
  ></textarea>
</div>

<div className="flex justify-between items-center w-full">
<div className=" w-full h-[237.11px] p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center border-dotted border-4" style={{ backgroundImage: `url(${frontSideImageURL})` }}>
<label htmlFor="uploadFrontSide" className="cursor-pointer ">
                    
                  <div className="flex flex-col justify-center items-center ">
                    <Image src={uploadLogo} alt="logo" />
                    <h4 className="text-white font-bold my-4">
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

export default CreateBusinessProfile
