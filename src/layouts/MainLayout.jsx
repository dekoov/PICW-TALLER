import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const MainLayout = () => {
  // Función para clase activa de Bootstrap 
  const getActiveClass = ({ isActive }) => 
    isActive ? "nav-link active fw-bold text-primary" : "nav-link text-dark";

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* HEADER */}
      <header className="bg-light shadow-sm py-3 mb-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 m-0">Mi Proyecto</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><NavLink to="/" className={getActiveClass}>Inicio</NavLink></li>
              <li className="nav-item"><NavLink to="/acerca" className={getActiveClass}>Acerca</NavLink></li>
              <li className="nav-item"><NavLink to="/servicios" className={getActiveClass}>Servicios</NavLink></li>
              <li className="nav-item"><NavLink to="/contacto" className={getActiveClass}>Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTENIDO VARIABLE (Outlet) */}
      <main className="container flex-grow-1">
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