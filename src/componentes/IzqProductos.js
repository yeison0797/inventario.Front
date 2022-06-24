import React from "react";
import '../hojas-de-estilo/IzqProductos.css';
// import { BsSearch } from "react-icons/bs";
// import { click } from "@testing-library/user-event/dist/click";

export function IzqProductos(){
  const btn = document.querySelector('.btn'),
    input = document.querySelector('.input');

  btn.addEventListener('click', () => {
    btn.classList.toggle('close');
    input.classList.toggle('inclicked');
  });
  return(
    <div className="izq">
      <div className="busqueda-agregar">
        <div className="middle">
          {/* <div className="search-input">
            <input type='text' icon={<BsSearch />} placeholder="search " className="entrada-busqueda"/>   
            <i className="iconos"><BsSearch style={{  position:"relative", left:"100%"}} /></i>     
          </div> */}
          <form action="" className="search-box">
            <input type="text" className="input"/>
            <button className="btn" type="button"></button>
          </form>
        </div>
      </div>
      <div className="abajo">
          adios
      </div>
    </div>
  )
}
const btn = document.querySelector('.btn'),
input = document.querySelector('.input');

btn.addEventListener('click', () => {
btn.classList.toggle('close');
input.classList.toggle('inclicked');
});