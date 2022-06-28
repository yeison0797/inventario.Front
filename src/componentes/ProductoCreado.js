import React from "react";
import '../hojas-de-estilo/ProductoCreado.css';


export function ProductoCreado (props){
  return(
    <div className="tarjeta">
      {/* checkbox y nombre con id */}
      <div className="check-nombre">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="nombre-id">
          <label className="id">ID {console.log(props)}</label>
          <label className="nombre">Nombre del producto</label>
        </div>
      </div>
      {/* cantidad y unidad */}
      <div className="cantidad-unidad">
        <label className="cantidad">200</label>
        <label className="unidad">unidad</label>
      </div>
      {/* con o sin existencias */}
      <div className="existencias">
        <div className="btn-existencias">
          <label className="label-existencias">con existencias</label>
        </div>
      </div>
    </div>
  )
};