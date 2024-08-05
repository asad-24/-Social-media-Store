import AccountCreated from "@/pages/accountCreated/page";
import AccountVerification from "@/pages/accountVerification/page";
import BootingPage from "@/pages/bootingPage/page";
import LoginPage from "@/pages/loginPage/page";
import TermAndCondition from "@/pages/term&condition/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     {/* <h1>Main page.js</h1> */}
     {/* <BootingPage/> */}
     
     {/* <LoginPage/> */}
     {/* <TermAndCondition/> */}
     {/* <AccountCreated/> */}
     <AccountVerification/>
     
    </main>
  );
}
