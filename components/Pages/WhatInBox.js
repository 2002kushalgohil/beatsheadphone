export default function WhatInBox() {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
      <div className="w-11/12">
        <img src="6.png" className="w-full" />
      </div>
      <div className="w-full max-w-xl space-y-5 md:pl-14">
        <h1 className="text-5xl font-bold">What's in the box</h1>

        <div className="font-medium text-xl space-y-5">
          <p className="flex items-center justify-start">
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-300 mr-3"></div>
            Solo Pro wireless headphones
          </p>
          <p className="flex items-center justify-start">
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-300 mr-3"></div>
            Carrying Case
          </p>
          <p className="flex items-center justify-start">
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-300 mr-3"></div>
            Lightning to USB-A charging cable
          </p>
          <p className="flex items-center justify-start">
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-300 mr-3"></div>
            Quick Start Guide
          </p>
          <p className="flex items-center justify-start">
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-300 mr-3"></div>
            Warranty Card
          </p>
        </div>
        {/* <p className="">
          With an advanced acoustic platform and noise cancelling, Solo Pro
          ensures you'll always have the right sound for right situation.
        </p> */}
      </div>
    </div>
  );
}
