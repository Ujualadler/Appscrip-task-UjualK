import React, { useState } from "react";

function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="shadow-md  px-2 flex flex-col col-span-2 sm:col-span-1 sm:h-[460px] h-[320px]">
      {!imageLoaded && (
        <div className="flex items-center justify-center h-full">
          {/* Placeholder or loading animation */}
          <img
            loading="lazy"
            src="https://via.placeholder.com/300x399"
            alt="Placeholder"
            className="h-56 w-full"
          />
        </div>
      )}
      <img
        className={`sm:h-[370px] h-56 w-full ${!imageLoaded ? "hidden" : ""}`}
        src={product?.image || "https://via.placeholder.com/300x399"}
        onLoad={handleImageLoad}
        alt={product?.title || "Product Image"}
      />
      <h2 className="my-2 text-stone-800 sm:text-lg text-md font-bold font-['Simplon Norm'] uppercase text-truncate">
        {product?.title}
      </h2>
      <div className="flex justify-between">
        <div>
          <span className="text-zinc-500 sm:text-sm text-xs font-normal font-['Simplon Norm'] underline">
            Sign in
          </span>
          <span className="text-zinc-500 sm:text-sm text-xs font-normal font-['Simplon Norm']">
            {" "}
            or Create an account to see pricing
          </span>
        </div>
        <img className="w-6 h-6" src="/heart.png" alt="Heart Icon" />
      </div>
    </div>
  );
}

export default ProductCard;
