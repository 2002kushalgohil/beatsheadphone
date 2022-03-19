import Footer from "./Pages/Footer";
import NavBar from "./Pages/NavBar";

export default function Layout({ children }) {
  return (
    <div className="px-5 sm:px-10 md:px-14 text-gray-600 bg-white">
      {/* <div className="px-5 sm:px-10 md:px-14 text-white bg-gray-900"> */}
      <div>
        <NavBar />
        {children}
        <Footer/>
      </div>
    </div>
  );
}
