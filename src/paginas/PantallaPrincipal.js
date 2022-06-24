import React from "react";
import { PantallaPrincipal1 } from '../componentes/PantallaPrincipal1'
import { PantallaPrincipal2 } from '../componentes/PantallaPrincipal2'


export function PantallaPrincipal(){
    return(
        <div className="pantalla-principal">
        <PantallaPrincipal1/>
        <PantallaPrincipal2/>
        </div>
    )

}