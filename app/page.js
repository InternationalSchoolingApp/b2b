import React from "react";
import ImagePath from "./constant/ImagePath";
import Image from "next/image";
import Calculator from "./components/Calculator";
import NumbersReveal from "./components/NumbersReveal";
import IconWithText from "./components/IconWithText";
import LeadForm from "./components/LeadForm";
import Testimonial from "./components/Testimonial";

export const metadata = {
  title: "Partner with Us | Be Your Own Boss with International Schooling",
  description:
    "Join International Schooling, the world's top-rated online school. Become an Enrollment Partner and start your own business with no personal cost.",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

const HomePage = () => {
  const benifit = [
    "Quick money transfer ",
    "Step into a new business stream with NO investment",
    "Work from the comfort of your home.",
    "Zero infrastructure cost",
    "Associate yourself with the leading global brand in online school education",
  ];
  const enrolmentPartner = [
    "Individuals",
    "Teachers",
    "Coaches",
    "Consultants",
    "Schools",
    "Colleges",
    "Vocational Training Centers",
    "Special Courses Centers",
    "Other Educational Institutions",
  ];

  return (
    <div className="w-full h-max">
      <div className="r-w py-6 space-y-4">
        <h1 className="text-[#5d5d5d] text-lg md:text-xl font-bold text-center ">
          World&apos;s Top Rated and Most Recommended Online School
        </h1>
        <div className="md:flex md:gap-5 md:items-center w-max m-auto !mb-12">
          <Image
            alt="google-rating"
            src={ImagePath.GOOGLE_RATING_BLACK}
            width={250}
            height={250}
            className="h-auto mb-2 md:mb-0"
          />
          <Image
            alt="trustpilot-rating"
            src={ImagePath.TRUSTPILOT_RATING_BLACK}
            width={250}
            height={250}
            className="h-auto"
          />
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-center font-serif text-[#5d5d5d]">
          Be an{" "}
          <span className="text-3xl c-text md:text-6xl bg-gradient-to-r from-[#007EFF] to-[#FF0000] text-transparent bg-clip-text">
            Enrollment Partner
          </span>{" "}
          and
          <br />
          Be Your Own Boss
        </h2>
        <p className="text-[#5d5d5d] text-center">
          Tired of your everyday boring job? Want to do business without any
          personal cost? Then International Schooling is just the right place
          for you.
        </p>
      </div>
      <div className="r-w  flex flex-col-reverse md:flex-row md:items-center md:gap-5 py-6 ">
        <Image
          alt="Hero-Image"
          src={ImagePath.HERO_IMAGE}
          width={600}
          height={400}
          priority
          className="h-auto w-full md:!w-3/5  md:ml-0 m-auto "
        />
        <Calculator />
      </div>

      <div className="text-justify r-w py-10">
        <h2 className="text-2xl mb-4 font-bold text-[#5d5d5d]">
          Creating tomorrow’s leaders today, together!
        </h2>
        <p className="">
          Growth, innovation and improved methodologies are the main goals of
          any strategic partnership. With increased resources, technologies and
          market expansion, long- term partnerships nurture efficient
          functioning, foster trust among stakeholders and maximize financial
          benefits. <br />
          International Schooling is one of the most recommended and trusted
          American online school. It maintains a global presence in over 135
          countries has more than 14000 students. With International Schooling,
          you not only increase your financial outcomes but also enhance your
          presence in the education sector. Strengthening technology and
          resources, partnership with us gives you access to specialized
          knowledge and expertise in the field of education and improves
          educational and monetary outcomes.
        </p>
      </div>
      <div className="r-w space-y-4 !my-6 md:!my-16 w-max m-auto">
        <NumbersReveal />
      </div>
      <div className="r-w md:flex md:items-center md:gap-20 py-6 md!my-16">
        <Image
          alt="Benefits Image"
          src={ImagePath.BENEFITS_IMAGE}
          width={400}
          height={400}
          className="w-full md:w-auto mb-4"
        />
        <div className="w-full">
          <h3 className="text-2xl mb-4 font-bold text-[#5d5d5d]">Benefits</h3>
          <IconWithText listData={benifit} icon={ImagePath.TICK_VECTOR} />
        </div>
      </div>
      <div className="r-w bg-[#037FFF] rounded-3xl md:!my-16 md:gap-5">
        <div className="md:flex md:items-center py-8 px-8">
          <div className="w-full">
            <h3 className="text-2xl mb-4 font-bold text-white">
              Who can become an IS enrolment partner?
            </h3>
            <IconWithText
              listData={enrolmentPartner}
              icon={ImagePath.TICK_WHITE_VECTOR}
              textColor={"text-white"}
            />
          </div>
          <Image
            alt="Benefits Image"
            src={ImagePath.ENROLMENT_PARTNER}
            width={400}
            height={400}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      <div className="r-w bg-[#DCEDFF] rounded-3xl md:!my-16 md:gap-5 !my-10">
        <div className="md:flex md:items-center md:justify-between py-8 px-8">
          <Image
            alt="Benefits Image"
            src={ImagePath.REGISTER_IMAGE}
            width={400}
            height={400}
            className="w-full md:w-auto"
          />
          <div className="">
            <h3 className="text-2xl mb-4 font-bold text-[#5d5d5d]">
              Register with us
            </h3>
            <p className="text-[#007EFF] mb-6">
              Don&apos;t miss out on the opportunity of a lifetime!
            </p>
            <LeadForm />
          </div>
        </div>
      </div>
      <div className="r-w bg-gradient-to-r from-[#FFE6E6] to-[#DAECFF] rounded-3xl md:!my-16 !my-10 p-10">
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
