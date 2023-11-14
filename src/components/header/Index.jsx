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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-2 col-lg-2 col-md-3 position-relative">
                        <div className="azteca-header_icono">
                            <img src={logoAzteca} alt="Logo Azteca" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-6 position-relative">
                        <ul className="azteca-header_nav d-xl-block d-lg-block d-md-none">
                            <li><NavLink to="/" activeClassName="active"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/nosotros" activeClassName="active"><span>Nosotros</span></NavLink></li>
                            <li><NavLink to="/servicios" activeClassName="active"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/capital-humano" activeClassName="active"><span>Capital humano</span></NavLink></li>
                            <li><NavLink to="/contacto" activeClassName="active"><span>Contacto</span></NavLink></li>
                        </ul>
                        <ul class="d-xl-none d-lg-none d-md-block ul-burguer">
                            <li><div class="burguer">Menú</div></li>
                        </ul>
                        <ul className="azteca-header_nav_mobile">
                            <img src={logoAzteca} alt="Logo Azteca" class="logo-mobile img-fluid"/>
                            <li><NavLink to="/" activeClassName="active"><span>Inicio</span></NavLink></li>
                            <li><NavLink to="/nosotros" activeClassName="active"><span>Nosotros</span></NavLink></li>
                            <li><NavLink to="/servicios" activeClassName="active"><span>Servicios</span></NavLink></li>
                            <li><NavLink to="/capital-humano" activeClassName="active"><span>Capital humano</span></NavLink></li>
                            <li><NavLink to="/contacto" activeClassName="active"><span>Contacto</span></NavLink></li>
                            <span class="close-nav-mobile">x</span>
                        </ul>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-3 position-relative">
                        <div class="contact-item">
                            <img src={phone} alt="mail" class="img-fluid icon"/>
                            <p class="phone">Tel. (33) 3151-0720</p>
                        </div>
                    </div>
                    <div class="col-xl-2 position-relative d-xl-block d-md-none">
                        <div class="contact-item">
                            <img src={mail} alt="mail" class="img-fluid icon"/>
                            <p>ventas@azteca.com.mx <span>omaly.barron@tlazteca.com</span></p>
                        </div>
                    </div>
                </div>
           </div>
        </nav>
        <div class="grey-full"></div>
        </div>
    );
}

export default Header;