import React from "react";
import ImagePath from "../constant/ImagePath";
import Image from "next/image";

const NumbersReveal = () => {
  const totalItem = [
    {
      img: ImagePath.CITY_VECTOR,
      number: "5000+",
      subtitle: "City Partners",
    },
    {
      img: ImagePath.STATE_VECTOR,
      number: "800+",
      subtitle: "State/Province Partners",
    },
    {
      img: ImagePath.COUNTRY_VECTOR,
      number: "120+",
      subtitle: "Country Partners",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
      {totalItem.map((item, index) => {
        return (
          <div className="flex items-center md:justify-center " key={index}>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 rounded-xl p-6">
                <Image
                  src={item.img}
                  alt={`${item.img + index}`}
                  width={50}
                  height={50}
                  className="h-auto"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-4xl font-bold c-text bg-gradient-to-r from-[#007EFF] to-[#FF0000] text-transparent bg-clip-text">
                  {item.number}
                </h3>
                <div className="w-full bg-[#5d5d5d] h-[1px]"></div>
                <p className="text-[#5d5d5d]">{item.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersReveal;
