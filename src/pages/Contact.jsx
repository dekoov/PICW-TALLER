import data from "../data/data.json";

const Contact = () => {
  const contacto = data.contacto;

  return (
    <div>
      <h1>Contacto y Ubicación</h1>
      <p><strong>Dirección:</strong> {contacto.direccion}</p>
      <p><strong>Teléfono:</strong> {contacto.telefono}</p>
      <p><strong>Email:</strong> {contacto.email}</p>
      <p><strong>Horario:</strong> {contacto.horario}</p>
    </div>
  );
};

export default Contact;