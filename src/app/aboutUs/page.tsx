"use client";

import React, { useEffect } from "react";
import AOS from "aos";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      {/* header */}
      <div className=" grid grid-cols-1 md:flex place-items-center md:justify-center p-28 gap-28">
        {/* text */}
        <div className="flex flex-col max-w-sm  items-center justify-center">
          <h1 className="">SHORT STORY ABOUT US</h1>
          <h1 className="max-w-xs font-bold font-serif text-center text-4xl">
            THE BIG STORY BEHIND OUR VOCATIONAL INSTITUTE{" "}
          </h1>
          <p className="text-sm font-thin max-w-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget
            mauris pharetra et ultrices neque ornare. Nunc aliquet bibendum enim
            facilisis gravida neque convallis a. Cursus in hac habitasse platea
            dictumst quisque. Malesuada fames ac turpis egestas integer.
            Senectus et netus et malesuada fames ac turpis.
          </p>
        </div>

        {/* pic */}
        <div className="bg-blue-500">
          <img src="../images/PIC7.jpg" className="  border shadow-md" loading='lazy'/>
        </div>
      </div>

      {/* Values */}
      <div className=" grid grid-cols-1  place-items-center p-6 gap-2">
        <h1>OUR VALUES</h1>
        <h1 className="max-w-xs font-bold font-serif text-center text-4xl">
          The work values we thrive for{" "}
        </h1>

        <div className=" grid grid-cols-1 gap-12 place-items-center ">
          {/* EXPERT TEACHER */}

          <div className="flex flex-col md:flex-row  justify-center  place-items-center gap-12">
            <div
              data-aos="fade-right"
              className="max-w-xs  h-32 w-32 border-[0.1px] border-white  place-items-center grid"
            >
              <img src="../images/Icon.png" className="w-24 h-24" loading='lazy'/>
            </div>
            <div className="gap-3 grid grid-cols-1  ">
              <h1 className="font-bold font-serif text-center md:text-left text-xl">
                Expert Teacher
              </h1>
              <p className="text-center max-w-xs md:max-w-md md:text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                eget mauris pharetra et ultrices neque ornare.
              </p>
            </div>
          </div>
          <hr className="w-full h-10" />

          {/* GREAT SERVICES */}

          <div className="flex flex-col md:flex-row  place-items-center gap-12">
            <div
              data-aos="fade-right"
              className="max-w-xs  h-32 w-32 border-[0.1px] border-white  place-items-center grid"
            >
              <img src="../images/Icon(1).png" className="w-24 h-24" loading='lazy'/>{" "}
            </div>
            <div className="gap-3 grid">
              <h1 className="font-bold font-serif text-center md:text-left text-xl">
                Great Services{" "}
              </h1>
              <p className="text-center max-w-xs md:max-w-md md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                eget mauris pharetra et ultrices neque ornare.
              </p>
            </div>
          </div>

          <hr className="w-full h-12" />

          {/* GREAT SERVICES */}

          <div className="flex flex-col md:flex-row  place-items-center gap-12">
            <div
              data-aos="fade-right"
              className="max-w-xs  h-32 w-32 border-[0.1px] border-white  place-items-center grid"
            >
              <img src="../images/Vector.png" className="w-24 h-24" loading='lazy'/>{" "}
            </div>
            <div className="gap-3 grid">
              <h1 className="font-bold font-serif text-center md:text-left text-xl">
                Great Services{" "}
              </h1>
              <p className="text-center max-w-xs md:max-w-md md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                eget mauris pharetra et ultrices neque ornare.
              </p>
            </div>
          </div>
          <hr className="w-full h-12" />
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2  ">
          <div className=" flex justify-center ">
            <img src="../images/PIC8.jpg" className="w-96  " loading='lazy'/>
          </div>
          <div className="flex background-main flex-col w-full md:max-w-sm p-8 items-center justify-center">
            <h1 className="text-white">SHORT STORY ABOUT US</h1>
            <h1 className="max-w-xs text-white font-bold font-serif text-center text-4xl">
              THE BIG STORY BEHIND OUR VOCATIONAL INSTITUTE{" "}
            </h1>
            <p className="text-sm font-thin p-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
              eget mauris pharetra et ultrices neque ornare. Nunc aliquet
              bibendum enim facilisis gravida neque convallis a. Cursus in hac
              habitasse platea dictumst quisque. Malesuada fames ac turpis
              egestas integer. Senectus et netus et malesuada fames ac turpis.
            </p>
          </div>
        </div>



        {/* Follow on instagram and facebook */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-12 lg:p-20">
          {/* pic and words
           */}
          <div className="grid grid-rows-2 md:gap-12">
            {/* first text header */}
            <div className=" grid place-items-center">
              <h1 className="text-center">SHARE US</h1>
              <h1 className="max-w-xs  font-bold font-serif text-center text-4xl">
                Follow Us on Instagram{" "}
              </h1>
              <p className="text-sm font-thin p-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                eget mauris pharetra et ultrices neque ornare. Nunc aliquet
                bibendum enim facilisis gravida neque convallis a. Cursus in hac
                habitasse platea dictumst quisque. Malesuada fames ac turpis
                egestas integer. Senectus et netus et malesuada fames ac turpis.
              </p>
            </div>

            {/* Pic1 */}
            <div>
              <img src="../images/PIC9.jpg" loading='lazy'/>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-12 md:gap-12">
            {/* pic2 */}
            <div>
              <img src="../images/PIC10.jpg" loading='lazy'/>
            </div>
            {/* pic2 */}
            <div>
              <img src="../images/PIC11.jpg" loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
