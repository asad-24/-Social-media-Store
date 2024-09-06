"use client";

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import event from "../../../../../public/logos/events.svg";
import unleashedLogo from "../../../../../public/logos/ICONGradient.svg";
import location from "../../../../../public/logos/location.svg";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";
import RippleButton from "@/components/RippleButton";
import { useState } from "react";
const SearchingEvents = () => {
  const BusinessEventPhotos = [eventPic, eventPic2, eventPic2];
  const EventPhotos = [eventPic2, eventPic2, eventPic];

  const [isBusiness, setIsBusiness] = useState(true);

  const toggleForm = () => {
    setIsBusiness(!isBusiness);
  };
  return (
    <>
      <FullHeader />
      <div className="flex  items-center bg-black ">
        <SideBar />
        <div
          className=" md:h-[82vh] h-[90vh] absolute lg:w-[80%] w-full right-0 md:top-[18vh] top-[10vh]  overflow-hidden pb-10"
          style={{
            background: "linear-gradient(200deg, black, #1B1919)",
            // Black gradient
          }}
        >
          <div className="  md:p-14 p-1 pb-18 overflow-y-auto h-full no-scrollbar">
            <div className="flex justify-start items-center gap-x-2">
              <Image src={unleashedLogo} className="h-14 w-14" />
              <div>
                <p className="text-white text-xl  ">Find events near</p>
                <p className="text-white text-2xl font-bold ">
                  California, USA
                </p>
              </div>
            </div>

            <div className=" py-3  shadow rounded-lg md:px-10 px-2">
              <div className="sm:mx-auto sm:w-full sm:max-w-md py-1 bg-black rounded-md flex px-1">
                <span onClick={() => setIsBusiness(true)} className="w-[100%]">
                  <RippleButton
                    text="Business Events"
                    px={6}
                    py={3}
                    width="100%"
                    bgColor={isBusiness ? "bg-[#724EEB]" : "bg-transparent"}
                  />
                </span>
                <span onClick={() => setIsBusiness(false)} className="w-[100%]">
                  <RippleButton
                    text="Events"
                    px={6}
                    py={3}
                    width="100%"
                    bgColor={!isBusiness ? "bg-[#724EEB]" : "bg-transparent"}
                  />
                </span>
              </div>
              <div className="w-full py-2">
                <h2 className="my-6 text-start text-2xl font-semibold text-white">
                  {isBusiness
                    ? "Suggestion Business Events for you"
                    : "Suggestion Events for you"}
                </h2>
                {/* <h4 className="mt-1 text-start text-lg text-white">
                  {Business ? "Welcome Back" : ""}
                </h4> */}
              </div>
              <div className="space-y-4">
                {isBusiness ? (
                  <>
                    {/* Business Form */}

                    <div className="flex w-full flex-wrap justify-between gap-y-6 gap-x-2 ">
                      {BusinessEventPhotos.map((imagesrc, index) => (
                        <div className="bg-[#191a1b] h-[175px] md:w-[48%] w-full rounded-3xl flex items-center gap-x-3 p-3">
                          <div className="relative">
                            <Image
                              src={imagesrc}
                              className=" h-36 w-28 rounded-2xl"
                            />
                            <div className="absolute top-3 left-3 h-10 w-10 bg-white rounded-xl flex flex-col justify-center items-center">
                              <p className="h-4 font-semibold text-black">10</p>
                              <p className=" text-black">Nov</p>
                            </div>
                          </div>
                          <div className="flex flex-col  gap-y-5">
                            <p className="text-white font-medium text-2xl">
                              {" "}
                              Business Event Name
                            </p>

                            <div className="flex justify-start items-center gap-x-2">
                              <Image src={location} />
                              <p className="text-white text-sm ">
                                California, CA
                              </p>
                            </div>
                            <button
                              type="submit"
                              className="group relative  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Sign Up Form */}
                    <div className="flex flex-col  gap-y-2">
                      <div className="flex w-full flex-wrap justify-between gap-y-6 gap-x-2 ">
                        {EventPhotos.map((imagesrc, index) => (
                          <div className="bg-[#191a1b] h-[175px] md:w-[48%] w-full rounded-3xl flex items-center gap-x-3 p-3">
                            <div className="relative">
                              <Image
                                src={imagesrc}
                                className=" h-36 w-28 rounded-2xl"
                              />
                              <div className="absolute top-3 left-3 h-10 w-10 bg-white rounded-xl flex flex-col justify-center items-center">
                                <p className="h-4 font-semibold text-black">
                                  10
                                </p>
                                <p className=" text-black">Nov</p>
                              </div>
                            </div>
                            <div className="flex flex-col  gap-y-5">
                              <p className="text-white font-medium text-2xl">
                                Event Name
                              </p>

                              <div className="flex justify-start items-center gap-x-2">
                                <Image src={location} />
                                <p className="text-white text-sm ">
                                  California, CA
                                </p>
                              </div>
                              <button
                                type="submit"
                                className="group relative  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Details
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchingEvents;
