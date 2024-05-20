import React from "react";
import Link from "next/link";

const HoverFillButton = ({ name, link, className }) => {
  return (
    <Link href={link} target="_blank">
      <div className="hover-fill-button w-max hover:text-white rounded-full border border-[#5d5d5d] hover:border-white duration-300">
        <h4 className={className}>
          <span>{name}</span>
        </h4>
      </div>
    </Link>
  );
};

export default HoverFillButton;
