import React, { useState } from "react";
import '../hojas-de-estilo/PantallaPrincipal2.css';
import { BrowserRouter as Router, Route } from "react-router-dom";



export function PantallaPrincipal2 () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const mensajeError1 =validacionemail(email);
    const mensajeError2=validacioncontraseña(password);
    return(
        <div className="contenedor-inicio">
            <div className="contenedor-sesion">
                <h1>Inicio de sesión</h1>
                <p className="email">Email</p>
                <form className="formulario-ingreso" onSubmit={ev =>{ev.preventDefault();
                    login(email, password)
                }}>
                    <input 
                    className="entrada-inputs"
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    ></input>
                    <p className="error-email">{mensajeError1}</p>
                    <p className="nombre-contraseña">Contraseña</p>
                    <input 
                    className="entrada-inputs"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    ></input>
                    <p className="error-pass">{mensajeError2}</p>
                    <button className="entrar-boton" type="submit">
                        Iniciar sesión
                    </button>
                </form>
            </div>

        </div>
    );
};
const login = (email, password) => {
    if (email === 'hola' && password === 'hola')
    alert('Login correcto');
    else alert('Login incorrecto');
};
const validacionemail = (email) =>{
    if(!email.includes('@') && email.length>1) return 'Email incorrecto';
};

const validacioncontraseña = (password) =>{
    if(password.length>1 && password.length<6) return 'Contraseña demasiado corta'


};