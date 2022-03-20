export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        minHeight: "70vh",
      }}
      className="flex items-center justify-center text-center relative overflow-hidden"
    >
      <div data-aos="fade-up">
        <h1 className="text-[36vw] xl:text-[450px] font-extrabold opacity-10">
          {year}
        </h1>
      </div>
      <img
        data-aos="fade-down"
        src="1.jpg"
        className="absolute left-0 right-0 ml-auto mr-auto w-[600px] imageAnimation"
      />
    </div>
  );
}
