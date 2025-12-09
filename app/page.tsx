import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Pricing from "./component/Pricing";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center  font-sans ">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
      
    </div>
  );
}
