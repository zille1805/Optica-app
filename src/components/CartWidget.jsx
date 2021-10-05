import Carrito from '..//components/img/carrito.png'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import Cartcontext from './contex/CartContext'

export default function Carrito1(){
    const { unidad } = useContext(Cartcontext)
    return (
        <Link to="/cart">
            <button style={{ backgroundColor: "yellow", marginLeft: "950px" }} >
                <div>
                    { unidad>0 ?
                    <div>
                        <span className="badge bg-secondary">{unidad}</span>
                    </div>:<></>}
                    <div>
                        <img  src={Carrito} style={{ height: '50px', width: '50px' }} />
                    </div>
                </div>
            </button>
        </Link>
    )
}