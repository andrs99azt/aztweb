import React from 'react';
import logoAzteca from '../../assets/icons/logo-azteca.png';

import Header from '../../components/header/Index';

//Styles
import './nosotros.scss';

const Index = () => {

    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h1 className='raleway_extrab'>¿Quiénes somos?</h1>
                        <p>Somos una empresa de transporte de líquidos líder en la industria, comprometidos con la excelencia operativa, la calidad y la seguridad en cada aspecto de nuestras operaciones. Nuestro equipo altamente capacitado y nuestra moderna flota de vehículos especializados nos respaldan para brindar soluciones logísticas confiables y eficientes a nuestros clientes en todo momento.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <h3>¿Qué hacemos en Azteca?</h3>
                        <h2>Líder en transporte de líquidos</h2>
                        <div className="row">
                            <div className="col-xl-3">
                               <img src={logoAzteca} alt="Logo Azteca" className="img-fluid"/>
                            </div>
                            <div className="col-xl-5">
                               <h4>Desde 1986,Operando en todo México y ahora en E.U.A</h4>
                            </div>
                        </div>
                        <p>En Azteca, nos especializamos en proporcionar soluciones logísticas integrales y seguras para una amplia variedad de líquidos, desde productos químicos hasta alimentos y combustibles. Nuestra experiencia y compromiso con la calidad nos han posicionado como líderes en el mercado.</p>
                        <p>Lo que nos distingue es nuestra atención meticulosa a cada detalle. Desde el manejo experto de la carga y la selección de equipos especializados hasta la planificación precisa de rutas y la gestión de la documentación aduanera, abordamos cada aspecto de la cadena de suministro con excelencia. Además, nuestra inversión constante en tecnología y capacitación asegura la eficiencia y la seguridad en cada</p>
                    </div>
                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="img img1"></div>
                                <div className="frase">
                                    <p>"Transformamos líquidos en soluciones, proporcionando confianza en cada viaje."</p>
                                    <span>/Santiago Pérez</span>
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
                                <div className="img"></div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img"></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="img img-horizontal"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 position-relative">
                        <div className="vertical-align">
                            <h2>Nuestra misión</h2>
                            <p>Ser la mejor opción de transporte especializado, con la mejor rentabilidad ofreciendo siempre un servicio sobresaliente, siempre impulsados por nuestros valores, la mejora continua y la búsqueda constante de la excelencia; siempre a la vanguardia en el uso de tecnología y procesos, comprometidos con el medio ambiente y la comunidad. Garantizar la entrega eficiente del producto basados en una alta calidad de nuestros colaboradores y una flota eficaz y confiable para una transportación segura.</p>
                        </div>
                    </div>
                </div>

                <div className="line-black"></div>

                <div className="row azteca-nosotros-vision">
                    <div className="col-xl-5 position-relative">
                        <div className="vertical-align">
                            <h2>Nuestra visión</h2>
                            <p>Ser la mejor, más eficiente y más reconocida empresa de transporte especializado del país, y el mejor lugar para trabajar, excediendo siempre las expectativas de nuestros clientes, alcanzando un crecimiento sostenido para los accionistas y las mejores oportunidades para los colaboradores.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="img"></div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img"></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="img img-horizontal"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row azteca-nosotros-certificaciones">
                    <div className="col-xl-8 offset-xl-2">
                        <h2 className="text-center">Certificaciones</h2>
                        <p className="text-center">Nuestra empresa cuenta con certificaciones que respaldan nuestra excelencia<br/> y compromiso con la seguridad en el transporte de líquidos, garantizando un<br/> servicio de calidad a nuestros clientes.</p>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row azteca-nosotros-testimonios">
                    <div className="col-xl-12">
                        <div className="row">
                            <h2 className="text-center">Testimonios</h2>
                            <div className="col-xl-3"></div>
                            <div className="col-xl-4">
                                <p>Los testimonios de nuestros clientes son una parte esencial de nuestra empresa, y los valoramos profundamente. Cada comentario y experiencia compartida nos ayuda a entender mejor las necesidades y expectativas de nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <h3>Alguna frase</h3>
                        <h2>¡Únete a la familia!</h2>
                        <div className="row">
                            <div className="col-xl-4">
                                <button className="btn btn-danger">Ver vacantes</button>
                            </div>
                            <div className="col-xl-4">
                                <button className="btn">Contacto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );


}

export default Index;