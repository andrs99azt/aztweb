import React, { useState, useEffect } from 'react';

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

import logoAzteca from '../../assets/icons/logo-azteca.png';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import nosotrosTestimonios1 from '../../assets/img/nosotros/nosotros-testimonios-1.jpg';
import nosotrosTestimonios2 from '../../assets/img/nosotros/nosotros-testimonios-2.jpg';
import nosotrosTestimonios3 from '../../assets/img/nosotros/nosotros-testimonios-3.jpg';
import nosotrosTestimonios4 from '../../assets/img/nosotros/nosotros-testimonios-4.jpg';
import nosotrosTestimonios5 from '../../assets/img/nosotros/nosotros-testimonios-5.jpg';
import nosotrosTestimonios6 from '../../assets/img/nosotros/nosotros-testimonios-6.jpg';

//Styles
import './nosotros.scss';

const useScrollAnimation = (selector,Setter, stateSetter) => {
    useEffect(() => {
      const handleScroll = () => {
        const containerPanel = document.querySelector(selector);
        const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
        const puntoEspecifico = 100;

        if(!Setter){
            
            stateSetter(posicionContainerPanel < puntoEspecifico);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [selector, stateSetter]);
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

    // Variables

    const [nosotrosAnimacion, setNosotrosAnimacion] = useState(false);
    const [misionAnimacion, setMisionAnimacion] = useState(false);
    const [visionAnimacion, setVisionAnimacion] = useState(false);
    const [certificacionesAnimacion, setCertificacionesAnimacion] = useState(false);
    const [testimoniosAnimacion, setTestimoniosAnimacion] = useState(false);
    const [vacantesAnimacion, setVacantesAnimacion] = useState(false);

    // Puntos de inicio de animacion

    useScrollAnimation('.text-hero',nosotrosAnimacion, setNosotrosAnimacion);
    useScrollAnimation('.ponit-mision',misionAnimacion, setMisionAnimacion);
    useScrollAnimation('.ponit-vision',visionAnimacion, setVisionAnimacion);
    useScrollAnimation('.ponit-certificaciones',certificacionesAnimacion, setCertificacionesAnimacion);
    useScrollAnimation('.ponit-testimonios',testimoniosAnimacion, setTestimoniosAnimacion);
    useScrollAnimation('.ponit-vacantes',vacantesAnimacion, setVacantesAnimacion);

    return (
        <div>
            <Header/>
            <div className="container-fluid azteca-cabecera-nosotros">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 text-hero">
                        <h1 className='raleway_black text-center'>¿Quiénes somos?</h1>
                        <p className='text-center raleway_semib'>Somos una empresa de transporte de líquidos líder en la industria, comprometidos con la excelencia operativa, la calidad y la seguridad en cada aspecto de nuestras operaciones. Nuestro equipo altamente capacitado y nuestra moderna flota de vehículos especializados nos respaldan para brindar soluciones logísticas confiables y eficientes a nuestros clientes en todo momento.</p>
                    </div>
                </div>
            </div>
            <div className="container azteca-hacemos-nosotros">
                <div className="row top">
                    <div className={`col-xl-6 texto ${nosotrosAnimacion ? 'texto-animacion' : ''}`}>
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
                                <div  className={`img img1 ${nosotrosAnimacion ? 'img1-animacion' : ''}`}></div>
                                <div  className={`frase ${nosotrosAnimacion ? 'frase-animacion' : ''}`}>
                                    <p className='raleway_bold'>"Transformamos líquidos en soluciones, proporcionando confianza en cada viaje."</p>
                                    <span className='raleway_medium'>/Santiago Pérez</span>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className={`img img2 ponit-mision ${nosotrosAnimacion ? 'img2-animacion' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`line-black line1 ${misionAnimacion ? 'mision-animacion' : ''}`}></div>

                <div className={`row azteca-nosotros-mision  ${misionAnimacion ? 'mision-animacion' : ''}`}>
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className={`img img-1  ${misionAnimacion ? 'img1-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-6">
                                <div className={`img img-2  ${misionAnimacion ? 'img2-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-12">
                                <div className="img img-horizontal ponit-vision"></div>
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

                <div className={`line-black line2 ${visionAnimacion ? 'vision-line' : ''}`}></div>

                <div className="row azteca-nosotros-vision">
                    <div className="col-xl-5 position-relative">
                        <div className={`vertical-align text ${visionAnimacion ? 'vision-text-animacion' : ''}`}>
                            <h2 className='square_bold'>Nuestra visión</h2>
                            <p>Ser la mejor, más eficiente y más reconocida empresa de transporte especializado del país, y el mejor lugar para trabajar, excediendo siempre las expectativas de nuestros clientes, alcanzando un crecimiento sostenido para los accionistas y las mejores oportunidades para los colaboradores.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className={`img img-1 ${visionAnimacion ? 'vision-img1-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-6">
                                <div className={`img img-2 ${visionAnimacion ? 'vision-img2-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-12">
                                <div className={`img img-horizontal ponit-certificaciones ${visionAnimacion ? 'vision-img3-animacion' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row azteca-nosotros-certificaciones">
                    <div className={`col-xl-8 offset-xl-2 certificaciones-header ${certificacionesAnimacion ? 'certificaciones-header-animacion' : ''}`}>
                        <h2 className="text-center square_bold">Certificaciones</h2>
                        <p className="text-center">Nuestra empresa cuenta con certificaciones que respaldan nuestra excelencia<br/> y compromiso con la seguridad en el transporte de líquidos, garantizando un<br/> servicio de calidad a nuestros clientes.</p>
                    </div>
                    <div className="col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className={`card carti-1 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-2 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-3 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-4 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-5 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-6 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-7 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-8 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="ponit-testimonios"></div>
                            <div className="col-xl-3 offset-xl-1">
                                <div className={`card carti-9 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-10 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                            <div className="col-xl-3">
                                <div className={`card carti-11 ${certificacionesAnimacion ? 'card-animacion' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-nosotros-testimonios">
                <div className="row">
                    <div className="col-xl-12">
                        <div className={`row header-testimonios ${testimoniosAnimacion ? 'header-testimonios-animacion' : ''}`}>
                            <h2 className="text-center text-center square_bold">Testimonios</h2>
                            <div className="col-xl-8 offset-xl-2">
                                <p className='text-center parrafo'>Los testimonios de nuestros clientes son una parte esencial de nuestra empresa, y los valoramos profundamente. Cada comentario y experiencia compartida nos ayuda a entender mejor las necesidades y expectativas de nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="ponit-vacantes"></div>
                        <div className={`col-xl-12 split-animacion ${testimoniosAnimacion ? 'header-testimonios-animacion' : ''}`}>
                            
                            <Splide options={{ type: 'loop', perPage: 3, rewind: true, gap: '1.4rem', width: '100%' }} className="splide">
                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"Transportes Azteca a superado mis expectativas."</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios1} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-Michel Sevilla</h4>
                                                    <p className='roboto'>Gerente Masseca</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"El mejor servicio de transporte de líquidos que he contratado."</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios2} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-Daniel Sánchez</h4>
                                                    <p className='roboto'>Sub director de Jumex</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"Tienen un gran manejo de su logística"</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios3} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-Samantha Jiménez</h4>
                                                    <p className='roboto'>Mercadóloga de Gamesa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                                
                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"Nunca me ha decepcionado su servicio"</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios4} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-José Fernández</h4>
                                                    <p className='roboto'>Directivo en Don Julio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"Nunca me ha decepcionado su servicio"</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios5} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-José Fernández</h4>
                                                    <p className='roboto'>Directivo en Don Julio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slide">
                                        <div className="signo"></div>
                                        <h3 className='roboto_medium'>"Nunca me ha decepcionado su servicio"</h3>
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="img">
                                                    <img src={nosotrosTestimonios6} alt="" /> 
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="informacion">
                                                    <h4 className='roboto_medium'>-José Fernández</h4>
                                                    <p className='roboto'>Directivo en Don Julio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                            </Splide>

                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid azteca-nosotros-vacantes">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h3 className={`raleway_thin titulo  ${vacantesAnimacion ? 'vacantes-animacion' : ''}`}>Trabaja con nosotros</h3>
                            <h2 className={`raleway_extrab subtitulo  ${vacantesAnimacion ? 'vacantes-animacion' : ''}`}>¡Únete a la familia!</h2>
                            <div className="row" >
                                <div className="col-xl-3">
                                    <button className={`btn btn-red roboto_bold boton  ${vacantesAnimacion ? 'vacantes-animacion' : ''}`}>Ver vacantes</button>
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