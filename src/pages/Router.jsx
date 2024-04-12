import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './inicio';
import Nosotros from './nosotros';
import Servicios from './servicios';
import CapitalHumano from './capita-humano';
import BolsaDeTrabajo from './bolsa-de-trabajo';
import Contacto from './contacto';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/capital-humano" element={<CapitalHumano />} />
                <Route path="/bolsa-de-trabajo" element={<BolsaDeTrabajo />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;