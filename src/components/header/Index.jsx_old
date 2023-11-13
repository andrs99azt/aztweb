import React from 'react';

import { NavLink } from 'react-router-dom';  // Importa NavLink

import logoAzteca from '../../assets/icons/logo-azteca.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';


import './header.scss';

const Header = () => {
    return (
        <nav className="azteca-header">
            <div className="azteca-header_icono">
                <img src={logoAzteca} alt="Logo Azteca" />
            </div>
            <ul className="azteca-header_nav">
                <li><NavLink to="/" activeClassName="active">INICIO</NavLink></li>
                <li><NavLink to="/nosotros" activeClassName="active">NOSOTROS</NavLink></li>
                <li><NavLink to="/servicios" activeClassName="active">SERVICIOS</NavLink></li>
                <li><NavLink to="/capital-humano" activeClassName="active">CAPITAL HUMANO</NavLink></li>
                <li><NavLink to="/contacto" activeClassName="active">CONTACTO</NavLink></li>
            </ul>
            <div className="azteca-header_contacto">
                <div className="contact-item">
                    <img src={phone} alt="mail" />
                    <p>Tel. (33) 3151-0720</p>
                </div>
                <div className="contact-item">
                    <img src={mail} alt="mail" />
                    <p>ventas@azteca.com.mx | omaly.barron@tlazteca.com</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;