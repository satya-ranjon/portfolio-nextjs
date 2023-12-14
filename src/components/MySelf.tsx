/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import work from "@/assets/work.svg";
import Techstack from "./Techstack";
import Tools from "./Tools";
import Github from "./Github";

const MySelf = () => {
  return (
    <div className=" bg-colorThree">
      <div className="container mx-auto px-10 md:px-20 2xl:px-24  z-50 py-36 lg:py-48 lg:pt-64 w-full">
        <div className=" flex flex-col md:flex-row gap-16 justify-between">
          <div className="md:w-6/12 xl:w-8/12 text-white ">
            <h1 className="text-4xl md:text-3xl lg:text-5xl max-w-sm xl:max-w-xl  xl:text-7xl  font-bold ">
              Let me <span className=" text-colorTwo">Introduce</span> myself !
            </h1>
            <div className="tracking-widest text-base md:text-xs lg:text-sm xl:text-xl space-y-5 mt-8">
              <h3>
                Hi Everyone, I am{" "}
                <span className=" text-colorTwo font-semibold">
                  Satya Ranjon Sharma
                </span>{" "}
                from{" "}
                <span className=" text-colorTwo font-semibold">
                  Rangpur, Bangladesh.
                </span>{" "}
              </h3>
              <h3>
                I fell in love with programming and I have at least learnt
                something, I think…🤷‍♂️
              </h3>
              <h3 className=" 	">
                My field of Interest's are building new{" "}
                <span className=" text-colorTwo font-semibold">
                  Web Technologies
                </span>
              </h3>
              <h3>
                Whenever possible, I also apply my passion for developing
                products with{" "}
                <span className=" text-colorTwo font-semibold">Node.js</span>{" "}
                and{" "}
                <span className=" text-colorTwo font-semibold">
                  {" "}
                  Modern Javascript Library and Frameworks
                </span>{" "}
                like{" "}
                <span className=" text-colorTwo font-semibold">
                  React.js and Next.js
                </span>{" "}
              </h3>
            </div>
          </div>
          <div className="md:w-6/12 xl:w-4/12">
            <Image src={work} height={600} width={600} alt="work" />
          </div>
        </div>
        <div className="text-white w-full text-center mt-28">
          <h1 className="text-4xl lg:text-6xl  font-bold tracking-wider">
            Professional <span className=" text-colorTwo">Skillset</span>
          </h1>
          <Techstack />
          <h1 className="text-4xl lg:text-6xl  font-bold tracking-wider mt-20">
            <span className=" text-colorTwo">Tools</span> I use
          </h1>
          <Tools />
          <Github />
        </div>
      </div>
    </div>
  );
};

export default MySelf;
