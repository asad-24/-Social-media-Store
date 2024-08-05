import HeaderLogo from "@/components/HeaderLogo"

const AccountVerification = () => {
  return (
    <>
      <div className="min-h-screen min-w-full bg-black relative">
    <HeaderLogo/>
    <div className="absolute top-[20%] w-[100%] px-28">
    <h1 className="text-white text-3xl text-center">Account Verification</h1>
   <div  className="flex items-center justify-center gap-x-20 my-7">
   <div className="flex items-center gap-x-4"> 
        <div className="w-10 h-10 bg-white rounded-full relative  flex items-center justify-center">
            <div className="w-7 h-7 bg-[#874CFF] rounded-full absolute \ ">
                </div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">01</p>

        </div> 
    <p className="text-white">Upload ID Card</p>
    </div>
   <div className="flex items-center gap-x-4"> 
        <div className="w-10 h-10 bg-white rounded-full relative  flex items-center justify-center">
            <div className="w-7 h-7 bg-[#874CFF] rounded-full absolute \ ">
                </div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">02</p>

        </div> 
    <p className="text-white">Selfie with ID Card</p>
    </div>
   <div className="flex items-center gap-x-4"> 
        <div className="w-10 h-10 bg-white rounded-full relative  flex items-center justify-center">
            <div className="w-7 h-7 bg-[#874CFF] rounded-full absolute \ ">
                </div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">03</p>

        </div> 
    <p className="text-white">Verification Successfull</p>
    </div>
   </div>
   <div>
    
   </div>
    </div>
    
    </div>
    
    </>
  )
}

export default AccountVerification
