'use client';
import Image from "next/image";
import homeLogo from "../../public/logos/sidebar/homeLogo.svg";
import businessLogo from "../../public/logos/sidebar/businessLogo.svg";
import chatLogo from "../../public/logos/sidebar/chatLogo.svg";
import eventLogo from "../../public/logos/sidebar/eventLogo.svg";
import GroupLogo from "../../public/logos/sidebar/GroupLogo.svg";
import nextLogo from "../../public/logos/sidebar/nextLogo.svg";
import profileLogo from "../../public/logos/sidebar/profileLogo.svg";
import settingsLogo from "../../public/logos/sidebar/settingsLogo.svg";
import storeLogo from "../../public/logos/sidebar/storeLogo.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

const SideBar = () => {
  const [activeLink, setActiveLink] = useState('/mainDashboard-Home');
  const [isCreateVisible, setCreateVisible] = useState(false);
  const [createGroup, setCreateGroup] = useState(false);
  const router = useRouter();

  const handleLinkClick = (path) => {
    setActiveLink(path);
    // if (path === '/groupPage') {
    //   setCreateVisible(!isCreateVisible);
    // } else {
    //   setCreateVisible(false);
    // }
  
    setActiveLink(path);
    router.push(path);
   
  };
  const handleLinkClickCreate = () => {

      setCreateGroup(!createGroup);
    
   
  };


const handleNewGroup=(e)=>{
  e.preventDefault();
  router.push("/createGroupPage");
}
const handleNewPost=(e)=>{
  e.preventDefault();
  router.push("/createPostForGroup");
}
  return (
    <>
      <div className="relative h-[82vh] lg:w-[20%] w-full">
        <div className="h-full w-full">
          <aside id="default-sidebar" className="z-40 h-full transition-transform -translate-x-full sm:translate-x-0 hidden lg:block" aria-label="Sidebar">
            <div className="h-full px-6 py-3 overflow-y-auto no-scrollbar bg-black dark:bg-gray-800">
              <ul className="space-y-3 font-medium">
                <li>
                  <Link href="/mainDashboard-Home" onClick={() => handleLinkClick('/mainDashboard-Home')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/mainDashboard-Home' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={homeLogo} alt="Home Logo" />
                    <span className="ms-6">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/business" onClick={() => handleLinkClick('/business')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/business' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={businessLogo} alt="Business Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Business</span>
                  </Link>
                </li>
                <li>
      <div className="flex flex-col">
        <div className={`flex items-center justify-between p-2 text-white rounded-lg dark:text-white   ${activeLink === '/groupPage' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
          <Link href="/groupPage" onClick={() => handleLinkClick('/groupPage')} className={`flex items-center text white justify-center`}>
            <Image src={GroupLogo} alt="Groups Logo" />
            <span className="flex-1 ms-6 whitespace-nowrap text-white ">Groups</span>
          </Link>
          <button onClick={() => setCreateVisible(!isCreateVisible)} className="focus:outline-none ms-2">
            {isCreateVisible ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
          </button>
        </div>

        {isCreateVisible  && (
          <Link href="#"   onClick={handleLinkClickCreate} className={`flex items-center hover:bg-[#724EEB] p-2 text-white rounded-lg dark:text-white ms-12 mt-2  group`}>
            <span className="flex-1 whitespace-nowrap">Create</span>
          </Link>
        )}
      </div>
    </li>
                <li>
                  <Link href="/store" onClick={() => handleLinkClick('/store')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/store' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={storeLogo} alt="Store Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Store</span>
                  </Link>
                </li>
                <li>
                  <Link href="/events" onClick={() => handleLinkClick('/events')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/events' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={eventLogo} alt="Events Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Events</span>
                  </Link>
                </li>
                <li>
                  <Link href="/chat" onClick={() => handleLinkClick('/chat')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/chat' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={chatLogo} alt="Chat Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Chat</span>
                  </Link>
                </li>
                <li>
                  <Link href="/profile" onClick={() => handleLinkClick('/profile')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/profile' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={profileLogo} alt="Profile Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href="/settings" onClick={() => handleLinkClick('/settings')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/settings' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={settingsLogo} alt="Settings Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <div>
        <div className="bg-black dark:bg-gray-800 block lg:hidden w-full absolute left-0 bottom-0 right-0 z-50">
          <ul className="font-medium flex items-center justify-between gap-x-2 w-full">
            <li>
              <Link href="/mainDashboard-Home" onClick={() => handleLinkClick('/mainDashboard-Home')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/mainDashboard-Home' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={homeLogo} alt="Home Logo" className="h-5 w-5" />
                <span className="">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/chat" onClick={() => handleLinkClick('/chat')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/chat' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={chatLogo} alt="Chat Logo" className="h-5 w-5" />
                <span className="">Chat</span>
              </Link>
            </li>
            <li>
              <Link href="/business" onClick={() => handleLinkClick('/business')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/business' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={businessLogo} alt="Business Logo" className="h-5 w-5" />
                <span className="">Business</span>
              </Link>
            </li>
            <li>
              <Link href="/store" onClick={() => handleLinkClick('/store')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/store' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={storeLogo} alt="Store Logo" className="h-5 w-5" />
                <span className="">Store</span>
              </Link>
            </li>
            <li>
              <Link href="/events" onClick={() => handleLinkClick('/events')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/events' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={eventLogo} alt="Events Logo" className="h-5 w-5" />
                <span className="">Events</span>
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={() => handleLinkClick('/profile')} className={`flex flex-col items-center justify-center text-white rounded-lg dark:text-white ${activeLink === '/profile' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group p-2`}>
                <Image src={profileLogo} alt="Profile Logo" className="h-5 w-5" />
                <span className="">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

  {createGroup&&    <div className="w-[716px] h-[391px] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center p-4 w-full cursor-pointer hover:bg-[#3c3c3c]" onClick={handleNewGroup}>
        <div className="" >
            <p className="text-white text-2xl my-5">Create a Group</p>
            <p className="text-white text-md ">Create  a public or private group.</p>
          </div>
<Image src={nextLogo} />
        </div >
        <div className="flex justify-between items-center p-4 w-full cursor-pointer hover:bg-[#3c3c3c]"  onClick={handleNewPost} >
        <div className="">
            <p className="text-white text-2xl my-5">Post in a Group</p>
            <p className="text-white text-md ">Post in a group you’ve joined</p>
          </div>
<Image src={nextLogo}/>
        </div>
      </div>}
    </>
  );
};

export default SideBar;
