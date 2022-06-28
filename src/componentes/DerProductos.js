import React from "react";
import '../hojas-de-estilo/DerProductos.css';
import { ProductoSolicitado } from './ProductoSolicitado';
import { BusquedaTrabajadores } from './BusquedaTrabajadores';

export function DerProductos(){
  return(
    <div className="der">
      <div className="titulo">
        <label className="titulo-resumen">Resumen del movimiento</label>
      </div>
      <div className="productos-seleccionados">
        <label className="titulo-productos-seleccionados">Productos solicitados:</label>
        <div className="scroll-de-productos">
          <div className="numero-de-productos">
            <ProductoSolicitado/>
          </div>
        </div>
      </div>
      <div className="buscar-persona">
        <label className="solicitante-movimiento">Solicitante del movimiento:</label>
        <div className="nombre-persona-solicitante">  
        </div>
        <div className="componente-trabajadores">
          <BusquedaTrabajadores/>
        </div>
      </div>
      <div className="alertas">
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
      <div className="botones">
      </div>
    </div>
  )
}