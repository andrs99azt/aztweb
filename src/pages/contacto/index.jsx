import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';
import logoAzteca from '../../assets/icons/logo-azteca.png';

//Styles
import './contacto.scss';

const Index = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

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

    return (
        <div>
            <Header/>
            <div className="container-fluid azteca-cabecera-contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1 className='raleway_bold'>Ponte en contacto <span>con nosotros</span></h1>
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
                                    <div className="form-group">
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
            <Footer/>
        </div>
    );
}

export default Index;