"use client";

import useDisplay from "@/hooks/useDisplay";

const Navbar = () => {
  const [width, scrollY] = useDisplay();
  const logo = scrollY > 120 ? "S" : "Satya Ranjon";

  return (
    <div
      className={` ${
        width > 700 ? "fixed z-50  top-0 left-0 right-0" : " bg-colorOne"
      }  w-full `}>
      <div className="container mx-auto px-10 xl:px-5">
        <div className=" flex justify-between items-center  py-8 xl:py-16">
          <div className=" text-colorTwo font-bold text-2xl  xl:text-5xl">
            {logo}
          </div>
          <button className="text-colorTwo md:text-colorOne cursor-pointer">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
