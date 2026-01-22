import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="nombre@ejemplo.com" />
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};
export default Contact;