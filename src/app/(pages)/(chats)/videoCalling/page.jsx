"use client";

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import { useState, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";
const VideoCalling = () => {
    const [stream, setStream] = useState(null);
    const [peerStream, setPeerStream] = useState(null);
    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    // Function to start the video call
    const startCall = async () => {
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

    return (
        <div>
            <FullHeader />
            <div className="flex items-center bg-black ">
                <SideBar />
                <div
                    className={`md:h-[82vh] h-[90vh] absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[10vh] overflow-hidden`}
                    style={{
                        background: "linear-gradient(200deg, black, #1B1919)",
                    }}
                >
                    <div className="md:p-8 p-1  w-full h-full">
                        <div className="relative w-full h-full flex justify-center">
                            <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full"  style={
                    {border:"2px solid red"}
                            }/ >
                            <div className="absolute bottom-4 right-4 w-[170px] h-[225px] bg-gray-800 p-2 rounded">
                                <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-auto rounded" />
                            </div>
                            <div className="mt-4 flex justify-center space-x-4 absolute bottom-4 ">
                                <p></p>
                            <button onClick={startCall} className="bg-[#a84e68] h-16 w-16  p-2 rounded-full text-white flex justify-center items-center">
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
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCalling;
