import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@splidejs/splide/dist/css/splide.min.css';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';


import inicioHero1 from '../../assets/img/inicio/inicio-hero-1.png';
import inicioHero2 from '../../assets/img/inicio/inicio-hero-2.png';
import inicioHero3 from '../../assets/img/inicio/inicio-hero-3.png';

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
            console.log('Respuesta del servidor:', response.data);
      
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
                    <img src={inicioHero1} alt="Imagen de trailer" /> 
                    <img src={inicioHero2} alt="" />
                    <img src={inicioHero3} alt="" />
                </div>
                <div className="azteca-inicio-hero_container">

                    <div className="iniciar-soluciones"></div>
                    <div className="azteca-inicio-hero_container_text">
                        <label className='raleway_medium'>Sabemos lo que te importa</label><br />
                        <label className='raleway_bold'>Entregamos<br/> tu producto en<br/>tiempo y forma</label>
                        <p className='raleway_light'>
                            Sabemos que la gestión segura y eficiente del transporte de
                            líquidos plantea desafíos logísticos en términos de prevención
                            de derrames, controles normativos y entrega puntual. Asegurar
                            que tus productos líquidos lleguen sin contratiempos es una
                            necesidad apremiante en muchas industrias.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="azteca-inicio-soluciones">
               <div className="azteca-inicio-soluciones_content">
                    <div className="azteca-inicio-soluciones_content_header animaciones-inicio">
                        <img src={solucionesHeader} alt="" /> 
                    </div>
                    <div className="azteca-inicio-soluciones_content_texto animaciones-inicio">
                        Te ayudamos con sistemas eficientes para mejorar tu fill rate y proyectos Just in Time!!
                    </div>
                    <div className="iniciar-servicios"></div>
                    <div className="azteca-inicio-soluciones_content_panel">

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio" style={{ backgroundImage: `url(${inicioSoluciones1})`}}>
                            <div className="azteca-inicio-soluciones_content_panel_card_text">

                                <div className="azteca-inicio-soluciones_content_panel_card_text_content">
                                    <h5>En nuestros equipos</h5>
                                    <p>
                                        Nuestros vehículos avanzados con seguimiento en tiempo real y conductores 
                                        expertos garantizan entregas eficientes y profesionales de tus productos 
                                        en óptimas condiciones, formando la base de nuestra operación logística.
                                    </p>
                                </div>
                                <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                        <img src={logoAzteca} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio" style={{ backgroundImage: `url(${inicioSoluciones2})`}}>
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
                                <div className="azteca-inicio-soluciones_content_panel_card_text_footer">
                                        <img src={logoAzteca} alt="Logo Azteca" style={{ height: '30px' }}/>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-inicio-soluciones_content_panel_card animaciones-inicio" style={{ backgroundImage: `url(${inicioSoluciones3})`}}>
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
                    <div className="azteca-inicio-soluciones_content_informacion animaciones-inicio">
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>30+</section>
                                <section className='elemento2'>
                                    <img src={inicioSoluciones4} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Años de Experiencia</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>18k+</section>
                                <section className='elemento2'>
                                    <img src={inicioSoluciones5} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Viajes al año</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
                            <section className='elemento1 roboto_bold'>150+</section>
                                <section className='elemento2'>
                                    <img src={inicioSoluciones6} alt="" /> 
                                </section>
                            <section className='elemento3 roboto_bold'>Unidades en todo el país</section>
                        </div>
                        <div className="azteca-inicio-soluciones_content_informacion_card">
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
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
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
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
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
                                <div className="azteca-servicios_content_elements_box_panel-content_enlace">
                                    <div className="azteca-servicios_content_elements_box_panel-content_enlace_img">
                                        <img src={inicioServiciosIcon11} alt="" /> 
                                    </div>
                                    <span>Saber más</span>
                                </div>
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
                        20+ años de experiencia
                    </div>
                </div>

                <div className="azteca-inicio-experiencia_content-button">
                    <div className="azteca-inicio-experiencia_content-button_card card1 animaciones-experiencia">
                        <div className="azteca-inicio-experiencia_content-button_card_img">
                            <img src={proyectosPipa} alt="" /> 
                        </div>
                        <div className="azteca-inicio-experiencia_content-button_card_text raleway_light" style={{ color: '#2E4054' }} >
                            Medio siglo de operaciones exitosas a tu servicio.
                        </div>
                    </div>
                    <div className="azteca-inicio-experiencia_content-button_card card2 animaciones-experiencia">
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
                            
                            <Splide options={{ type: 'loop', perPage: numeroCards, rewind: true, gap: '1.4rem', width: '100%' }} className='splide'>
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