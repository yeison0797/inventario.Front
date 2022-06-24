import React from 'react'
import { Sidebar } from './Sidebar'
import { IzqProductos } from './IzqProductos'
import { NavProductos } from './NavProductos'
import { DerProductos } from './DerProductos'


import '../hojas-de-estilo/Productos.css';

function Productos() {
  return (
    <>
      <div>
        {<Sidebar />}
      </div>

      <div className='contenedor-main'>
        <div>
          <div className='productos'>
            <NavProductos />
            <div className='filas'>
              <IzqProductos />
              <DerProductos />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
export default Productos