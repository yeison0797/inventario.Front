import React from "react";
import './css/ProductoCreado.css';


export function ProductoCreado(props) {
  return (
    <div className="tarjeta px-3">
      {/* checkbox y nombre con id */}
      <div className="check-nombre gap-3">
        <input class=" bg-dark border-0" type="checkbox" value="" id="flexCheckDefault" />
        <div className="nombre-id d-inline-block">
          <label className="id d-block">ID SC20222 {console.log(props)}</label>
          <label className="nombre">Nombre del producto</label>
        </div>
      </div>
      {/* cantidad y unidad */}
      <div className="cantidad-unidad gap-2">
        <label className="cantidad">200</label>
        <label className="unidad">Unidades</label>
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