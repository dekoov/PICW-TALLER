import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* HEADER */}
      <Navbar />

      {/* CONTENIDO */}
      <main className="container flex-grow-1 mt-4">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="m-0">© 2026 - Proyecto Grupito</p>
      </footer>
    </div>
  );
};

export default MainLayout;
