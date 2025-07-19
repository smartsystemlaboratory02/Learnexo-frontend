import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";

const MainLayout = () => {
  return (
    <main className="flex">
      <Sidebar />

      <div className="border w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
