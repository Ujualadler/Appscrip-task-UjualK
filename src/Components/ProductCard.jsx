import React from "react";

function ProductCard({ product }) {
  return (
    <div className="shadow-md hover:bg-slate-300 p-1 flex flex-col col-span-2 sm:col-span-1 sm:h-[460px] h-80">
      <img
        className="sm:h-[380px] h-56 w-full"
        loading="lazy"
        src={
          product?.image ? product.image : "https://via.placeholder.com/300x399"
        }
      />
      <h2 className=" my-2 text-stone-800 sm:text-lg text-md font-bold font-['Simplon Norm'] uppercase text-truncate">
        {product?.title}
      </h2>
      <div className="flex justify-between ">
        <div>
          <span className="text-zinc-500 sm:text-sm text-xs font-normal font-['Simplon Norm'] underline">
            Sign in
          </span>
          <span className="text-zinc-500 sm:text-sm text-xs font-normal font-['Simplon Norm']">
            {" "}
            or Create an account to see pricing
          </span>
        </div>
        <img className="w-6 h-6 " src="/heart.png" alt="" />
      </div>
    </div>
  );
}

export default ProductCard;
