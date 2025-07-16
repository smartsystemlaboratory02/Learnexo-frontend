import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingRoutes from "./OnboardingRoutes";
import Landing from "../pages/landing/Landing";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <OnboardingRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
