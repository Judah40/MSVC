"use client";

import CarouselMain from "@/components/Carousel";
import Form from "@/components/Form/page";
import React from "react";

function Contact() {
  return (
    <div className="grid grid-cols-1 place-items-center md:p-6">
      <h1 className="text-xl font-semibold">ABOUT US</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-12 gap-6 place-items-center">
        {/* pic */}

        <div className="p-0 md:p-8 w-full border-2 border-[#9DBDFF] rounded-xl">
          <CarouselMain />
        </div>

        {/* Form */}
        <div
          data-aos="fade-left"
          className="w-full   items-center flex justify-center md:w-11/12"
        >
          <Form />
        </div>
      </div>

      <div className=" grid grid-cols-1 place-items-center p-14 gap-4">
        <h1 className="text-center ">
           Contact Us We value your feedback, questions, and
          concerns. If you have any inquiries or need assistance, please don't
          hesitate to get in touch with our dedicated support team.
        </h1>
        <h1 className="text-center ">
          Our team is available during regular business hours to assist you. We
          strive to respond to all inquiries promptly and provide you with the
          best possible assistance. Your satisfaction is our priority, and we
          look forward to hearing from you.
        </h1>
      </div>
    </div>
  );
}

export default Contact;
