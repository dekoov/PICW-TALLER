import React from 'react';
import data from '../data/data.json';

const Catalogo = () => {
  const autos = data.catalogo;

  return (
    <div className="container fade-in">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">Catálogo de Autos</h2>
        <p className="lead text-muted">Explora nuestra selección de vehículos disponibles</p>
      </div>
      <div className="row g-4">
        {autos.map(auto => (
          <div key={auto.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 text-center p-3">
              <img
                src={auto.imagen}
                alt={`${auto.marca} ${auto.nombre}`}
                className="card-img-top mb-3"
                style={{ maxHeight: '180px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{auto.marca} {auto.nombre}</h5>
                <p className="card-text text-muted">{auto.descripcion}</p>
                <ul className="list-unstyled mb-0">
                  <li><strong>Modelo:</strong> {auto.modelo}</li>
                  <li><strong>Color:</strong> {auto.color}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
