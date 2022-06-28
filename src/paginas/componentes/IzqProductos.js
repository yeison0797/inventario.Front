import React, { useEffect, useState } from "react";
import './css/IzqProductos.css';
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { PoupCrear } from './PopupCrear';
import { ProductoCreado } from './ProductoCreado';


export function IzqProductos() {
  const [popup, setPop] = useState(false);
  const [listaProductos, setlistaProductos] = useState([]);
  const handleClickOpen = () => {
    setPop(!popup);
  }
  const closePopup = () => {
    setPop(false);
  }
  useEffect(() => {
    setlistaProductos([
      { id: "A1", nombre: "tornillo", cantidad: 20 },
      { id: "A1", nombre: "tornillo", cantidad: 20 },
      { id: "A1", nombre: "tornillo", cantidad: 20 },
      { id: "A1", nombre: "tornillo", cantidad: 20 },
      { id: "A1", nombre: "tornillo", cantidad: 20 }
    ])
  }, [])
  return (
    <div className="izq px-5">
      <div class="buscar-agregar-productos">
        <input type="text" class="rounded p-1" placeholder="Buscar"></input>
        <a href="#" class="btn-agregar-producto" onClick={handleClickOpen}>+ Crear producto</a>
      </div>
      <label class="titulo-seleccione-productos pt-3">Seleccione los productos</label>



      <div className="contenido-productos pt-3">
        {listaProductos.map(producto => {
          return (
            <ProductoCreado producto={producto} />
          )
        })}
        <ProductoCreado />
        {popup ?
          <div className="contenido">

            <PoupCrear />
          </div> : ""}
      </div>

    </div>
  )
}
