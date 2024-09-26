'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"

import laptop2 from "../../../../../public/images/laptop.jpeg"
import uploadLogo from "../../../../../public/logos/uploadLogo1.svg";
import loader from "../../../../../public/logos/loader.png";
import Image from "next/image"
import { useState } from "react"
import { CiHeart } from "react-icons/ci";

import { CiStar } from "react-icons/ci";
const ProductDetails = () => {

  
  
  

   
  return (
    <>
    <div >
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
        
   <div className="h-[319px] w-[40%] relative rounded-2xl">
<Image src={laptop2} 
layout="fill"
className="absolute inset-0 rounded-2xl"
/>

<div className="h-10 w-10 bg-[#724EEB] rounded-full absolute top-3 left-3 flex justify-center items-center">
<CiHeart className="text-white w-6 h-6"/>
</div>
   </div>
   <div className=" my-4 w-[40%]">
<div  className="flex justify-between items-center  w-full">
  
<h1 className="text-white text-2xl">Smart Laptop </h1>
    <h1 className="text-white text-2xl">$230.00 </h1>
</div>

<div className="my-2 flex justify-start items-center ">
<CiStar className="text-white w-6 h-6 " />
<p className="text-white ">5.0(234 reviews)</p>

</div>
<h3 className="text-white text-xl font-medium my-4">Specifications</h3>


<div className="h-[48.17px] max-w-fit  rounded-2xl px-4 py-2 text-white border">
256 Hard Disk
</div>

<h3 className="text-white text-xl font-medium my-4">Product Description</h3>

<p className="text-white  my-2">Introducing the smart laptop , all-new 2023 design for a minimalist look with great colors. The smart alptop 8GB is an addition to the smart laptop series and is a perfect choice Read More</p>

<button
        type="submit"
        className="group relative w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        // onClick={handleLoginClick}
      >
        Add to Cart
      </button>

    
   </div>
   
  
     
        </div>

      
      </div>
    </div>
    </div>
 
  </>
  )
}

export default ProductDetails
