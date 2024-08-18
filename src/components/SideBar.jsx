import Image from "next/image"
import homeLogo from "../../public/logos/sidebar/homeLogo.svg"
import businessLogo from "../../public/logos/sidebar/businessLogo.svg"
import chatLogo from "../../public/logos/sidebar/chatLogo.svg"
import eventLogo from "../../public/logos/sidebar/eventLogo.svg"
import GroupLogo from "../../public/logos/sidebar/GroupLogo.svg"
import profileLogo from "../../public/logos/sidebar/profileLogo.svg"
import settingsLogo from "../../public/logos/sidebar/settingsLogo.svg"
import storeLogo from "../../public/logos/sidebar/storeLogo.svg"

const SideBar = () => {
  return (
    <>
   
      <div className="relative md:h-[82vh] h-[87vh] lg:w-[20%] w-full " >
        <div className="h-full w-full ">
     
        <aside id="default-sidebar" class="z-40  h-full transition-transform -translate-x-full sm:translate-x-0 hidden lg:block" aria-label="Sidebar">
   <div class="h-full px-6 py-3 overflow-y-auto no-scrollbar bg-black dark:bg-gray-800">
      <ul class="space-y-3 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
              <Image src={homeLogo} />
               <span class="ms-6">Home</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={businessLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Business</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={GroupLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Groups</span>
              
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={storeLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Store</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={eventLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Events</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={chatLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Chat</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={profileLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Profile</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group">
            <Image src={settingsLogo} />
               <span class="flex-1 ms-6 whitespace-nowrap">Setting</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
<div class="  bg-black dark:bg-gray-800 block lg:hidden w-full absolute left-0 right-0 bottom-0 z-50 ">
      <ul class=" font-medium flex items-center justify-between gap-x-2 w-full">
         <li className=" ">
            <a href="#" class="flex flex-col items-center justify-center text-white rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
              <Image src={homeLogo} className="h-5 w-5"/>
               <span class="">Home</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex flex-col items-center justify-center text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
            <Image src={chatLogo} className="h-5 w-5"/>
               <span class="">Chat</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex flex-col items-center justify-center text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
            <Image src={businessLogo} className="h-5 w-5" />
               <span class=" ">Business</span>
               
            </a>
         </li>
        
         <li>
            <a href="#" class="flex flex-col items-center justify-center text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
            <Image src={storeLogo} className="h-5 w-5" />
               <span class="">Store</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex flex-col items-center justify-center text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
            <Image src={eventLogo} className="h-5 w-5" />
               <span class="">Events</span>
            </a>
         </li>
       
         <li>
            <a href="#" class="flex flex-col items-center justify-center text-white  rounded-lg dark:text-white hover:bg-[#724EEB] dark:hover:bg-gray-700 group p-2">
            <Image src={profileLogo} className="h-5 w-5"/>
               <span class="">Profile</span>
            </a>
         </li>
         
      </ul>
   </div>
        </div>
</div>
     
    </>
  )
}

export default SideBar
