import React from 'react';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import unidad from '../../assets/img/servicios/unidad.jpg';
import aceite from '../../assets/img/servicios/aceite.png';
import trailer from '../../assets/img/servicios/trailer.jpg';
import liquido from '../../assets/img/servicios/liquido-derecho.png';
import maguey from '../../assets/img/servicios/maguey.png';

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

//Styles
import './servicios.scss';

const Index = () => {

    return (
        <div>
            <Header/>
            <div className="container-fluid azteca-cabecera-servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='raleway_medium'>Los servicios que ofrece</h3>
                            <h1 className='square_bold'>Azteca</h1>
                            <p className='raleway_light'>Nuestro servicio de <strong className='raleway_bold'>transporte de líquidos en pipas</strong> es líder en la industria. Contamos con una flota especializada y tecnología de vanguardia para garantizar la seguridad y la eficiencia en cada carga. Nuestros conductores altamente capacitados y nuestro compromiso con las mejores prácticas hacen que confiar en nosotros sea la elección óptima para el transporte de líquidos en pipas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container azteca-logistica-servicios">
                <div className="row">
                    <div className="col-xl-4">
                        <Splide options={{ type: 'loop', perPage: 1, rewind: true , width: '100%' }}>
                            <SplideSlide>
                                <div className="item-slide"></div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="item-slide"></div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="item-slide"></div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="col-xl-7">
                        <div className="informacion">
                            <h2 className='raleway_bold'>Soluciones logísticas</h2>
                            <h3>Adecuado a tus necesidades</h3>
                            <p>Nuestra logística es el corazón de nuestro éxito. Con una planificación meticulosa, una red de distribución eficiente y un control y monitoreo constante, ofrecemos soluciones logísticas a la medida que optimizan costos y tiempos de entrega. Nuestro compromiso con la excelencia en la logística garantiza que sus necesidades sean atendidas de manera efectiva y confiable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-monitoreo-servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="informacion">
                                <h2 className='raleway_bold'>Monitoreo 24/7</h2>
                                <h3>Cuidamos tu producto</h3>
                                <p>Nuestro servicio de monitoreo es una parte esencial de nuestra oferta. Con tecnología avanzada y un equipo dedicado, proporcionamos un monitoreo constante y en tiempo real de sus activos, envíos y operaciones. Esto brinda una visibilidad completa y le permite tomar decisiones informadas de manera oportuna, lo que hace que nuestra solución de monitoreo sea inigualable en su eficiencia y confiabilidad.</p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <Splide options={{ type: 'loop', perPage: 1, rewind: true , width: '100%' }}>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container azteca-lavado-servicios">
                <div className="row">
                    <div className="col-xl-4">
                        <Splide options={{ type: 'loop', perPage: 1, rewind: true , width: '100%' }}>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="item-slide"></div>
                                </SplideSlide>
                            </Splide>
                    </div>
                    <div className="col-xl-7">
                        <div className="informacion">
                            <h2 className='raleway_bold'>Servicio de Lavado</h2>
                            <h3>Calidad e inocuidad</h3>
                            <p>Implementamos rigurosos controles y estándares para garantizar que nuestros productos y servicios cumplan con los más altos niveles de calidad y seguridad alimentaria. La calidad e inocuidad son pilares fundamentales de nuestra operación, y trabajamos incansablemente para mantener la confianza de nuestros clientes y la integridad de nuestros productos en todo momento.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container azteca-unidades-servicios">
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-center square_bold'>Nuestras unidades</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="unidad">
                            <h3 className='raleway_semib'>22 Toneladas</h3>
                            <h4 className='raleway_bold'>Subitulo</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, autem.</p>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="unidad azul">
                            <h3 className='raleway_semib'>22 Toneladas</h3>
                            <h4 className='raleway_bold'>Subitulo</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, autem.</p>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="unidad">
                            <h3 className='raleway_semib'>22 Toneladas</h3>
                            <h4 className='raleway_bold'>Subitulo</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, autem.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <img src={unidad} alt="Transportes Azteca" class="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-transportamos-servicios">
                <img src={aceite} alt="Acite" className='img-fluid aceite-fondo' />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-center square_bold'>Lo que <span>transportamos</span></h2>
                        </div>
                    </div>
                    <div className="row cards">
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-1"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Aceite de canola</h3>
                                    <p className='raleway_light'>El aceite de canola es un aceite vegetal bajo en grasas saturadas y alto en ácidos grasos omega-3</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-2"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Aceite de coco</h3>
                                    <p className='raleway_light'>Aceite extraído de la pulpa de coco, utilizado en cocina y cuidado personal debido a su versatilidad y propiedades saludables.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-3"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Aceite de maíz</h3>
                                    <p className='raleway_light'>Aceite vegetal obtenido del maíz, común en la cocina para freír y cocinar debido a su sabor neutral.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-4"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Aceite de palma</h3>
                                    <p className='raleway_light'>Aceite vegetal derivado de la palma, utilizado en alimentos y productos, aunque su producción plantea preocupaciones ambientales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cards">
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-5"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Azúcar líquida</h3>
                                    <p className='raleway_light'>Solución acuosa de azúcar utilizada en la industria de alimentos y bebidas para endulzar y mejorar la textura.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-6"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Jarabes</h3>
                                    <p className='raleway_light'>Mezclas líquidas de azúcares o edulcorantes utilizadas en cocina y bebidas para endulzar y dar sabor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-7"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Jugos</h3>
                                    <p className='raleway_light'>Bebidas obtenidas al exprimir o triturar frutas y vegetales, que pueden consumirse naturales o procesados.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="transporte">
                                <div className="img img-8"></div>
                                <div className="contenido">
                                    <h3 className='raleway_bold'>Melaza</h3>
                                    <p className='raleway_light'>Producto viscoso obtenido de la caña de azúcar o la remolacha, empleado en repostería y salsas por su sabor dulce y oscuro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-conecta-clientes-servicios">
                <img src={maguey} alt="Maguey" className='maguey img-fluid'/>
                <img src={liquido} alt="Liquido" className='liquido-derecho img-fluid'/>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <img src={trailer} alt="Trailer de Azteca" className='trailer img-fluid'/>
                        </div>
                        <div className="col-xl-5 offset-xl-1 position-relative">
                            <div className="contenido">
                                <h2 className='raleway_bold'>Conecta a tus clientes <span>con nuestro servicios</span></h2>
                                <p className='raleway_light'>Colaborar con nosotros significa contar con un socio confiable que garantiza soluciones logísticas de calidad, puntualidad y eficiencia en cada envío.</p>
                                <button className='btn btn-contacto'>Contacto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-alcance-y-sedes">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="mundo"></div>
                    </div>
                    <div className="col-xl-6 position-relative">
                        <div className="row vertical-align">
                            <div className="col-xl-12">
                                <div className="info normal active">
                                    <h3 className='raleway_bold'>La venta del astillero, Jalisco México</h3>
                                    <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                    <p>Nuestra sede principal en la Venta del Astillero, Jalisco, México, es un centro neurálgico de operaciones estratégicamente ubicado. Aquí, contamos con cuatro amplios patios especialmente diseñados para el almacenamiento seguro y eficiente de nuestras pipas y tractocamiones. Desde esta sede, impulsamos nuestra misión de brindar soluciones de transporte de líquidos confiables y eficaces a nuestros clientes, apoyados por una infraestructura de clase mundial.</p>
                                </div>
                            </div>
                            <div className="row pr-0">
                                <div className="col-xl-6">
                                    <div className="info">
                                        <h3 className='raleway_bold'>Durango</h3>
                                        <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                        <p>Nuestro compromiso con la eficiencia y la atención al detalle se refleja en cada aspecto de esta sede, garantizando que podamos cumplir con las necesidades de nuestros clientes en Durango y sus alrededores de manera confiable.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="info">
                                        <h3 className='raleway_bold'>Monterrey</h3>
                                        <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                        <p>Esta sede en Monterrey nos permite atender las necesidades logísticas locales y regionales de manera eficiente. A pesar de su tamaño más reducido, mantenemos los mismos estándares de calidad y atención al detalle que en nuestras sedes más grandes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pr-0">
                                <div className="col-xl-6">
                                    <div className="info">
                                        <h3 className='raleway_bold'>Chinameca, Veracruz</h3>
                                        <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                        <p>Nuestra sede en Chinameca, Veracruz, es una instalación de mayor envergadura y una parte integral de nuestra presencia en la región. Además de ofrecer un amplio espacio de almacenamiento y patio de maniobras.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="info">
                                        <h3 className='raleway_bold'>Estados Unidos</h3>
                                        <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                        <p>Trabajamos en estrecha colaboración con nuestros clientes para asegurarnos de que sus envíos lleguen a su destino en los Estados Unidos de manera puntual y segura. Ya sea que se trate de productos químicos, alimentos líquidos, u otros líquidos.</p>
                                    </div>
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