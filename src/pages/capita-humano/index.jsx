import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Pagina de capital humano</h1>
            <button onClick={() => navigate('/')}>Ir al inicio</button>
            <button onClick={() => navigate('/nosotros')}>Ir al nosotros</button>
            <button onClick={() => navigate('/servicios')}>Ir al servicios</button>
            <button onClick={() => navigate('/capital-humano')}>Ir al capital humano</button>
            <button onClick={() => navigate('/contacto')}>Ir al contacto</button>
        </div>
    );
}

export default Index;