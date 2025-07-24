import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingRoutes from "./OnboardingRoutes";
import Landing from "../pages/landing/Landing";
import DashboardRoutes from "./MainRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding/*" element={<OnboardingRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
