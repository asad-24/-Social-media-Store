import Image from "next/image"

import mainBG from "../../../public/images/main-pic.png"
import mainLogo from "../../../public/logos/unleashedesires-logo.svg"
const BootingPage = () => {
  return (
    <>
     <div className="relative w-full h-screen">
        <Image src={mainBG} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={mainLogo} alt="logo" />
        </div>
      </div>
    </>
  )
}

export default BootingPage
