"use client";

import FullHeader from "@/components/FullHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import buttonEvent from "../../../../../public/logos/buttonButton.svg";
import location from "../../../../../public/logos/location.svg";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";
import profileImage from "../../../../../public/images/profileImage.png";
import singleEventDetails from "../../../../../public/images/singleEventDetails.jpeg";
import { useState } from "react";
const EventDetails = () => {
  const eventPhotos = [eventPic, eventPic2, eventPic2];


  const [location, setLocation] = useState({
    lat: 36.778259, // Latitude for California
    lng: -119.417931, // Longitude for California
    zoom: 7, // Zoom level adjusted for California
  });

  const handleLocationChange = (newLat, newLng, newZoom) => {
    setLocation({
      lat: newLat,
      lng: newLng,
      zoom: newZoom,
    });
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
          <div className="  md:p-8 p-1 pb-18 overflow-y-auto h-full no-scrollbar">

            <div className="h-[275px] w-full rounded-3xl relative">
              <Image
                src={singleEventDetails}
                className="absolute inset-0 rounded-3xl "
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-between items-center text-white my-4">
                <p className="w-[70%] text-2xl">Events Name</p>
                <div className="flex justify-between items-center w-[30%]">
                    <p>2,120 People interested</p>
                    <button
                          type="submit"
                          className="group relative  flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Interested
                        </button>
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                          <Image src={location} />
                          <p className="text-white text-sm ">California, CA</p>
                        </div>

                      <div className="flex gap-x-5 my-8 items-center">
                      <div className="h-14 w-14 bg-white rounded-xl flex flex-col justify-center items-center">
<p className=" font-semibold text-black">10</p>
<p className=" text-black">Nov</p>
                   </div>
                      <div className="text-white">
                        <p className="text-white mb-2">Friday</p>
                        <p>09:00 PM - End</p>
                      </div>
                      <Image src={buttonEvent} className="ms-6 h-14 w-14"/>
                      </div>

                      <h2 className="text-2xl text-white my-4">
                      About this events
                      </h2>

                      <p className="text-white text-lg w-[90%]">Lorem ipsum dolor sit amet consectetur. Sed eu ut imperdiet odio quis phasellus pharetra curabitur. A massa netus gravida curabitur et consectetur pharetra. Condimentum aliquam semper suscipit aliquet nibh turpis consequat venenatis adipiscing. Proin auctor sed adipiscing accumsan tristique.</p>



                      <div className="bg-[#272424] w-[380px] h-[100px] rounded-2xl flex items-center gap-x-3 my-6 p-2">
          <Image src={profileImage} className="h-20 w-20 rounded-full "/>
          <div>
            <p className="text-2xl font-bold text-white">Jenny Wilson  </p>
            <p className="text-lg  text-white">Event Creator </p>
            <p className="text-2xl font-bold cursor-pointer text-[#724EEB]">See Profile </p>
          </div>
                      </div>

                      <div className="text-2xl font-bold text-white my-5">Location</div>

                      <div>
      <div className="relative w-full h-96  ">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus`}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps Embed"
        ></iframe>
      </div>
     
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
