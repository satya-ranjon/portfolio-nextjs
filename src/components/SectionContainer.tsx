"use client";

import { Link } from "react-scroll";

const SectionContainer = ({ color = "bg-colorThree", children }) => {
  return (
    <div className=" relative">
      {children}
      <div className=" hidden md:block absolute bottom-20 right-16">
        <div className="flex flex-col gap-5 justify-center items-center">
          <Link
            to="heroSection"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`cursor-pointer rotate-45 w-3  h-3 block ${color}`}></Link>

          <Link
            to="design"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`cursor-pointer rotate-45 w-3  h-3 block ${color}`}></Link>
          <Link
            to="myself"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`cursor-pointer rotate-45 w-3  h-3 block ${color}`}></Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`cursor-pointer rotate-45 w-3  h-3 block ${color}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
