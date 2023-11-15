import React from 'react';

import { NavLink } from 'react-router-dom';  // Importa NavLink

import logoAzteca from '../../assets/icons/logo-azteca.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';

import './header.scss';

const Header = () => {
    return (
        <div>
        <nav className="azteca-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 position-relative">
                        <div className="azteca-header_icono">
                            <img src={logoAzteca} alt="Logo Azteca" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-6 position-relative">
                        <ul className="azteca-header_nav d-xl-block d-lg-block d-md-none">
                            <li><NavLink to="/" activeClassName="active"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/nosotros" activeClassName="active"><span>Nosotros</span></NavLink></li>
                            <li><NavLink to="/servicios" activeClassName="active"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/capital-humano" activeClassName="active"><span>Capital humano</span></NavLink></li>
                            <li><NavLink to="/contacto" activeClassName="active"><span>Contacto</span></NavLink></li>
                        </ul>
                        <ul className="d-xl-none d-lg-none d-md-block ul-burguer">
                            <li><div className="burguer">Menú</div></li>
                        </ul>
                        <ul className="azteca-header_nav_mobile">
                            <img src={logoAzteca} alt="Logo Azteca" className="logo-mobile img-fluid"/>
                            <li><NavLink to="/" activeClassName="active"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/nosotros" activeClassName="active"><span>Nosotros</span></NavLink></li>
                            <li><NavLink to="/servicios" activeClassName="active"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/capital-humano" activeClassName="active"><span>Capital humano</span></NavLink></li>
                            <li><NavLink to="/contacto" activeClassName="active"><span>Contacto</span></NavLink></li>
                            <span className="close-nav-mobile">x</span>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 position-relative">
                        <div className="contact-item">
                            <img src={phone} alt="mail" className="img-fluid icon"/>
                            <p className="phone">Tel. (33) 3151-0720</p>
                        </div>
                    </div>
                    <div className="col-xl-3 position-relative d-xl-block d-md-none">
                        <div className="contact-item">
                            <img src={mail} alt="mail" className="img-fluid icon"/>
                            <p>ventas@azteca.com.mx <span>omaly.barron@tlazteca.com</span></p>
                        </div>
                    </div>
                </div>
           </div>
        </nav>
        <div className="grey-full"></div>
        </div>
    );
}

export default Header;