import Carrito from '..//componentes/img/carrito.png'


export default function Carrito1(){
    return(
        <button style={{ backgroundColor:"yellow", marginLeft:"800px"}}>
            <h7>¡Revisa tus productos!  </h7>
        <img class='carrito' src={Carrito} style={{ height: '50px', width: '50px'}} />
        </button>
    )
}