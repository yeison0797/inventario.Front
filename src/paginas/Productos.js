import React from 'react'
import { IzqProductos } from './componentes/IzqProductos'
import { DerProductos } from './componentes/DerProductos'
import '../hojas-de-estilo/Productos.css';
import { Link } from "react-router-dom";

function Productos() {
  return (
    <>
      <body>
        <div className="parent">

          {/* Sección Sidebar */}

          <div class="sidebar">
            <label class="cubo m-0">Baúless</label>
            <Link to="/informes" class="cubo">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="bg-dark" class="bi bi-box-seam"
                viewBox="0 0 16 16">
                <path
                  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </Link>
            <Link to="/usuarios" class="cubo" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="bg-dark"
                class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                <path
                  d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
              </svg>
            </Link>
            <Link to="/usuarios" class="cubo" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="bg-dark" class="bi bi-person-fill"
                viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </Link>
          </div>

          {/* Sección Navbar */}

          <div class="navbar-content px-5 ">
            <label class="titulo-navbar px-5">Productos</label>
            <div class="notificaciones">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="bg-dark"
                  class="bi bi-bell campana-notificaciones" viewBox="0 0 16 16">
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </a>
              <div class="m-0">
                <label class="nombre-usuario m-0">Juan Diego Benavidez</label>
                <label class="nombre-cargo m-0">Coordinador</label>
              </div>
            </div>
          </div>

          {/* Seccion de los Productos */}

          <div className='productos px-5 p-4'>
            <IzqProductos />
          </div>

          {/* Seccion Movimientos  */}

          <div className="movimientos">
            <DerProductos />
          </div>

        </div>
      </body>
    </>
  )
}
export default Productos