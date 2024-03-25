import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar";

export const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
