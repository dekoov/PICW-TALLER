import data from "../data/data.json";

const Home = () => {
  const { titulo, descripcion } = data.inicio;

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <p>
        Descubre nuestra variedad de vehículos y recibe asesoría personalizada
        para encontrar el auto ideal.
      </p>
    </div>
  );
};

export default Home;
