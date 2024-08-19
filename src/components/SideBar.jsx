'use client';
import Image from "next/image";
import homeLogo from "../../public/logos/sidebar/homeLogo.svg";
import businessLogo from "../../public/logos/sidebar/businessLogo.svg";
import chatLogo from "../../public/logos/sidebar/chatLogo.svg";
import eventLogo from "../../public/logos/sidebar/eventLogo.svg";
import GroupLogo from "../../public/logos/sidebar/GroupLogo.svg";
import profileLogo from "../../public/logos/sidebar/profileLogo.svg";
import settingsLogo from "../../public/logos/sidebar/settingsLogo.svg";
import storeLogo from "../../public/logos/sidebar/storeLogo.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const SideBar = () => {
  const [activeLink, setActiveLink] = useState('/mainDashboard-Home');
  const router = useRouter();

  const handleLinkClick = (path) => {
    setActiveLink(path);
    router.push(path);
  };

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
                  <Link href="/groups" onClick={() => handleLinkClick('/groups')} className={`flex items-center p-2 text-white rounded-lg dark:text-white ${activeLink === '/groups' ? 'bg-[#724EEB]' : 'hover:bg-[#724EEB] dark:hover:bg-gray-700'} group`}>
                    <Image src={GroupLogo} alt="Groups Logo" />
                    <span className="flex-1 ms-6 whitespace-nowrap">Groups</span>
                  </Link>
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
    </>
  );
};

export default SideBar;
