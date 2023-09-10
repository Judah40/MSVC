import React from "react";

function page() {
  return (
    <div className="flex flex-col p-6 ">
      {/* title */}
      <div className="h-12  md:p-8 grid place-items-center">
        <h1 className="underline">EXPLORE</h1>
      </div>
      {/* description */}
      <div className="h-12 md:p-8 grid place-items-center">
        <h1 className="text-[#9DBDFF] text-xl font-serif underline">
          Latest from out blog
        </h1>
      </div>
      {/* first div blog */}
      <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 p-4">
        {/* blog1 */}
        <div className="w-96 h-96  place-items-center grid">
          <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC10.jpg" alt="pic10" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>

        {/* blog2 */}
        <div className="w-96 h-96 place-items-center grid">
        <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC11.jpg" alt="pic11" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>

        {/* blog3 */}
        <div className="w-96 h-96 place-items-center grid">
        <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC12.jpg" alt="pic12" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>


      </div>


      {/* Second div blog */}
      {/* description */}
      <div className="h-12 grid place-items-center">
        <h1 className="text-[#9DBDFF] text-xl font-serif underline">More</h1>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 p-4">
       {/* blog1 */}
       <div className="w-96 h-96  place-items-center grid">
          <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC15.jpg" alt="pic15" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>

        {/* blog2 */}
        <div className="w-96 h-96 place-items-center grid">
        <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC14.jpg" alt="pic14" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>

        {/* blog3 */}
        <div className="w-96 h-96 place-items-center grid">
        <button className="w-80 h-full shadow-md  hover:shadow-lg hover:shadow-black flex flex-col gap-8 items-center ">
            <img src="./images/PIC13.jpg" alt="pic13" className="" loading='lazy'/>
            {/* title */}
            <div>
              <h1 className="text-lg font-serif font-medium text-[#9DBDFF]">
                Savor the flavors at our cozy bistro!
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <h1 className=" text-sm  font-light">
                APRIL 5,2020{" "}
              </h1>
              <h1 className=" font-serif text-sm text-orange-400 font-medium ">
                CLICK TO VIEW{" "}
              </h1>
            </div>
          </button>
        </div>

      </div>{" "}
    </div>
  );
}

export default page;
