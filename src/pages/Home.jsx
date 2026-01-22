import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/data.json";

const Home = () => {
  const { titulo, descripcion } = data.inicio;
  return (
    <div className="px-4 py-5 my-5 text-center bg-white rounded-3 shadow-sm">
      <h1 className="display-5 fw-bold text-primary">{titulo}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          {descripcion}
        </p>
        <p>Descubre nuestra variedad de vehículos y recibe asesoría personalizada para encontrar el auto ideal.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/servicios" className="btn btn-primary btn-lg px-4 gap-3 btn-custom">
            Ver Servicios
          </Link>
          <Link to="/contacto" className="btn btn-outline-secondary btn-lg px-4 btn-custom">
            Contactar
          </Link>
        </div>
      </div>


export default Home;
