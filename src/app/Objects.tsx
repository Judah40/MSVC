"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Form from "@/components/Form/page";
// ..

function Objects() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="gap-8 grid">
      <div className="background grid grid-cols-1 md:grid-cols-2  ">
        <div
          data-aos="fade-right"
          className="w-full  p-4   flex flex-col items-center justify-center gap-6"
        >
          <h1 className="text-[30px] w-10/12 lg:text-[30px]   font-serif  text-left  font-semibold">
            Your Key to Unlocking In Demand Career Opportunities!
          </h1>
          <h1 className="w-10/12 text-xl font-thin text-left  ">
            Practical skills + Hands-on training = Vocational training magic!
            Embrace the power of vocational education and set yourselfup for
            success. #SkillsMasters
          </h1>
          <div className="w-10/12">
          <button className="w-[250px] rounded h-[65px] bg-[#9DBDFF]">
            About Us
          </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full h-96 bg-blue-400 rounded border-4  items-center flex justify-center "
        >
          <img
            src={"/images/IMG_0087.jpg"}
            alt="photo"
           className="w-8/12 "
          />
        </div>
      </div>

      {/* some of the Courses Offered */}
      <div className=" grid grid-cols-1 md:grid-cols-3   place-items-center md:place-items-center ">
        {/* Course 1 */}
        <div
          data-aos="fade-right"
          className="w-full  md:max-w-xs  grid grid-col-1  place-items-center"
        >
          <img
            src={"/images/PIC2.jpg"}
            alt="photo"
            className="max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center p-4 text-sm text-gray-600 font-thin">
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
        <div
          data-aos="fade-up"
          className="w-full  md:max-w-xs grid grid-col-1  place-items-center"
        >
          <img
            src={"/images/PIC1.jpg"}
            alt="photo"
            className=" max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center p-4 text-sm text-gray-600 font-thin">
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
        <div
          data-aos="fade-left"
          className="w-full md:max-w-xs  grid grid-col-1  place-items-center"
        >
          <img
            src={"/images/PIC3.jpg"}
            alt="photo"
            className=" max-h-96 p-12 md:max-w-xs"
          />

          <h1 className="text-xl max-w-xs text-center font-medium font-serif ">
            Certificate in Cosmetology
          </h1>
          <div className="max-w-md">
            <p className="text-center p-4 text-sm text-gray-600 font-thin">
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

      <div className="background grid grid-cols-1 md:grid-cols-2 p-12 gap-4 ">
        <div
          data-aos="fade-right"
          className="w-full   flex flex-col items-center justify-center gap-2 "
        >
          <div>
            <h1>ABOUT US</h1>
          </div>
          <h1 className="text-[30px]  lg:text-[30px]   font-serif  text-center  font-semibold">
            Discover the Art of Business Management through Vocational Training
          </h1>
          <h1 className="text-xl font-thin text-center  ">
            unlock your potential and shape your future with vocartional
            training Discover the power of practical skills and hands-on
            learning for rewarding career #VocationalTraining #SkillsForSuccess
          </h1>

          {/* logo */}
          <div className=" grid grid-cols-3 gap-12 place-items-center ">
            <div
              data-aos="fade-right"
              className="max-w-xs  h-24 w-24 border-[0.1px] border-white  place-items-center grid"
            >
              <img src="/images/Icon.png" className="w-12 h-12" />
            </div>
            <div
              data-aos="fade-up"
              className="max-w-xs  h-24 w-24  border-[0.1px] border-white place-items-center grid"
            >
              <img src="/images/Icon(1).png" className="w-12 h-12" />{" "}
            </div>
            <div
              data-aos="fade-left"
              className="max-w-xs  h-24 w-24 border-[0.1px] border-white  place-items-center grid"
            >
              <img src="/images/Vector.png" className="w-12 h-12" />{" "}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full  items-center flex justify-center  "
        >
          <img
            src={"/images/PIC4.jpg"}
            alt="photo"
            className="md:max-h-96 p-4"
          />
        </div>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 place-items-center ">
        <h1>OUR SERVICES</h1>
        <h1 className=" text-[30px] max-w-md lg:text-[30px]   font-serif  text-center  font-semibold">
          Are you ready to unlock your potential and embark on a journey of
          success{" "}
        </h1>
      </div>
      {/* Service 1 */}

      <div className=" grid  grid-cols-1 md:grid-cols-2 pl-10 pr-10 gap-4">
        <div
          data-aos="fade-right"
          className="w-full   flex flex-col items-center justify-center "
        >
          {/* Services */}
          <div className="grid grid-cols-1 w-full">
            {/* 1st services */}
            <div className="">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 2nd services */}
            <div className="">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 3rd services */}
            <div className="">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 4th services */}
            <div className="">
              <h1 className="">Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full  items-center flex justify-center "
        >
          <img src={"/images/PIC5.jpg"} alt="photo" className="" />
        </div>
      </div>
      {/* Service 2 */}

      <div className=" grid grid-cols-1 md:grid-cols-2 pl-10 pr-10 md:gap-6 gap-4">
        <div
          data-aos="fade-left"
          className="w-full  flex flex-col items-center justify-center "
        >
          {/* Services */}
          <div className="grid grid-cols-1 w-full gap-4">
            {/* 1st services */}
            <div className="bg-red-500 ">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 2nd services */}
            <div className="">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 3rd services */}
            <div className="">
              <h1>Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
            {/* 4th services */}
            <div className="">
              <h1 className="">Cosmetology</h1>
              <h1 className="font-thin">
                The version have evolved over the sometimes by acident.
              </h1>
              <hr />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="w-full items-center flex justify-center md:order-first"
        >
          <img src={"/images/PIC5.jpg"} alt="photo" className="" />
        </div>
      </div>

      {/* Testimonies */}
      <div className="background grid grid-col-1 w-full">
        <div className="grid grid-cols-1 place-items-center pt-6">
          <h1>TESTIMONIALS</h1>
          <h1 className="text-[30px] p-4 max-w-md lg:text-[30px]   font-serif  text-center  font-semibold">
            What our Students says...{" "}
          </h1>
        </div>
        {/* Service 1 */}

        <div className=" grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
          <div
            data-aos="fade-right"
            className="w-full   flex flex-col items-center justify-center "
          >
            {/* testimony 1 */}
            <div className="grid grid-cols-1  h-80 w-full">
              <div className="w-full h-52 border-2 bg-white grid grid-cols-1 place-items-center">
                <p className="p-6">
                  “ It is a long established fact that a reader will be tracked
                  distracted by the readable content of a page is when looking
                  at its layout. The point of using Lorem of distribution it
                  look like readable English “
                </p>
              </div>
              <div className="w-full h-28 bg-blue-700"></div>
            </div>
          </div>
          {/* testimony 2 */}

          <div data-aos="fade-left" className="w-full grid grid-cols-1  h-80">
            <div className="w-full h-52 border-2 bg-white grid grid-cols-1 place-items-center">
              <p className="p-6">
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </p>
            </div>
            <div className="w-full h-28 bg-blue-700"></div>
          </div>
        </div>
      </div>
      {/* Contact Us */}

      <div className=" grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div
          data-aos="fade-right"
          className="w-full   flex flex-col items-center justify-center "
        >
          <div>
            <h1>CONTACT US</h1>
          </div>
          <h1 className="text-[30px]  lg:text-[30px]   font-serif  text-center  font-semibold">
            Bridging Ideas with Design: Don't hesitate to reach out, your
            creative journey starts here.{" "}
          </h1>
          <h1 className="w-10/12 text-xl font-light text-center  ">
            You're scrolling through the website of a boutique graphic design
            company that also offers vocational training in graphic design and
            various related digital arts.
          </h1>
        </div>
        <div
          data-aos="fade-left"
          className="w-full   items-center flex justify-center  "
        >
        <Form/>
        </div>
      </div>
    </div>
  );
}

export default Objects;