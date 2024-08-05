import HeaderLogo from "@/components/HeaderLogo"
import Image from "next/image"
import whitebox from "../../../public/logos/created-account-logo.png"
import lockLogo from "../../../public/logos/lock-logo.png"

const AccountCreated = () => {
  return (
    <>
    
    <div className="min-h-screen min-w-full bg-black relative">
    <HeaderLogo/>
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative flex items-center">

    <Image src={whitebox} alt="logo" width={400}/>
    <Image src={lockLogo} alt="logo" width={200} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
        
        </div>
    </div>
    

    </>
  )
}

export default AccountCreated
