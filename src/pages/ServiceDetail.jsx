import React from "react";
import data from "../data/data.json";
import { useParams, Link, useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const servicio = data.servicios.find(
    s => String(s.id) === id
  );

  React.useEffect(() => {
    if (!servicio) {
      navigate("/error");
    }
  }, [servicio, navigate]);

  if (!servicio) return null;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{servicio.titulo}</h3>
        <p className="card-text">{servicio.descripcion}</p>
        <ul>
          {servicio.detalles.map((detalle, idx) => (
            <li key={idx}>{detalle}</li>
          ))}
        </ul>
        <hr />
        <Link to="/servicios" className="btn btn-secondary">
          Volver al listado
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
