
'use client'
import FullHeader from "@/components/FullHeader"
import SideBar from "@/components/SideBar"

import laptop2 from "../../../../../public/images/laptop.jpeg"
import uploadLogo from "../../../../../public/logos/uploadLogo1.svg";
import loader from "../../../../../public/logos/loader.png";
import paypal from "../../../../../public/paypal.svg";
import Image from "next/image"
import { useState } from "react"
import { CiHeart } from "react-icons/ci";

import { CiStar } from "react-icons/ci";


const PaymentSummary = () => {

  
  
  

   
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
        
   

   
  <div className="h-[236.54px] w-[50%] bg-[#272424] rounded-xl border p-7">

        <div className="flex justify-between items-center">
            <p className="text-white font-thin ">Charging Per Hour</p>
            <p  className="text-white font-medium ">$36</p>
        </div>
        <div className="flex justify-between items-center my-7">
            <p className="text-white font-thin ">Subtotal</p>
            <p  className="text-white font-medium ">$36</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4 border-dashed">
            <p className="text-white font-thin ">Fees</p>
       <p  className="text-white font-medium ">$1</p>
        </div>     
        <div className="flex justify-between items-center my-3">
            <p className="text-white font-thin ">Total</p>
       <p  className="text-white font-medium ">$37</p>
        </div>     
  </div>


  <div className="flex justify-between items-center w-[50%] my-10">
            <p className="text-white font-medium ">Payment Method</p>
            <p  className="text-[#2BB360] font-medium cursor-pointer">Change</p>
        </div>


        <div className="h-[100px] w-[50%] bg-[#272424] rounded-xl border p-7">

<div className="flex justify-between items-center">
  <div>
  <p className="text-white text-2xl">Paypal</p>
  <p className="text-white  ">abc123@gmail.com</p>
  </div>
   <Image src={paypal}/>
</div>
    
</div>
     
        </div>

      
      </div>
    </div>
    </div>
 
  </>
  )
}

export default PaymentSummary
