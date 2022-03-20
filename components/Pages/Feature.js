export default function Feature() {
  const iconSize = 35;
  const darkColor = "#4b5563";
  const wifiIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12.4781"
        cy="18.077"
        r="0.754806"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5161 16.0243C15.7676 14.5547 14.2404 13.5481 12.4781 13.5481C10.7158 13.5481 9.1886 14.5547 8.44006 16.0243"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.68484 13.3019C7.18746 11.1681 9.66998 9.77405 12.4781 9.77405C15.2862 9.77405 17.7687 11.1681 19.2714 13.3019"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9735 10.6136C19.7622 7.80409 16.3308 6 12.4781 6C8.6354 6 5.21187 7.79471 3 10.5916"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const foldableIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 13.5L9.5 13.5"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const weightIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="9"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L12 8"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16L12 12"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const micIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V5Z"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11C6 14.3137 8.68629 17 12 17C15.3137 17 18 14.3137 18 11"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="18"
        x2="12"
        y2="20"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="21"
        x2="14"
        y2="21"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="overflow-hidden">
      <div className="w-full flex items-center justify-center flex-col text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Solo Pro</h1>
        <p className="w-full sm:w-96 mt-5 font-medium">
          The only Headset you&apos;ll ever need.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center py-10"
      >
        <div className="rounded-xl shadow-xl hover:shadow-2xl transition cursor-pointer overflow-hidden max-w-3xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-80 w-full object-cover md:h-full md:w-80"
                src="person2.png"
              />
            </div>
            <div className="text-center grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col items-center justify-center border p-5">
                <h1>{wifiIcon}</h1>
                <p className="mt-3 font-medium">Wireless Connectivity</p>
              </div>
              <div className="flex flex-col items-center justify-center border p-5">
                <h1>{foldableIcon}</h1>
                <p className="mt-3 font-medium">Foldable Design</p>
              </div>
              <div className="flex flex-col items-center justify-center border p-5">
                <h1>{weightIcon}</h1>
                <p className="mt-3 font-medium">Product Weight</p>
              </div>
              <div className="flex flex-col items-center justify-center border p-5">
                <h1>{micIcon}</h1>
                <p className="mt-3 font-medium">Microphone feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
