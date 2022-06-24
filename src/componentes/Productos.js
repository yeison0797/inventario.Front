import React from 'react'
import { IzqProductos } from './IzqProductos'
import { NavProductos } from './NavProductos'
import { DerProductos } from './DerProductos'


import '../hojas-de-estilo/Productos.css';

function Productos() {
  return (
    <div className='contenedor-main'>
      <div className='productos'>
        <NavProductos />
        <div className='filas'>
          <IzqProductos />
          <DerProductos />
        </div>
      </div>
    </div>

  )
}
export default Productos