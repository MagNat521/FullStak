import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AboutPage } from "./pages/AboutPage";
import { TasksPage } from "./pages/TasksPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
};

export default App;