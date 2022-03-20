export default function Controll() {
  return (
    <div className="mt-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div data-aos="fade-right" className="w-full max-w-lg space-y-5">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Controll your sound with listening modes
        </h1>
        <p className="font-medium text-lg sm:text-xl">
          With an advanced acoustic platform and noise cancelling, Solo Pro
          ensures you&apos;ll always have the right sound for right situation.
        </p>
      </div>
      <div data-aos="fade-left" className="flex items-center justify-center text-center relative w-11/12 md:9/12 lg:w-6/12">
        <h1 className="absolute left-0 right-0 ml-auto mr-auto text-[32vw] lg:text-[15vw] font-extrabold opacity-10">
          SOLO
        </h1>
        <img src="3.jpg" className="w-full z-20" />
      </div>
    </div>
  );
}
