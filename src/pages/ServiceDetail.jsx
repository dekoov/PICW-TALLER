import React from 'react';
import data from "../data/data.json";
import { useParams, Link } from 'react-router-dom';
const ServiceDetail = () => {
  const { id } = useParams();
  const [servicio, setServicio] = React.useState(null);

  React.useEffect(() => {
    fetch('/src/data/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.servicios.find(s => String(s.id) === id);
        setServicio(found);
      });
  }, [id]);

  if (!servicio) {
    return <div>Cargando...</div>;
  }

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
        <Link to="/servicios" className="btn btn-secondary">Volver al listado</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
