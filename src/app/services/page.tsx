import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-1 place-items-center p-4'>
      {/* title */}
<div>
<h1 className='text-center'>
  OUR SERVICES
</h1>

<h1 className='text-3xl text-center font-semibold font-serif p-4 md:p-12  max-w-lg'>
  Well Experience Teachers at your Service
</h1>
</div>


{/* services */}
{/* Service 1 */}

<div className=" grid  grid-cols-1 md:grid-cols-2 pl-10 pr-10 gap-4">
<div
          data-aos="fade-left"
          className="w-full  items-center flex justify-center "
        >
          <img src={"/images/PIC22.jpg"} alt="photo" className="md:h-72 h-52" />
        </div>
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
       
      </div>
      {/* Service 2 */}

      <div className=" grid grid-cols-1 md:grid-cols-2 pl-10 pr-10 md:gap-6 gap-4">
      <div
          data-aos="fade-right"
          className="w-full items-center flex justify-center md:order-last"
        >
          <img src={"/images/PIC21.jpg"} alt="photo" className="md:h-72 h-52" />
        </div>
        <div
          data-aos="fade-left"
          className="w-full  flex flex-col items-center justify-center "
        >
          {/* Services */}
          <div className="grid grid-cols-1 w-full gap-4">
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
        
      </div>
    </div>
  )
}

export default page
