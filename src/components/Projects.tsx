import React from "react";
import { TiPlus } from "react-icons/ti";
import { VscGithubInverted } from "react-icons/vsc";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import projects from "@/data/project.json";

const Projects = () => {
  return (
    <>
      {/* <div>
        <div className="container mx-auto px-10 md:px-20 2xl:px-24  z-50 py-36  w-full ">
          <div className=" flex justify-center">
            <h1 className="text-4xl text-colorOne text-center w-full md:text-3xl lg:text-5xl max-w-sm xl:max-w-xl  xl:text-7xl  font-bold ">
              Recent Projects
            </h1>
          </div>
        </div>
      </div> */}

      {projects.map((item, index) => {
        const reverse = !(index % 2 === 0);
        return (
          <div
            key={item._id}
            style={{ backgroundColor: item.bgColor, color: item.textColor }}>
            <div className="container mx-auto px-10 md:px-20 2xl:px-24  z-50  py-20  w-full ">
              <div
                className={`flex ${
                  reverse && "md:flex-row-reverse"
                } flex-col-reverse md:flex-row justify-between  items-start gap-10 lg:gap-16 xl:gap-20`}>
                <div className="w-full">
                  <h1
                    className={`font-bold text-2xl md:text-4xl lg:text-5xl ${item.nameText}`}
                    style={{ color: item.nameText }}>
                    {item.name}
                  </h1>
                  <h1 className="text-base xl:text-lg  mt-5 ">
                    {item.description}
                  </h1>
                  <h1
                    className={`font-bold text-lg md:text-xl mt-5 ${item.nameText}`}
                    style={{ color: item.nameText }}>
                    DEVELOPMENT TOOLS
                  </h1>
                  <div className=" flex flex-col gap-3  text-base xl:text-lg  mt-4 ">
                    {item.tools.map((tool, index) => (
                      <div
                        key={index + tool}
                        className="flex justify-start gap-4 items-center">
                        <TiPlus /> {tool}
                      </div>
                    ))}
                  </div>
                  <div className=" flex justify-start gap-5 items-center mt-5">
                    <a
                      href={item.code}
                      target="_blank"
                      className=" px-5 py-2 bg-colorThree rounded-sm text-white flex justify-start gap-2 items-center">
                      <VscGithubInverted className="text-lg" />
                      <span className=" text-base">Code</span>
                    </a>
                    <a
                      href={item.live}
                      target="_blank"
                      className=" px-5 py-2 bg-colorThree rounded-sm text-white flex justify-start gap-2 items-center">
                      <BiLinkExternal className="text-lg" />
                      <span className=" text-base">Live</span>
                    </a>
                  </div>
                </div>
                <div className="w-fit">
                  <Image
                    src={item.img}
                    height={400}
                    width={600}
                    alt="Daily Routine"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
