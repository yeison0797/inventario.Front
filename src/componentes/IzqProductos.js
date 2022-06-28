import React, {useEffect, useState} from "react";
import '../hojas-de-estilo/IzqProductos.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { PoupCrear } from './PopupCrear';
import { ProductoCreado } from './ProductoCreado';


export function IzqProductos(){
  const[popup,setPop]=useState(false);
  const[listaProductos,setlistaProductos]=useState([]);
  const handleClickOpen=()=>{
    setPop(!popup);
  }
  const closePopup=()=>{
    setPop(false);
  }
  useEffect(()=>{
    setlistaProductos([
      {id:"A1", nombre:"tornillo", cantidad:20},
      {id:"A1", nombre:"tornillo", cantidad:20},
      {id:"A1", nombre:"tornillo", cantidad:20}
    ])
  },[])
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
          <button className="btn-agregar" onClick={handleClickOpen}>
            <AiOutlinePlus style={{ fontSize: '2.2vh', color:'white'}}/>
            <label className="label-agregar">
              Agregar producto
            </label>
          </button>
        </div>  
      </div >
      <div className="contenido-productos">
        {listaProductos.map(producto=>{
          return(
            <ProductoCreado producto={producto}/>
          )
        })}
        <ProductoCreado/>
        {popup?
        <div className="contenido">
          
          <PoupCrear/>
        </div>:""}
      </div>

    </div>
  )
}
