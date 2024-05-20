import Image from "next/image";
import React from "react";

const IconWithText = ({ listData, icon, textColor }) => {
  return (
    <div className="w-full mb-6">
      {listData.map((data, index) => {
        return (
          <div className="w-full flex items-start gap-3 mb-2" key={index}>
            <Image src={icon} alt={`${icon + index}`} width={20} height={20} className="h-auto mt-1" />
            <p className={textColor}>{data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IconWithText;
