import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import { NavLink } from 'react-router-dom';  // Importa NavLink



//Splide slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';

//Styles
import './servicios.scss';

// ----------- IMAGENES HERO
import serviciosHeroImg1 from "../../assets/img/servicios/transportes-azteca-servicios-hero-fondo.jpg"
// ----------- IMAGENES SOLICIONES
import serviciosSolucionesImg1 from "../../assets/img/servicios/transportes-azteca-servicios-soluciones-trailer.webp"
import serviciosSolucionesImg2 from "../../assets/img/servicios/transportes-azteca-servicios-soluciones-sistema.webp"
// ----------- IMAGENES MONITOREO
import serviciosMonitoreoImg1 from "../../assets/img/servicios/transportes-azteca-servicios-monitoreo-vigilancia-1.webp"
import serviciosMonitoreoImg2 from "../../assets/img/servicios/transportes-azteca-servicios-monitoreo-vigilancia-2.webp"
import serviciosMonitoreoImg3 from "../../assets/img/servicios/transportes-azteca-servicios-monitoreo-vigilancia-3.webp"
// ----------- IMAGENES SERVICIOS
import serviciosServiciosImg1 from "../../assets/img/servicios/transportes-azteca-servicios-servicios-limpieza-1.webp"
import serviciosServiciosImg2 from "../../assets/img/servicios/transportes-azteca-servicios-servicios-limpieza-2.webp"
import serviciosServiciosImg3 from "../../assets/img/servicios/transportes-azteca-servicios-servicios-limpieza-3.webp"
// ----------- IMAGENES UNIDADES
import serviciosUnidades1 from "../../assets/img/servicios/servicios-unidades-1.webp"
import serviciosUnidades2 from "../../assets/img/servicios/servicios-unidades-2.jpg"
import serviciosUnidades3 from "../../assets/img/servicios/servicios-unidades-3.jpg"


import serviciosProductos1 from "../../assets/img/servicios/transporte-1.png";
import serviciosProductos2 from "../../assets/img/servicios/transporte-2.png";
import serviciosProductos3 from "../../assets/img/servicios/transporte-3.png";
import serviciosProductos4 from "../../assets/img/servicios/transporte-4.png";
import serviciosProductos5 from "../../assets/img/servicios/transporte-5.png";
import serviciosProductos6 from "../../assets/img/servicios/transporte-6.png";
import serviciosProductos7 from "../../assets/img/servicios/transporte-7.png";
import serviciosProductos8 from "../../assets/img/servicios/transporte-8.png";

import serviciosContactoImg1 from '../../assets/img/servicios/trailer.jpg';
import serviciosContactoIcon1 from '../../assets/img/servicios/maguey.png';
import serviciosContactoIcon2 from '../../assets/img/servicios/liquido-derecho.png';


import serviciosSucursalesImg1 from '../../assets/img/servicios/servicios-sucursales-1.png';




const useCallAnimation = (selector, Setter, stateSetter, animacion) => {
    useEffect(() => {
      const handleScroll = () => {
        const containerPanel = document.querySelector(selector);
        const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
        const puntoEspecifico = 100;
            
        if (posicionContainerPanel < puntoEspecifico) {
            const cardElements = document.getElementsByClassName(animacion);
              for (let i = 0; i < cardElements.length; i++) {
                cardElements[i].classList.add('servicios-animaciones');
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

    const cambiarUnidad = (cambioImg, unidad, id) => {
        setUnidad(cambioImg);

        const remove = document.getElementsByClassName('azteca-servicios-unidades_content_botones_boton');
        for (let i = 0; i < remove.length; i++) {
            remove[i].classList.remove('active');
        }

        const add = document.getElementsByClassName(id);
        for (let i = 0; i < add.length; i++) {
            add[i].classList.add('active');
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



    const [animation, setAnimation] = useState(false);
    const [unidad, setUnidad] = useState(serviciosUnidades2);
    const [unidadActiva, setUnidadActiva] = useState('unidad-2'); 

    useCallAnimation('.iniciar-monitoreo',animation,setAnimation, 'animaciones-monitoreo')
    useCallAnimation('.iniciar-servicios',animation,setAnimation, 'animaciones-servicios')
    useCallAnimation('.iniciar-unidades',animation,setAnimation, 'animaciones-unidades')



    const [scrollLocked, setScrollLocked] = useState(false);
    const [popUpContent, setPopUpContent] = useState({titulo: '', texto: ''});
    const [productos, setProductos] = useState(
        [
            {
                titulo: 'Aceite de canola',
                texto: 'El aceite de canola es un aceite vegetal bajo en grasas saturadas y alto en ácidos grasos omega-3.'
            },
            {
                titulo: 'Aceite de coco',
                texto: 'Aceite extraído de la pulpa de coco, utilizado en cocina y cuidado personal debido a su versatilidad y propiedades saludables.'
            },
            {
                titulo: 'Aceite de maíz',
                texto: 'Aceite vegetal derivado de la palma, utilizado en alimentos y productos, aunque su producción plantea preocupaciones ambientales.'
            },
            {
                titulo: 'Aceite de palma',
                texto: 'Aceite vegetal derivado de la palma, utilizado en alimentos y productos, aunque su producción plantea preocupaciones ambientales.'
            },
            {
                titulo: 'Azúcar líquida',
                texto: 'Solución acuosa de azúcar utilizada en la industria de alimentos y bebidas para endulzar y mejorar la textura.'
            },
            {
                titulo: 'Jarabes',
                texto: 'Mezclas líquidas de azúcares o edulcorantes utilizadas en cocina y bebidas para endulzar y dar sabor.'
            },
            {
                titulo: 'Jugos',
                texto: 'Bebidas obtenidas al exprimir o triturar frutas y vegetales, que pueden consumirse naturales o procesados.'
            },
            {
                titulo: 'Melaza',
                texto: 'Producto viscoso obtenido de la caña de azúcar o la remolacha, empleado en repostería y salsas por su sabor dulce y oscuro.'
            },
        ]
    );
    const popUp = (titulo, texto) => {
        setPopUpContent({titulo: titulo, texto: texto})
        setScrollLocked(!scrollLocked);
        document.body.style.overflow = scrollLocked ? 'auto' : 'hidden';
    };

    return (
        <div>
            <Header/>

            <div className="azteca-servicios-hero" style={{ backgroundImage: `url(${serviciosHeroImg1})` }}>
                <div className="azteca-servicios-hero_content servicios-animaciones">
                    <h3 className='raleway_medium'>Los servicios que ofrece</h3>
                    <h1 className='square_bold'>AZTECA</h1>
                    <p className='raleway_light'>
                        Nuestro servicio de <strong className='raleway_bold'>transporte de líquidos en pipas </strong>
                        es líder en la industria. Contamos con una flota 
                        especializada y tecnología de vanguardia para garantizar 
                        la seguridad y la eficiencia en cada carga. Nuestros 
                        conductores altamente capacitados y nuestro compromiso 
                        con las mejores prácticas hacen que confiar en nosotros 
                        sea la elección óptima para el transporte de líquidos en pipas.
                    </p>
                </div>
            </div>

            <div className="azteca-servicios-soluciones">
                <span className="iniciar-monitoreo"></span>
                <div className="azteca-servicios-soluciones_content">
                    <div className="azteca-servicios-soluciones_content_galeria servicios-animaciones">
                        <Splide options={{ type: 'loop', perPage: 1, rewind: true, gap: '1.4rem' }} className="azteca-servicios-soluciones_content_galeria_split" >  
                            <SplideSlide>
                                <div className="azteca-servicios-soluciones_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosSolucionesImg1})` }}></div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-servicios-soluciones_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosSolucionesImg2})` }}></div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div id="logistica" className="azteca-servicios-soluciones_content_texto servicios-animaciones">
                        <div className="azteca-servicios-soluciones_content_texto_header">
                            <label className='azteca-servicios-soluciones_content_texto_header_titulo raleway_bold'>Soluciones logísticas</label>
                            <label className='azteca-servicios-soluciones_content_texto_header_subtitulo'>ADECUADO A TUS NECESIDADES</label>
                        </div>
                        <p className='raleway_light'>
                            Nuestra logística es el corazón de nuestro éxito. Con una planificación 
                            meticulosa, una red de distribución eficiente y un control y monitoreo 
                            constante, ofrecemos soluciones logísticas a la medida que optimizan 
                            costos y tiempos de entrega. Nuestro compromiso con la excelencia en 
                            la logística garantiza que sus necesidades sean atendidas de manera 
                            efectiva y confiable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="azteca-servicios-monitoreo">
                <span className="iniciar-servicios"></span>
                <div className="azteca-servicios-monitoreo_content">
                    <div className="azteca-servicios-monitoreo_content_texto animaciones-monitoreo">
                        <div className="azteca-servicios-monitoreo_content_texto_header">
                            <label className='azteca-servicios-monitoreo_content_texto_header_titulo raleway_bold'>Monitoreo 24/7</label>
                            <label className='azteca-servicios-monitoreo_content_texto_header_subtitulo'>CUIDAMOS TU PRODUCTO</label>
                        </div>
                        <p className='raleway_light'>
                            Nuestro servicio de monitoreo es una parte esencial de nuestra oferta. 
                            Con tecnología avanzada y un equipo dedicado, proporcionamos un monitoreo 
                            constante y en tiempo real de sus activos, envíos y operaciones. Esto 
                            brinda una visibilidad completa y le permite tomar decisiones informadas 
                            de manera oportuna, lo que hace que nuestra solución de monitoreo sea 
                            inigualable en su eficiencia y confiabilidad.
                        </p>
                    </div>
                    <div id="monitoreo" className="azteca-servicios-monitoreo_content_galeria animaciones-monitoreo">
                        <Splide options={{ type: 'loop', perPage: 1, rewind: true, gap: '1.4rem' }} className="azteca-servicios-monitoreo_content_galeria_split" >  
                            <SplideSlide>
                                <div className="azteca-servicios-monitoreo_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosMonitoreoImg1})` }}></div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-servicios-monitoreo_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosMonitoreoImg2})` }}></div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-servicios-monitoreo_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosMonitoreoImg3})` }}></div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>

            <div className="azteca-servicios-servicios servicios-animaciones">
            <span className="iniciar-unidades"></span>
                <div className="azteca-servicios-servicios_content">
                    <div className="azteca-servicios-servicios_content_galeria animaciones-servicios">
                        <Splide options={{ type: 'loop', perPage: 1, rewind: true, gap: '1.4rem' }} className="azteca-servicios-servicios_content_galeria_split" >  
                            <SplideSlide>
                                <div className="azteca-servicios-servicios_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosServiciosImg1})` }}></div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-servicios-servicios_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosServiciosImg2})` }}></div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="azteca-servicios-servicios_content_galeria_split_img" style={{ backgroundImage: `url(${serviciosServiciosImg3})` }}></div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div id="lavado" className="azteca-servicios-servicios_content_texto animaciones-servicios">
                        <div className="azteca-servicios-servicios_content_texto_header">
                            <label className='azteca-servicios-servicios_content_texto_header_titulo raleway_bold'>Servicio de Lavado</label>
                            <label className='azteca-servicios-servicios_content_texto_header_subtitulo'>CALIDAD E INOCUIDAD</label>
                        </div>
                        <p className='raleway_light'>
                            Implementamos rigurosos controles y estándares para garantizar que 
                            nuestros productos y servicios cumplan con los más altos niveles de 
                            calidad y seguridad alimentaria. La calidad e inocuidad son pilares 
                            fundamentales de nuestra operación, y trabajamos incansablemente 
                            para mantener la confianza de nuestros clientes y la integridad 
                            de nuestros productos en todo momento.
                        </p>
                    </div>
                </div>
            </div>

            <div className="azteca-servicios-unidades">
                <div className="azteca-servicios-unidades_content">
                    <div className="azteca-servicios-unidades_content_header animaciones-unidades">
                        <h2 className='text-center square_bold animaciones-prestaciones'>NUESTRAS UNIDADES</h2>
                    </div>
                    <div className="azteca-servicios-unidades_content_botones">
                        <div className="azteca-servicios-unidades_content_botones_boton Roboto-Medium animaciones-unidades btn1" onClick={() => cambiarUnidad(serviciosUnidades1, 'unidad-1','btn1')}>
                            22 Toneladas
                        </div>
                        <div className="azteca-servicios-unidades_content_botones_boton Roboto-Medium animaciones-unidades btn2 active" onClick={() => cambiarUnidad(serviciosUnidades2, 'unidad-2','btn2')}>
                            29 Toneladas
                        </div>
                        <div className="azteca-servicios-unidades_content_botones_boton Roboto-Medium animaciones-unidades btn3" onClick={() => cambiarUnidad(serviciosUnidades3, 'unidad-3','btn3')}>
                            38 Toneladas
                        </div>
                    </div>
                    <div className="azteca-servicios-unidades_content_img animaciones-unidades">
                        <img src={unidad} alt="" />
                    </div>
                </div>
            </div>

            <div className="azteca-nosotros-productos">
                <div className="azteca-nosotros-productos_content">
                    <div className="azteca-nosotros-productos_content_header animaciones-productos">
                        <h2 className='text-center square_bold animaciones-prestaciones'>LO QUE TRANSPORTAMOS</h2>
                    </div>
                    <span className="iniciar-testimonios"></span>
                    <div className="azteca-nosotros-productos_content_cards">
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[0].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[0].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos1} alt="" />
                            <img onClick={() => popUp(productos[0].titulo, productos[0].texto)} src={serviciosProductos1} alt="" />
                        </div>

                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[1].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[1].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos2} alt="" />
                            <img onClick={() => popUp(productos[1].titulo, productos[1].texto)} src={serviciosProductos2} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[2].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[2].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos3} alt="" />
                            <img onClick={() => popUp(productos[2].titulo, productos[2].texto)} src={serviciosProductos3} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[3].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[3].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos4} alt="" />
                            <img onClick={() => popUp(productos[3].titulo, productos[3].texto)} src={serviciosProductos4} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[4].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[4].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos5} alt="" />
                            <img onClick={() => popUp(productos[4].titulo, productos[4].texto)} src={serviciosProductos5} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[5].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[5].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos6} alt="" />
                            <img onClick={() => popUp(productos[5].titulo, productos[5].texto)} src={serviciosProductos6} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[6].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[6].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos7} alt="" />
                            <img onClick={() => popUp(productos[6].titulo, productos[6].texto)} src={serviciosProductos7} alt="" />
                        </div>
                        <div className="azteca-nosotros-productos_content_cards_card animaciones-productos">
                            <div className="azteca-nosotros-productos_content_cards_card_panel">
                                <h6 className='raleway_bold'>{productos[7].titulo}</h6>
                                <p className='raleway_light'>
                                    {productos[7].texto}
                                </p>
                            </div>
                            <img src={serviciosProductos8} alt="" />
                            <img onClick={() => popUp(productos[7].titulo, productos[7].texto)} src={serviciosProductos8} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="azteca-nosotros-conecta">
                <img src={serviciosContactoIcon1} className='servicios-animaciones' alt="" />
                <img src={serviciosContactoIcon2} className='servicios-animaciones' alt="" />
                <div className="azteca-nosotros-conecta_content">
                    <div className="azteca-nosotros-conecta_content_media">
                        <img src={serviciosContactoImg1} alt="" />
                    </div>
                    <div className="azteca-nosotros-conecta_content_texto">
                        <h3 className='raleway_bold'>Conecta a tus clientes <br />con nuestro servicios</h3>
                        <p className='raleway_light'>
                            Colaborar con nosotros significa contar con un socio confiable 
                            que garantiza soluciones logísticas de calidad, puntualidad y 
                            eficiencia en cada envío.
                        </p>
                        <NavLink to="/contacto">
                            <button className='azteca-nosotros-conecta_content_texto_button color-red'>Contacto</button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="azteca-servicios-sucursales">
                <div className="azteca-servicios-sucursales_media">
                    <img src={serviciosSucursalesImg1} alt="" />
                </div>

                <div className="azteca-servicios-sucursales_content">
                    <div className="azteca-servicios-sucursales_content_header">
                        <h2 className='square_bold'>ALCANCE Y SEDES</h2>
                    </div>
                    <div className="azteca-servicios-sucursales_content_panel">
                        <div className="azteca-servicios-sucursales_content_panel_media">
                            <img src={serviciosSucursalesImg1} alt="" />
                        </div>
                        <div className="azteca-servicios-sucursales_content_panel_section">
                            <div>
                                <header>
                                    <h3 className='raleway_bold'>La venta del astillero, Jalisco México</h3>
                                    <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span>
                                </header>
                                <br />
                                <p>Nuestra sede principal en la Venta del Astillero, Jalisco, 
                                   México, es un centro neurálgico de operaciones estratégicamente 
                                   ubicado. Aquí, contamos con cuatro amplios patios especialmente 
                                   diseñados para el almacenamiento seguro y eficiente de nuestras 
                                   pipas y tractocamiones. Desde esta sede, impulsamos nuestra misión 
                                   de brindar soluciones de transporte de líquidos confiables y 
                                   eficaces a nuestros clientes, apoyados por una infraestructura 
                                   de clase mundial.
                                </p>
                            </div>

                            <div>
                                <header>
                                    <h3 className='raleway_bold'>Chinameca, Veracruz</h3>
                                    <span className='raleway_light'>Altamirano 225, La Maseca, 95980 Chinameca, Veracruz</span>
                                </header>
                                <br />
                                <p>
                                    Nuestra sede en Chinameca, Veracruz, es una instalación de 
                                    mayor envergadura y una parte integral de nuestra presencia 
                                    en la región. Además de ofrecer un amplio espacio de 
                                    almacenamiento y patio de maniobras.
                                </p>
                            </div>

                            <div>
                                <header>
                                    <h3 className='raleway_bold'>Monterrey</h3>
                                    {/* <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span> */}
                                </header>
                                <br />
                                <p>
                                    Esta sede en Monterrey nos permite atender las necesidades 
                                    logísticas locales y regionales de manera eficiente. A pesar 
                                    de su tamaño más reducido, mantenemos los mismos estándares 
                                    de calidad y atención al detalle que en nuestras sedes más 
                                    grandes.
                                </p>
                            </div>
                            
                            <div>
                                <header>
                                    <h3 className='raleway_bold'>Estados Unidos</h3>
                                    {/* <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span> */}
                                </header>
                                <br />
                                <p>
                                    Trabajamos en estrecha colaboración con nuestros clientes 
                                    para asegurarnos de que sus envíos lleguen a su destino en 
                                    los Estados Unidos de manera puntual y segura. Ya sea que 
                                    se trate de productos químicos, alimentos líquidos, u otros 
                                    líquidos.
                                </p>
                            </div>

                            <div>
                                <header>
                                    <h3 className='raleway_bold'>Durango</h3>
                                    {/* <span className='raleway_light'>Francisco Montejano Palacios 25-A Col, 45221 La Venta del Astillero</span> */}
                                </header>
                                <br />
                                <p>
                                    Nuestro compromiso con la eficiencia y la atención al detalle 
                                    se refleja en cada aspecto de esta sede, garantizando que podamos 
                                    cumplir con las necesidades de nuestros clientes en Durango y 
                                    sus alrededores de manera confiable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>


            {scrollLocked && (
                <div className="popUp" onClick={popUp}>
                    <div className="popUp_panel" onClick={(e) => { e.stopPropagation(); }}>
                        <h2 className='raleway_bold'>{popUpContent.titulo}</h2>
                        <p className='raleway_light'>
                            {popUpContent.texto}
                        </p>
                    </div>
                </div>
            )}
            

        </div>
    );
}


export default Index;