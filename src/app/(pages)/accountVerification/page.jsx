'use client';

import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";
import uploadLogo from "../../../../public/logos/upload-file.png";
import camera from "../../../../public/logos/Camera.png";
import cameraWhite from "../../../../public/logos/Camera-white.png";
import verificationSuccessfully from "../../../../public/logos/verificationSuccessfully.png";
import loader from "../../../../public/logos/loader.png";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AccountVerification = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraStarted, setIsCameraStarted] = useState(true);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // State to track current step
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [frontSideFile, setFrontSideFile] = useState(null);
  const [backSideFile, setBackSideFile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (currentStep === 3) {
      const timer = setTimeout(() => {
        router.push("/ageVerification");
      }, 2000); // 2 seconds delay

      // Cleanup the timer if the component is unmounted or currentStep changes
      return () => clearTimeout(timer);
    }
  }, [currentStep, router]);

  useEffect(() => {
    let stream;
    
    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraStarted(true);
          setIsPhotoTaken(false)
          
        }
      } catch (error) {
        console.error('Error accessing the camera', error);
      }
    };
  
    startCamera();
  
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);
  

  const takePhoto = () => {
    if (!canvasRef.current || !videoRef.current) {
      console.error('Canvas or Video element is not available');
      return;
    }

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Could not get canvas context');
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // You can get the image data URL if needed
    const imageDataURL = canvas.toDataURL('image/png');
    setIsPhotoTaken(true);
    console.log(imageDataURL);
  };
  const handleContinue = () => {
    if (!frontSideFile || !backSideFile ) {
      alert("Please upload both front and back sides of your ID card.");
      return;
    }

   
    if (currentStep < 3) {
      const updatedCompletedSteps = [...completedSteps];
      updatedCompletedSteps[currentStep - 1] = true; // Mark current step as completed
      setCompletedSteps(updatedCompletedSteps);
      setCurrentStep(currentStep + 1); // Move to the next step
    }
  };
console.log("aaaaaaaaaaaaaaaaaaaaaa",currentStep)

  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (side === 'front') {
      setFrontSideFile(file);
    } else if (side === 'back') {
      setBackSideFile(file);
    }
  };


  const frontSideImageURL = frontSideFile ? URL.createObjectURL(frontSideFile) : '';
  const backSideImageURL = backSideFile ? URL.createObjectURL(backSideFile) : '';
  return (
    <>
    <div className={`min-w-full  bg-black h-screen`}>
    <div >
        <HeaderLogo />
        <div className="absolute top-[15%] w-[100%] md:px-28 px-12 bg-black py-10">
          <h1 className="text-white md:text-3xl text-2xl text-center">
            Account Verification
          </h1>
          <div className="flex lg:items-center md:justify-center lg:flex-row  md:gap-x-20 gap-y-6 my-7 sm:flex-wrap flex-col">
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 bg-white rounded-full relative  flex items-center justify-center">
                <div className={`w-8 h-8 ${currentStep === 1 || completedSteps[0] ? 'bg-[#874CFF]' : 'bg-black'} rounded-full absolute`}></div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  01
                </p>
              </div>
              <p className="text-white md:text-xl text-md">Upload ID Card</p>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 bg-white rounded-full relative  flex items-center justify-center">
                <div className={`w-8 h-8 ${currentStep === 2 || completedSteps[1] ? 'bg-[#874CFF]' : 'bg-black'} rounded-full absolute`}></div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  02
                </p>
              </div>
              <p className="text-white md:text-xl text-md">Selfie with ID Card</p>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 bg-white rounded-full relative  flex items-center justify-center">
                <div className={`w-8 h-8 ${currentStep === 3 || completedSteps[2] ? 'bg-[#874CFF]' : 'bg-black'} rounded-full absolute`}></div>
                <p className="text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  03
                </p>
              </div>
              <p className="text-white md:text-xl text-md">Verification Successfull</p>
            </div>
          </div>

          {/* Upload ID Card */}
          {currentStep === 1 && (
            <div className="UploadIDCard">
              <h3 className="text-white md:text-3xl text-2xl text-center">
                Upload a Photo of your national ID Card front/back
              </h3>
              <p className="text-white text-center my-7 text-sm md:text-md">
                Regulations require you to upload a national identity card. Don't
                worry, your data will stay safe and private.
              </p>
              <div className="flex justify-center items-center md:gap-x-14 md:flex-row flex-col gap-y-3">
                <div className="bg-[#2B2B2B] md:w-[451px] w-full h-[230px] p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${frontSideImageURL})` }}>
                  <div className="flex justify-center items-center flex-col">
                    <Image src={uploadLogo} alt="logo" />
                    <h4 className="text-[#9E9E9E] font-bold my-4">
                      Upload front side
                    </h4>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'front')}
                      className="hidden"
                      id="uploadFrontSide"
                      required
                    />
                    <label htmlFor="uploadFrontSide" className="cursor-pointer text-[#9E9E9E]">
                      Choose File
                    </label>
                  </div>
                </div>
                <div className="bg-[#2B2B2B] md:w-[451px] w-full h-[230px] p-[42.76px_26.72px] rounded-[42.76px] flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${backSideImageURL})` }}>
                  <div className="flex justify-center items-center flex-col">
                    <Image src={uploadLogo} alt="logo" />
                    <h4 className="text-[#9E9E9E] font-bold my-4">
                      Upload back side
                    </h4>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'back')}
                      className="hidden"
                      id="uploadBackSide"
                      required
                    />
                    <label htmlFor="uploadBackSide" className="cursor-pointer text-[#9E9E9E]">
                      Choose File
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center gap-x-24">
                  <div className="w-1/3 border-t border-gray-300 ms-auto"></div>
                  <div className="w-1/3 border-t border-gray-300 me-auto"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-100">Or</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  className="
                    w-full
                    h-[80x]
                    p-[37.28px]
                    pl-[33.13px]
                    pr-[33.13px]
                    border-2
                    text-white
                    rounded-full
                    flex justify-center items-center
                    gap-x-3
                    text-sm
                    md:text-md
                  "
                >
                  <Image src={camera} />
                  Open Camera & Take Photo
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="group relative md:w-1/3 w-1/2 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-[#724EEB] hover:bg-[#764ef9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-7"
// Disable button if files are not uploaded
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {/* Selfie with ID Card */}
          <div>
          {(currentStep === 2 || currentStep === 3) && (
            <div className={`SelfieWithIDCard relative ${currentStep === 3 ? 'blur-sm' : ''}`}>
              <div className="bg-[#C4C4C4] w-[full] h-[550px] relative flex justify-center items-center rounded-3xl">
                <div className="absolute md:top-10 md:left-16 bottom-32 bg-tranparant md:w-[285px] md:h-[187.03px]
                w-[185px] h-[120.03px]  rounded-md z-10 bg-cover bg-center" style={{ backgroundImage: `url(${frontSideImageURL})` }}></div>
                <div className="w-[350px] h-[550px] relative flex justify-center z-0 ">
                {isCameraStarted ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        className={`absolute top-0 left-0 w-full h-full object-cover ${isPhotoTaken ? 'hidden' : 'block'}`}
                      ></video>
                      <canvas
                        ref={canvasRef}
                        className={`absolute top-0 left-0 w-full h-full object-cover ${isPhotoTaken ? 'block' : 'hidden'}`}
                      ></canvas>
                      <button
                        onClick={takePhoto}
                        className="w-[90px] h-[90px] bg-[#724EEB] rounded-full flex justify-center items-center absolute bottom-9"
                      >
                        <Image src={cameraWhite} alt="camera" className="" />
                      </button>
                    </>
                  ) : (
                    <p className="text-white">Starting camera...</p>
                  )}

                </div>
              </div>

              <div className="flex justify-center items-center gap-x-8 my-10">
                <button
                  onClick={() => setIsPhotoTaken(false)}
                  type="button"
                  className="group relative md:w-1/5 w-1/2 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-[#724EEB] bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white mt-7"
                >
                  Retake
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="group relative md:w-1/5 w-1/2 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-[#724EEB] hover:bg-[#764ef9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white mt-7"

                  disabled={!isPhotoTaken} // Disable button if no photo is taken
                >
                  Continue
                </button>
              </div>
            </div>
          )}

           {/* Verification Successful */}
           {currentStep === 3 && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="bg-[#2B2B2B] w-[470.3px] h-[323px] flex justify-center rounded-3xl">
                <div className="flex flex-col justify-center items-center">
                  <Image src={verificationSuccessfully} alt="logo" className="w-20 h-20 my-5" />
                  <h3 className="text-[#724EEB] text-2xl my-2">Verification Successful!</h3>
                  <p className="text-[#FFFFFF] font-thin text-sm">Your account has been verified.</p>
                  <p className="text-[#FFFFFF] font-thin text-sm">This verification will take up 72 hours on the last slide.</p>
                  <Image src={loader} alt="logo" className="w-10 h-10 my-4 animate-spinOnce" />
                </div>
              </div>
            </div>
          )}
          </div>
         

         
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AccountVerification;
