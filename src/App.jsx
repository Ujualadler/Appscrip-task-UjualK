import { useState } from "react";
import "./App.css";
import Navbar from "./Sections/Navbar";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-64  flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-center text-stone-800 text-xl sm:text-4xl md:text-5xl font-normal font-['Simplon Norm'] uppercase sm:tracking-wide">
            DISCOVER OUR PRODUCTS
          </h1>
          <p className="sm:w-[55%] w-[90%] text-center text-stone-800 sm:text-[22px]  font-normal font-['Simplon Norm'] leading-10">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
