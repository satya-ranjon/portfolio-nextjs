"use client";

import useDisplay from "@/hooks/useDisplay";
import { GoGitBranch } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [width, scrollY] = useDisplay();
  const logo = scrollY > 120 ? "S" : "Satya Ranjon";

  return (
    <div
      className={` ${
        width > 700 ? "fixed z-50  top-0 left-0 right-0" : " bg-colorOne"
      }  w-full `}>
      <div className="container mx-auto px-4 md:px-10 xl:px-5">
        <div className=" flex justify-between items-center  py-8 xl:py-16">
          <div className=" text-colorTwo font-bold text-2xl  xl:text-5xl">
            {logo}
          </div>
          <div className=" flex justify-start items-center gap-5 relative">
            <a
              href="https://github.com/satya-ranjon"
              target="_blank"
              className=" px-2 py-[5.5px] flex justify-start items-center gap-2 text-lg bg-violet-950 text-violet-200 rounded-md cursor-pointer hover:bg-violet-800 hover:text-violet-50 transition-colors duration-300">
              <GoGitBranch />
              <FaStar />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-colorTwo md:text-colorOne cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-8 h-8   xl:w-12 xl:h-12 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
            {open && (
              <div className=" absolute z-50 top-0 right-0 h-96 w-72 bg-violet-50 rounded-md">
                <div className=" p-3">
                  <div className=" flex justify-end">
                    <button
                      onClick={() => setOpen(false)}
                      className="text-5xl ">
                      <IoMdClose />
                    </button>
                  </div>

                  <div className="text-xl text-colorOne px-6 flex flex-col gap-5 ">
                    <Link
                      to="heroSection"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer`}>
                      Home
                    </Link>
                    <Link
                      to="myself"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer`}>
                      My Shelf
                    </Link>
                    <Link
                      to="project"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer`}>
                      My Works
                    </Link>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer`}>
                      Contact
                    </Link>
                    <span className=" select-none uppercase tracking-widest text-gray-300">
                      Say hello
                    </span>
                    <a
                      href="mailto:satyaranjonofficial@gmail.com"
                      className=" text-xl tracking-widest">
                      satyaranjonofficial @gmail.com
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
