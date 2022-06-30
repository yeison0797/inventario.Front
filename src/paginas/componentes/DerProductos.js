import React from "react";
import './css/DerProductos.css';
import { ProductoSolicitado } from './ProductoSolicitado';
import { BusquedaTrabajadores } from './BusquedaTrabajadores';

export function DerProductos() {
  return (
    <div className="der px-4">


      <label className="titulo-resumen">Resumen del movimiento</label>

      <label className="titulo-productos-seleccionados">Productos solicitados:</label>
      <div className="numero-de-productos">
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
        <ProductoSolicitado />
      </div>
      <div className="buscar-persona">
        <label className="solicitante-movimiento">Solicitante del movimiento:</label>
        <div className="componente-trabajadores">
          <BusquedaTrabajadores />
        </div>
        <div className="botones">
          <a className="btn-asignar" href="#">Asignar</a>
        </div>
      </div>
      {/* <div className="alertas">
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      </div> */}

    </div>
  )
}