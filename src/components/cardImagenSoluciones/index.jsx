import './cardImagenSoluciones.scss'




import solucionesImgTrailer from '../../assets/img/inicio/inicio-soluciones-1.png';



const cardImagenSoluciones = (props) => {


    return (
        <>
            <div className="azteca-soluciones_content_panel-item">
                <div className="azteca-soluciones_content_panel-item-img" style={{ backgroundImage: `url(${solucionesImgTrailer})` }}>
                    <div className="azteca-soluciones_content_panel-item-box">
                        <label className='azteca-soluciones_content_panel-item-box_title'>{props.titulo}</label><br />
                        <label className='azteca-soluciones_content_panel-item-box_text'>
                            {props.texto}
                        </label>
                    </div>
                </div>
            </div>


        </>
    );
}

export default cardImagenSoluciones;