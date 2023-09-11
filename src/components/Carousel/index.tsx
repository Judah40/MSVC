import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function CarouselMain() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    { img: "../images/PIC12.jpg" },
    { img: "../images/PIC13.jpg" },
    { img: "../images/PIC14.jpg" },
    { img: "../images/PIC15.jpg" },
    { img: "../images/PIC16.jpg" },
    { img: "../images/PIC18.jpg" },
    { img: "../images/PIC20.jpg" },
  ];
  return (
    <div className=" ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
            className="lg:w-[500px] md:w-[240px] lg:h-[340px] h-[168px] lg:bg-cover bg-contain bg-no-repeat"
              style={{  backgroundImage: `url(${slideImage.img})`,  }}
            ></div>
          </div>
        ))}
      </Slide>{" "}
    </div>
  );
}

export default CarouselMain;
