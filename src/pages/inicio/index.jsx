import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';


import inicioHero1 from '../../assets/img/inicio/inicio-hero-1.png';
import inicioHero2 from '../../assets/img/inicio/inicio-hero-2.png';

import inicioSoluciones1 from '../../assets/img/inicio/inicio-soluciones-1.png';
import inicioSoluciones2 from '../../assets/img/inicio/inicio-soluciones-2.png';
import inicioSoluciones3 from '../../assets/img/inicio/inicio-soluciones-3.png';
import inicioSoluciones4 from '../../assets/img/inicio/inicio-soluciones-4.png';
import inicioSoluciones5 from '../../assets/img/inicio/inicio-soluciones-5.png';
import inicioSoluciones6 from '../../assets/img/inicio/inicio-soluciones-6.png';
import inicioSoluciones7 from '../../assets/img/inicio/inicio-soluciones-7.png';
import logoAzteca from '../../assets/icons/logo-azteca.png';



import solucionesHeader from '../../assets/img/soluciones-title.png';


import inicioServicios1 from '../../assets/img/inicio/inicio-servicios-1.png';
import inicioServiciosIcon5 from '../../assets/icons/inicio/inicio-servicios-icon-5.png';
import inicioServiciosIcon6 from '../../assets/icons/inicio/inicio-servicios-icon-6.png';
import inicioServiciosIcon7 from '../../assets/icons/inicio/inicio-servicios-icon-7.png';
import inicioServiciosIcon8 from '../../assets/icons/inicio/inicio-servicios-icon-8.png';
import inicioServiciosIcon9 from '../../assets/icons/inicio/inicio-servicios-icon-9.png';
import inicioServiciosIcon10 from '../../assets/icons/inicio/inicio-servicios-icon-10.png';
import inicioServiciosIcon11 from '../../assets/icons/inicio/inicio-servicios-icon-11.png';

import proyectosCamion from '../../assets/img/proyectos-img-camion.png';
import proyectosPipa from '../../assets/img/proyectos-img-pipa.png';



import proyectosHeader from '../../assets/img/inicio/proyectos-header.jpg';
import proyectosIso from '../../assets/img/inicio/proyectos-iso.jpg';
import proyectosLavado from '../../assets/img/inicio/proyectos-lavado.jpg';
import proyectosEstacion from '../../assets/img/inicio/proyectos-esatcion.jpg';




import './inicio.scss';

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);


    

    const [solucionesAnimacion, setSolucionesAnimacion] = useState(false);
    const [serviciosAnimacion, setServiciosAnimacion] = useState(false);
    const [experienciaAnimacion, setExperienciaAnimacion] = useState(false);

    useScrollAnimation('.azteca-inicio-hero_content_third',solucionesAnimacion, setSolucionesAnimacion);
    useScrollAnimation('.azteca-inicio-soluciones_content_infomacion',serviciosAnimacion, setServiciosAnimacion);
    useScrollAnimation('.box4',experienciaAnimacion, setExperienciaAnimacion);

    

    return (
        <>
            <Header />

            <div className="azteca-inicio-hero">
                <img className="azteca-inicio-hero_points" src={inicioHero2} alt="" />
                <img className="azteca-inicio-hero_img" src={inicioHero1} alt="Imagen de trailer" /> 
                <div className="azteca-inicio-hero_content">
                    
                    <label className='azteca-inicio-hero_content_first raleway_medium'>Sabemos lo que te importa</label>
                    <label className='azteca-inicio-hero_content_second raleway_black'>Entregamos <br/> 
                        tu productor en <br/> 
                        tiempo y forma
                    </label>
                    <label className='animate azteca-inicio-hero_content_third raleway_light'>
                        Sabemos que la gestión segura y eficiente del transporte de <br/> 
                        líquidos plantea desafíos logísticos en términos de <br/>
                        prevención de derrames, controles normativos y entrega <br/>  
                        puntual. Asegurar que tus productos líquidos lleguen sin <br/> 
                        contratiempos es una necesidad apremiante en muchas <br/> 
                        industrias.
                    </label>
        
                </div>
            </div>

            <div className="azteca-inicio-soluciones">
                <div className="azteca-inicio-soluciones_content">
                    <div className={`azteca-inicio-soluciones_content_header ${solucionesAnimacion ? 'header-animacion' : ''}`}>
                        <img src={solucionesHeader} alt="" /> 
                    </div>
                    <div className={`azteca-inicio-soluciones_content_texto raleway_light ${solucionesAnimacion ? 'texto-animacion' : ''}`}>
                        Te ayudamos con sistemas eficientes para mejorar tu fill rate y proyectos Just in Time!!
                    </div>
                    <div className="azteca-inicio-soluciones_content_panel">
                        <div className={`azteca-inicio-soluciones_content_panel_card card1 ${solucionesAnimacion ? 'card-animacion1' : ''}`} style={{ backgroundImage: `url(${inicioSoluciones1})`}}>
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestra calidad</h5>
                                    <p>
                                        Cumplimos con calidad en la entrega puntual de tus productos. 
                                        Utilizamos tecnología y rutas eficientes, y adaptamos nuestro 
                                        servicio según las necesidades cambiantes. Nuestro personal 
                                        experimentado asegura que lleguen a tiempo y en forma.
                                    </p>
                                </div>
                                <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                    <img src={logoAzteca} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div>
                            </div>
                        </div>
                        <div className={`azteca-inicio-soluciones_content_panel_card card2 ${solucionesAnimacion ? 'card-animacion2' : ''}`} style={{ backgroundImage: `url(${inicioSoluciones2})`}}>
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestra calidad</h5>
                                    <p>
                                        Cumplimos con calidad en la entrega puntual de tus productos. 
                                        Utilizamos tecnología y rutas eficientes, y adaptamos nuestro 
                                        servicio según las necesidades cambiantes. Nuestro personal 
                                        experimentado asegura que lleguen a tiempo y en forma.
                                    </p>
                                </div>
                                <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                    <img src={logoAzteca} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div>
                            </div>
                        </div>
                        <div className={`azteca-inicio-soluciones_content_panel_card card3 ${solucionesAnimacion ? 'card-animacion3' : ''}`} style={{ backgroundImage: `url(${inicioSoluciones3})`}}>
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestra calidad</h5>
                                    <p>
                                        Cumplimos con calidad en la entrega puntual de tus productos. 
                                        Utilizamos tecnología y rutas eficientes, y adaptamos nuestro 
                                        servicio según las necesidades cambiantes. Nuestro personal 
                                        experimentado asegura que lleguen a tiempo y en forma.
                                    </p>
                                </div>
                                <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                    <img src={logoAzteca} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`azteca-inicio-soluciones_content_infomacion ${solucionesAnimacion ? 'infomacion-animacion' : ''}`}>
                        <div className="azteca-inicio-soluciones_content_infomacion_card">
                            <section className='elemento1 roboto_bold'>30+</section>
                            <section className='elemento2'>
                                <img src={inicioSoluciones4} alt="" /> 
                            </section>
                            <section className='elemento3 roboto_bold'>Años de Experiencia</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_infomacion_card">
                            <section className='elemento1 roboto_bold'>18k+</section>
                            <section className='elemento2'>
                                <img src={inicioSoluciones5} alt="" /> 
                            </section>
                            <section className='elemento3 roboto_bold'>Viajes al año</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_infomacion_card">
                            <section className='elemento1 roboto_bold'>150+</section>
                            <section className='elemento2'>
                                <img src={inicioSoluciones6} alt="" /> 
                            </section>
                            <section className='elemento3 roboto_bold'>Unidades en todo el país</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_infomacion_card">
                            <section className='elemento1 roboto_bold'>100+</section>
                            <section className='elemento2'>
                                <img src={inicioSoluciones7} alt="" /> 
                            </section>
                            <section className='elemento3 roboto_bold'>Clientes satisfechos</section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="azteca-servicios">
                <div className="azteca-servicios_content">
                    <div className="azteca-servicios_content_header">
                        <img src={inicioServicios1} alt="" /> 
                    </div>
                    <div className={`azteca-servicios_content_elements elements ${serviciosAnimacion ? 'elements-animacion' : ''}`}>

                        <div className={`azteca-servicios_content_elements_box box1 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon5} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Planificación de entregas</label>
                                    <p className='raleway_regular'>
                                        Utilizamos tecnología avanzada y estrategias 
                                        inteligentes para asegurar que sus entregas 
                                        lleguen a tiempo, minimizando costos y 
                                        reduciendo los tiempos de espera.
                                    </p>
                                </div>
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
                            </div>
                        </div>

                        <div className={`azteca-servicios_content_elements_box box2 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon6} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Control y monitoreo de Logística 24/7</label>
                                    <p className='raleway_regular'>
                                        Estamos comprometidos en mantener un flujo 
                                        constante de información para tomar 
                                        decisiones rápidas y eficaces, asegurando la 
                                        eficiencia en sus operaciones logísticas.
                                    </p>
                                </div>
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
                            </div>
                        </div>

                        <div className={`azteca-servicios_content_elements_box box3 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon7} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Lavado de tanques</label>
                                    <p className='raleway_regular'>
                                        Nuestro lavado de tanques garantiza limpieza 
                                        total y máxima inocuidad, manteniendo la 
                                        integridad de los productos y la seguridad de su 
                                        transporte.
                                    </p>
                                </div>
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
                            </div>
                        </div>

                        <div className={`azteca-servicios_content_elements_box box4 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon8} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Capacitación continua</label>
                                    <p className='raleway_regular'>
                                        Nuestros equipos reciben una formación 
                                        constante y actualizada para mantenerse al 
                                        día con las mejores prácticas y tecnologías.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`azteca-servicios_content_elements_box box5 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon9} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Control antidoping</label>
                                    <p className='raleway_regular'>
                                        Realizamos pruebas periódicas y sorpresa 
                                        para mantener un ambiente de trabajo libre 
                                        de sustancias prohibidas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`azteca-servicios_content_elements_box box6 ${serviciosAnimacion ? 'box-animacion' : ''}`}>
                            <div className="azteca-servicios_content_elements_box_panel-icon">
                                <img src={inicioServiciosIcon10} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_elements_box_panel-content">
                                <div className="azteca-servicios_content_elements_box_panel-content_text">
                                    <label htmlFor="" className='raleway_bold'>Limpieza e Innocuidad</label>
                                    <p className='raleway_regular'>
                                        Garantizamos una limpieza impecable y la 
                                        más alta inocuidad en todos los aspectos de 
                                        nuestras operaciones para mantener la calidad 
                                        y seguridad de los productos.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="point-experencia"></div>
                </div>
            </div>

            <div className="azteca-inicio-experiencia">
                <div className="azteca-inicio-experiencia_content-top">

                    <div className={`azteca-inicio-experiencia_content-top_media ${experienciaAnimacion ? 'media-animacion' : ''}`}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/VU39ZImjKuQ?si=kXuFFxZkHzpTwRoX&rel=0" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div className={`azteca-inicio-experiencia_content-top_text ${experienciaAnimacion ? 'text-animacion' : ''}`}>
                        <span className='raleway_medium'>En</span>
                        <br />
                        <h1 className='square_bold'>Azteca</h1>
                        
                        <h4 className='raleway_bold'>Tenemos excelencia operativa</h4>
                        <br />
                        <br />
                        <br />
                        <p className='raleway_light'>
                            Nuestros servicios están diseñados para brindarte soluciones integrales. 
                            Desde el asesoramiento inicial hasta la entrega y soporte posterior, 
                            nos comprometemos a estar contigo en cada paso. 
                        </p>
                    </div>
                </div>

                <div className="azteca-inicio-experiencia_content-medium">
                    <div className={`azteca-inicio-experiencia_content-medium_panel raleway_bold ${experienciaAnimacion ? 'panel-animacion' : ''}`}>
                        20+ años de experiencia
                    </div>
                </div>

                <div className="azteca-inicio-experiencia_content-button">
                    <div style={{ backgroundColor: '#BED2E0' }} className={`azteca-inicio-experiencia_content-button_card card1 ${experienciaAnimacion ? 'card1-animacion' : ''}`}>
                        <div className="azteca-inicio-experiencia_content-button_card_img">
                            <img src={proyectosPipa} alt="" /> 
                        </div>
                        <div className="azteca-inicio-experiencia_content-button_card_text raleway_light" style={{ color: '#2E4054' }} >
                            Medio siglo de operaciones exitosas a tu servicio.
                        </div>
                    </div>
                    <div className={`azteca-inicio-experiencia_content-button_card card2 ${experienciaAnimacion ? 'card2-animacion' : ''}`} style={{ backgroundColor: '#7A8D9E' }}>
                        <div className="azteca-inicio-experiencia_content-button_card_img">
                            <img src={proyectosCamion} alt="" /> 
                        </div>
                        <div className="azteca-inicio-experiencia_content-button_card_text raleway_light" style={{ color: '#F9FBFC' }}>
                            Nos acompaña el éxito y te lo compartimos profesionalmente para fortalecer nuestra alianza.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid azteca-proyectos">


                <div className="container">

                    <div className="container_header">
                        <div className="container_header_img">
                            <img src={proyectosHeader} alt="Logo Azteca" className=""/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-12">
                            
                            <Splide options={{ type: 'loop', perPage: 3, rewind: true, gap: '1.4rem', width: '100%' }} className='splide'>
                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={proyectosIso} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vero? Ratione dolore dolorem dolorum in quidem esse iure at repellat, quia repellendus laboriosam, similique maxime officiis temporibus tempore tempora debitis!
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                12/12/12
                                            </div>

                                            <div className="footer_img">
                                                <img src={logoAzteca} alt="Logo Azteca" className=""/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={proyectosLavado} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vero? Ratione dolore dolorem dolorum in quidem esse iure at repellat, quia repellendus laboriosam, similique maxime officiis temporibus tempore tempora debitis!
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                12/12/12
                                            </div>

                                            <div className="footer_img">
                                                <img src={logoAzteca} alt="Logo Azteca" className=""/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={proyectosEstacion} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vero? Ratione dolore dolorem dolorum in quidem esse iure at repellat, quia repellendus laboriosam, similique maxime officiis temporibus tempore tempora debitis!
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                12/12/12
                                            </div>

                                            <div className="footer_img">
                                                <img src={logoAzteca} alt="Logo Azteca" className=""/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </SplideSlide>
 

                            </Splide>

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

            <div className="azteca-mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.4538156896269!2d-103.5451358285125!3d20.73002242254943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afa925dc0c6d%3A0x1f407e6a6e7091df!2sTRANSPORTES%20AZTECA!5e0!3m2!1ses-419!2smx!4v1700679354430!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

            <Footer/>

        </>
    );
}

export default Index;