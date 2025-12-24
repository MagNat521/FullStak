import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="app-root">
      <TopBar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;