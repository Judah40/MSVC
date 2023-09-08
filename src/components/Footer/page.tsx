import NavLinks from "@/app/NavLinks";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="background-main h-[550px] md:h-96 w-full flex justify-center pt-8 content-center">
      <div className="h-60 w-9/12  gap-4  flex flex-col ">
        <div className="grid grid-cols-2  h-12">
          <Link href={"/"} prefetch={false}>
            <h1 className="font-serif text-4xl text-white">msvc</h1>
          </Link>

          <div className=" flex flex-1 justify-end gap-4">
            <Link href={"https://facebook.com"}>
              <div className=" border rounded ">
                <AiFillFacebook className="w-10 h-10 text-white" />
              </div>
            </Link>
            <Link href={"https://instagram.com"}>
              <div className=" border rounded ">
                <AiFillInstagram className="w-10 h-10 text-white" />
              </div>
            </Link>
          </div>
        </div>

        <hr />
        <div className="grid grid-cols-2 md:grid-cols-3  gap-8 md:gap-20">
          {/* Navigation bar  */}
          <div className="grid gap-2 ">
            <h1 className=" text-white font-serif font-semibold">Explore</h1>
            <div>
              <Link
                href={"/"}
                style={{ color: "white", textDecoration: "underline" }}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href={"/Article"}
                style={{ color: "white", textDecoration: "underline" }}
              >
                Articles
              </Link>
            </div>
            <div>
              <Link
                href={"/services"}
                style={{ color: "white", textDecoration: "underline" }}
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                href={"/contact"}
                style={{ color: "white", textDecoration: "underline" }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Workinh Hours */}

          <div className="grid grid-cols-1">
            <h1 className="text-white font-semibold  font-serif">
              Working Hours{" "}
            </h1>

            <p className="text-white">Mon to Fri: 7am - 6pm</p>
            <p className="text-white">Sat: 9am - 7pm </p>
            <p className="text-white">Sun: 9am - 6pm </p>
          </div>
          {/* Contact */}

          <div className="gap-4 grid">
            <h1 className="text-white font-semibold  font-serif">
              Keep in Touch
            </h1>

            <p className="text-white">
              <span className="font-medium">Address</span>: 24 Judah St,
              Freetown
            </p>
            <p className="text-white">
              <span className="font-medium">Mail</span>: 24 Judah St, Freetown
            </p>
            <p className="text-white">
              <span className="font-medium">Phone</span>: +23231851053
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
