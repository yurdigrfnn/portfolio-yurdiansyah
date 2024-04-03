import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar";

export const MainLayout = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="pt-3">
        <Outlet />
      </div>
      <div></div>
    </div>
  );
};
