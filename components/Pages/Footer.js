export default function Footer() {
  const year = new Date().getFullYear();
  const iconSize = 25;
  const darkColor = "#4b5563";
  const linkedIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="9"
        width="4"
        height="13"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="5"
        cy="4"
        r="2"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const twitterIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6.49998L22.5 3.49998L20 4.49998C14 0.499984 11.8333 5.49998 11.5 8.49998C7.1 8.49998 4 5.49998 3 3.99998C-0.2 9.99998 4.5 15 8 17C7.5 18 1 19 1 19C17.5 25 21 12.5 21 6.49998Z"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="border-t-2 mt-20 border-gray-300">
      <div className="flex mt-10 justify-center items-center text-center flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold">Say hello to us</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="mt-5 border-2 py-3 pl-7 pr-12 sm:pr-40 rounded-full outline-none bg-white shadow-lg"
          />
          <button className="absolute top-2 right-2 py-1 mt-5 px-4 rounded-full border-2 border-orange-600 bg-orange-600 text-white active:bg-white active:text-orange-600 shadow-lg">
            Buy Now
          </button>
        </div>
      </div>

      <div
        className=" flex justify-between items-center flex-col xl:flex-row py-9"
        style={{
          fontSize: "17px",
        }}
      >
        <div className=" flex justify-center xl:justify-start items-center w-full xl:w-1/3 mt-3 xl:mt-0">
          <p>
            <a href="#">About us</a> &nbsp; | &nbsp;
            <a href="#">Privacy Policy</a> &nbsp; | &nbsp;
            <a href="#">Contact us</a>
          </p>
        </div>

        <div className=" flex justify-center items-center w-full xl:w-1/3 mt-5 xl:mt-0">
          <p className="opacity-50">Copyright &#169; {year}- Kushal</p>
        </div>

        <div className=" flex justify-center xl:justify-end items-center w-full xl:w-1/3 mt-10 xl:mt-0 space-x-5 opacity-90">
          <a href="#" target="_blank" rel="noreferrer">
            {linkedIcon}
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            {twitterIcon}
          </a>
        </div>
      </div>
    </div>
  );
}
