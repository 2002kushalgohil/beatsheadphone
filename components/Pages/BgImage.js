export default function BgImage() {
  const iconSize = 35;
  const darkColor = "#fff";
  const playIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3125 12L7.6875 19L7.6875 5L17.3125 12Z"
        stroke={darkColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="mt-10 w-full h-96 rounded-xl overflow-hidden relative">
      <img src="person.jpg" className="h-full w-full object-cover rotate-180" />
      <div className="absolute bottom-0 backdrop-blur-xl left-0 m-6 flex items-center justify-center cursor-pointer p-3 rounded-lg">
        <div className="mr-2 bg-red-500 p-2 rounded-full">{playIcon}</div>
        <div className="">
          <p className="font-bold text-xl">WATCH</p>
          <h1 className="font-medium text-xl">Intro Video</h1>
        </div>
      </div>
    </div>
  );
}
