import { useContext, useState } from "react";

import UserContex from "../componentes/contex/UserContext";



export default function OrdenyUsuario () {
    const [nombre, setNombre] = useState();
    const [numero, setNumero] = useState();
    const [Email, setEmail] = useState();
    const {user, AgregarUsuario, CerrarSesion}=useContext(UserContex);


    return(
        <div>
            { !user ? 
                <form>
                <label>Nombre y Apellido</label>
                <input  onChange={(ev)=>setNombre(ev.target.value)} type="text" placeholder="Enter Nombre"/>
                <label>Número de Telefono</label>
                <input  onChange={(ev)=>setNumero(ev.target.value)} type="text" placeholder="Enter Numero"/>
                <label>Email</label>
                <input  onChange={(e)=>{setEmail(e.target.value)}}   type="mail" placeholder="Ingrese su mail"/>
                <button onClick={()=>AgregarUsuario(nombre, numero, Email )}>iniciar sesión</button>
                </form>
            :
             <button  onClick={()=>CerrarSesion()} >Cerrar sesión</button>
            }
        </div>
    )
}

