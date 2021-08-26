import { useState } from "react"
import ButtonBoostrap from './Button.jsx'
import { Link } from "react-router-dom"

const ArrayItemcomp=[]

export default function ItemConter({initialValue, stockValue}){
    
    const [count, setCount]=useState(initialValue)
    const[Stock, setStock]=useState(stockValue)
    
    const Increment = ()=>{
        if ( Stock >= 1 ){
            setCount(count -(-1))
            setStock(Stock - 1)
        }
    }
    const Decrement = ()=>{
        if (count >= 1 ){
            // ArrayItemcomp.splice(0, 1, 'Item')
            setCount(count - 1)
            setStock(Stock -(-1))
        }
    }
    return(
        <div className="contador">
        <span>Cantidad de objetos: {Stock}, Cantidad a compara: {count}</span>
        <div>
            <button  onClick={Increment}>Sumar </button>
            <button  onClick={Decrement}>Restar</button>
            <button Text="Agregar al carrito" Variant="primary">Agregar al carrito </button>
            <div id="boton-terminar">
                {count > 0 && <Link to="/Cart"><ButtonBoostrap  Text="Terminar mi Compra" Variant="success"/></Link>}
            </div>
            
        </div>
        </div>
    )
        
        

}