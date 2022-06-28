import React from "react";
import '../hojas-de-estilo/IzqProductos.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";


export function IzqProductos(){
  return(
    <div className="izq">
      <div className="busqueda-agregar">
        
        <div className="search-input">
          {/* <i className="iconos"><BsSearch style={{  position:"relative", left:"100%"}} /></i>      */}
          <input type='text' icon={<BsSearch />} placeholder="search " className="entrada-busqueda"/>   
          
        </div> 
        <div className="espacio2">
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
