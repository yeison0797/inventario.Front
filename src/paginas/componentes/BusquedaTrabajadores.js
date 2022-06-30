import React from "react";
import './css/BusquedaTrabajadores.css';

export function BusquedaTrabajadores(){
  return(
    <div className="recuadro-busqueda">
      <label>Asignar a:</label>
      <input type="text" className="buscar-trabajador"></input>
      <label>Lugar:</label>
      <input type="text" className="buscar-trabajador"></input>
      <label>Incidencia/Proyecto:</label>
      <input type="text" className="buscar-trabajador"></input>
      
    </div>    
  )
};