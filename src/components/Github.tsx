import useDisplay from "@/hooks/useDisplay";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const [width] = useDisplay();
  return (
    <div>
      <h1 className="text-4xl lg:text-6xl  font-bold tracking-wider mt-20">
        Days I <span className=" text-colorTwo">Code</span>
      </h1>
      <div className="mt-10 md:mt-20 flex justify-center items-center">
        <GitHubCalendar
          username="satya-ranjon"
          blockSize={width > 500 ? 18 : 10}
          blockMargin={5}
          color="#c084f5"
          fontSize={width > 500 ? 18 : 10}
          colorScheme="light"
        />
      </div>
    </div>
  );
};

export default Github;
