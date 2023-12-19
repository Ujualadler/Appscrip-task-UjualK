import React from "react";
import TopNavbar from "../Components/TopNavbar";
import MiddleNavbarElement from "../Components/MiddleNavbarElement";
import BottomNavbarElement from "../Components/BottomNavbarElement";

function Navbar() {
  return (
    <nav>
      <TopNavbar />
      <MiddleNavbarElement />
      <BottomNavbarElement />
    </nav>
  );
}

export default Navbar;
