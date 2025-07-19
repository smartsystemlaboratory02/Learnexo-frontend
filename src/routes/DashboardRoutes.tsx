import {Routes, Route} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/dashboard/Dashboard';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes
