import React from "react";
import '../hojas-de-estilo/NavProductos.css';
// import { BsFillBellFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

export function NavProductos() {
  return (
    <div className="main-navpro">
      <div className="navpro">
        <label className="titulo-productos">Productos</label>
        <div className="espacio"></div>
        <div className="noti-nombre gap-4" >
          <button className="boton-notificacion" type="submit">
            <IoIosNotificationsOutline style={{ fontSize: '3.5vh' }} />
          </button>
          <div className="labels-usuario">
            <label className="nombre-usuario">Yeison Bermúdez</label>
            <label className="cargo-usuario">Coordinador</label>
          </div>
        </div>
      </div>
    </div>

  )
}