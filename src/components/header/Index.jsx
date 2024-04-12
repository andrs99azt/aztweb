
import React, { useState, useEffect } from 'react';


import { NavLink } from 'react-router-dom';  // Importa NavLink

import logoAzteca from '../../assets/icons/logo-azteca.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';

import menu from '../../assets/icons/components/header/menu.png'
import close from '../../assets/icons/components/header/close.png'
import flecha from '../../assets/icons/components/header/flecha.png'

import palmera from '../../assets/icons/components/header/palmera.png'
import agave from '../../assets/icons/components/header/agave.png'
import jugos from '../../assets/icons/components/header/jugos.png'
import quimicos from '../../assets/icons/components/header/quimicos.png'



import './header.scss';

const Header = () => {

    const [menuView, setMenuView] = useState(false);

    const openMenu = () => {
        setMenuView(!menuView);
        document.body.style.overflow = menuView ? 'auto' : 'hidden';
    };

    useEffect(() => {
        return () => {
            setMenuView(false)
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="azteca-header">
            
            <div className="azteca-header_content">
                <div className="azteca-header_content_logo">
                    <img src={logoAzteca} alt="Logo Azteca"/>
                </div>

                <div className="azteca-header_content_nav">
                    <ul>
                        <li className='raleway_ExtraBold'><NavLink to="/"><span>INICIO</span></NavLink></li>
                        <li className='raleway_ExtraBold'><NavLink to="/nosotros"><span>NOSOTROS</span></NavLink></li>
                        <li className='raleway_ExtraBold'><NavLink to="/servicios"><span>SERVICIOS</span></NavLink></li>
                        <li className='raleway_ExtraBold'><NavLink to="/capital-humano"><span>CAPITAL HUMANO</span></NavLink></li>
                        <li className='raleway_ExtraBold'><NavLink to="/bolsa-de-trabajo"><span>BOLSA DE TRABAJO</span></NavLink></li>
                        <li className='raleway_ExtraBold'><NavLink to="/contacto"><span>CONTACTO</span></NavLink></li>
                    </ul>
                </div>

                <section className="azteca-header_content_contacto">
                    <div className="azteca-header_content_contacto_phone">
                        <div className="azteca-header_content_contacto_phone_img">
                            <img src={phone} alt="mail"/>
                        </div>
                        <div className="azteca-header_content_contacto_phone_text roboto_bold">
                            Tel. (33) 3151-0720
                        </div>
                    </div>
                    <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_content_contacto_button">
                            <div className="azteca-header_content_contacto_button_img">
                                <img src={mail} alt="mail" />
                            </div>
                            <div className="azteca-header_content_contacto_button_text">
                                Enviar correo
                            </div>
                        </div>
                    </NavLink>
                
                </section>

                <section className="azteca-header_content_icons">
                    {!menuView && (<img src={menu} onClick={openMenu} alt="" />) }
                    {menuView && (<img src={close} onClick={openMenu} alt="" />) }
                </section>                
            </div>



            {menuView && (<div className="azteca-header_menu">

                <div className="azteca-header_menu_nav">
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                INICIO
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/nosotros" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                NOSOTROS
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/servicios" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                SERVICIOS
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/capital-humano" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                CAPITAL HUMANO
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/bolsa-de-trabajo" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                BOLSA DE TRABAJO
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
                        <div className="azteca-header_menu_nav_item">
                            <div className="azteca-header_menu_nav_item_texto">
                                CONTACTO
                            </div>
                            <div className="azteca-header_menu_nav_item_icon">
                                <img src={flecha} alt="" />
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="azteca-header_menu_footer">
                    <img src={palmera} alt="" />
                    <img src={agave} alt="" />
                    <img src={jugos} alt="" />
                    <img src={quimicos} alt="" />
                </div>


                



            </div>)}
        </div>
    );
}

export default Header;