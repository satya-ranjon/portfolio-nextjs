"use client";
import avatar1 from "@/assets/avatar3.jpg";
import avatarShapes from "@/assets/avatar-shapes.svg";
import avatarShapes2 from "@/assets/cornerstone-patterns-right.svg";
import Image from "next/image";
import useDisplay from "@/hooks/useDisplay";
import { GrDownload } from "react-icons/gr";

const HeroSection = () => {
  const [width] = useDisplay();
  const handleDownload = () => {
    const pdfUrl = "/Satya_Ranjon_Sharma_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Satya_Ranjon_Sharma_Resume.pdf";
    link.click();
  };
  return (
    <>
      <div className=" md:hidden flex flex-col w-full ">
        <div className=" bg-colorOne py-20 px-10 space-y-3">
          <h1 className=" text-colorTwo font-bold text-4xl max-w-xs">
            Frontend Developer.
          </h1>
          <h4 className=" text-white text-base">
            Passionate learner and developer, always exploring new technologies
            and seeking opportunities to enhance my skills
          </h4>
          <button
            onClick={handleDownload}
            className=" px-5 py-2 cursor-pointer bg-colorTwo text-colorThree font-semibold rounded-sm mt-5 z-50 w-fit  flex justify-start gap-2 items-center">
            <span className=" text-base">Download CV</span>
            <GrDownload className="text-lg" />
          </button>
        </div>
        <div className="bg-colorTwo py-10 flex-col flex justify-center items-center relative">
          <Image
            src={avatarShapes2}
            height={350}
            width={350}
            alt="avatar shapes"
            className="rotate-180"
          />
          <Image
            src={avatarShapes2}
            height={350}
            width={350}
            alt="avatar shapes"
            className=" mt-10"
          />

          <div className=" absolute top-28">
            <div className="h-[230px] w-[230px] border-2 relative">
              <div className=" absolute -left-4 -top-4">
                <Image
                  src={avatar1}
                  height={230}
                  width={230}
                  alt="avatar shapes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full">
        <div className="-z-50 absolute top-0 left-0 right-0 bottom-0 ">
          <div className=" h-full w-full flex flex-col md:flex-row justify-start">
            <div className=" w-full  md:w-9/12 lg:w-8/12 bg-colorOne"></div>
            <div className=" w-full md:w-3/12 lg:w-4/12  bg-colorTwo"></div>
          </div>
        </div>
        <div className="  container mx-auto px-20 2xl:px-24 py-36 lg:py-48 lg:pt-64 w-full relative">
          <div className=" flex justify-between ">
            <div className=" w-8/12">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl max-w-xs lg:max-w-sm xl:max-w-xl font-bold text-colorTwo">
                Frontend Developer.
              </h1>
              <h3 className=" text-xs lg:text-base xl:text-lg 2xl:text-xl text-white mt-6 max-w-xs lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl">
                Passionate learner and developer, always exploring new
                technologies and seeking opportunities to enhance my skills
              </h3>
              <a
                href="./Satya_Ranjon_Sharma.pdf"
                download
                target="_blank"
                className=" px-5 py-2 cursor-pointer bg-colorTwo text-colorThree font-semibold rounded-sm mt-5 z-50 w-fit  flex justify-start gap-2 items-center">
                <span className=" text-base">Download CV</span>
                <GrDownload className="text-lg" />
              </a>
            </div>
            <div className=" w-4/12"></div>
          </div>
          <div className="absolute  top-28 lg:top-40 right-16 lg:right-32 2xl:right-40">
            <Image
              src={avatarShapes}
              height={width > 1400 ? 600 : width > 770 ? 450 : 350}
              width={width > 1400 ? 600 : width > 770 ? 450 : 350}
              alt="avatar shapes"
            />
          </div>
          <div className="absolute  top-40 lg:top-60 xl:top-64 right-32 lg:right-44 xl:right-56 2xl:right-64">
            <div className="h-[200px] w-[200px] lg:h-[280px]  lg:w-[280px] xl:h-[350px] xl:w-[350px] border-2 relative">
              <div className=" absolute -left-4 -top-4 lg:-left-8 lg:-top-8">
                <Image
                  src={avatar1}
                  height={width > 1400 ? 350 : width > 770 ? 280 : 200}
                  width={width > 1400 ? 350 : width > 770 ? 280 : 200}
                  alt="avatar shapes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
