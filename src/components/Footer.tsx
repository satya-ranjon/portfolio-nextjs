import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-colorThree">
      <div className="container mx-auto px-10 md:px-20 2xl:px-24  z-50  py-8  w-full text-base text-gray-300">
        <div className=" flex justify-between items-center  ">
          <div className="">Designed and Developed by Satya Ranjon Sharma</div>
          <div className="">Copyright © 2023 SR</div>
          <div className="flex justify-start items-center gap-4 text-xl">
            <a href="">
              <AiOutlineGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
