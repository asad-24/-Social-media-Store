import Image from "next/image";
import mainLogo from "../../../public/logos/unleashedesires-logo.svg";

const TermAndCondition = () => {
  return (
    <>
       <div className="grid grid-cols-2 w-full h-screen">
      <div className="relative bg-black h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={mainLogo} alt="logo" />
        </div>
      </div>
      <div className="bg-black h-full inset-0 flex items-center justify-center   ">
        <div
          className="flex flex-col sm:px-3 lg:px-10  "
         
        >
          <div
            className="mt-4 sm:mx-auto sm:w-full sm:max-w-md "
      
          >
            <div className=" bg-[#FFFFFF3B] py-8 px-1 shadow sm:rounded-lg sm:px-6">
                <h1 className="text-white text-3xl text-center font-semibold py-3">Terms & Conditions</h1>
              <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur quas aliquid incidunt beatae dignissimos aliquam nisi dolor, praesentium voluptas? Consectetur in, nulla  et excepturi alias quibusdam eligendi animi? Modi asperiores ad, necessitatibus magnam numquam recusandae debitis consectetur voluptatibus fugit velit nostrum dolorem inventore, nobis quo!</p>
              <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
                      >
                        Agree
                      </button>
                    </div>
              <div>
                      <button
                        type="submit"
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
