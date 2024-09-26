'use client'

import FullHeader from '@/components/FullHeader'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import laptop2 from "../../../../../public/images/laptop.jpeg"
import { RiDeleteBin5Line } from "react-icons/ri";
const Cart = () => {
    const notification = [laptop2,laptop2,laptop2,laptop2,laptop2,laptop2,laptop2]

    const [address , setIsAddress]= useState(true);
    const [ChangeAddress , setIsChangeAddress]= useState(true);
  return (
    <>
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
        <div className="  md:p-8 p-1 pb-10 overflow-y-auto h-full no-scrollbar">
<div>
          
{ address ?(<div>
   <h2 className='text-white text-3xl font-medium my-6'>Cart</h2>
     
     {notification.map((imgSrc, index) => (
 <div 
   className='w-full h-[179px] bg-[#221D1C] rounded-lg flex md:gap-x-8 gap-x-4 items-center md:px-6 px-2 my-3' 
   key={index}
 >
  <div className='w-full  rounded-lg  md:gap-x-8 gap-x-4 flex items-center md:px-6 px-2 my-3'>
  <div className="w-40 h-40 rounded-2xl overflow-hidden relative ">
     <Image
       src={imgSrc}
       alt="Profile"
       layout="fill"
       objectFit="cover"
       className="absolute inset-0 p-1  rounded-2xl"
     />
   </div>

   <div>
   <div  className="flex justify-between items-center  w-full">
 
 <h1 className="text-white text-2xl">Smart Laptop </h1>
    
 </div>
 
 <div className=" flex justify-start items-center my-4 ">
 <CiStar className="text-white w-6 h-6 " />
 <p className="text-white ">5.0(234 reviews)</p>
 
 </div>
 <h1 className="text-white text-2xl">$230.00 </h1>
   </div>
  </div>

   <div>
<RiDeleteBin5Line className='text-red-600 h-10 w-10'/>
   </div>
 </div>
))}

<button
        type="submit"
        className="group relative md:w-1/3 w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        onClick={()=>setIsAddress(!address)}
      >
        buy
      </button>
   </div>
  ):(
<>

  {ChangeAddress?( <div>
    <h1 className='text-white text-4xl'>My Address</h1>

    <div className="flex  my-10">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-2xl text-gray-100">
                        Andy Andrew
                         <p className="text-white text-opacity-35">+1 3712 3789</p>
                         <p className="text-white text-opacity-35">711 Leavenworth Apt. # 47 San Francisco, CA 94109</p>
                        </label>
                
                      </div>
                      <button
        type="submit"
        className="group relative md:w-1/4 w-1/2 flex justify-center py-3 px-4 text-sm font-medium rounded-full text-[#724EEB] hover:text-white bg-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7 border border-indigo-700 "
        onClick={()=>setIsChangeAddress(!ChangeAddress)}
      >
       Change Address
      </button>
    <div className="flex  my-10">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300  bg-transparent rounded-full p-1"  />
                        <label htmlFor="remember_me" className="ml-3 block text-2xl text-gray-100">
                        Elevenia Kalia
                         <p className="text-white text-opacity-35">+1 3712 3789</p>
                         <p className="text-white text-opacity-35">711 Leavenworth Apt. # 47 San Francisco, CA 94109</p>
                        </label>
                
                      </div>
                      <button
        type="submit"
        className="group relative md:w-1/4 w-1/2 flex justify-center py-3 px-4 text-sm font-medium rounded-full text-[#724EEB] hover:text-white bg-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7 border border-indigo-700 "
        onClick={()=>setIsChangeAddress(!ChangeAddress)}
      >
       Change Address
      </button>



      <button
        type="submit"
        className="group relative md:w-1/3 w-1/2  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-12"
       
      >
        Select Address
      </button>
   </div>):(
    <div>
<h1 className="text-white text-3xl font-medium">New Address</h1>
<div className="my-4 flex justify-between flex-wrap gap-5 px-2">
<div className="sm:w-[48%]  w-full ">
<label className="text-white text-md"> Full Name</label>
<input type="text" className="py-4 w-full bg-[#272424] border-none  rounded-3xl border my-2 px-4" placeholder="Enter Full Name / Home / Office "/>
</div>
<div className="sm:w-[48%]">
<label for="countries" class="block mb-2  font-medium  text-white text-md">State</label>
  <select id="countries" class="py-4 w-full bg-[#272424] border-none rounded-3xl border my-2 px-4 text-white text-lg">
    <option selected>Select State</option>
    <option value="Public">red</option>
    <option value="private">black</option>
    <option value="friends">yellow</option>
    
  </select>
</div>
<div className="sm:w-[48%]">
<label for="countries" class="block mb-2  font-medium  text-white text-md">Country</label>
  <select id="countries" class="py-4 w-full bg-[#272424] border-none  rounded-3xl border my-2 px-4 text-white text-lg">
    <option selected>Select Country</option>
    <option value="Public">red</option>
    <option value="private">black</option>
    <option value="friends">yellow</option>
    
  </select>
</div>


<div className="sm:w-[48%]  w-full">
<label className="text-white text-xl"> Zip Code</label>
<input type="number" className="py-4 w-full bg-[#272424] border-none  rounded-3xl border my-2 px-4" placeholder="Zip Code"/>
</div>
<div className="sm:w-[48%]">
  <label className="text-white text-xl">Detail Address</label>
  <textarea
    className="py-4 w-full bg-[#272424] border-none  rounded-3xl border my-2 px-4 text-white"
    placeholder="Detail Address"
    rows="4" // Adjust the number of rows to change the height
  ></textarea>
</div>
<div className="sm:w-[48%]">
<label for="countries" class="block mb-2  font-medium  text-white text-md">City</label>
  <select id="countries" class="py-4 w-full bg-[#272424] border-none  rounded-3xl border my-2 px-4 text-white text-lg">
    <option selected>Select City</option>
    <option value="Public">red</option>
    <option value="private">black</option>
    <option value="friends">yellow</option>
    
  </select>
</div>




<button
        type="submit"
        className="group relative md:w-1/3 w-1/2 mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
        // onClick={handleLoginClick}
      >
        change / Update
      </button>


</div>
    </div>
   )
}
</>
  )
}  
</div>
       
        </div>
      </div>
    </div>
  </>
  )
}

export default Cart
