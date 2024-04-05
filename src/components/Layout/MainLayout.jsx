import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar";
import Footer from "../Common/Footer";

export const MainLayout = () => {
  return (
    <div className="dark:bg-black min-h-screen flex justify-between flex-col">
      <div className="">
        <Navbar />
        <div className="pt-3">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
