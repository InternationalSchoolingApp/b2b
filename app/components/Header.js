"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImagePath from "../constant/ImagePath";
import HoverFillButton from "./HoverFillButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="w-full h-max sticky top-0 bg-[#F7FBFF]/90 z-50 shadow-sm">
      <div className="r-w py-4 flex items-center gap-5 lg:justify-between">
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={ImagePath.BLUE_LOGO}
            width={300}
            height={100}
            className="w-[200px] lg:w-auto h-auto"
          />
        </Link>

        <div className="lg:flex justify-center items-center gap-10 hidden">
          <div className="">
            <ul className="flex gap-8">
              {HeaderItems.map((item, index) => (
                <li
                  key={index}
                  className={`hover:text-[#007EFF] ${
                    router === item.url ? "text-[#007EFF]" : "text-[#5D5D5D]"
                  }`}
                >
                  <Link href={item.url} className="font-semibold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <HoverFillButton
            name={"Register"}
            link={"/"}
            className={"!text-sm lg:text-sm "}
          />
        </div>

        {/* Small Screens  */}

        <div className="flex justify-center items-center lg:hidden ml-auto gap-5">
          <HoverFillButton
            name={"Register"}
            link={"/"}
            className={"!text-sm lg:text-sm "}
          />
          <label className="swap swap-rotate btn btn-square p-2 lg:hidden">
            <input
              onClick={() => {
                ToggleMenu();
              }}
              type="checkbox"
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          <div className="lg:hidden flex absolute bg-white w-full top-20 shadow-sm left-0">
            {isOpen && (
              <div className="flex flex-col py-5 px-3">
                <ul className="flex flex-col gap-4">
                  {HeaderItems.map((item, index) => (
                    <li
                      className={`font-semibold hover:text-[#007EFF] duration-150 ${
                        router === item.url
                          ? "text-[#007EFF]"
                          : "text-[#5D5D5D]"
                      }`}
                      key={index}
                    >
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
