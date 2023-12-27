/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import avatarShapes1 from "@/assets/cornerstone-patterns-left.svg";
import avatarShapes2 from "@/assets/cornerstone-patterns-right.svg";
import useDisplay from "@/hooks/useDisplay";

const DesignEngineering = () => {
  const [width] = useDisplay();
  return (
    <div className="container mx-auto px-10 md:px-20 2xl:px-24  z-50 py-36 lg:py-48 lg:pt-64 w-full ">
      <div className=" flex flex-col md:flex-row justify-between gap-10 md:gap-16 lg:gap-40 ">
        <div className=" w-full">
          <div>
            <h1 className=" text-4xl lg:text-5xl xl:text-7xl font-bold text-colorOne">
              Design
            </h1>
            <p className=" text-base xl:text-lg  mt-5 text-violet-900">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </p>
            <Image
              src={avatarShapes1}
              height={width > 1050 ? 250 : 200}
              width={width > 1050 ? 250 : 200}
              alt="avatarShapes1"
              className="mt-10 lg:mt-20 hidden md:block"
            />
          </div>
        </div>
        <div className=" w-full">
          <Image
            src={avatarShapes2}
            height={width > 770 ? 300 : 200}
            width={width > 770 ? 300 : 200}
            alt="avatarShapes2"
            className="hidden md:block"
          />
          <div className="mt-10">
            <h1 className=" text-4xl lg:text-5xl xl:text-7xl font-bold text-colorOne ">
              Engineering
            </h1>
            <p className=" text-base xl:text-lg   mt-5 text-violet-900">
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalabilty are priorities on my radar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignEngineering;
