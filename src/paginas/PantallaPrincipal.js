import React from "react";
import '../css/PantallaPrincipal.css';
import { Link } from "react-router-dom";


export function PantallaPrincipal() {
    return (
        <body>
            <div className="container-main">
                <div className="presentacion-login">
                    <h1 className="titilo-presentacion">Baúless</h1>
                </div>
                <div className="login">
                    <div className="login-wrapper">
                        <label className="titulo-login">Iniciar sesión</label>
                        <label className="subtitulos">Email</label>
                        <input className="inputs" type="email" required></input>
                        <label className="subtitulos">Password</label>
                        <input className="inputs" type="password" required></input>
                        <Link to="/productos" className="btn-inicio-sesion">
                            Iniciar Sesión
                        </Link>
                        <a className="btn-olvido-contraseña" href="#">¿Olvidó su contraseña?</a>
                    </div>
                </div>
            </div>
        </body>
    )

}