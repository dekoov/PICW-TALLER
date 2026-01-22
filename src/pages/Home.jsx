import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/data.json";

const Home = () => {
  const { titulo, descripcion, subtitulo, imagen, beneficios } = data.inicio;
  return (
    <div className="container py-5 fade-in">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-lg-2 text-center">
          <img
            src={imagen}
            alt="Concesionario"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: 350, objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h1 className="display-4 fw-bold text-primary mb-2">{titulo}</h1>
          <h3 className="mb-3 text-secondary">{subtitulo}</h3>
          <p className="lead mb-4">{descripcion}</p>
          <ul className="list-unstyled mb-4">
            {beneficios && beneficios.map((b, i) => (
              <li key={i} className="mb-2">
                <span className="badge bg-success me-2">✓</span>{b}
              </li>
            ))}
          </ul>
          <div className="d-grid gap-2 d-sm-flex">
            <Link to="/catalogo" className="btn btn-primary btn-lg px-4 gap-3 btn-custom">
              Ver Catálogo
            </Link>
            <Link to="/servicios" className="btn btn-outline-secondary btn-lg px-4 btn-custom">
              Ver Servicios
            </Link>
            <Link to="/contacto" className="btn btn-outline-dark btn-lg px-4 btn-custom">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
