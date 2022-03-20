export default function Immerse() {
  return (
    <div
      id="product"
      className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden"
    >
      <div className="w-11/12" data-aos="fade-right">
        <img src="2.jpg" className="w-full" />
      </div>
      <div data-aos="fade-left" className="w-full max-w-lg space-y-5">
        <h1 className="text-4xl sm:text-5xl font-bold">Immerse yourself in your music</h1>

        <div className="flex">
          <p className="mr-4 font-medium text-xl">
            $199 &nbsp; | &nbsp; Colors
          </p>
          <div className="flex items-center justify-center space-x-3">
            <div className=" w-1 h-1 p-2 rounded-full bg-orange-500 cursor-pointer border-4"></div>
            <div className=" w-1 h-1 p-2 rounded-full bg-gray-500 cursor-pointer"></div>
            <div className=" w-1 h-1 p-2 rounded-full bg-pink-500 cursor-pointer"></div>
            <div className=" w-1 h-1 p-2 rounded-full bg-emerald-500 cursor-pointer"></div>
          </div>
        </div>

        <p className="font-medium text-lg sm:text-xl">
          With an advanced acoustic platform and noise cancelling, Solo Pro
          ensures you&apos;ll always have the right sound for right situation.
        </p>
        <button className="py-3 px-10 rounded-full border-2 border-orange-600 text-orange-600 active:bg-orange-600 active:text-white transition shadow-or shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}
