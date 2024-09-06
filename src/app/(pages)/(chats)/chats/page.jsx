"use client";

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import manLogo from "../../../../../public/images/notificationMan.svg";
import istBoy from "../../../../../public/images/1stBoy.svg";
import isGirl from "../../../../../public/images/isGirl.svg";
import blockChat from "../../../../../public/logos/blockChat.svg"
import { CiVideoOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

import { FaVolumeUp } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";

const Chats = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [block, setIsBlock] = useState(false);
  const [videoCall, setVideoCall] = useState(false);

  const menuDropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [peerStream, setPeerStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleBlock = () => {
    setIsBlock(true)
  };
  const handlevideoCall = async () => {
    setVideoCall(true)
    try {
      // Get user's media (video/audio)
      const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(userStream);

      // Display the user's video
      if (localVideoRef.current) {
          localVideoRef.current.srcObject = userStream;
      }

      // Simulate peer's video (in a real scenario, this would come from another user)
      const simulatedPeerStream = userStream;
      setPeerStream(simulatedPeerStream);

      if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = simulatedPeerStream;
      }

  } catch (error) {
      console.error("Error accessing media devices.", error);
  }
  };

  const handleOpenChat = (contact) => {
    setIsOpenChat(true);
    setSelectedChat(contact);
  };

  const handleCloseChat = () => {
    setIsOpenChat(false);
  };

  const handleClickOutside = (e) => {
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(e.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const data = [
    {
      name: "Alice",
      message: "Hooray!!",
      img: manLogo,
      isOnline: true,
      lastSeen: "2 hours ago",
      isTyping: false,
    },
    {
      name: "Martin",
      message: "That ...",
      img: istBoy,
      isOnline: false,
      lastSeen: "3 hours ago",
      isTyping: false,
    },
    {
      name: "Charlie",
      message: "Any ......?",
      img: isGirl,
      isOnline: true,
      lastSeen: "1 hour ago",
      isTyping: true,
    },
  ];

  const [selectedChat, setSelectedChat] = useState(data[0]);

  return (
    <>
    
    <div>
    <FullHeader />
      <div className="flex items-center bg-black ">
        <SideBar />
        <div
          className={`md:h-[82vh] h-[90vh] absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[10vh] overflow-hidden pb-10`}
          style={{
            background: "linear-gradient(200deg, black, #1B1919)",
          }}
        >
          <div className="md:p-8 p-1 pb-18 relative w-full h-full">
            <div className="flex gap-x-2 h-screen overflow-hidden">
              {/* Sidebar */}
              <div
                className={`lg:w-1/3 bg-[#121212] w-full ${
                  isOpenChat ? "hidden lg:block" : "block"
                }`}
              >
                {/* Sidebar Header */}
                <header className="p-4 flex justify-between items-center bg-transparent text-white">
                  <h1 className="text-2xl font-semibold">Inbox (12)</h1>
                </header>

                {/* Contact List */}
                <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                  {data.map((contact, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 my-2 rounded-md ${
                        selectedChat.name === contact.name
                          ? "bg-gray-700"
                          : "hover:bg-gray-800"
                      }`}
                      onClick={() => handleOpenChat(contact)}
                    >
                      <div className="flex items-center mb-4 cursor-pointer p-2 rounded-md">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                          <Image
                            src={contact.img}
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-semibold text-white">
                            {contact.name}
                          </h2>
                          <p className="text-white">{contact.message}</p>
                        </div>
                      </div>
                      <p className="text-white">23min</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Chat Area */}
              <div
                className={`lg:flex-1 bg-[#121212] w-full ${
                  isOpenChat ? "block" : "hidden lg:block"
                }`}
              >
                {/* Chat Header */}
                <header className="bg-transparent p-4 flex items-center justify-between h-20">
                  <div className="bg-transparent p-4 flex items-center space-x-4">
                    <div
                      className="bg-slate-300 h-9 w-9 rounded-xl flex justify-center items-center lg:hidden"
                      onClick={handleCloseChat}
                    >
                      <IoIosArrowBack className="h-7 w-7" />
                    </div>
                    <div className="w-12 h-12">
                      <Image
                        src={selectedChat.img}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold text-white">
                        {selectedChat.name}
                      </h1>
                      <p className="text-sm text-gray-300">
                        {selectedChat.isTyping
                          ? "Typing..."
                          : selectedChat.isOnline
                          ? "Online"
                          : `Last seen ${selectedChat.lastSeen}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <CiVideoOn className="text-white h-10 w-10 cursor-pointer" onClick={handlevideoCall} />
                    <div className="bg-slate-300 h-12 w-12 rounded-xl flex justify-center items-center">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </header>
                <div className="relative w-[80%] mt-0 mx-auto">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-[45%] border-t border-gray-300 "></div>
                    <div className="w-[45%] border-t border-gray-300 ml-auto"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-gray-100">
                      Today
                    </span>
                  </div>
                </div>
                {/* Chat Messages */}
                <div className="h-screen overflow-y-auto p-4 pb-36">
                  {/* Chat messages can be dynamically rendered here */}
                  {/* For example, looping through an array of messages */}
                </div>

                {/* Chat Input */}
                <footer className="bg-transparent p-4 absolute lg:bottom-0 bottom-14 lg:w-[62%] w-full flex justify-center">
                  <div className="flex items-center border rounded-2xl p-2 w-[85%]">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full p-2 rounded-md bg-transparent text-white focus:outline-none"
                    />
                    <IoIosSend className="text-white h-10 w-10" onClick={handleBlock} />
                  </div>
                </footer>
              </div>

            </div>
            {videoCall === true && (  <div className="absolute left-0 top-0 flex justify-center w-full h-full">
                            <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full inset-0 object-cover"  style={
                    {border:"2px solid red"}
                            }/ >
                            <div className="absolute bottom-4 right-4 w-[170px] h-[225px] bg-gray-800 rounded">
                                <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full rounded inset-0 object-cover" />
                            </div>
                            <div className="mt-4 flex justify-center space-x-4 absolute bottom-4 ">
                                <p></p>
                            <button className="bg-[#a84e68] h-16 w-16  p-2 rounded-full text-white flex justify-center items-center">
                            <FaVolumeUp className="h-8 w-8" />
                            </button>
                            <button className="bg-[#a84e68] h-16 w-16  p-2 rounded-full text-white flex justify-center items-center">
                            <FaVideo  className="h-8 w-8" />
                            </button>
                            <button className="bg-[#a84e68] h-16 w-16  p-2 rounded-full text-white flex justify-center items-center">
                            <FaMicrophone className="h-8 w-8" />
                            </button>
                            <button className="bg-[#F75555] h-16 w-16 p-2 rounded-full text-white flex justify-center items-center">
                            <HiPhoneMissedCall className="h-8 w-8" />
                            </button>
                        </div>
                        </div>)}
          </div>
        </div>
      </div>
    </div>

    {block === true && (   <div className="w-[418px] h-[347.58px)] rounded-3xl bg-[#1E1E1E] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center p-4 w-full" >
      
<Image src={blockChat}/>
<p  className="text-white text-center w-[80%]">Account is temporarily
blocked due to sending a lot
of message at one time.
Please wait for sometime.</p>
<button
      
        type="submit"
        className="group relative md:w-1/2 w-full mx-auto flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-3"
      
      >
        Countinue
        </button>
        </div >
       
      </div>)}
  

    
    </>
  );
};

export default Chats;
