import React from 'react';
import { NavLink } from 'react-router-dom';
import logoAzteca from '../../assets/icons/logo-azteca.png';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import icono1 from '../../assets/icons/icon-1.png';
import icono2 from '../../assets/icons/icon-2.png';
import icono3 from '../../assets/icons/icon-3.png';
import vinieta from '../../assets/img/vineta.png';
import top from '../../assets/img/scroll-top.png';



import './footer.scss';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        // behavior: 'smooth', // Para un desplazamiento suave
    });
};

const Footer = () => {
    return (
        <div className="azteca-footer">

            <div className="azteca-footer_up" onClick={scrollToTop}>
                <img src={top} alt="" />
            </div>

            <div className="azteca-footer_informacion">
                <div className="azteca-footer_informacion_panel">
                    <div className="azteca-footer_informacion_panel_icon">
                        <img src={logoAzteca} alt="" />
                    </div>
                    <br />
                    <p>
                        En Transportes Azteca estamos comprometidos en ofrecer 
                        un servicio de transporte confiable, seguro y de calidad 
                        para satisfacer las necesidades de nuestros clientes.
                    </p>
                    <div className="azteca-footer_informacion_panel_section">
                        <div className="azteca-footer_informacion_panel_section_icon">
                            <img src={icono1} alt="Teléfono" className='img-fluid'/>
                        </div>
                        <h4 className=" roboto_bold">
                                CORPORATIVO <br />
                                Francisco Montejano Palacios 25-A Col. La Venta del Astillero Zapopan, Jalisco, Mexico. Cp. 45221
                        </h4>
                    </div>

                    <div className="azteca-footer_informacion_panel_section">
                        <div className="azteca-footer_informacion_panel_section_icon">
                            <img src={icono2} alt="Teléfono" className='img-fluid'/>
                        </div>
                        <h4 className=" roboto_bold">
                            Tel. (33) 3151-0720
                        </h4>
                    </div>

                    <div className="azteca-footer_informacion_panel_section">
                        <div className="azteca-footer_informacion_panel_section_icon">
                            <img src={icono3} alt="Teléfono" className='img-fluid'/>
                        </div>
                        <h4 className=" roboto_bold">
                            ventas@azteca.com.mx
                        </h4>
                    </div>
                </div>
            </div>
            <div className="azteca-footer_navegacion">
                <div className="azteca-footer_navegacion_panel">
                    <div className="azteca-footer_navegacion_panel_links">
                        <h2 className='roboto_bold'>LINKS RAPIDOS</h2>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    INICIO
                                </div>
                            </NavLink>
                        </div>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/nosotros" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    NOSTROS
                                </div>
                            </NavLink>
                        </div>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/servicios" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    SERVICIOS
                                </div>
                            </NavLink>
                        </div>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/capital-humano" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    CAPITAL HUMANO
                                </div>
                            </NavLink>
                        </div>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/bolsa-de-trabajo" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    BOLSA DE TRABAJO
                                </div>
                            </NavLink>
                        </div>

                        <div className='azteca-footer_navegacion_panel_links_item'>
                            <div className="azteca-footer_navegacion_panel_links_item_icon">
                                <img src={vinieta} alt="" />
                            </div>
                            <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
                                <div className="azteca-footer_navegacion_panel_links_item_texto roboto">
                                    CONTACTO
                                </div>
                            </NavLink>
                        </div>
                        
                    </div>

                    <div className="azteca-footer_navegacion_panel_redes">
                        <div className="azteca-footer_navegacion_panel_redes_icon">
                            <NavLink to="https://www.facebook.com/tlazteca" target="_blank">
                                <img src={facebook} className="img-fluid" alt="Facebook"/>
                            </NavLink>
                        </div>

                        <div className="azteca-footer_navegacion_panel_redes_icon">
                            <NavLink to="https://www.linkedin.com/company/transportes-azteca" target="_blank">
                                <img src={linkedin} className="img-fluid" alt="Facebook"/>
                            </NavLink>
                        </div>
                    </div>

                    <div className="azteca-footer_navegacion_panel_footer">
                        Aviso de Privacidad © 2023 Transportadora de Liquidos Azteca S.A. de C.V.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;