import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';  // Importa NavLink

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

import logoAzteca from '../../assets/icons/logo-azteca.png';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import nosotrosHero1 from '../../assets/img/nosotros/nosotros-header.png'

import nosotrosNosotros1 from '../../assets/img/nosotros/nosotros-1.jpg'
import nosotrosNosotros2 from '../../assets/img/nosotros/nosotros-2.jpg'

import nosotrosMision1 from '../../assets/img/nosotros/nosotros-mision-1.jpg'
import nosotrosMision2 from '../../assets/img/nosotros/nosotros-mision-2.jpg'
import nosotrosMision3 from '../../assets/img/nosotros/mision-3.jpg'

import nosotrosVision1 from '../../assets/img/nosotros/vision-1.jpg'
import nosotrosVision2 from '../../assets/img/nosotros/vision-2.jpg'
import nosotrosVision3 from '../../assets/img/nosotros/vision-3.jpg'


// import nosotrosTestimoniosIcon1 from '../../assets/icons/nosotros/nosotros-testimonios-icon-1.png';
// import nosotrosTestimonios1 from '../../assets/img/nosotros/nosotros-testimonios-1.jpg';
// import nosotrosTestimonios5 from '../../assets/img/nosotros/nosotros-testimonios-5.jpg';

import nosotrosUnete1 from '../../assets/img/nosotros/nosotros-vacantes-1.png'


// ------------------------------------------------------ MEDIA NOSOTROS ----------------------------------------------------

import nosotrosCertificacionesImg1 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-9001.webp'
import nosotrosCertificacionesImg2 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-14001.webp'
import nosotrosCertificacionesImg3 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-22000.webp'
import nosotrosCertificacionesImg4 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-37001.webp'
import nosotrosCertificacionesImg5 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-39001.webp'
import nosotrosCertificacionesImg6 from '../../assets/img/nosotros/transportes-azteca-nosotros-certificaciones-iso-45001.webp'
import nosotrosCertificacionesImg7 from '../../assets/img/nosotros/nosotros-certificaciones-7.jpg'
import nosotrosCertificacionesImg8 from '../../assets/img/nosotros/nosotros-certificaciones-8.jpg'
import nosotrosCertificacionesImg9 from '../../assets/img/nosotros/nosotros-certificaciones-9.jpg'
import nosotrosCertificacionesImg10 from '../../assets/img/nosotros/nosotros-certificaciones-10.jpg'
import nosotrosCertificacionesImg11 from '../../assets/img/nosotros/nosotros-certificaciones-11.jpg'

//Styles
import './nosotros.scss';

// const useScrollAnimation = (selector,Setter, stateSetter) => {
//     useEffect(() => {
//       const handleScroll = () => {
//         const containerPanel = document.querySelector(selector);
//         const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
//         const puntoEspecifico = 100;

//         if(!Setter){
            
//             stateSetter(posicionContainerPanel < puntoEspecifico);
//         }
//       };
  
//       window.addEventListener("scroll", handleScroll);
  
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [selector, stateSetter]);
// };

const useCallAnimation = (selector, Setter, stateSetter, animacion) => {
    useEffect(() => {
      const handleScroll = () => {
        const containerPanel = document.querySelector(selector);
        const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
        const puntoEspecifico = 100;
            
        if (posicionContainerPanel < puntoEspecifico) {
            const cardElements = document.getElementsByClassName(animacion);
              for (let i = 0; i < cardElements.length; i++) {
                cardElements[i].classList.add('nosotros-animaciones');
            }
        }
        
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [selector, stateSetter, Setter, animacion]);
};

const Index = () => {

    // Funnsiones Generales

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    const [animation, setAnimation] = useState(false);
    useCallAnimation('.iniciar-nosotros',animation,setAnimation, 'animaciones-nosotros')
    useCallAnimation('.iniciar-mision',animation,setAnimation, 'animaciones-mision')
    useCallAnimation('.iniciar-vision',animation,setAnimation, 'animaciones-vision')
    useCallAnimation('.iniciar-certificaciones',animation,setAnimation, 'animaciones-certificaciones')
    // useCallAnimation('.iniciar-testimonios',animation,setAnimation, 'animaciones-testimonios')
    useCallAnimation('.iniciar-unete',animation,setAnimation, 'animaciones-unete')

    // Variables

    

    // const [nosotrosAnimacion, setNosotrosAnimacion] = useState(false);
    // const [misionAnimacion, setMisionAnimacion] = useState(false);
    // const [visionAnimacion, setVisionAnimacion] = useState(false);
    // const [certificacionesAnimacion, setCertificacionesAnimacion] = useState(false);
    // const [testimoniosAnimacion, setTestimoniosAnimacion] = useState(false);
    // const [vacantesAnimacion, setVacantesAnimacion] = useState(false);

    // const [numeroCards, setNumeroCartds] = useState(3);

    // useEffect(() => {
    //     const handleResize = () => {
    //         const windowWidth = window.innerWidth;
    //         if (windowWidth <= 900) {
    //             setNumeroCartds(1);
    //         } else {
    //             setNumeroCartds(3);
    //         }
    //         };
    //         window.addEventListener('resize', handleResize);
    //         handleResize();
    //         return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

    // Puntos de inicio de animacion

    // useScrollAnimation('.text-hero',nosotrosAnimacion, setNosotrosAnimacion);
    // useScrollAnimation('.ponit-mision',misionAnimacion, setMisionAnimacion);
    // useScrollAnimation('.ponit-vision',visionAnimacion, setVisionAnimacion);
    // useScrollAnimation('.ponit-certificaciones',certificacionesAnimacion, setCertificacionesAnimacion);
    // useScrollAnimation('.ponit-testimonios',testimoniosAnimacion, setTestimoniosAnimacion);
    // useScrollAnimation('.ponit-vacantes',vacantesAnimacion, setVacantesAnimacion);

    return (
        <div>
            <Header/>
            <div className="iniciar-certificaciones"></div>

            <div className="azteca-nosotros-hero" style={{ backgroundImage: `url(${nosotrosHero1})` }}>
                <div className="azteca-nosotros-hero_content nosotros-animaciones">
                    <h1 className='raleway_black'>¿Quiénes somos?</h1>
                    <div className='text-hero'></div>
                    <p className='raleway_semib'>
                        Somos una empresa de transporte de líquidos líder en la industria, 
                        comprometidos con la excelencia operativa, la calidad y la seguridad 
                        en cada aspecto de nuestras operaciones. Nuestro equipo altamente 
                        capacitado y nuestra moderna flota de vehículos especializados nos 
                        respaldan para brindar soluciones logísticas confiables y eficientes 
                        a nuestros clientes en todo momento.
                    </p>
                    <div className="iniciar-nosotros"></div>
                </div>
            </div>

            <div className="azteca-nosotros-certificaciones">
                <div className="azteca-nosotros-certificaciones_content">
                    <div className="azteca-nosotros-certificaciones_content_header animaciones-certificaciones">
                        <h2 className='text-center square_bold animaciones-prestaciones'>CERTIFICACIONES</h2>
                        <p className='raleway_light'>
                            Nuestra empresa cuenta con certificaciones que respaldan nuestra excelencia
                            y compromiso con la seguridad en el transporte de líquidos, garantizando un
                            servicio de calidad a nuestros clientes.
                        </p>
                    </div>
                    {/* <span className="iniciar-testimonios"></span> */}
                    <span className="iniciar-unete"></span>
                    <div className="azteca-nosotros-certificaciones_content_cards">
                        
                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg1} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg2} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 14001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión ambiental, ayudando a las organizaciones 
                                        a mejorar su desempeño ambiental y gestionar sus impactos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg3} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 22000:2018</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de seguridad alimentaria, garantizando 
                                        la seguridad de los alimentos en toda la cadena de suministro, 
                                        desde la producción primaria hasta la venta al consumidor final.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg4} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 37001:2016</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión antisoborno, ayudando a las organizaciones 
                                        a prevenir, detectar y abordar el soborno y promover una cultura 
                                        de integridad, transparencia y cumplimiento legal.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg5} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de la seguridad vial, ayudando a 
                                        las organizaciones a reducir los riesgos de accidentes 
                                        de tráfico, mejorar la seguridad vial y cumplir con las 
                                        leyes y regulaciones aplicables.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg6} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 45001:2018</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de seguridad y salud ocupacional, 
                                        asegurando un entorno de trabajo seguro y saludable para 
                                        los empleados.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg7} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>Transporte Limpio</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Reconocimiento otorgado a empresas de transporte que implementan 
                                        medidas para reducir sus emisiones de gases de efecto invernadero 
                                        y mejorar su eficiencia energética.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg8} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>CANACAR</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Se enfoca en garantizar que las empresas de autotransporte 
                                        de carga cumplan con estándares de calidad, seguridad y 
                                        eficiencia en sus operaciones.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg9} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>Kosher</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Verifica que un producto alimenticio cumple 
                                        con las leyes dietéticas judías.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg10} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>CTPAT</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Busca fortalecer la seguridad de la cadena de 
                                        suministro y prevenir el terrorismo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg11} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>Juice Products Association</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        JPA es otorgada a empresas que cumplen con la más alta 
                                        exigencia de calidad y seguridad alimentaria en lavado 
                                        de tanques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="azteca-nosotros-nosotros">
                <div className="azteca-nosotros-nosotros_content">
                    <div className="azteca-nosotros-nosotros_content_texto animaciones-nosotros">
                        <label className='raleway_medium'>¿Qué hacemos en Azteca?</label>
                        <br />
                        <label className='square_bold'>Lideres en transporte</label>
                        <br />
                        <div className="azteca-nosotros-nosotros_content_texto_panel">
                            <div className="azteca-nosotros-nosotros_content_texto_panel_img">
                                <img src={logoAzteca} alt="Logo Azteca" className="img-fluid"/>
                            </div>
                            <div className="azteca-nosotros-nosotros_content_texto_panel_texto raleway_semib">
                                <label>Desde 1986,</label>
                                <br />
                                <label>Operando en todo México y ahora en</label>
                                <br />
                                <label>E.U.A</label>
                            </div>
                        </div>
                        <p>
                            En Azteca, nos especializamos en proporcionar soluciones logísticas 
                            integrales y seguras para una amplia variedad de líquidos, desde 
                            productos químicos hasta alimentos y combustibles. Nuestra experiencia 
                            y compromiso con la calidad nos han posicionado como líderes en el mercado.
                            Lo que nos distingue es nuestra atención meticulosa a cada detalle. Desde 
                            el manejo experto de la carga y la selección de equipos especializados 
                            hasta la planificación precisa de rutas y la gestión de la documentación 
                            aduanera, abordamos cada aspecto de la cadena de suministro con excelencia. 
                            Además, nuestra inversión constante en tecnología y capacitación asegura 
                            la eficiencia y la seguridad en cada.
                        </p>
                        <div className="iniciar-mision"></div>
                    </div>
                    <div className="azteca-nosotros-nosotros_content_galeria">
                        <div className='animaciones-nosotros'>
                            <img src={nosotrosNosotros1} alt="" />
                        </div>
                        <div className='animaciones-nosotros'>
                            <img src={nosotrosNosotros2} alt="" />
                        </div>
                        <div className='animaciones-nosotros'>
                            <p className='raleway_bold'>"Transformamos líquidos en soluciones, proporcionando confianza en cada viaje."</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="azteca-nosotros-line animaciones-mision">
                <div className="azteca-nosotros-line_content">
                    <div className="azteca-nosotros-line_content_circulo"></div>
                    <div className="azteca-nosotros-line_content_line"></div>
                    <div className="azteca-nosotros-line_content_circulo"></div>
                </div>
            </div>

            <div className="azteca-nosotros-mision">
                <div className="azteca-nosotros-mision_content animaciones-mision">
                    <div className="azteca-nosotros-mision_content_galeria">
                        <div className='animaciones-mision'>
                            <img src={nosotrosMision1} alt="" />
                        </div>
                        <div className='animaciones-mision'>
                            <img src={nosotrosMision2} alt="" />
                        </div>
                        <div className='animaciones-mision'>
                            <img src={nosotrosMision3} alt="" />
                        </div>
                    </div>
                    <div className="azteca-nosotros-mision_content_texto">
                        <h2 className='square_bold'>NUESTRA MISIÓN</h2>
                        <p>
                            Ser la mejor opción de transporte especializado, con la mejor rentabilidad 
                            ofreciendo siempre un servicio sobresaliente, siempre impulsados por nuestros 
                            valores, la mejora continua y la búsqueda constante de la excelencia; siempre 
                            a la vanguardia en el uso de tecnología y procesos, comprometidos con el 
                            medio ambiente y la comunidad. Garantizar la entrega eficiente del producto 
                            basados en una alta calidad de nuestros colaboradores y una flota eficaz y 
                            confiable para una transportación segura.
                        </p>
                        <div className="iniciar-vision"></div>
                    </div>
                </div>
            </div>

            <div className="azteca-nosotros-line animaciones-vision">
                <div className="azteca-nosotros-line_content">
                    <div className="azteca-nosotros-line_content_circulo"></div>
                    <div className="azteca-nosotros-line_content_line"></div>
                    <div className="azteca-nosotros-line_content_circulo"></div>
                </div>
            </div>

            <div className="azteca-nosotros-vision">
                <div className="azteca-nosotros-vision_content animaciones-vision">
                    <div className="azteca-nosotros-vision_content_texto animaciones-vision">
                        <h2 className='square_bold'>NUESTRA VISIÓN</h2>
                        <p>
                            Ser la mejor, más eficiente y más reconocida empresa de transporte especializado 
                            del país, y el mejor lugar para trabajar, excediendo siempre las expectativas de 
                            nuestros clientes, alcanzando un crecimiento sostenido para los accionistas y las 
                            mejores oportunidades para los colaboradores.
                        </p>
                    </div>
                    <div className="azteca-nosotros-vision_content_galeria">
                        <div className='animaciones-vision'>
                            <img src={nosotrosVision1} alt="" />
                        </div>
                        <div className='animaciones-vision'>
                            <img src={nosotrosVision2} alt="" />
                        </div>
                        <div className='animaciones-vision'>
                            <img src={nosotrosVision3} alt="" />
                        </div>
                    </div>
                </div>
                <span className="iniciar-unete"></span>
            </div>

            {/* <div className="azteca-nosotros-certificaciones">
                <div className="azteca-nosotros-certificaciones_content">
                    <div className="azteca-nosotros-certificaciones_content_header animaciones-certificaciones">
                        <h2 className='text-center square_bold animaciones-prestaciones'>CERTIFICACIONES</h2>
                        <p className='raleway_light'>
                            Nuestra empresa cuenta con certificaciones que respaldan nuestra excelencia
                            y compromiso con la seguridad en el transporte de líquidos, garantizando un
                            servicio de calidad a nuestros clientes.
                        </p>
                    </div>
                    <span className="iniciar-unete"></span>
                    <div className="azteca-nosotros-certificaciones_content_cards">
                        
                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg1} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg2} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg3} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg4} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg5} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg6} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg7} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg8} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg9} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg10} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-nosotros-certificaciones_content_cards_card animaciones-certificaciones">
                            <div class="azteca-nosotros-certificaciones_content_cards_card_cubo">
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara">
                                    <img src={nosotrosCertificacionesImg11} alt="ISO 9001"/>
                                </div>
                                <div class="azteca-nosotros-certificaciones_content_cards_card_cubo_cara text">
                                    <label className='roboto_medium'>ISO 9001:2015</label>
                                    <br />
                                    <p className='raleway_medium'>
                                        Sistemas de gestión de calidad, garantizando que las organizaciones 
                                        satisfacen las necesidades de los clientes y mejoran continuamente 
                                        su desempeño.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="azteca-nosotros-testimonios">
                <div className="azteca-nosotros-testimonios_content">
                    <div className="azteca-nosotros-testimonios_content_img animaciones-testimonios">
                        <img src={nosotrosTestimonios5} alt="" />
                    </div>
                    <div className="azteca-nosotros-testimonios_content_header animaciones-testimonios">
                        <h2 className='text-center square_bold animaciones-prestaciones'>TESTIMONIOS</h2>
                        <p className='raleway_light'>
                            Los testimonios de nuestros clientes son una parte esencial de nuestra 
                            empresa, y los valoramos profundamente. Cada comentario y experiencia 
                            compartida nos ayuda a entender mejor las necesidades y expectativas 
                            de nuestros clientes.
                        </p>
                    </div>
                    <span className="iniciar-unete"></span>
                    <div className="azteca-nosotros-testimonios_content_panel">
                        <Splide options={{ type: 'loop', perPage: numeroCards, rewind: true, gap: '1.4rem' }} className="splide azteca-nosotros-testimonios_content_panel_splide animaciones-testimonios" >  
                            <SplideSlide>
                                <div className="azteca-nosotros-testimonios_content_panel_splide_slide">
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_texto">
                                        <h6 className='roboto_medium'>
                                            "Rem officia sit inventore officiis adipisci incidunt, necessitatibus fugiat"
                                        </h6>
                                    </div>
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario">
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_icon">
                                            <img src={nosotrosTestimoniosIcon1} />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_img">
                                            <img src={nosotrosTestimonios1} alt="" />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_texto">
                                            <label className='roboto_medium'>Daniel Sánchez</label>
                                            <br />
                                            <span className='roboto'>Sub director de Jumex</span>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-nosotros-testimonios_content_panel_splide_slide">
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_texto">
                                        <h6 className='roboto_medium'>
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque atque quisquam non placeat nesciunt"
                                        </h6>
                                    </div>
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario">
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_icon">
                                            <img src={nosotrosTestimoniosIcon1} />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_img">
                                            <img src={nosotrosTestimonios1} alt="" />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_texto">
                                            <label className='roboto_medium'>Daniel Sánchez</label>
                                            <br />
                                            <span className='roboto'>Sub director de Jumex</span>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-nosotros-testimonios_content_panel_splide_slide">
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_texto">
                                        <h6 className='roboto_medium'>
                                            "consectetur adipisicing elit. Quasi neque atque quisquam"
                                        </h6>
                                    </div>
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario">
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_icon">
                                            <img src={nosotrosTestimoniosIcon1} />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_img">
                                            <img src={nosotrosTestimonios1} alt="" />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_texto">
                                            <label className='roboto_medium'>Daniel Sánchez</label>
                                            <br />
                                            <span className='roboto'>Sub director de Jumex</span>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-nosotros-testimonios_content_panel_splide_slide">
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_texto">
                                        <h6 className='roboto_medium'>
                                            Rem officia sit inventore officiis adipisci incidunt
                                        </h6>
                                    </div>
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario">
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_icon">
                                            <img src={nosotrosTestimoniosIcon1} />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_img">
                                            <img src={nosotrosTestimonios1} alt="" />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_texto">
                                            <label className='roboto_medium'>Daniel Sánchez</label>
                                            <br />
                                            <span className='roboto'>Sub director de Jumex</span>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-nosotros-testimonios_content_panel_splide_slide">
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_texto">
                                        <h6 className='roboto_medium'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                        </h6>
                                    </div>
                                    <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario">
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_icon">
                                            <img src={nosotrosTestimoniosIcon1} />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_img">
                                            <img src={nosotrosTestimonios1} alt="" />
                                        </div>
                                        <div className="azteca-nosotros-testimonios_content_panel_splide_slide_usuario_texto">
                                            <label className='roboto_medium'>Daniel Sánchez</label>
                                            <br />
                                            <span className='roboto'>Sub director de Jumex</span>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div> */}

            <div className="azteca-nosotros-unete" style={{ backgroundImage: `url(${nosotrosUnete1})` }}>
                <div className="azteca-nosotros-unete_content">
                    <h3 className='raleway_thin animaciones-unete'>Trabaja con nosotros</h3>
                    <h2 className='raleway_extrab animaciones-unete'>¡Únete a la familia!</h2>
                    <div className="azteca-nosotros-unete_content_buttons animaciones-unete">
                        <NavLink to="/capital-humano#vacantes">
                            <button className='roboto_bold azteca-nosotros-unete_content_buttons_button color-red'>Ver vacantes</button>
                        </NavLink>
                        <NavLink to="/contacto">
                            <button className='roboto_bold azteca-nosotros-unete_content_buttons_button color-tranparent'>Contacto</button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <Footer/> 
        </div>
    );
}

export default Index;