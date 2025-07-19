import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";

const MainLayout = () => {
  return (
    <main className="flex">
      <div className="shrink-0 w-[320px] max-h-screen h-screen overflow-y-scroll scroll-smooth">
        <Sidebar />
      </div>

      <div className="border w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
