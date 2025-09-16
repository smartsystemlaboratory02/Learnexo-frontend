import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Assessment from "@/pages/assessment/Assessment";
import Assessments from "@/pages/assessment/Assessments";

const AssessmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Assessments />} />
        <Route path=":subject/:id" element={<Assessment />} />
      </Route>
    </Routes>
  );
};

export default AssessmentRoutes;
