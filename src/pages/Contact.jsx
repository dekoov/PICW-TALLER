import React from 'react';
import data from "../data/data.json";

const Contact = () => {
  const contacto = data.contacto;

  return (
    <>
    <div>
      <h1>Contacto y Ubicación</h1>
      <p><strong>Dirección:</strong> {contacto.direccion}</p>
      <p><strong>Teléfono:</strong> {contacto.telefono}</p>
      <p><strong>Email:</strong> {contacto.email}</p>
      <p><strong>Horario:</strong> {contacto.horario}</p>
    </div>
    <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="nombre@ejemplo.com" />
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
};

export default Contact;