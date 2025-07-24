import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Profile from "@/pages/profile/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
