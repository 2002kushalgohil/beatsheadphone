import Footer from "./Pages/Footer";
import NavBar from "./Pages/NavBar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="px-5 sm:px-10 md:px-14 text-gray-600 bg-white">
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
