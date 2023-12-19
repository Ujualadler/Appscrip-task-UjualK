import React from "react";

function BottomNavbarElement() {
  return (
    <div className="sm:flex justify-center items-center hidden">
      <div className="w-[41%] flex justify-between gap-2">
        <h3 className="text-stone-800 text-xl font-bold font-['Simplon Norm'] tracking-wide">
          SHOP
        </h3>
        <h3 className="text-stone-800 text-xl font-bold font-['Simplon Norm'] tracking-wide">
          SKILLS
        </h3>
        <h3 className="text-stone-800 text-xl font-bold font-['Simplon Norm'] tracking-wide">
          STORIES
        </h3>
        <h3 className="text-stone-800 text-xl font-bold font-['Simplon Norm'] tracking-wide">
          ABOUT
        </h3>
        <h3 className="text-stone-800 text-xl font-bold font-['Simplon Norm'] tracking-wide">
          CONTACT US
        </h3>
      </div>
    </div>
  );
}

export default BottomNavbarElement;
