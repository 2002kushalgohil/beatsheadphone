export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        minHeight: "70vh",
      }}
      className="flex items-center justify-center text-center relative"
    >
      <h1 className="text-[36vw] xl:text-[450px] font-extrabold opacity-10">
        {year}
      </h1>
      <img
        src="1.jpg"
        className="absolute left-0 right-0 ml-auto mr-auto w-[600px]"
      />
    </div>
  );
}
