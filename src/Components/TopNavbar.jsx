import React from "react";
import TopNavElement from "./TopNavElement";

function TopNavbar() {
  return (
    <div className="bg-black h-6 w-full flex justify-around items-center">
      {/* Display for small screens (hidden on larger screens) */}
      <div className="sm:hidden">
        <TopNavElement />
      </div>

      {/* Display for larger screens (hidden on small screens) */}
      <div className="hidden sm:flex justify-around px-8 items-center w-full">
        <TopNavElement />
        <TopNavElement />
        <TopNavElement />
      </div>
    </div>
  );
}

export default TopNavbar;
