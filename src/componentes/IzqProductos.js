import React from "react";
import '../hojas-de-estilo/IzqProductos.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";


export function IzqProductos(){

  return(
    <div className="izq">
      <div className="busqueda-agregar">
        <div className="middle">
      
          <form action="" className="search-box">
            <input type="text" className="input"/>
            <button className="btn" id="" type="button"></button>
          </form>
        </div>
        <div className="boton-agregar">
          <button className="btn-agregar" type="submit">
            <AiOutlinePlus style={{ fontSize: '2.2vh', color:'white'}}/>
            <label className="label-agregar">
              Agregar producto
            </label>
          </button>
        </div>  
      </div>
      <div className="contenido-productos">
        hola
      </div>

    </div>
  )
}


