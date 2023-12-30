import React, {useEffect } from 'react';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';
import logoAzteca from '../../assets/icons/logo-azteca.png';

//Styles
import './contacto.scss';

const Index = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div>
            <Header/>
            <div className="container-fluid azteca-cabecera-contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1 className='raleway_bold'>Ponte en contacto <span>con nosotros</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row azteca-formulario-contacto">

                    <div className="col-xl-6">

                        <div className="informacion">
                            <p className='raleway_light'>Cuéntanos de que forma podemos ayudar a crecer tu negocio</p>
                            <ul>
                                <li>Francisco Montejano Palacios 25-A</li>
                                <li>La Venta del Astillero, Jalisco, C.P 45221.</li>
                                <li>Zapopan, México.</li>
                                <li>(33) 3151-0720</li>
                                <li>ventas@tlazteca.com.mx</li>
                            </ul>
                            <img src={logoAzteca} alt="Transportes Azteca" className='img-luid logo'/>
                        </div>

                    </div>
                    <div className="col-xl-6">

                        <form action="#">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='Nombres'/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='Apellidos'/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="email" className='form-control' placeholder='Email'/>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder='Empresa'/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="tel" className='form-control' placeholder='N° de teléfono'/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea name="mensaje" className="form-control" placeholder='Mensaje' cols="30" rows="3"></textarea>
                            </div>

                            <button type="submit" className='btn btn-contacto'>Enviar mensaje</button>

                        </form>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;