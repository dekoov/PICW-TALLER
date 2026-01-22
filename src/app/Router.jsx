import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Páginas
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Catalogo from "../pages/Catalogo";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal */}
        <Route path="/" element={<MainLayout />}>

          {/* Rutas principales */}
          <Route index element={<Home />} />
          <Route path="acerca" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="servicios/:id" element={<ServiceDetail />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="contacto" element={<Contact />} />

          {/* Error por ID inválido */}
          <Route path="error" element={<ErrorPage />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
