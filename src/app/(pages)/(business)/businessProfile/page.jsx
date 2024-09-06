'use client'
import FullHeader from '@/components/FullHeader'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import editLogo from "../../../../../public/logos/editLogo.svg";
import OtherProfilepic from "../../../../../public/images/OtherProfilepic.jpeg"
import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { VscCompassActive } from "react-icons/vsc";
import { MdExpandMore } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import eventPic from "../../../../../public/images/eventsPic.jpeg";
import eventPic2 from "../../../../../public/images/eventsPic2.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDatasetLinked } from "react-icons/md";
import RippleButton from '@/components/RippleButton'
import location from "../../../../../public/logos/location.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import istBoy from "../../../../../public/images/1stBoy.svg";
import isGirl from "../../../../../public/images/isGirl.svg";
const BusinessProfile = () => {

    const [selectedIcon, setSelectedIcon] = useState(1);

    const [isEditing, setIsEditing] = useState(false);
    const [businessName, setBusinessName] = useState('Business name');

    // Toggle edit mode
const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    setBusinessName(e.target.value);
  };
  
  // Handle save (exit edit mode)
  const handleSave = () => {
    setIsEditing(false);
  };
    const eventPhotos = [eventPic, eventPic2, eventPic2];

    const [activeTab, setActiveTab] = useState('About');


    const BusinessEventPhotos = [eventPic, eventPic2, eventPic2];
    const eventData = [
        {
          id: 1,
          name: "Startup Business Event for Business Starters 2022",
          location: "California, CA",
          date: { day: 10, month: 'Nov' },
          imageSrc: eventPic2
        },
        {
          id: 2,
          name: "Rooftop WaterColor Party For Graphic Creators",
          location: "San Francisco, CA",
          date: { day: 12, month: 'Dec' },
          imageSrc: eventPic2
        },
        {
          id: 3,
          name: "Rooftop WaterColor Party For Graphic Creators",
          location: "New York, NY",
          date: { day: 29, month: 'Nov' },
          imageSrc: eventPic
        },
        // Add more event data if needed
      ];
    

  const [isBusiness, setIsBusiness] = useState(true);

  const icons = [
    { id: 1, icon: "overview" },
    { id: 2, icon: "Media" },
    { id: 3, icon: "Events" },
    { id: 4, icon: "Review"},
  ];


  const dataEvents = [
    { id: 1, title: 'Rocks Velkeinjen', subtitle: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.', icon: istBoy, date: '10 oct', rating: 4 },
    { id: 2, title: 'Rocks Velkeinjen', subtitle: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.', icon: istBoy, date: '10 oct', rating: 5 },
    { id: 3, title: 'Rocks Velkeinjen', subtitle: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.', icon: istBoy, date: '10 oct', rating: 3 },
    { id: 4, title: 'Rocks Velkeinjen', subtitle: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.', icon: istBoy, date: '10 oct', rating: 2 },
  ];
  const aboutSections = [
    {
      id: 1,
      title: 'About',
      content: "I like to pretend I’m a Goddess but deep down I’m a brat. Regardless, I’LL still squirt for you. I’LL fill out more later",
    },
    {
      id: 2,
      title: 'Websites',
      content: "https://onlyfans.com/catechaos",
    },
    {
      id: 3,
      title: 'Kinks ',
      content: "Lorem ipsum dolor sit amet consectetur. Ut sed sed vitae id elit eget laoreet facilisis duis.",
    },
    {
      id: 4,
      title: 'Fetishes',
      content: "Lorem ipsum dolor sit amet consectetur. Ut sed sed vitae id elit eget laoreet facilisis duis.",
    },
  ];
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
        <div className="  md:p-8 p-1 pb-10 overflow-y-auto h-full no-scrollbar w-full">
        
   
   <div className='flex flex-wrap p-3   '  >
<div className='flex flex-col  gap-x-6 lg:w-[70%] w-full  flex-wrap'>
<div className='h-44 w-44 rounded-full bg-transparent relative'>
    <Image src={OtherProfilepic}
    className='absolute inset-0 rounded-full'
    layout="fill"
          objectFit="cover"
    />

</div>
<div className="flex justify-start items-center gap-x-4 my-5 ">
      {isEditing ? (
        <input
          type="text"
          value={businessName}
          onChange={handleInputChange}
          onBlur={handleSave} // Save when the input loses focus
          autoFocus // Automatically focus the input when in edit mode
          className="text-3xl text-white font-bold my-4 bg-transparent border border-white p-2 rounded"
        />
      ) : (
        <p className="text-3xl text-white font-bold my-4">{businessName}</p>
      )}
      <div
        className="cursor-pointer h-7 w-7 rounded-full flex justify-center items-center bg-white"
        onClick={handleEditClick} // Handle edit button click
      >
        <Image src={editLogo} alt="edit logo" className="cursor-pointer h-5 w-5" />
      </div>
    </div>
    <div className="flex items-center gap-x-3 mt-5 w-[80%]"  >
      {icons.map(({ id, icon }) => (
        <>
        <button
          key={id}
          onClick={() => setSelectedIcon(id)}
          className={`flex flex-col items-center cursor-pointer ${
            selectedIcon === id ? 'text-[#724EEB]' : 'text-white'
          } border px-10 py-3 rounded-3xl`}
        >
          {icon}
          <div
           className={`h-1 w-full rounded-2xl ${
             selectedIcon === id ? 'bg-[#724EEB]' : 'bg-transparent'
           }`}
         />
        </button>
        
         </>
      ))}
    </div>
</div>
<div className='lg:w-[30%] flex flex-col w-full ' >
    <div className='h-auto w-full bg-[#171717] flex flex-col  gap-x-5 r rounded-2xl p-4'>
  <h3 className='text-white font-medium'>Contact Information</h3>  

  <div className='flex items-center gap-x-3 my-3'>
    <CiLocationOn className='h-9 w-9  text-white'/>
    <p className='text-white'>3517 W. Gray St. Utica, Pennsylvania 57867</p>
    </div>  
  <div className='flex items-center gap-x-3 my-3'>
    <FaPhoneAlt className='h-9 w-9  text-white'/>
    <p className='text-white'>(209) 555-0104</p>
    </div>  
  <div className='flex items-center gap-x-3 my-3'>
    <MdEmail className='h-9 w-9  text-white'/>
    <p className='text-white'>info@email.com</p>
    </div>  

    </div>
</div>


   </div>

  

    {selectedIcon==3 && <div>
        <div className="flex flex-col gap-y-2 my-7">
      <h1 className="text-white text-2xl font-medium">All Events</h1>
      <div className="flex w-full flex-wrap justify-between gap-y-6 gap-x-2 mt-5">
        {eventData.map((event, index) => (
          <div
            key={event.id}
            className="bg-[#191a1b] h-[175px] md:w-[48%] w-full rounded-3xl flex items-center gap-x-3 p-3"
          >
            <div className="relative">
              <Image
                src={event.imageSrc}
                className="h-36 w-28 rounded-2xl"
                alt="Event Image"
              />
              <div className="absolute top-3 left-3 h-10 w-10 bg-white rounded-xl flex flex-col justify-center items-center">
                <p className="h-4 font-semibold text-black">
                  {event.date.day}
                </p>
                <p className="text-black">{event.date.month}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="text-white font-medium text-2xl">
                {event.name}
              </p>

              <div className="flex justify-start items-center gap-x-2">
                <Image src={location} alt="Location Icon" />
                <p className="text-white text-sm">
                  {event.location}
                </p>
              </div>
              <button
                type="submit"
                className="group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div> }


{selectedIcon==1 && <>

<div className='my-7'>
<h1 className='text-white text-2xl font-medium'>Business Description</h1>


<p className='text-white my-2 text-lg'>Justo, fames odio enim, risus, ac tristique turpis. Ut molestie tempus, donec mauris nibh dolor urna eu. In dapibus eget eget in semper. Justo, fames odio enim, risus, ac tristique turpis. Ut molestie tempus, donec mauris nibh dolor urna eu. In dapibus eget eget in semper.</p>
<h1 className='text-white text-2xl font-medium my-2'>Business Website</h1>
<input type="text" className="py-4 w-1/3 bg-transparent rounded-2xl border my-2 px-4" placeholder="Business Website"/>

<h1 className='text-white text-2xl font-medium my-2'>Overview</h1>


<div>
    <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => {
                return (
                  <div class="flex flex-col bg-[#272424]  shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[250px] md:mx-1 mx-auto relative">
                    <Image
                      class="w-full h-[216.13px]  rounded-2xl "
                      src={imageSrc}
                      alt="Card Image"
                    />
                    <div class="p-2">
                      <div className="flex justify-between items-center gap-x-2 text-white">
                 <div className='flex justify-center items-center gap-x-2'>
                 <div className='h-12 w-12 rounded-full relative '>
                     <Image src={OtherProfilepic} className='h-12 w-12 rounded-full absolute inset-0 '
                         layout="fill"
          objectFit="cover"
                     />
                     </div>
                        <p className=" text-lg font-bold">Williams</p>
                 </div>
                        <div className='flex ms-4'>
                        <FaRegHeart className='h-5 w-5 mx-2'/>
                        <p className="">3.3k</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <p className="text-sm text-white dark:text-white">
                        Lorem ipsum dolor sit amet consectetur. Suspendisse id faucibus lobortis ac.
                        </p>
                      </div>

               
                    </div>
                    <div>
                        <FaRegCirclePlay className='absolute top-5 left-3 h-9 w-9 text-white'/>
                    </div>
                  </div>
                );
              })}
            </div>
    </div>


</div>


  </>}
{selectedIcon==2 && <>

<div className='my-7'>
<h1 className='text-white text-2xl font-medium'>Media</h1>






<div>
    <div className="flex flex-wrap gap-x-5 gap-y-5 md:justify-start justify-start items-center w-full mx-auto my-10 md:px-0 px-4">
              {eventPhotos.map((imageSrc, index) => {
                return (
                  <div class="flex flex-col bg-[#272424]  shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 sm:w-[250px] md:mx-1 mx-auto relative">
                    <Image
                      class="w-full h-[216.13px]  rounded-2xl "
                      src={imageSrc}
                      alt="Card Image"
                    />
                    <div class="p-2">
                      <div className="flex justify-between items-center gap-x-2 text-white">
                 <div className='flex justify-center items-center gap-x-2'>
                 <div className='h-12 w-12 rounded-full relative '>
                     <Image src={OtherProfilepic} className='h-12 w-12 rounded-full absolute inset-0 '
                         layout="fill"
          objectFit="cover"
                     />
                     </div>
                        <p className=" text-lg font-bold">Williams</p>
                 </div>
                        <div className='flex ms-4'>
                        <FaRegHeart className='h-5 w-5 mx-2'/>
                        <p className="">3.3k</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <p className="text-sm text-white dark:text-white">
                        Lorem ipsum dolor sit amet consectetur. Suspendisse id faucibus lobortis ac.
                        </p>
                      </div>

               
                    </div>
                    <div>
                        <FaRegCirclePlay className='absolute top-5 left-3 h-9 w-9 text-white'/>
                    </div>
                  </div>
                );
              })}
            </div>
    </div>


</div>


  </>}
{selectedIcon==4 && <>

    <div className='flex flex-wrap gap-x-4 justify-between items-center my-10 px-10'>
  {dataEvents.map((item) => (
    <div key={item.id} className='flex justify-between items-stretch gap-x-3 border-b md:w-[40%] w-full my-4'>
      <Image src={item.icon} alt="icon" className='h-9 w-9' /> 
      <div>
        <p className='text-white text-xl font-semibold'>{item.title}</p>

        {/* Dynamic Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill={i < item.rating ? "#FBBF24" : "#E5E7EB"} // Gold for filled stars, gray for unfilled
              viewBox="0 0 30 30"
            >
              <path d="M14.103 2.567c.367-.743 1.427-.743 1.794 0l3.28 6.644a1 1 0 00.754.547l7.332 1.065c.82.12 1.148 1.127.555 1.706l-5.305 5.172a1 1 0 00-.287.884l1.252 7.302c.14.817-.718 1.44-1.452 1.055l-6.558-3.448a1 1 0 00-.93 0l-6.558 3.448c-.734.385-1.593-.238-1.453-1.055l1.253-7.302a1 1 0 00-.288-.884L2.739 12.53c-.592-.579-.264-1.586.555-1.706l7.332-1.065a1 1 0 00.754-.547l3.28-6.644z" />
            </svg>
          ))}
        </div>

        <p className='text-slate-400 my-1'>{item.subtitle}</p>
      </div>
      <p className='text-white w-10 '>{item.date}</p>
    </div>
  ))}
</div>


  </>}
      
       
        </div>
      </div>
    </div>
  </>
  )
}

export default BusinessProfile
