
import Image from "next/image";
import AccountVerification from "./(pages)/accountVerification/page";
import BootingPage from "./(pages)/bootingPage/page";
import ForgotPassword from "./(pages)/forgotPassword/page";
import verifyPhoneNumber from "./(pages)/verifyPhoneNumber/page";
import VerifyNumber from "./(pages)/verifyPhoneNumber/page";
import CreateNewPassword from "./(pages)/CreateNewPassword/page";
import AgeVerification from "./(pages)/ageVerification/page";
import Recaptcha from "./(pages)/recaptcha/page";
import VerifyEmail from "./(pages)/emailVerification/page";
import MainDashboardHome from "./(pages)/mainDashboard-Home/page";
import ExploreReels from "./(pages)/explore/page";
import Friends from "./(pages)/friends/page";
import Notifications from "./(pages)/notifications/page";


export default function Home() {
  return (
    <main className="">
     {/* <h1>Main page.js</h1> */}
     {/* <BootingPage/> */}
     
     {/* <LoginPage/> */}
     {/* <TermAndCondition/> */}
     {/* <AccountCreated/> */}
     {/* <AccountVerification/> */}
     {/* <ForgotPassword/> */}
     {/* <VerifyNumber /> */}
     {/* <CreateNewPassword/> */}
     {/* <AgeVerification/> */}
     {/* <Recaptcha/> */}
     {/* <VerifyEmail/> */}
     <MainDashboardHome/>
     {/* <ExploreReels/> */}
     {/* <Friends/> */}
     {/* <Notifications/> */}
     
    </main>
  );
}
