import React from "react";
import './css/ProductoSolicitado.css';

export function ProductoSolicitado(){
  return(
    <div className="producto-solicitado">
      <label className="label-producto-solicitado">Nombre del producto</label>
      <input type="number" name="edad" min="18" max="99" step="5"  className="entrada-cantidad" required></input>
      <label className="label-unidad">/20</label>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>      
  )
};