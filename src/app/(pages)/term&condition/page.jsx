'use client'
import Image from "next/image";
import mainLogo from "../../../../public/logos/unleashedesires-logo.svg";
import { useRouter } from "next/navigation";

const TermAndCondition = () => {
  const router = useRouter();

  const handleAgreeClick = (e) => {
    e.preventDefault();
    router.push("/accountCreated"); // Change to your account created page route
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    router.push("/loginPage"); // Change to your login page route
  };
  return (
    <>
       <div className="md:grid grid-cols-2 w-full h-screen">
      <div className="relative bg-black md:h-full h-[100px] ">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={mainLogo} alt="logo"className="w-[75%] md:w-full" />
        </div>
      </div>
      <div className="bg-black h-full inset-0 flex items-center justify-center   ">
        <div
          className="flex flex-col px-10  w-full"
         
        >
          <div className="mt-4 sm:mx-auto  px-10" >
            <div className=" bg-[#FFFFFF3B] py-3  shadow rounded-lg md:px-10 px-2">
                <h1 className="text-white text-3xl text-center font-semibold py-3">Terms & Conditions</h1>
              <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur quas aliquid incidunt beatae dignissimos aliquam nisi dolor, praesentium voluptas? Consectetur in, nulla  et excepturi alias quibusdam eligendi animi? Modi asperiores ad, necessitatibus magnam numquam recusandae debitis consectetur voluptatibus fugit velit nostrum dolorem inventore, nobis quo!</p>
              <div>
                      <button
                        type="submit"
                        onClick={handleAgreeClick}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
                      >
                        Agree
                      </button>
                    </div>
              <div>
                      <button
                        type="submit"
                        onClick={handleCancelClick}
                        className="group relative w-full flex justify-center py-3 px-4 border border-indigo-700 text-sm font-medium rounded-md text-white bg-transparant hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                      >
                        Cancel
                      </button>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TermAndCondition
