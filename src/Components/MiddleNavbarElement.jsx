import React from "react";

function MiddleNavbarElement() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 h-24 w-[90%]">
        <div className="flex justify-start gap-3 items-center">
          <img className="sm:hidden h-8 block" src="/menuicon.png" alt="" />
          <img className="h-8" src="/logo.png" alt="" />
        </div>
        <div className="flex justify-center  items-center">
          <h2 className="text-black sm:text-4xl text-2xl font-extrabold font-['Inter'] tracking-wide">
            LOGO
          </h2>
        </div>
        <div className="flex justify-end items-center pl-16 gap-5">
          <img src="/searchicon.png" alt="" />
          <img src="/heart.png" alt="" />
          <img src="/cart.png" alt="" />
          <img className="sm:block hidden" src="/user.png" alt="" />
          <div className="sm:flex justify-center hidden items-center gap-1">
            <h3 className="text-stone-800 text-base font-bold font-['Simplon Norm'] tracking-wide">
              ENG
            </h3>
            <img src="/arrowdown.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNavbarElement;
