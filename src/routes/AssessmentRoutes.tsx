import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Assessment from "@/pages/assessment/Assessment";

const AssessmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Assessment />} /> */}
        <Route path=":subject/:id" element={<Assessment />} />
      </Route>
    </Routes>
  );
};

export default AssessmentRoutes;
