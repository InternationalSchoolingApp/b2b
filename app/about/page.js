import React from "react";
import NumbersReveal from "../components/NumbersReveal";
import Image from "next/image";
import ImagePath from "../constant/ImagePath";

const content = [
  {
    title: "Is International Schooling an 'ACCREDITED' school ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae iste praesentium minus explicabo adipisci tempora aspernatur, porro sunt exercitationem. Placeat quas corporis exercitationem minus aspernatur iusto sint, officia saepe, beatae libero, architecto tenetur et assumenda maxime dolore rem ea officiis odio totam obcaecati esse neque dicta nemo! Impedit, facilis.",
  },
  {
    title: "Is International Schooling an 'ACCREDITED' school ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae iste praesentium minus explicabo adipisci tempora aspernatur, porro sunt exercitationem. Placeat quas corporis exercitationem minus aspernatur iusto sint, officia saepe, beatae libero, architecto tenetur et assumenda maxime dolore rem ea officiis odio totam obcaecati esse neque dicta nemo! Impedit, facilis.",
  },
  {
    title: "Is International Schooling an 'ACCREDITED' school ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae iste praesentium minus explicabo adipisci tempora aspernatur, porro sunt exercitationem. Placeat quas corporis exercitationem minus aspernatur iusto sint, officia saepe, beatae libero, architecto tenetur et assumenda maxime dolore rem ea officiis odio totam obcaecati esse neque dicta nemo! Impedit, facilis.",
  },
  {
    title: "Is International Schooling an 'ACCREDITED' school ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae iste praesentium minus explicabo adipisci tempora aspernatur, porro sunt exercitationem. Placeat quas corporis exercitationem minus aspernatur iusto sint, officia saepe, beatae libero, architecto tenetur et assumenda maxime dolore rem ea officiis odio totam obcaecati esse neque dicta nemo! Impedit, facilis.",
  },
];

const page = () => {
  return (
    <>
      <div className="r-w !mt-10 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-[#5D5D5D]">
          <div className="w-full">
            <h1 className="text-2xl lg:text-5xl font-extrabold mb-2">
              About Us
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </p>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              src={ImagePath.ABOUT_IMAGE}
              alt="about-image"
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-4 !my-6 md:!my-16 w-max m-auto">
          <NumbersReveal />
        </div>

        <div className="r-w">
          <p className="g-t bg-gradient-to-r from-[#007EFF] font-medium to-[#FF0005] bg-clip-text text-transparent text-sm lg:text-base text-center">
            WE ARE HERE TO HELP
          </p>
          <p className="uppercase text-[#5D5D5D] font-bold text-lg lg:text-2xl text-center mt-3">
            Frequently Asked Questions
          </p>

          <div className="mt-5 lg:mt-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-5">
              <div className="">
                {content?.map((item, index) => {
                  return (
                    <div
                      className="flex bg-white rounded-lg mb-4 px-3 shadow-md shadow-gray-100"
                      key={index}
                    >
                      <svg
                        className="mt-4"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5 0C18.3456 0 22.0338 1.52767 24.753 4.24695C27.4723 6.96623 29 10.6544 29 14.5C29 18.3456 27.4723 22.0338 24.753 24.753C22.0338 27.4723 18.3456 29 14.5 29C10.6544 29 6.96623 27.4723 4.24695 24.753C1.52767 22.0338 0 18.3456 0 14.5C0 10.6544 1.52767 6.96623 4.24695 4.24695C6.96623 1.52767 10.6544 0 14.5 0ZM15.2685 6.19771C13.5824 6.19771 12.2608 6.67621 11.281 7.63321C10.2784 8.59021 9.79993 9.91179 9.79993 11.5979H12.3975C12.3975 10.6409 12.5798 9.889 12.9671 9.36493C13.4001 8.72693 14.1064 8.43071 15.109 8.43071C15.8837 8.43071 16.4989 8.63579 16.9319 9.06871C17.342 9.50164 17.5699 10.0941 17.5699 10.846C17.5699 11.4156 17.3648 11.9625 16.9546 12.4638L16.6812 12.7828C15.2001 14.1044 14.3115 15.0614 14.0153 15.6766C13.6963 16.2918 13.5596 17.0437 13.5596 17.9096V18.2286H16.1799V17.9096C16.1799 17.3627 16.2939 16.8842 16.5217 16.4285C16.7268 16.0184 17.023 15.631 17.4331 15.2892C18.5269 14.3322 19.1876 13.717 19.3927 13.4891C19.9396 12.76 20.2358 11.8258 20.2358 10.6865C20.2358 9.29657 19.7801 8.20286 18.8686 7.40536C17.9572 6.58507 16.7496 6.19771 15.2685 6.19771ZM14.8584 19.3451C14.3938 19.3325 13.9431 19.5046 13.6051 19.8236C13.4383 19.9807 13.3072 20.172 13.2207 20.3843C13.1342 20.5966 13.0943 20.825 13.1039 21.054C13.1039 21.5553 13.2634 21.9654 13.6051 22.2844C13.9406 22.61 14.3909 22.7901 14.8584 22.7857C15.3596 22.7857 15.7698 22.6262 16.1116 22.3072C16.282 22.1468 16.4167 21.9523 16.507 21.7364C16.5973 21.5205 16.6411 21.288 16.6356 21.054C16.64 20.8256 16.5978 20.5987 16.5116 20.3872C16.4255 20.1756 16.2971 19.9839 16.1344 19.8236C15.7876 19.504 15.3298 19.3323 14.8584 19.3451Z"
                          fill="url(#paint0_linear_571_69)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_571_69"
                            x1="0"
                            y1="14.8222"
                            x2="29"
                            y2="14.8222"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#007EFF" />
                            <stop offset="1" stopColor="#1F00E1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="collapse collapse-arrow">
                        <label aria-label="Faqs-Label" className=""></label>
                        <input
                          aria-label="Faqs"
                          type="radio"
                          name="faqs"
                          defaultChecked={index === 0}
                        />
                        <div className="collapse-title font-medium text-[#5D5D5D]">
                          {item?.title}
                        </div>
                        <div className="collapse-content text-[#5D5D5D]">
                          <div>{item?.content}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
