export default function ExtraFeatures() {
  const iconSize = 40;
  const darkColor = "#4b5563";
  const noiseCancellingIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11L6 13"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L9 15"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9L15 15"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11L18 13"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11L12 13"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const transparencyIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="14"
        x2="14"
        y2="14"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="11"
        x2="11"
        y2="11"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="17"
        x2="14"
        y2="17"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const powerIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="8"
        width="14"
        height="8"
        rx="1"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.5C4 11.2239 4.22386 11 4.5 11V11C4.77614 11 5 11.2239 5 11.5V12.5C5 12.7761 4.77614 13 4.5 13V13C4.22386 13 4 12.7761 4 12.5V11.5Z"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5L10.6863 11.1392C11.0851 10.5809 11.9149 10.5809 12.3137 11.1392L14 13.5"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 13.5L16.5 10.5"
        stroke={darkColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const data = [
    {
      icon: noiseCancellingIcon,
      name: "Noise Cancelling",
      desc: "Actively blocks external noise and uses real-time audio calibration, giving you the space you need",
    },
    {
      icon: transparencyIcon,
      name: "Transparency Mode",
      desc: "Allows you to see the real-time audio levels of your surroundings, and to adjust the level of noise cancellation",
    },
    {
      icon: powerIcon,
      name: "Extended Power",
      desc: "Extends the battery life of the device, so you can use it all day long",
    },
  ];
  return (
    <div id="features" className="mt-10 flex items-center justify-around flex-wrap">
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className="flex space-y-5 items-center justify-between flex-col max-w-sm p-6 m-2 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          >
            <h1>{data.icon}</h1>
            <h1 className="font-bold text-2xl">{data.name}</h1>
            <p className="text-md">{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
