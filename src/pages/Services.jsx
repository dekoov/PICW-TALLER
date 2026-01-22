import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const listaServicios = [
    { id: 1, nombre: "Desarrollo Web" },
    { id: 2, nombre: "Consultoría TI" },
    { id: 3, nombre: "Marketing Digital" }
  ];

  return (
    <div>
      <h2>Nuestros Servicios</h2>
      <p>Selecciona un servicio para ver más detalles:</p>
      <ul className="list-group">
        {listaServicios.map((servicio) => (
          <li key={servicio.id} className="list-group-item">
            {/* Requisito 1.e.ii: Navegación interna con Link */}
            {/* Requisito 4.a: Ruta dinámica */}
            <Link to={`/servicios/${servicio.id}`}>
              {servicio.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;