import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'; 

const Header = () => {
    return (
        <nav className="azteca-header">
            <div className="azteca-header_icono">
                <span className="material-icons-outlined">check_circle</span>
            </div>
            <ul className="azteca-header_nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/capital-humano">Capital Humano</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div className="azteca-header_contacto">
                <div className="contact-item">
                    <span className="material-icons-outlined">phone</span> 
                    <p>Tel. (33) 3151-0720</p>
                </div>
                <div className="contact-item">
                    <span className="material-icons-outlined">mail_outline</span>
                    <p>ventas@azteca.com.mx</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;