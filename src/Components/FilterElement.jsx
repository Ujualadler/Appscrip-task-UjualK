import React from "react";
import SortComponent from "../Sections/SortComponent";

function FilterElement() {
  return (
    <div className="h-[88px] col-span-4 bg-white flex justify-between items-center border-y-2 mb-5 border-[#E5E5E5]">
      <div className="flex gap-10 justify-between items-center">
        <h3 className="sm:block hidden text-stone-800 text-lg font-bold font-['Simplon Norm'] uppercase leading-10">
          3425 Items
        </h3>
        <div className="flex justify-center gap-1 items-center">
          <img src="/arrowright.png" alt="show filter" />
          <h4 className="text-right text-zinc-500 text-base font-normal font-['Adobe Caslon Pro'] underline leading-10">
            SHOW FILTER
          </h4>
        </div>
      </div>
      <SortComponent />
    </div>
  );
}

export default FilterElement;
