import Image from "next/image";
import React from "react";
import ImagePath from "../constant/ImagePath";
import HoverFillButton from "./HoverFillButton";

const Header = () => {
  return (
    <div className="w-full h-max sticky top-0 bg-[#F7FBFF] z-50">
      <div className="r-w py-4 flex items-center gap-5 justify-between">
        <Image
          alt="Logo"
          src={ImagePath.BLUE_LOGO}
          width={300}
          height={100}
          className="w-[200px] md:w-auto h-auto"
        />
        <HoverFillButton
          name={"Register"}
          link={"/"}
          className={"!text-sm md:text-sm "}
        />
      </div>
    </div>
  );
};

export default Header;
