import React from 'react';
import logoAzteca from '../../assets/icons/logo-azteca.png';

import Header from '../../components/header/Index';

//Styles
import './nosotros.scss';

const Index = () => {

    return (
        <div>
            <Header/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1">
                        <h1>¿Quiénes somos?</h1>
                        <p>Somos una empresa de transporte de líquidos líder en la industria, comprometidos con la excelencia operativa, la calidad y la seguridad en cada aspecto de nuestras operaciones. Nuestro equipo altamente capacitado y nuestra moderna flota de vehículos especializados nos respaldan para brindar soluciones logísticas confiables y eficientes a nuestros clientes en todo momento.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-7">
                        <h3>¿Qué hacemos en Azteca?</h3>
                        <h2>Líder en transporte de líquidos</h2>
                        <div class="row">
                            <div class="col-xl-6">
                               <img src={logoAzteca} alt="Logo Azteca" class="img-fluid"/>
                            </div>
                            <div class="col-xl-6">
                               <h4>Desde 1986,Operando en todo México y ahora en E.U.A</h4>
                            </div>
                        </div>
                        <p>En Azteca, nos especializamos en proporcionar soluciones logísticas integrales y seguras para una amplia variedad de líquidos, desde productos químicos hasta alimentos y combustibles. Nuestra experiencia y compromiso con la calidad nos han posicionado como líderes en el mercado.</p>
                        <p>Lo que nos distingue es nuestra atención meticulosa a cada detalle. Desde el manejo experto de la carga y la selección de equipos especializados hasta la planificación precisa de rutas y la gestión de la documentación aduanera, abordamos cada aspecto de la cadena de suministro con excelencia. Además, nuestra inversión constante en tecnología y capacitación asegura la eficiencia y la seguridad en cada</p>
                    </div>
                    <div class="col-xl-5">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="img img1"></div>
                                <div class="frase">
                                    <p>"Transformamos líquidos en soluciones, proporcionando confianza en cada viaje."</p>
                                    <span>/Santiago Pérez</span>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="img img2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="line-black"></div>

                <div class="row">

                </div>

            </div>

        </div>
    );


}

export default Index;