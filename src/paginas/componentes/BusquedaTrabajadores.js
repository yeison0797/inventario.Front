import React from "react";
import './css/BusquedaTrabajadores.css';

export function BusquedaTrabajadores() {
  return (
    <div className="recuadro-busqueda">
      <div className="input-wrapper">
        <label className="d-block">Asignar a:</label>
        <input type="text" className="buscar-trabajador "></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="input-icon" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </div>
      <div className="input-wrapper">
        <label className="d-block">Lugar:</label>
        <input type="text" className="buscar-trabajador"></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="input-icon" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </div>
      <div className="input-wrapper">
        <label className="d-block">Incidencia/Proyecto:</label>
        <input type="text" className="buscar-trabajador"></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="input-icon" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </div>

    </div>
  )
};