import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "nav-link active fw-bold text-primary" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          El Visaje Sobre Ruedas
        </NavLink>

        <div className="navbar-nav ms-auto">
          <NavLink to="/" className={getActiveClass}>Inicio</NavLink>
          <NavLink to="/acerca" className={getActiveClass}>Acerca</NavLink>
          <NavLink to="/servicios" className={getActiveClass}>Servicios</NavLink>
          <NavLink to="/catalogo" className={getActiveClass}>Catálogo</NavLink>
          <NavLink to="/contacto" className={getActiveClass}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
