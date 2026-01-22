import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  // paráemetro de la URL
  const { id } = useParams();

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Detalle del Servicio</h3>
        <p className="card-text">
          Estás visualizando la información del servicio con ID: <strong>{id}</strong>
        </p>
        <hr />
        <Link to="/servicios" className="btn btn-secondary">Volver al listado</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;