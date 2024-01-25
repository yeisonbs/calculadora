import React from "react";
import "../hojas-de-estilo/Boton.css";

const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

function Boton(props) {
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Boton;