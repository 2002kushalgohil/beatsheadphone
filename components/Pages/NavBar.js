export default function NavBar() {
  const cartIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10H18L16.7143 17H7.28571L6 10Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10L4.7724 5.65234H2.00003"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="7.5"
        cy="20.5"
        r="0.5"
        fill="#333333"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16.5"
        cy="20.5"
        r="0.5"
        fill="#333333"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="py-3 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 sm:justify-between">
      <div className="self-start">
        <h1 className="font-extrabold text-3xl">
          Beats <span className="text-red-600">.</span>
        </h1>
      </div>
      <div className="space-x-10 text-base font-medium">
        <a href="#">Home</a>
        <a href="#product">Product</a>
        <a href="#features">Features</a>
      </div>
      <div className="flex self-end">
        <p className="mr-5">{cartIcon}</p>
        <img src="/kushal.png" className="w-7" />
      </div>
    </div>
  );
}
