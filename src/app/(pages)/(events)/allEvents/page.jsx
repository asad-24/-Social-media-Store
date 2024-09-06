"use client";

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import event from "../../../../../public/logos/events.svg";
import location from "../../../../../public/logos/location.svg";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";
const MainEventsPage = () => {
  const eventPhotos = [eventPic, eventPic2, eventPic2];
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
          <div className="  md:p-8 p-1 pb-18 overflow-y-auto h-full no-scrollbar">
            <div className="w-full h-[147px] bg-[#724EEB] rounded-2xl p-5">
              <h2 className="text-white font-bold text-2xl">Explore</h2>
              <p className="text-white text-md w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Eu neque vitae turpis
                facilisi eget scelerisque. Mattis tellus nunc tincidunt tortor
                purus.{" "}
              </p>
            </div>

            <input
              type="text"
              className="bg-transparent w-[70%] h-16 rounded-2xl border my-3 p-2"
              placeholder="Search event near you.."
            />

            <input
              type="text"
              className="bg-transparent w-[70%] h-16 rounded-2xl border my-3 p-2"
              placeholder="Saturday, 18 Nov 2023 "
            />

            <div className="flex gap-x-6">
              <div className="bg-white rounded-md w-20 h-14  flex justify-center items-center">
                <Image src={event} />
              </div>

              <button
                type="submit"
                className="group relative md:w-1/3 w-1/2 flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={handlePostClick}
              >
                Search
              </button>
            </div>

            <div className="flex justify-between items-center my-5">
              <h3 className="text-3xl font-bold text-white dark:text-white ">
                Upcoming Events
              </h3>

              <h2 className="text-lg font-bold text-white dark:text-white cursor-pointer">
                See All
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto">
              {eventPhotos.map((imageSrc, index) => {
                return (
                  <div class="flex flex-col bg-[#272424] border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 md:w-[272px] md:mx-1 mx-auto w-full">
                    <Image
                      class="w-full h-auto rounded-2xl p-2"
                      src={imageSrc}
                      alt="Card Image"
                    />
                    <div class="p-2">
                      <div className="flex justify-start items-center gap-x-3 text-white">
                        <p> Sep 29, 2022</p>
                        <p className="mb-3 text-3xl font-bold">.</p>
                        <p className="">10:00 PM</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-white dark:text-white">
                          Event Name
                        </h3>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex justify-start items-center gap-x-2">
                          <Image src={location} />
                          <p className="text-white text-sm ">California, CA</p>
                        </div>
                        <button
                          type="submit"
                          className="group relative  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEventsPage;
