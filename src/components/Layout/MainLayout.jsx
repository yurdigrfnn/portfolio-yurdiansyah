import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar";

export const MainLayout = () => {
  return (
    <div className="pt-3">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
