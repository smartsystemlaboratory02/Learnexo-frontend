import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingRoutes from "./OnboardingRoutes";
import Landing from "../pages/landing/Landing";
import DashboardRoutes from "./DashboardRoutes";
import CourseRoutes from "./CourseRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <OnboardingRoutes />
      <DashboardRoutes />
      <CourseRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
