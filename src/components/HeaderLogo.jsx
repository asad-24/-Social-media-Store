import Image from "next/image"
import headerLogo from "../../public/logos/unleashedesires-logo.svg"

const HeaderLogo = () => {
  return (
    <>
     <div className="relative">
     <Image className="absolute left-[-50px] top-[-15px]" src={headerLogo} alt="logo" width={300}  />
     </div>
    </>
  )
}

export default HeaderLogo
