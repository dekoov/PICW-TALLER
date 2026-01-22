import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const listaServicios = [
    { id: 1, title: "Venta de Autos", icon: "🚗", desc: "Amplia variedad de vehículos nuevos y usados." },
    { id: 2, title: "Servicio Técnico", icon: "🛠️", desc: "Mantenimiento y reparación profesional." },
    { id: 3, title: "Financiamiento", icon: "💰", desc: "Opciones flexibles de crédito y leasing." },
    { id: 4, title: "Repuestos y Accesorios", icon: "🔧", desc: "Piezas originales y accesorios para tu auto." },
  ];

  return (
    <div className="container fade-in">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">Nuestros Servicios</h2>
        <p className="lead text-muted">Soluciones digitales a tu medida</p>
      </div>

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
