import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Header from "@/components/ui/Header";

const MainLayout = () => {
  return (
    <main className="flex">
      <div className="shrink-0 w-[320px] max-h-screen h-screen overflow-y-scroll scroll-smooth">
        <Sidebar />
      </div>

      <div className="p-6 w-full">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
