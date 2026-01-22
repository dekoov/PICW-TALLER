import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center text-danger mt-5">
      <h1>404</h1>
      <h3>Página no encontrada</h3>
      <Link to="/" className="btn btn-outline-dark mt-3">Volver al Inicio</Link>
    </div>
  );
};
export default NotFound;