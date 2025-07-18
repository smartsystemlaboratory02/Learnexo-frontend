import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />

      <div className="border h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
