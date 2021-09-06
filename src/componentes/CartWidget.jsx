import Carrito from '..//componentes/img/carrito.png'
import { Link } from "react-router-dom"

export default function Carrito1(){
    return(
        <Link to="/Cart">
            <button style={{ backgroundColor:"yellow", marginLeft:"800px", marginbottom: "1px"}}>
                <img class='carrito' src={Carrito} style={{ height: '50px', width: '50px'}} />
            </button>
        </Link>
    )
}