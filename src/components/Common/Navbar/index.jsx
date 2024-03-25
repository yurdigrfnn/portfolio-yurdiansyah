import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="sm:hidden relative">
      <NavbarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <button type="button" className="" onClick={() => setSidebarOpen(true)}>
        Button navbarmobile
      </button>
      <div className=""></div>
    </div>
  );
};
