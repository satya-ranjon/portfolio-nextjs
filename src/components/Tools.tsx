import { FaWindows } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiNpm,
} from "react-icons/si";

import IconBox from "./IconBox";

const Tools = () => {
  return (
    <div className="flex justify-center items-center flex-wrap text-7xl gap-3 md:gap-8 lg:gap-12 mt-10 md:mt-20 ">
      <IconBox>
        <FaWindows />
      </IconBox>
      <IconBox>
        <SiVisualstudiocode />
      </IconBox>
      <IconBox>
        <SiPostman />
      </IconBox>
      <IconBox>
        <SiSlack />
      </IconBox>
      <IconBox>
        <SiNpm />
      </IconBox>
    </div>
  );
};

export default Tools;
