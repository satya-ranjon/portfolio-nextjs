import React from "react";
import {
  DiNodejsSmall,
  DiJavascript1,
  DiReact,
  DiCss3,
  DiMongodb,
} from "react-icons/di";
import { BiLogoFirebase } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import IconBox from "./IconBox";
import {
  SiRedis,
  SiPython,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiStyledcomponents,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const Techstack = () => {
  return (
    <div className="flex justify-center items-center flex-wrap  gap-3 md:gap-8 lg:gap-12 mt-10 md:mt-20 ">
      <IconBox>
        <DiJavascript1 />
      </IconBox>
      <IconBox>
        <DiNodejsSmall />
      </IconBox>
      <IconBox>
        <DiReact />
      </IconBox>
      <IconBox>
        <SiNextdotjs />
      </IconBox>
      <IconBox>
        <SiRedux />
      </IconBox>
      <IconBox>
        <SiStyledcomponents />
      </IconBox>
      <IconBox>
        <SiExpress />
      </IconBox>
      <IconBox>
        <DiCss3 />
      </IconBox>
      <IconBox>
        <DiMongodb />
      </IconBox>
      <IconBox>
        <BiLogoFirebase />
      </IconBox>

      <IconBox>
        <BiLogoFirebase />
      </IconBox>
      <IconBox>
        <SiRedis />
      </IconBox>
      <IconBox>
        <SiPython />
      </IconBox>
      <IconBox>
        <SiPostgresql />
      </IconBox>
      <IconBox>
        <BsGit />
      </IconBox>
    </div>
  );
};

export default Techstack;
