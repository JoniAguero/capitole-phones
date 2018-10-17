import React from 'react'

import "./Caracteristicas.css";

export default function Caracteristicas(props) {

    return (
        <div className="caracteristicas">
            <div className="display"> 
                <img src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/display.png" alt="display" />
                <div className = "caracteristicas-title" >
                    <p className="c-t">Display</p>
                    <p><strong>{props.info.display}</strong></p>
                </div>
            </div>
            <div className="procesador">
                <img src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/procesador.png" alt="procesador" />
                <div className="caracteristicas-title">
                    <p className="c-t">Procesador</p>
                    <p><strong>{props.info.procesador}</strong></p>
                </div>
            </div>
            <div className="camara">
                <img src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/camara.png" alt="camara" />
                <div className="caracteristicas-title">
                    <p className="c-t">Cámara</p>
                    <p><strong>{props.info.camara}</strong></p>
                </div>
            </div>
        </div>
    )
}
