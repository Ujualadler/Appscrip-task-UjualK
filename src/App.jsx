import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Sections/Navbar";
import Footer from "./Sections/Footer";
import FilterElement from "./Components/FilterElement";
import ProductCard from "./Components/ProductCard";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchProducts();
  }, []);

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
      <div className="w-full flex justify-center items-center mb-10">
        <div className="w-[90%] grid grid-cols-4 sm:gap-14 gap-4 ">
          <FilterElement />
          {products.length > 0
            ? products.map((pro) => <ProductCard product={pro} />)
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
