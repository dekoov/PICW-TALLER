import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const listaServicios = [
    { id: 1, title: "Desarrollo Web", icon: "💻", desc: "Sitios modernos y veloces." },
    { id: 2, title: "Apps Móviles", icon: "📱", desc: "Android y iOS nativos." },
    { id: 3, title: "Marketing", icon: "📈", desc: "Estrategias de crecimiento." },
    { id: 4, title: "Consultoría", icon: "jhs", desc: "Expertos a tu servicio." }, 
  ];

  return (
    <div className="container fade-in">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">Nuestros Servicios</h2>
        <p className="lead text-muted">Soluciones digitales a tu medida</p>
      </div>

      {/* AQUÍ ESTÁ LA MAGIA RESPONSIVE */}
      {/* row = fila */}
      {/* col-12 = en móvil ocupa todo el ancho (1 columna) */}
      {/* col-md-6 = en tablet ocupa la mitad (2 columnas) */}
      {/* col-lg-4 = en PC ocupa un tercio (3 columnas) */}
      <div className="row g-4">
        {listaServicios.map((servicio) => (
          <div key={servicio.id} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-center p-4">
              <div className="display-4 mb-3">{servicio.icon}</div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{servicio.title}</h5>
                <p className="card-text text-muted">{servicio.desc}</p>
                <Link to={`/servicios/${servicio.id}`} className="btn btn-outline-primary btn-sm mt-3">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;