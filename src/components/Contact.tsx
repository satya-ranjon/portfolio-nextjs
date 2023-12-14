"use client";
import React, { FormEvent } from "react";
import { LuSend } from "react-icons/lu";

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container mx-auto px-10 md:px-20 2xl:px-60  z-50  py-28  w-full ">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl md:text-4xl text-colorOne text-center w-full  lg:text-5xl  xl:text-6xl  font-bold ">
            Send me a message!
          </h1>
          <h3 className=" text-lg md:text-xl lg:text-3xl max-w-sm lg:max-w-xl text-center  text-colorThree">
            Got a question or proposal, or just want to say hello? Go ahead.
          </h3>
        </div>
        <form onSubmit={handleSubmit} className=" mt-16">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-14 ">
            <div className="w-full">
              <label
                htmlFor="name"
                className=" block text-base tracking-widest text-gray-400">
                Name
              </label>
              <input
                className="placeholder:text-colorThree placeholder:font-normal outline-none tracking-widest p-2 text-xl px-0 border-b-[2px] border-b-colorThree  w-full"
                placeholder="Inter your name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className=" block text-base tracking-widest text-gray-400">
                Email
              </label>
              <input
                className="placeholder:text-colorThree placeholder:font-normal outline-none tracking-widest p-2 text-xl px-0 border-b-[2px] border-b-colorThree  w-full"
                placeholder="Inter your email address"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="w-full mt-10">
            <label
              htmlFor="message"
              className=" block text-base tracking-widest text-gray-400">
              Your Message
            </label>
            <textarea
              className="placeholder:text-colorThree placeholder:font-normal overflow-scroll h-24 overflow-x-hidden outline-none tracking-widest p-2 text-xl px-0 border-b-[2px] border-b-colorThree  w-full"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              name="message"
              id="message"
            />
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <button className=" px-8 py-2 text-base text-white bg-colorThree flex justify-start items-center gap-4">
              Send <LuSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
