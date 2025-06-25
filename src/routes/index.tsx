import { BrowserRouter } from "react-router-dom";
import OnboardingRoutes from "./OnboardingRoutes";

const AppRoutes = () => {
  return (
        <BrowserRouter>
            <OnboardingRoutes />
        </BrowserRouter>
  )
}

export default AppRoutes