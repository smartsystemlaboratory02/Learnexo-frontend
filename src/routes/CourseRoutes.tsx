import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Courses from "../pages/courses/Courses";

const CourseRoutes = () => {
  return (
    <Routes>
      <Route path="/courses" element={<MainLayout />}>
        <Route index element={<Courses />} />
      </Route>
    </Routes>
  );
};

export default CourseRoutes;
