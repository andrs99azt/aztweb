import React from 'react';

import { NavLink } from 'react-router-dom';  // Importa NavLink

import logoAzteca from '../../assets/icons/logo-azteca.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';

import './header.scss';

const Header = () => {
    return (
        <div className="azteca-header">
            <div className="azteca-header_logo">
                <img src={logoAzteca} alt="Logo Azteca" style={{ height: '100%' }}/>
            </div>
            <nav className="azteca-header_nav">
                <ul>
                    <li className='raleway_light'><NavLink to="/"><span>INICIO</span></NavLink></li>
                    <li className='raleway_light'><NavLink to="/nosotros"><span>NOSOTROS</span></NavLink></li>
                    <li className='raleway_light'><NavLink to="/servicios"><span>SERVICIOS</span></NavLink></li>
                    <li className='raleway_light'><NavLink to="/capital-humano"><span>CAPITAL HUMANO</span></NavLink></li>
                    <li className='raleway_light'><NavLink to="/contacto"><span>CONTACTO</span></NavLink></li>
                </ul>
            </nav>
            <section className="azteca-header_contacto">
                <div className="azteca-header_contacto_phone">
                        <div className="azteca-header_contacto_phone_img">
                            <img src={phone} alt="mail"/>
                        </div>
                        <div className="azteca-header_contacto_phone_text raleway_bold">
                            Tel. (33) 3151-0720
                        </div>
                </div>
                <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
                    <div className="azteca-header_contacto_button">
                        <div className="azteca-header_contacto_button_img">
                            <img src={mail} alt="mail" />
                        </div>
                        <div className="azteca-header_contacto_button_text">
                            Enviar correo
                        </div>
                    </div>
                </NavLink>
                
            </section>
        </div>
    );
}

export default Header;