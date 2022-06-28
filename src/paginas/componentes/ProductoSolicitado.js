import React from "react";
import './css/ProductoSolicitado.css';

export function ProductoSolicitado(){
  return(
    <div className="producto-solicitado">
      <label className="label-producto-solicitado">Nombre del producto</label>
      <input type="text" className="entrada-cantidad"></input>
      <label className="label-unidad">/20</label>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>      
  )
};