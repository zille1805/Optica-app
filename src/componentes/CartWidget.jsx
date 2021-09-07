import Carrito from '..//componentes/img/carrito.png'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import Cartcontext from './contex/Cartcontext'

export default function Carrito1(){
    const {unidad}=useContext(Cartcontext)
    return(
        <Link to="/Cart">
            <button style={{ backgroundColor:"yellow", marginLeft:"800px", marginbottom: "1px"}} className="btn btn-primary position-relative">
                <img class='carrito' src={Carrito} style={{ height: '50px', width: '50px'}} />
                <span class="badge bg-secondary">{unidad}</span>
            </button>
        </Link>
    )
}