import React from 'react';
import logoAzteca from '../../assets/icons/logo-azteca.png';

import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

//Styles
import './nosotros.scss';

const Index = () => {

    return (
        <div>
            <Header/>
            <div className="container-fluid azteca-cabecera-nosotros">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3">
                        <h1 className='raleway_black text-center'>¿Quiénes somos?</h1>
                        <p className='text-center raleway_semib'>Somos una empresa de transporte de líquidos líder en la industria, comprometidos con la excelencia operativa, la calidad y la seguridad en cada aspecto de nuestras operaciones. Nuestro equipo altamente capacitado y nuestra moderna flota de vehículos especializados nos respaldan para brindar soluciones logísticas confiables y eficientes a nuestros clientes en todo momento.</p>
                    </div>
                </div>
            </div>
            <div className="container azteca-hacemos-nosotros">
                <div className="row top">
                    <div className="col-xl-6">
                        <h3 className='raleway_medium'>¿Qué hacemos en Azteca?</h3>
                        <h2 className='square_bold'>Líder en transporte <span>de líquidos</span></h2>
                        <div className="row">
                            <div className="col-xl-4">
                               <img src={logoAzteca} alt="Logo Azteca" className="img-fluid"/>
                            </div>
                            <div className="col-xl-7">
                               <h4 className='raleway_semib'>Desde 1986, <span>Operando en todo México y ahora en</span> E.U.A</h4>
                            </div>
                        </div>
                        <p>En Azteca, nos especializamos en proporcionar soluciones logísticas integrales y seguras para una amplia variedad de líquidos, desde productos químicos hasta alimentos y combustibles. Nuestra experiencia y compromiso con la calidad nos han posicionado como líderes en el mercado.</p>
                        <p>Lo que nos distingue es nuestra atención meticulosa a cada detalle. Desde el manejo experto de la carga y la selección de equipos especializados hasta la planificación precisa de rutas y la gestión de la documentación aduanera, abordamos cada aspecto de la cadena de suministro con excelencia. Además, nuestra inversión constante en tecnología y capacitación asegura la eficiencia y la seguridad en cada</p>
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="img img1"></div>
                                <div className="frase">
                                    <p className='raleway_bold'>"Transformamos líquidos en soluciones, proporcionando confianza en cada viaje."</p>
                                    <span className='raleway_medium'>/Santiago Pérez</span>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img img2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="line-black"></div>

                <div className="row azteca-nosotros-mision">
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="img img-1"></div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img img-2"></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="img img-horizontal"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 position-relative">
                        <div className="vertical-align">
                            <h2 className='square_bold'>Nuestra misión</h2>
                            <p>Ser la mejor opción de transporte especializado, con la mejor rentabilidad ofreciendo siempre un servicio sobresaliente, siempre impulsados por nuestros valores, la mejora continua y la búsqueda constante de la excelencia; siempre a la vanguardia en el uso de tecnología y procesos, comprometidos con el medio ambiente y la comunidad. Garantizar la entrega eficiente del producto basados en una alta calidad de nuestros colaboradores y una flota eficaz y confiable para una transportación segura.</p>
                        </div>
                    </div>
                </div>

                <div className="line-black"></div>

                <div className="row azteca-nosotros-vision">
                    <div className="col-xl-5 position-relative">
                        <div className="vertical-align">
                            <h2 className='square_bold'>Nuestra visión</h2>
                            <p>Ser la mejor, más eficiente y más reconocida empresa de transporte especializado del país, y el mejor lugar para trabajar, excediendo siempre las expectativas de nuestros clientes, alcanzando un crecimiento sostenido para los accionistas y las mejores oportunidades para los colaboradores.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="img img-1"></div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img img-2"></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="img img-horizontal"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row azteca-nosotros-certificaciones">
                    <div className="col-xl-8 offset-xl-2">
                        <h2 className="text-center square_bold">Certificaciones</h2>
                        <p className="text-center">Nuestra empresa cuenta con certificaciones que respaldan nuestra excelencia<br/> y compromiso con la seguridad en el transporte de líquidos, garantizando un<br/> servicio de calidad a nuestros clientes.</p>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="card carti-1"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-2"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-3"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-4"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-5"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-6"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-7"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-8"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-9"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-10"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-11"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card carti-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid azteca-nosotros-testimonios">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row">
                            <h2 className="text-center text-center square_bold">Testimonios</h2>
                            <div className="col-xl-8 offset-xl-2">
                                <p className='text-center parrafo'>Los testimonios de nuestros clientes son una parte esencial de nuestra empresa, y los valoramos profundamente. Cada comentario y experiencia compartida nos ayuda a entender mejor las necesidades y expectativas de nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-xl-4">

                                    <div className="slide">
                                        <h4 className='roboto_medium'>"Transportes Azteca a superado mis expectativas".</h4>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img"></div>
                                            </div>
                                            <div className="col-xl-9">
                                                <h3>-Michel Sevilla</h3>
                                                <p>Gerente Masseca</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4">

                                    <div className="slide">
                                        <h4>"Transportes Azteca a superado mis expectativas".</h4>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img"></div>
                                            </div>
                                            <div className="col-xl-9">
                                                <h3>-Michel Sevilla</h3>
                                                <p>Gerente Masseca</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4">

                                    <div className="slide">
                                        <h4>"Transportes Azteca a superado mis expectativas".</h4>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img"></div>
                                            </div>
                                            <div className="col-xl-9">
                                                <h3>-Michel Sevilla</h3>
                                                <p>Gerente Masseca</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid azteca-nosotros-vacantes">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h3 className='raleway_thin'>Nuestro compromiso es llevar sueños, negocios y conexiones a cada destino. Somos más que transporte, somos facilitadores de oportunidades.</h3>
                            <h2 className='raleway_extrab'>¡Únete a la familia!</h2>
                            <div className="row">
                                <div className="col-xl-3">
                                    <button className="btn btn-red roboto_bold">Ver vacantes</button>
                                </div>
                                <div className="col-xl-3">
                                    <button className="btn btn-line roboto_bold">Contacto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    );


}

export default Index;