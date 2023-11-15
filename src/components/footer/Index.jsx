import React from 'react';
import { NavLink } from 'react-router-dom';
import logoAzteca from '../../assets/icons/logo-azteca.png';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import icono1 from '../../assets/icons/icon-1.png';
import icono2 from '../../assets/icons/icon-2.png';
import icono3 from '../../assets/icons/icon-3.png';
import './footer.scss';

const Footer = () => {
    return (
        <div>
            <footer>
                <NavLink to="/inicio" activeClassName="active" className='circle-top d-xl-none d-lg-none d-md-block'></NavLink>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="gris">
                                <div className="barra-superior"></div>
                                <img src={logoAzteca} alt="Azteca" className='img-fluid logo'/>
                                <p className='roboto'>En Transportes Azteca estamos comprometidos en ofrecer un servicio de transporte confiable, seguro y de calidad para satisfacer las necesidades de nuestros clientes</p>
                                <div className="row icon">
                                    <div className="col-xl-3 col-md-3 col-sm-3">
                                        <img src={icono1} alt="Dirección" className='img-fluid'/>
                                    </div>
                                    <div className="col-xl-9 col-md-9 col-sm-9">
                                        <h3 className='roboto_bold'>CORPORATIVO <br/>Francisco Montejano Palacios 25-A Col. La Venta del Astillero Zapopan, Jalisco, Mexico. Cp. 45221</h3>
                                    </div>
                                </div>
                                <div className="row icon">
                                    <div className="col-xl-3 col-md-3 col-sm-3">
                                        <img src={icono2} alt="Teléfono" className='img-fluid'/>
                                    </div>
                                    <div className="col-xl-9 col-md-9 col-sm-9">
                                        <h3 className='roboto_bold'>Tel. (33) 3151-0720</h3>
                                    </div>
                                </div>
                                <div className="row icon">
                                    <div className="col-xl-3 col-md-3 col-sm-3">
                                        <img src={icono3} alt="Correo" className='img-fluid'/>
                                    </div>
                                    <div className="col-xl-9 col-md-9 col-sm-9">
                                        <h3 className='roboto_bold'>ventas@azteca.com.mx<br/>omaly.barron@tlazteca.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-2 col-lg-3 offset-lg-1">
                            <div className="links">
                                <h2 className='roboto_bold'>Links Rapidos</h2>
                                <ul>
                                    <li><NavLink to="/" activeClassName="active" href="/inicio">Inicio</NavLink></li>
                                    <li><NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink></li>
                                    <li><NavLink to="/servicios" activeClassName="active">Servicios</NavLink></li>
                                    <li><NavLink to="/capital-humano" activeClassName="active">Capital humano</NavLink></li>
                                    <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-12 position-relative">
                            <NavLink to="/inicio" activeClassName="active" className='circle-top d-xl-block d-lg-block d-md-none d-xs-none d-none'></NavLink>
                            <ul className='social'>
                                <li>
                                    <NavLink to="https://facebook.com">
                                        <img src={facebook} activeClassName="active" className="img-fluid" alt="Facebook"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://linkedin.com">
                                        <img src={linkedin} activeClassName="active" className="img-fluid" alt="Facebook"/>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="copy">
                                <a href="/aviso-de-privacidad">Aviso de Privacidad</a>
                                <p>© 2023 Transportadora de Liquidos Azteca S.A. de C.V.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;