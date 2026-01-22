import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Importar paginas que van a hacer
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import ServiceDetail from '../pages/ServiceDetail';
import Catalogo from '../pages/Catalogo';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre con el Layout */}
        <Route path="/" element={<MainLayout />}>

          {/* Rutas Hijas (se cargan en el Outlet) */}
          <Route index element={<Home />} />  {/* Inicio */}
          <Route path="acerca" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="catalogo" element={<Catalogo />} />

          {/* Rutas de Servicios (Incluye el Bonus) */}
          <Route path="servicios" element={<Services />} />
          <Route path="servicios/:id" element={<ServiceDetail />} /> {/* RUTA DINÁMICA */}

          {/* Manejo de error 404 (Requisito 1.f) */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
