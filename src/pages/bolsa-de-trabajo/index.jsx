import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bolsa-de-trabajo.scss';

import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';

import clip from '../../assets/img/capital-humano/capital-humano-vacantes-position.png'





const Index = () => {

    // Variables


    const [vacante, setVacante] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ultimoTrabajo, setUltimoTrabajo] = useState('');
    const [horario, setHorario] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [statusDoc, setStatusDoc] = useState("Subir CV");
    

    const [openFormulario, setOpenFormulario] = useState(false);
    const formulario = (vacante,ubicacion) => {
        setVacante(vacante)
        setUbicacion(ubicacion)
        setOpenFormulario(true)
        if(openFormulario === false){
            
            setVacante(vacante)
            setUbicacion(ubicacion)
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
          formData.append('Vacante', vacante);
          formData.append('Ubicacion', ubicacion);
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
            setVacante('')
            setUbicacion('')
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



    return (
        <div>
            <Header/>

            <div id='vacantes' className="azteca-capital-humano-vacantes">
            <div className="iniciar-vacantes"></div>
                <div className="azteca-capital-humano-vacantes_content">
                    <div className="azteca-capital-humano-vacantes_content_header">
                        <h2 className='text-center square_bold animaciones-vacantes capital-humano-animaciones'>VACANTES</h2>
                    </div>

                    <div className="azteca-capital-humano-vacantes_content_panel">

                        <div className="azteca-capital-humano-vacantes_content_panel_header capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_header_icon">
                                <img src={clip} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_header_text">
                                <h4 className='raleway_light'>Zapopan, Jalisco, México</h4>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section1 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Gerente de logística</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        La venta del Astillero, Zapopan, Jalisco, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('Gerente de logistica', 'La venta del Astillero, Zapopan, Jalisco, MX')}> 
                                <div className="boton">Aplica</div>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section2 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Auxiliar de logística</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        La venta del Astillero, Zapopan, Jalisco, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('auxiliar de logística', 'La venta del Astillero, Zapopan, Jalisco, MX')}>
                                <a className="boton" href="#vacantes">Aplica</a>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section3 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Operador de trailer</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        La venta del Astillero, Zapopan, Jalisco, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('operador de trailer', 'La venta del Astillero, Zapopan, Jalisco, MX')}>
                                <a className="boton" href="#vacantes">Aplica</a>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_header capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_header_icon">
                                <img src={clip} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_header_text">
                                <h4 className='raleway_light'>Chinameca, Veracruz, México</h4>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section4 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Prevensionista</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        Chinameca, Veracruz, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('prevensionista', 'Chinameca, Veracruz, MX')}>
                                <a className="boton" href="#vacantes">Aplica</a>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section5 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Monitorista</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        La venta del Astillero, Zapopan, Jalisco, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('monitorista', 'La venta del Astillero, Zapopan, Jalisco, MX')}>
                                <a className="boton" href="#vacantes">Aplica</a>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_header capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_header_icon">
                                <img src={clip} alt="" /> 
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_header_text">
                                <h4 className='raleway_light'>Gómez Palacio, Durango, México</h4>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section6 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Prevensionista</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        Gómez Palacio, Durango, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton" onClick={() => formulario('Prevensionista', 'Gómez Palacio, Durango, MX')}>
                                <a className="boton" href="#vacantes">Aplica</a>
                            </div>
                        </div>

                        <div className="azteca-capital-humano-vacantes_content_panel_section section7 capital-humano-animaciones">
                            <div className="azteca-capital-humano-vacantes_content_panel_section_content">
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_puesto">
                                    <h2>Monitorista</h2>
                                </div>
                                <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion">
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_icon">
                                        <img src={clip} alt="" /> 
                                    </div>
                                    <div className="azteca-capital-humano-vacantes_content_panel_section_content_ubicacion_texto">
                                        Gómez Palacio, Durango, MX
                                    </div>
                                </div>
                            </div>
                            <div className="azteca-capital-humano-vacantes_content_panel_section_boton">
                                <a className="boton" href="#vacantes" onClick={() => formulario('monitorista', 'Gómez Palacio, Durango, MX')}>Aplica</a>
                            </div>
                        </div>
                        
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