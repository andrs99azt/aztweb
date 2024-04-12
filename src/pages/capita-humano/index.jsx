import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './capital-humano.scss';

import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import capitalHumanoHero from '../../assets/img/capital-humano/capital-humano-hero-1.png'

import capitalHumanoConocenos1 from '../../assets/img/capital-humano/transportes-azteca-capital-humano-conocenos-equipo.webp'
import capitalHumanoConocenos2 from '../../assets/img/capital-humano/capital-humano-conocenos-2.png'
import capitalHumanoConocenos3 from '../../assets/img/capital-humano/transportes-azteca-capital-humano-conocenos-premios.webp'
import capitalHumanoConocenos4 from '../../assets/img/capital-humano/capital-humano-conocenos-4.png'
import capitalHumanoConocenos5 from '../../assets/img/capital-humano/capital-humano-conocenos-5.png'
import capitalHumanoConocenos6 from '../../assets/img/capital-humano/transportes-azteca-capital-humano-conocenos-reconocimientos.webp'
import capitalHumanoConocenos7 from '../../assets/img/capital-humano/capital-humano-conocenos-7.png'

import capitalHumanoPrestaciones1 from '../../assets/img/capital-humano/capital-humano-prestaciones-1.png'
import capitalHumanoPrestaciones2 from '../../assets/img/capital-humano/capital-humano-prestaciones-2.png'
import capitalHumanoPrestaciones3 from '../../assets/img/capital-humano/capital-humano-prestaciones-3.png'
import capitalHumanoPrestaciones4 from '../../assets/img/capital-humano/capital-humano-prestaciones-4.png'
import capitalHumanoPrestaciones5 from '../../assets/img/capital-humano/capital-humano-prestaciones-5.png'
import capitalHumanoPrestaciones6 from '../../assets/img/capital-humano/capital-humano-prestaciones-6.png'
import capitalHumanoPrestaciones7 from '../../assets/img/capital-humano/capital-humano-prestaciones-7.png'
import capitalHumanoPrestaciones8 from '../../assets/img/capital-humano/capital-humano-prestaciones-8.png'
import capitalHumanoTestimonios1 from '../../assets/img/capital-humano/capital-humano-testimonios-1.png'
import capitalHumanoTestimonios2 from '../../assets/img/capital-humano/capital-humano-testimonios-2.png'
import capitalHumanoTestimonios3 from '../../assets/img/capital-humano/capital-humano-testimonios-3.png'
import clip from '../../assets/img/capital-humano/capital-humano-vacantes-position.png'

const useCallAnimation = (selector, Setter, stateSetter, animacion) => {
    useEffect(() => {
      const handleScroll = () => {
        const containerPanel = document.querySelector(selector);
        const posicionContainerPanel = containerPanel.getBoundingClientRect().top;
        const puntoEspecifico = 100;
            
        if (posicionContainerPanel < puntoEspecifico) {
            const cardElements = document.getElementsByClassName(animacion);
              for (let i = 0; i < cardElements.length; i++) {
                cardElements[i].classList.add('capital-humano-animaciones');
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

    // Variables



    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ultimoTrabajo, setUltimoTrabajo] = useState('');
    const [horario, setHorario] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [statusDoc, setStatusDoc] = useState("Subir CV");
    

    const [openFormulario, setOpenFormulario] = useState(false);
    const formulario = (tipo) => {
        setOpenFormulario(true)
        if(openFormulario === false){
            setNombre('')
            setEmail('')
            setTelefono('')
            setUltimoTrabajo('')
            setHorario('')
            setArchivo(null)
            setStatusDoc('Subir CV')
        }
    };
    

   

    const enviarPostulacion = async () => {
        try {
          const formData = new FormData();
          formData.append('NombreCompleto', nombre);
          formData.append('Email', email);
          formData.append('Telefono', telefono);
          formData.append('UtimoTrabajo', ultimoTrabajo);
          formData.append('HorarioContacto', horario);
          formData.append('ArchivoCV', archivo);
      
          const response = await axios.post('http://192.168.25.24:8089/azteca/capitalhumano/candidatos', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
            alert(response.data.message);
            setNombre('')
            setEmail('')
            setTelefono('')
            setUltimoTrabajo('')
            setHorario('')
            setArchivo(null)
            setStatusDoc('Subir CV')
      
        } catch (error) {
          console.error('Error en la petición:', error.message);
        }
      };

    const handleFileChange = (event) => {
        
        // Acceder al archivo seleccionado por el usuario
        const nuevoArchivo = event.target.files[0];
        setArchivo(nuevoArchivo);
        setStatusDoc('Cargado')
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    // Puntos de inicio de animacion

    const [animation, setAnimation] = useState(false);
    useCallAnimation('.iniciar-conocenos',animation,setAnimation, 'animaciones-conocenos')
    useCallAnimation('.iniciar-talento',animation,setAnimation, 'animaciones-talento')
    useCallAnimation('.iniciar-prestaciones',animation,setAnimation, 'animaciones-prestaciones')
    useCallAnimation('.iniciar-testimonios',animation,setAnimation, 'animaciones-testimonios')
    // useCallAnimation('.iniciar-vacantes',animation,setAnimation, 'animaciones-vacantes')

    return (
        <div>
            <Header/>

            <div className="azteca-capital-humano-hero">
                <div className="azteca-capital-humano-hero_content">
                    <div className="azteca-capital-humano-hero_content_img capital-humano-animaciones">
                        <img src={capitalHumanoHero} alt="" /> 
                    </div>
                    <div className="azteca-capital-humano-hero_content_text capital-humano-animaciones">
                        <h1 className='square_bold'>CAPITAL HUMANO</h1>
                        <h3 className='raleway_medium'>Los servicios que ofrece</h3>
                        <p className='raleway_light'>
                            El capital humano es el corazon de nuestra empresa.
                            Nuestra dedicada y talentoza fuerza laboral es la clave de 
                            nuesto exito. Fomentando un ambiente colaborativo que 
                            petencia sus habilidades y creatividad. invertir en nuestro 
                            equipo garantiza un servicio excepcional a nuestros
                            clientes y un futuro solido para nuestra organizacion.
                        </p>
                        <label className='raleway_medium'>Te interesa trabajar con nosotros?</label>
                        <br />
                        <br />
                        <NavLink to="/bolsa-de-trabajo" style={{ textDecoration: 'none', color: 'black' }}>
                            <a className="boton" >Ver vacantes</a>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="azteca-capital-humano-conocenos">
                <div className="iniciar-conocenos"></div>
                <div className="azteca-capital-humano-conocenos_content animaciones-conocenos">
                    <div className="azteca-capital-humano-conocenos_content_header">
                        <h3 className='raleway_medium'>Conoce a la familia</h3>
                        <h1 className='square_bold'>AZTECA</h1>
                        <p className='raleway_light'>
                            Los empreados desempenian un papel en todas las etapas del
                            proceso. Desde la manipulacion y tranporte seguro de los 
                            productos hasta el mantenimiento de los estanader de 
                            calidad y seguridad alimentaria.
                        </p>
                    </div>
                    <div className="azteca-capital-humano-conocenos_content_panel">
                        <div className="azteca-capital-humano-conocenos_content_panel_section">
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento1 animaciones-conocenos">
                                <img src={capitalHumanoConocenos1} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento2 animaciones-conocenos">
                                <img src={capitalHumanoConocenos2} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento3 animaciones-conocenos">
                                <img src={capitalHumanoConocenos3} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento4 animaciones-conocenos">
                                <img src={capitalHumanoConocenos4} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento5 animaciones-conocenos">
                                <img src={capitalHumanoConocenos5} alt="" /> 
                            </div>
                            <div className="iniciar-talento"></div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento6 animaciones-conocenos">
                                <img src={capitalHumanoConocenos6} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-conocenos_content_panel_section_img elemento7 animaciones-conocenos">
                                <img src={capitalHumanoConocenos7} alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="azteca-capital-humano-talento">
                <div className="azteca-capital-humano-talento_content animaciones-talento">
                    <h1 className='raleway_light animaciones-talento'>¡Buscamos tu talento!</h1>
                    <br />
                    <h3 className='raleway_light animaciones-talento'>¡Unete a Azteca!</h3>
                    <br />
                    <NavLink to="/bolsa-de-trabajo" style={{ textDecoration: 'none', color: 'black' }}>
                        <a className="boton animaciones-talento" href="#vacantes">Ver vacantes</a>
                    </NavLink>
                </div>
            </div>

            <div className="azteca-capital-humano-prestaciones">
                <div className="iniciar-prestaciones"></div>
                <div className="azteca-capital-humano-prestaciones_content animaciones-prestaciones">
                    <div className="azteca-capital-humano-prestaciones_content_header">
                        <h2 className='text-center square_bold animaciones-prestaciones'>PRESTACIONES</h2>
                    </div>
                    <div className="azteca-capital-humano-prestaciones_content_panel">
                        <div className="azteca-capital-humano-prestaciones_content_panel_section">

                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento1 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones1} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    Nuestras prestaciones son <span>superiores a las de la ley</span>, ofreciendo beneficios excepcionales 
                                    que valoran y cuidan a nuestros empleados.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento2 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones2} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    Nuestra <span>caja de ahorro</span> brinda a nuestros empleados la oportunidad de planificar 
                                    un futuro financiero sólido.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento3 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones3} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    Ofrecemos <span>uniformes gratuitos</span> para garantizar la comodidad y profesionalismo 
                                    de nuestro personal en todo momento.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento4 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones4} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    Brindamos una <span>despensa mensual en especie</span> como un beneficio adicional 
                                    para apoyar el bienestar de nuestros empleados.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento5 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones5} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    La <span>despensa navideña</span> es nuestro regalo para compartir la alegría de la 
                                    temporada festiva con nuestros colaboradores.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento6 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones6} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                <span>Seguro de Vida</span> por $300,000 y $600,000
                                </div>
                            </div>
                            <div className="iniciar-testimonios"></div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento7 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones7} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    <span>Apoyo en gastos funerarios:</span> Estamos aquí en los momentos que más importan.
                                </div>
                            </div>
                            <div className="azteca-capital-humano-prestaciones_content_panel_section_card elemento8 animaciones-prestaciones">
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_header">
                                    <img src={capitalHumanoPrestaciones8} alt="" /> 
                                </div>
                                <div className="azteca-capital-humano-prestaciones_content_panel_section_card_texto">
                                    <span>30 días de aguinaldo:</span> Un beneficio que refleja nuestro compromiso con el 
                                    bienestar financiero de nuestros empleados.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="azteca-capital-humano-testimonios">
                <div className="azteca-capital-humano-testimonios_content animaciones-testimonios">
                    <div className="azteca-capital-humano-testimonios_content_card card1 animaciones-testimonios">
                        <div className="azteca-capital-humano-testimonios_content_card_usuario">
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_img">
                                <img src={capitalHumanoTestimonios1} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_descripcion">
                                <h5 className='raleway_bold'>Emilio Antonio García Delgado </h5>
                                <span className='raleway_light'>Normatividad</span>
                            </div>
                        </div>
                        <p className='raleway_bold'>
                            "Transportes Azteca una empresa de clase mundial. Siempre ofreciendo un 
                            servicio con excelencia a sus partes interesadas."
                        </p>
                    </div>

                    <div className="azteca-capital-humano-testimonios_content_card card2 animaciones-testimonios">
                        <div className="azteca-capital-humano-testimonios_content_card_usuario">
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_img">
                                <img src={capitalHumanoTestimonios2} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_descripcion">
                                <h5 className='raleway_bold'>Sánchez Martínez Miriam Lizeth</h5>
                                <span className='raleway_light'>Auxiliar de Facturación</span>
                            </div>
                        </div>
                        <p className='raleway_bold'>
                            "En mi tiempo en la empresa, he experimentado una cultura de sana 
                            convivencia y colaboración. Aportar a la eficiencia y la armonía 
                            en cada proceso, es una prioridad compartida por todo el equipo."

                        </p>
                    </div>

                    <div className="azteca-capital-humano-testimonios_content_card card3 animaciones-testimonios">
                        <div className="azteca-capital-humano-testimonios_content_card_usuario">
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_img">
                                <img src={capitalHumanoTestimonios3} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-testimonios_content_card_usuario_descripcion">
                                <h5 className='raleway_bold'>Saúl Vaca Sánchez</h5>
                                <span className='raleway_light'>Mecánico en suspensiones</span>
                            </div>
                        </div>
                        <p className='raleway_bold'>
                            "En mis años en Transportes Azteca, he vivido la lealtad, 
                            disciplina y el trabajo en equipo entre mis compañeros."

                        </p>
                    </div>
                </div>
            </div>

            <Footer/>

            {openFormulario && (
            <div className="azteca-capital-humano-formulario" onClick={() => setOpenFormulario(false)}>
                <div className="azteca-capital-humano-formulario_panel" onClick={(e) => e.stopPropagation()}>
                    <div className="azteca-capital-humano-formulario_panel_header square_bold">
                        ¡TRABAJA CON NOSOTROS!
                    </div>
                    <div className="azteca-capital-humano-formulario_panel_content">
                        <div className="col-xl-12">

                            {/* <form action="#"> */}

                                <div className="form-group">
                                    <input type="text" 
                                           className='form-control' 
                                           placeholder='Nombre completo'
                                           value={nombre}
                                           onChange={(event) => {
                                            setNombre(event.target.value);
                                          }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text" 
                                           className='form-control' 
                                           placeholder='Email'
                                           value={email}
                                           onChange={(event) => {
                                            setEmail(event.target.value);
                                          }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text" 
                                           className='form-control' 
                                           placeholder='N° de teléfono'
                                           value={telefono}
                                           onChange={(event) => {
                                            setTelefono(event.target.value);
                                          }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text" 
                                           className='form-control' 
                                           placeholder='Último trabajo relevante'
                                           value={ultimoTrabajo}
                                           onChange={(event) => {
                                            setUltimoTrabajo(event.target.value);
                                          }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="horario" 
                                           className='form-control' 
                                           placeholder='Horario'
                                           value={horario}
                                           onChange={(event) => {
                                            setHorario(event.target.value);
                                          }}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">

                                        <div className="form-group">
                                            <button className='contnerdor-btn-file'>
                                                {statusDoc}
                                                <input 
                                                    type="file" 
                                                    accept=".doc, .docx, .pdf"
                                                    onChange={handleFileChange}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <button className='btn btn-contacto-aplicar' onClick={enviarPostulacion}>Aplica</button>
                                        </div>
                                    </div>
                                </div>

                            {/* </form> */}

                        </div>
                    </div>
                    
                </div>
            </div>
            )}



    
            
        </div>
    );
}

export default Index;