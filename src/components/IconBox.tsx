import React from "react";

const IconBox = ({ children }) => {
  return (
    <div className="w-2/7 md:w-1/5 lg:w-1/6 p-5 lg:p-8 xl:p-10 text-4xl lg:text-6xl xl:text-7xl border-2 border-lime-600 flex justify-center items-center rounded-md">
      {children}
    </div>
  );
};

export default IconBox;
