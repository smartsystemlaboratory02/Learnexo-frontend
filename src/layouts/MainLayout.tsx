import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Header from "@/components/ui/Header";
// import { AppSidebar } from "@/components/app-sidebar";

const MainLayout = () => {
  return (
    <main className="flex">
      <div className="shrink-0 w-fit min-w-[240px] max-h-screen h-screen overflow-y-scroll scroll-smooth hidden mlg:block">
        <Sidebar />
      </div>
      {/* <AppSidebar /> */}

      <div className="p-4 md:p-6 w-full">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
