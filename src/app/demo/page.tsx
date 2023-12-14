"use client";

import useDisplay from "@/hooks/useDisplay";
import React, { useEffect, useRef, useState } from "react";
import { Link, animateScroll, Element } from "react-scroll";

const Section = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div>
      <Element name="test1" className="element">
        <div className="h-screen w-full bg-colorOne">
          <Link
            to="test2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Test 2
          </Link>
          <Link
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Test 1
          </Link>
          <h1 className=" text-center text-8xl font-bold text-white">
            ONE SECTICON
          </h1>
        </div>
      </Element>
      <Element name="test2" className="element">
        <div className=" z-50 h-screen w-full bg-colorTwo">
          <h1 className=" text-center text-8xl font-bold text-white">
            Two SECTICON
          </h1>
          <Link
            to="test2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Test 2
          </Link>
          <Link
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            Test 1
          </Link>
        </div>
      </Element>
      ;
    </div>
  );
};

export default Section;
