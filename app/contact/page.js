import React from "react";
import Image from "next/image";
import ImagePath from "../constant/ImagePath";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | B2b - Enrollment Partner Program",
  description:
    "Get in touch with International Schooling to learn more about our Enrollment Partner program. Become your own boss and join the world's top-rated online school.",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

const page = () => {
  return (
    <>
      <div className="r-w lg:flex lg:gap-20 items-center !my-10">
        <div>
          <h1 className="text-2xl lg:text-5xl font-extrabold text-[#5d5d5d] mb-2 text-center lg:text-left">
            Contact Us
          </h1>
          <p className="text-[#5d5d5d] text-justify mb-6 w-full lg:w-3/4">
            Together, we can transform the landscape of education. Our expertise
            and innovative approach can lead to mutual growth and success.
            Contact us today to embark on a journey of innovation and excellence
            in education, ensuring a significant advantage in an ever- evolving
            market.
          </p>
        </div>
        <div>
          <Image
            alt=""
            src={ImagePath.CONTACT_US_IMG}
            width={400}
            height={400}
            className="h-auto w-[300px] lg:w-[500px] md:ml-0 m-auto"
          />
        </div>
      </div>
      <div className="flex flex-col r-w bg-blue-700 items-center rounded-lg p-6 !mb-12 gap-3 justify-center">
        <div className="items-center flex gap-2">
          <Image
            alt=""
            src={ImagePath.MAIL_ICON}
            width={25}
            height={25}
            className="h-auto"
          />
          <p className="text-white text-left font-bold">EMAIL ADDRESS</p>
        </div>
        <div>
          <Link
            href={"mailto:b2b@internationalschooling.org"}
            className="text-white"
          >
            b2b@internationalschooling.org
          </Link>
        </div>
      </div>

      <div className="r-w lg:flex bg-[#E5F2FF] p-12 rounded-xl justify-between item-start lg:gap-20 !mb-12">
        <div className="w-full">
          <div className=" flex gap-4 items-center mb-3">
            <Image
              alt=""
              src={ImagePath.LOCATION_ICON}
              width={20}
              height={20}
              className="h-auto"
            />
            <p className="text-[#5d5d5d] text-lg font-bold">SINGAPORE</p>
          </div>
          <div>
            <p className="text-[#5d5d5d] text-sm mb-6 w-3/4">
              111 SOMERSET ROAD, LEVEL 13, TRIPLEONE SOMERSET, SINGAPORE -
              238164
            </p>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7910234420433!2d103.83474597471107!3d1.30022459868743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1990e8a47437%3A0x799de2d69c213b61!2s111%20Somerset%20Rd%2C%20LEVEL%2013%20TripleOne%20Somerset%2C%20Singapore%20238164!5e0!3m2!1sen!2snl!4v1717499941004!5m2!1sen!2snl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl drop-shadow-md w-full h-60 mb-6"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex gap-4 items-center mb-3">
            <Image
              src={ImagePath.LOCATION_ICON}
              width={20}
              height={20}
              className="h-auto"
            />
            <p className="text-[#5d5d5d] text-lg font-bold ">USA</p>
          </div>
          <div>
            <p className="text-[#5d5d5d] text-sm mb-6 w-3/4">
              3710 RAWLINS ST. 1412/SUITE 1420 DALLAS, TEXAS 75219
            </p>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.306012916568!2d-96.8107331179413!3d32.81065590570695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9ece896ced17%3A0x9804718fb47085ac!2s3710%20Rawlins%20St%20%231420%2C%20Dallas%2C%20TX%2075219%2C%20USA!5e0!3m2!1sen!2snl!4v1717500062786!5m2!1sen!2snl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl drop-shadow-md w-full h-60"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
