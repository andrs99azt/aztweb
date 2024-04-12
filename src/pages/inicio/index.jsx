import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '@splidejs/splide/dist/css/splide.min.css';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

// ----------- IMAGENES HERO
import inicioHeroImg1 from '../../assets/img/inicio/transportes-azteca-inicio-hero-trailer-1.webp';
import inicioHeroImg2 from '../../assets/img/inicio/transportes-azteca-inicio-hero-trailer-2.webp';
import inicioHeroImg3 from '../../assets/img/inicio/transportes-azteca-inicio-hero-puntos.png';
// ----------- IMAGENES SOLUCIONES
import inicioSolucionesImg1 from '../../assets/img/inicio/transportes-azteca-inicio-soluciones-trailer.png';
import inicioSolucionesImg2 from '../../assets/img/inicio/transportes-azteca-inicio-soluciones-trailero.png';
import inicioSolucionesImg3 from '../../assets/img/inicio/transportes-azteca-inicio-soluciones-equipo.png';
import inicioSolucionesIcon1 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-certificado.ico';
import inicioSolucionesIcon2 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-rutas.ico';
import inicioSolucionesIcon3 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-camion.ico';
import inicioSolucionesIcon4 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-clientes.ico';
import inicioSolucionesIcon5 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-logo.ico';
import inicioSolucionesIcon6 from '../../assets/icons/inicio/transportes-azteca-inicio-soluciones-titulo.png';
// ----------- IMAGENES SERVICIOS
import inicioServiciosImg1 from '../../assets/img/inicio/transportes-azteca-inicio-servicios-titulo.png';
import inicioServiciosIcon5 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-certificado.png';
import inicioServiciosIcon6 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-logistica.ico';
import inicioServiciosIcon7 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-lavado.ico';
import inicioServiciosIcon8 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-capacitacion.png';
import inicioServiciosIcon9 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-antidoping.png';
import inicioServiciosIcon10 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-limpieza.ico';
import inicioServiciosIcon11 from '../../assets/icons/inicio/transportes-azteca-inicio-servicios-flecha.png';
// ----------- IMAGENES EXPERIENCIA
import inicioExperienciaImg1 from '../../assets/img/inicio/transportes-azteca-inicio-experiencia-trailer-1.png';
import inicioExperienciaImg2 from '../../assets/img/inicio/transportes-azteca-inicio-experiencia-trailer-2.png';
// ----------- IMAGENES PROYECTOS
import inicioProyectosImg1 from '../../assets/img/inicio/transportes-azteca-inicio-proyectos-titulo.png';
import inicioProyectosImg2 from '../../assets/img/inicio/transportes-azteca-inicio-proyectos-iso14001.webp';
import inicioProyectosImg3 from '../../assets/img/inicio/transportes-azteca-inicio-proyectos-lavado.webp';
import inicioProyectosImg4 from '../../assets/img/inicio/transportes-azteca-inicio-proyectos-estacion.webp';

import './inicio.scss';

const Index = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [animation, setAnimation] = useState(false);
    const [numeroCards, setNumeroCartds] = useState(3);

    const useCallAnimation = (selector, Setter, stateSetter, animacion) => {
        useEffect(() => {
          const handleScroll = () => {
            const containerPanel = document.querySelector(selector);
            const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
            const puntoEspecifico = 100;
                
            if (posicionContainerPanel < puntoEspecifico) {
                const cardElements = document.getElementsByClassName(animacion);
                  for (let i = 0; i < cardElements.length; i++) {
                    cardElements[i].classList.add('inicio-animaciones');
                }
            }
            
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, [selector, stateSetter, Setter, animacion]);
    };

    const enviarPostulacion = async (event) => {
        event.preventDefault();
        try {
          const formData = new FormData();
          formData.append('nombre', nombre);
          formData.append('apellidos', apellidos);
          formData.append('email', email);
          formData.append('empresa', empresa);
          formData.append('telefono', telefono.toString());
          formData.append('mensaje', mensaje);
      
          const response = await axios.post('http://192.168.25.24:8089/azteca/ventas/contacto', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
            alert(response.data.message);
            setNombre('')
            setApellidos('')
            setEmail('')
            setEmpresa('')
            setTelefono('')
            setMensaje('')
      
        } catch (error) {
          console.error('Error en la petición:', error.message);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    useCallAnimation('.iniciar-soluciones',animation,setAnimation, 'animaciones-inicio')
    useCallAnimation('.iniciar-servicios',animation,setAnimation, 'animaciones-servicios')
    useCallAnimation('.iniciar-experiencia',animation,setAnimation, 'animaciones-experiencia')

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 900) {
                setNumeroCartds(1);
            } else if (windowWidth <= 1200) {
                setNumeroCartds(2);
            } else {
                setNumeroCartds(3);
            }
            };
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <Header />

            <div className="azteca-inicio-hero">
                <div className="azteca-inicio-hero_box">
                    <img src={inicioHeroImg1} alt="Imagen de trailer" /> 
                    <img src={inicioHeroImg3} alt="" />
                    <img src={inicioHeroImg2} alt="" />
                </div>
                <div className="azteca-inicio-hero_container">

                    <div className="iniciar-soluciones"></div>
                    <div className="azteca-inicio-hero_container_text">
                        <label className='raleway_medium'>Sabemos lo que te importa</label><br />
                        <label className='raleway_bold'>Entregamos<br/> tu producto en<br/>tiempo y forma</label>
                        <p className='raleway_light'>
                            Somos expertos en el transporte de <br />
                            líquidos para la industria.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="azteca-inicio-soluciones">
               <div className="azteca-inicio-soluciones_content">
                    <div className="azteca-inicio-soluciones_content_header animaciones-inicio">
                        <img src={inicioSolucionesIcon6} alt="" /> 
                    </div>
                    <div className="azteca-inicio-soluciones_content_texto animaciones-inicio">
                        Te ayudamos con sistemas eficientes para mejorar tu fill rate y proyectos Just in Time!!
                    </div>
                    <div className="iniciar-servicios"></div>
                    <div className="azteca-inicio-soluciones_content_panel">

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio">
                            <img src={inicioSolucionesImg1} className="azteca-inicio-soluciones_content_panel_card_img" alt="" /> 
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestros equipos</h5>
                                    <p>
                                        Nuestros vehículos avanzados con seguimiento en tiempo real y conductores 
                                        expertos garantizan entregas eficientes y profesionales de tus productos 
                                        en óptimas condiciones, formando la base de nuestra operación logística.
                                    </p>
                                </div>
                                {/* <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                        <img src={inicioSolucionesIcon5} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div> */}
                            </div>
                        </div>

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio">
                            <img src={inicioSolucionesImg2} className="azteca-inicio-soluciones_content_panel_card_img" alt="" /> 
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestra logística</h5>
                                    <p>
                                        Nuestro servicio de logística especializado en líquidos garantiza 
                                        transporte seguro y cumplimiento normativo. Equipos y tecnología 
                                        avanzada, gestión de riesgos, seguimiento en tiempo real y soluciones 
                                        personalizadas aseguran eficiencia y tranquilidad para nuestros clientes.
                                    </p>
                                </div>
                                {/* <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                        <img src={inicioSolucionesIcon5} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div> */}
                            </div>
                        </div>

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio">
                            <img src={inicioSolucionesImg3} className="azteca-inicio-soluciones_content_panel_card_img" alt="" /> 
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
                                {/* <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                        <img src={inicioSolucionesIcon5} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div> */}
                            </div>
                        </div>


                    </div>
                    <div className="azteca-inicio-soluciones_content_informacion animaciones-inicio">
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>30+</section>
                                <section className='elemento2'>
                                    <img src={inicioSolucionesIcon1} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Años de Experiencia</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>18k+</section>
                                <section className='elemento2'>
                                    <img src={inicioSolucionesIcon2} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Viajes al año</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>150+</section>
                                <section className='elemento2'>
                                    <img src={inicioSolucionesIcon3} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Unidades en todo el país</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>100+</section>
                                <section className='elemento2'>
                                    <img src={inicioSolucionesIcon4} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Clientes satisfechos</section>
                        </div>
                    </div>
               </div>



            </div>

            <div className="azteca-servicios">
                <div className="azteca-servicios_content">
                    <div className="azteca-servicios_content_header">
                        <img src={inicioServiciosImg1} alt="" /> 
                    </div>
                    <div className="iniciar-experiencia"></div>
                    <div className="azteca-servicios_content_elements animaciones-servicios">

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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
                                <NavLink to="/servicios#logistica" style={{ textDecoration: 'none' }}>
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                        <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                                <img src={inicioServiciosIcon11} alt="" /> 
                                        </div>
                                        <span>Saber más</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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
                                <NavLink to="/servicios#monitoreo" style={{ textDecoration: 'none' }}>
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                        <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                            <img src={inicioServiciosIcon11} alt="" /> 
                                        </div>
                                        <span>Saber más</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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
                                <NavLink to="/servicios#lavado" style={{ textDecoration: 'none' }}>
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                        <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                            <img src={inicioServiciosIcon11} alt="" /> 
                                        </div>
                                        <span>Saber más</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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

                        <div className="azteca-servicios_content_elements_box animaciones-servicios">
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
                    

                </div>
            </div>

            <div className="azteca-inicio-experiencia">
                <div className="azteca-inicio-experiencia_content-top">

                    <div className="azteca-inicio-experiencia_content-top_media animaciones-experiencia">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/VU39ZImjKuQ?si=kXuFFxZkHzpTwRoX&rel=0" 
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>
                    </div>

                    <div className="azteca-inicio-experiencia_content-top_text animaciones-experiencia">
                        <span className='raleway_medium'>En</span>
                        <br />
                        <h1 className='square_bold'>AZTECA</h1>
                        
                        <h4 className='raleway_bold'>Tenemos excelencia operativa</h4>
                        <br />
                        <p className='raleway_light'>
                            Nuestros servicios están diseñados para brindarte soluciones integrales. 
                            Desde el asesoramiento inicial hasta la entrega y soporte posterior, 
                            nos comprometemos a estar contigo en cada paso. 
                        </p>
                    </div>
                </div>

                <div className="azteca-inicio-experiencia_content-medium">
                    <div className="azteca-inicio-experiencia_content-medium_panel raleway_bold animaciones-experiencia">
                        <span className='roboto_bold'>+30 años</span> <label>de experiencia</label>
                    </div>
                </div>

                <div className="azteca-inicio-experiencia_content-button">
                    <div className="azteca-inicio-experiencia_content-button_card card1 animaciones-experiencia">
                        <div className="azteca-inicio-experiencia_content-button_card_img">
                            <img src={inicioExperienciaImg1} alt="" /> 
                        </div>
                        <div className="azteca-inicio-experiencia_content-button_card_text raleway_light" style={{ color: '#2E4054' }} >
                            Una trayectoria de operaciones exitosas a tu servicio.
                        </div>
                    </div>
                    <div className="azteca-inicio-experiencia_content-button_card card2 animaciones-experiencia">
                        <div className="azteca-inicio-experiencia_content-button_card_img">
                            <img src={inicioExperienciaImg2} alt="" /> 
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
                            <img src={inicioProyectosImg1} alt="Logo Azteca" className=""/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-12">
                            
                            <Splide options={{ type: 'loop', perPage: numeroCards, rewind: true, gap: '1.4rem', width: '100%' }} className=''>
                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={inicioProyectosImg2} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            ¡Emocionante Noticia! ¡Hemos 
                                            obtenido la certificación ISO 14001! 
                                            Nuestro compromiso con la calidad 
                                            y la excelencia en el servicio...
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                02 - 2023
                                            </div>

                                            <div className="footer_img">
                                                <img src={inicioSolucionesIcon5} alt="Logo Azteca" className=""/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={inicioProyectosImg3} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            ¡Emocionante Noticia! ¡Hemos 
                                            obtenido la certificación ISO 22000! 
                                            Nuestro compromiso con la calidad 
                                            y la excelencia en el servicio...
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                22 - 2022
                                            </div>

                                            <div className="footer_img">
                                                <img src={inicioSolucionesIcon5} alt="Logo Azteca" className=""/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="item-slidd">
    
                                        <div className="img">
                                            <img src={inicioProyectosImg4} alt="Logo Azteca" className=""/>
                                        </div>

                                        <div className="texto">
                                            ¡Nada nos detiene! ¡Hemos 
                                            construido nuestra nueva estación
                                            de Diésel exclusiva! 
                                            Con sede en Chinameca, nuestra...
                                        </div>

                                        <div className="footer">
                                            <div className="footer_fecha">
                                                08 - 2020
                                            </div>

                                            <div className="footer_img">
                                                <img src={inicioSolucionesIcon5} alt="Logo Azteca" className=""/>
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
                            <p className='raleway_semib'>Cuéntanos de que forma podemos ayudar a crecer tu negocio</p>
                            <ul>
                                <li>Francisco Montejano Palacios 25-A</li>
                                <li>La Venta del Astillero, Jalisco, C.P 45221.</li>
                                <li>Zapopan, México.</li>
                                <li>(33) 3151-0720</li>
                                <li>ventas@tlazteca.com.mx</li>
                            </ul>
                            <img src={inicioSolucionesIcon5} alt="Transportes Azteca" className='img-luid logo'/>
                        </div>

                    </div>
                    <div className="col-xl-6">

                        <form action="#">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" 
                                            className='form-control' 
                                            placeholder='Nombres'
                                            value={nombre}
                                            onChange={(event) => {
                                                setNombre(event.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Apellidos'
                                            value={apellidos}
                                            onChange={(event) => {
                                                setApellidos(event.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className='form-control' 
                                    placeholder='Email'
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" className='form-control' 
                                            placeholder='Empresa'
                                            value={empresa}
                                            onChange={(event) => {
                                                setEmpresa(event.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <input 
                                        type="tel" 
                                        className='form-control' 
                                        placeholder='N° de teléfono'
                                        value={telefono}
                                        onChange={(event) => {
                                            setTelefono(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea 
                                    name="mensaje" 
                                    className="form-control" 
                                    placeholder='Mensaje' 
                                    cols="30" rows="3"
                                    value={mensaje}
                                    onChange={(event) => {
                                        setMensaje(event.target.value);
                                    }}
                                >
                                </textarea>
                            </div>

                            <button className='btn btn-contacto' onClick={enviarPostulacion}>Enviar mensaje</button>

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