"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function Objects() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-10 ">
        <div
          data-aos="fade-right"
          className="w-full h-96  flex flex-col items-center justify-center "
        >
          <h1 className="text-[30px]  lg:text-[30px]   font-serif  text-center  font-semibold">
            Your Key to Unlocking In Demand Career Opportunities!
          </h1>
          <h1 className="w-10/12 text-xl font-light text-center  ">
            Practical skills + Hands-on training = Vocational training magic!
            Embrace the power of vocational education and set yourselfup for
            success. #SkillsMasters
          </h1>
          <button className="w-[250px] rounded h-[65px] bg-[#9DBDFF]">
            About Us
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="w-full h-96 border-4 items-center flex justify-center "
        >
          <Image
            src={"/images/IMG_0087.jpg"}
            alt="photo"
            width={400}
            height={200}
          />
        </div>
      </div>

      {/* some of the Courses Offered */}
      <div className=" grid grid-cols-1 md:grid-cols-3   place-items-center md:place-items-center ">
        {/* Course 1 */}
        <div className="w-full  md:max-w-xs  grid grid-col-1  place-items-center">
          <img
            src={"/images/IMG_0087.jpg"}
            alt="photo"
            className="max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center text-sm text-gray-600 font-light">
              Beauty is more than just skin deep. As a cosmetologist, you have
              the ability to make people feel confident and beautiful.
            </p>
          </div>

          <div className="w-10/12 flex flex-col items-center">
            <button className="w-[250px] lg:w-10/12 h-[65px] border-2">
              Read More
            </button>
          </div>
        </div>
        {/* Course 2 */}
        <div className="w-full  md:max-w-xs grid grid-col-1  place-items-center">
          <img
            src={"/images/IMG_0087.jpg"}
            alt="photo"
            className=" max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center text-sm text-gray-600 font-light">
              Beauty is more than just skin deep. As a cosmetologist, you have
              the ability to make people feel confident and beautiful.
            </p>
          </div>

          <div className="w-10/12 flex flex-col items-center">
            <button className="w-[250px] lg:w-10/12 h-[65px] border-2">
              Read More
            </button>
          </div>
        </div>
        {/* Course 3 */}
        <div className="w-full md:max-w-xs  grid grid-col-1  place-items-center">
          <img
            src={"/images/IMG_0087.jpg"}
            alt="photo"
            className=" max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center text-sm text-gray-600 font-light">
              Beauty is more than just skin deep. As a cosmetologist, you have
              the ability to make people feel confident and beautiful.
            </p>
          </div>

          <div className="w-10/12 flex flex-col items-center">
            <button className="w-[250px] lg:w-10/12 h-[65px] border-2">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* About US */}

      <div className=" grid grid-cols-1 md:grid-cols-2 p-10 ">
        <div
          data-aos="fade-right"
          className="w-full h-96  flex flex-col items-center justify-center "
        >
          <div>
            <h1>ABOUT US</h1>
          </div>
          <h1 className="text-[30px]  lg:text-[30px]   font-serif  text-center  font-semibold">
            Discover the Art of Business Management through Vocational Training
          </h1>
          <h1 className="w-10/12 text-xl font-light text-center  ">
            unlock your potential and shape your future with vocartional
            training Discover the power of practical skills and hands-on
            learning for rewarding career #VocationalTraining #SkillsForSuccess
          </h1>


          {/* logo */}
          <div className=" grid grid-cols-3 gap-10">
            <div className="max-w-xs  h-32 w-32 border border-black bg-red-500 ">
hi
            </div>
            <div className="max-w-xs  h-32 w-32 border border-black bg-red-500 ">
hi
            </div>
            <div className="max-w-xs  h-32 w-32 border border-black bg-red-500 ">
hi
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full h-96 border-4 items-center flex justify-center "
        >
          <Image
            src={"/images/IMG_0087.jpg"}
            alt="photo"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Objects;
