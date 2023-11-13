import React from 'react';
import Header from '../../components/header/Index';
import Card from '../../components/cardImagenSoluciones/index'


import pts from '../../assets/img/hero-inicio-pts.png';
import img from '../../assets/img/hero-inicio-img.png';
import solucionesHeader from '../../assets/img/soluciones-title.png';

// import solucionesImgTrailer from '../../assets/img/soluciones-img-trailer.png';
// import solucionesImgConductor from '../../assets/img/soluciones-img-conductor.png';
// import solucionesImgEquipo from '../../assets/img/soluciones-img-equipo.png';

import solucionesExperiencia from '../../assets/img/soluciones-experiencia.png';
import solucionesUnidad from '../../assets/img/soluciones-unidad.png';
import solucionesViajes from '../../assets/img/soluciones-viajes.png';
import solucionesClientes from '../../assets/img/soluciones-clientes.png';

import serviciosSoluciones from '../../assets/img/servicios-soluciones.png';
import serviciosMonitoreo from '../../assets/img/servicios-monitoreo.png';
import serviciosLavado from '../../assets/img/servicios-lavado.png';
import serviciosCapacitacion from '../../assets/img/servicios-capacitacion.png';
import serviciosAntidoping from '../../assets/img/servicios-antidoping.png';
import serviciosLimpieza from '../../assets/img/servicios-limpieza.png';
import flecha from '../../assets/img/servicios-flecha.png';

import proyectosCamion from '../../assets/img/proyectos-img-camion.png';
import proyectosPipa from '../../assets/img/proyectos-img-pipa.png';



import './inicio.scss';

const Index = () => {


    const solucionesCards = [
        {
            titulo: 'titulo 1',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates tempore earum fuga expedita debitis architecto nam, sint ab quod, quo possimus natus pariatur non ullam quibusdam reprehenderit sequi facere.'
            
        },
        {
            titulo: 'titulo 2',
            texto: 'texto 2'
        },
        {
            titulo: 'titulo 3',
            texto: 'texto 3'
        }
    ]


    return (
        <>
            <Header />

            <div className="azteca-hero">
                <img className="azteca-hero_pts" src={pts} alt="" />
                <img className="azteca-hero_img" src={img} alt="Imagen de trailer" /> 
                <div className="azteca-hero-content">
                    
                    <label className='azteca-hero-content_first'>Sabemos lo que te importa</label>
                    <label className='azteca-hero-content_second '>Entregamos <br/> 
                        tu productor en <br/> 
                        tiempo y forma
                    </label>
                    <label className='animate azteca-hero-content_third'>Sabemos que la gestión segura y eficiente del transporte de <br/> 
                        líquidos plantea desafíos logísticos en términos de <br/>
                        prevención de derrames, controles normativos y entrega <br/>  
                        puntual. Asegurar que tus productos líquidos lleguen sin <br/> 
                        contratiempos es una necesidad apremiante en muchas <br/> 
                        industrias.
                    </label>

                    <a className="azteca-hero-content_button" href="#soluciones">Saber mas</a>
        
                </div>
            </div>

            <div id="soluciones" className="azteca-soluciones">
                <div className="azteca-soluciones_content">
                    <div className="azteca-soluciones_content_header">
                        <img src={solucionesHeader} alt="" /> 
                    </div>
                    <div className="azteca-soluciones_content_title">
                        Te ayudamos con sistemas eficientes para mejorar tu fill rate y proyectos Just in Time!!
                    </div>


                    <div className="azteca-soluciones_content_panel">

                        {/* Combertir a componenete */}

                        {/* <div className="azteca-soluciones_content_panel-item">
                            <div className="azteca-soluciones_content_panel-item-img" style={{ backgroundImage: `url(${solucionesImgTrailer})` }}>
                                <div className="azteca-soluciones_content_panel-item-box">
                                    <label className='azteca-soluciones_content_panel-item-box_title'>Nuestros equipos</label><br />
                                    <label className='azteca-soluciones_content_panel-item-box_text'>
                                        Nuestros vehículos avanzados, con seguimiento en tiempo real y
                                        conductores expertos, garantizan entregas eficientes y 
                                        profesionales de tus productos en óptimas condiciones, formando 
                                        la base de nuestra operación logística.
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-soluciones_content_panel-item">
                            <div className="azteca-soluciones_content_panel-item-img" style={{ backgroundImage: `url(${solucionesImgConductor})` }}>
                                <div className="azteca-soluciones_content_panel-item-box">
                                    <label className='azteca-soluciones_content_panel-item-box_title'>Nuestros equipos</label><br />
                                    <label className='azteca-soluciones_content_panel-item-box_text'>
                                        Nuestros vehículos avanzados, con seguimiento en tiempo real y
                                        conductores expertos, garantizan entregas eficientes y 
                                        profesionales de tus productos en óptimas condiciones, formando 
                                        la base de nuestra operación logística.
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="azteca-soluciones_content_panel-item">
                            <div className="azteca-soluciones_content_panel-item-img" style={{ backgroundImage: `url(${solucionesImgEquipo})` }}>
                                <div className="azteca-soluciones_content_panel-item-box">
                                    <label className='azteca-soluciones_content_panel-item-box_title'>Nuestros equipos</label><br />
                                    <label className='azteca-soluciones_content_panel-item-box_text'>
                                        Nuestros vehículos avanzados, con seguimiento en tiempo real y
                                        conductores expertos, garantizan entregas eficientes y 
                                        profesionales de tus productos en óptimas condiciones, formando 
                                        la base de nuestra operación logística.
                                    </label>
                                </div>
                            </div>
                        </div> */}

                        {solucionesCards.map(infomacion => <Card titulo={infomacion.titulo} texto={infomacion.texto}/>)}

                            
                        
                      

                    </div>

                </div>
                <div className="azteca-soluciones_score">

                    {/* combertir a componenete */}

                    <div class="azteca-soluciones_score_box">
                        <div className="azteca-soluciones_score_box_infomacion">
                            <div className="azteca-soluciones_score_box_infomacion_cantidad">
                                30+
                            </div>
                            <img src={solucionesExperiencia} alt="" /> 
                        </div>
                        <div className="azteca-soluciones_score_box_texto">
                            Años de experiencia
                        </div>

                    </div>

                    <div class="azteca-soluciones_score_box">
                        <div className="azteca-soluciones_score_box_infomacion">
                            <div className="azteca-soluciones_score_box_infomacion_cantidad">
                                18K+
                            </div>
                            <img src={solucionesViajes} alt="" /> 
                        </div>
                        <div className="azteca-soluciones_score_box_texto">
                            Viajes al años
                        </div>

                    </div>

                    <div class="azteca-soluciones_score_box">
                        <div className="azteca-soluciones_score_box_infomacion">
                            <div className="azteca-soluciones_score_box_infomacion_cantidad">
                                200+
                            </div>
                            <img src={solucionesUnidad} alt="" /> 
                        </div>
                        <div className="azteca-soluciones_score_box_texto">
                            Unidades en todo el pais
                        </div>

                    </div>

                    <div class="azteca-soluciones_score_box">
                        <div className="azteca-soluciones_score_box_infomacion">
                            <div className="azteca-soluciones_score_box_infomacion_cantidad">
                                100+
                            </div>
                            <img src={solucionesClientes} alt="" /> 
                        </div>
                        <div className="azteca-soluciones_score_box_texto">
                            Clientes satisfechos
                        </div>

                    </div>

                </div>


        
            </div>

            <div className="azteca-servicios">
                <div className="azteca-servicios_content">
                    <div className="azteca-servicios_content_header">
                        <img src={solucionesHeader} alt="" /> 
                    </div>
                    <div className="azteca-servicios_content_panel">

                        {/* Comvertir a compoenente */}

                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosSoluciones} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosMonitoreo} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosLavado} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosCapacitacion} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosAntidoping} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                               
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="azteca-servicios_content_panel_item">
                            <div className="azteca-servicios_content_panel_item_box-icon">
                                <img src={serviciosLimpieza} alt="" /> 
                            </div>
                            <div className="azteca-servicios_content_panel_item_box-content">
                                <div className="azteca-servicios_content_panel_item_box-content_text">
                                    <label className='azteca-servicios_content_panel_item_box-content_text_title'>Soluciones logisticas</label>
                                    <br />
                                    <br />
                                    <label className='azteca-servicios_content_panel_item_box-content_text_infomacion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro amet? Eos beatae qui fuga illo laudantium, corporis sunt perferendis vel explicabo magni obcaecati, autem quis amet officiis, nulla maxime!</label>                         
                                </div>
                                <div className="azteca-servicios_content_panel_item_box-content_mas">
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_icon">
                                        <img src={flecha} alt="" /> 
                                    </div>
                                    <div className="azteca-servicios_content_panel_item_box-content_mas_text">
                                        Saber mas
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="azteca-experiencia">
                <div className="azteca-experiencia_content">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/Eo105NMabuQ?si=pRMFecbnH_BTqUcv" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                    <div className="azteca-experiencia_content_texto">
                        <label style={{ fontSize: '18px'}}>En</label>
                        <label style={{ fontSize: '56px'}}>AZTECA</label>
                        <label style={{ fontSize: '22px', fontWeight: 'bold'}}>Tenemos excelenete operativa</label>
                        <br />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas, assumenda reprehenderit enim dolores eius. Voluptas aliquam, minus sint accusantium, omnis rem in vero quam totam quidem, quod hic alias.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas, assumenda reprehenderit enim dolores eius. Voluptas aliquam, minus sint accusantium, omnis rem in vero quam totam quidem, quod hic alias.

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas, assumenda reprehenderit enim dolores eius. Voluptas aliquam, minus sint accusantium, omnis rem in vero quam totam quidem, quod hic alias.

                        </p>
                    </div>
                </div>

                <div className="azteca-experiencia_mensaje">
                    <label htmlFor="">20+ anios de experiencia</label>
                </div>

                <div className="azteca-experiencia_cards">

                    {/* Comvertir a compoenente */}

                    <div className="azteca-experiencia_cards_card" style={{ background: '#BED2E0', color: '#2E4054'}}>
                        <div className="azteca-experiencia_cards_card_imagen">
                            <img src={proyectosCamion} alt="" /> 
                        </div>
                        <div className="azteca-experiencia_cards_card_texto">
                            Medio siglo de Operaciones exitosas a tu cervicio.
                        </div>
                    </div>

                    <div className="azteca-experiencia_cards_card" style={{ background: '#7A8D9E', color: 'white'}}>
                        <div className="azteca-experiencia_cards_card_imagen">
                            <img src={proyectosPipa} alt="" /> 
                        </div>
                        <div className="azteca-experiencia_cards_card_texto">
                            Nos acompania el exito y te lo compartimos profesionalmente para fortalecer nuestra alianza.
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Index;
