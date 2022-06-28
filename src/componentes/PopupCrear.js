import React from "react";
import '../hojas-de-estilo/PoupCrear.css';

export function PoupCrear(){
  return(
    <div className='main'>
      <div className="popup">
        <div className="popup-header">
          <div className="titulo-pop">
            <label>Crear producto</label>
          </div>
          <label className="subtitulo">Ingrese los datos correspondientes al producto</label>
        </div>
        <div className="formulario">
          
          <div class="form-floating">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>Selecciona una categoria</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">Categoria</label>
          </div>


          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Nombre</label>
          </div>
        </div>

        <div className="formulario2">
          <div class="form-floating2">
            <label for="disabledTextInput" class="form-label">Cantidad</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            
          </div>


          <div class="form-floating3">
            <label for="disabledTextInput" class="form-label">Unidad</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>selecciona unidad</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <fieldset disabled>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Stock mínimo</label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="100"/>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
};