import { useState } from "react"
import ButtonBoostrap from './Button.jsx'
import { Link } from "react-router-dom"

const ArrayItemcomp=[]

export default function ItemConter({InitialValue, Stock}){
    
    const [count, setCount]=useState(InitialValue)
    const[stock, setStock]=useState(Stock)
    const increment = ()=>{
        if (Stock >= 1 ){
            Item=1;
            ArrayItemcomp.add(Item)
            setCount(count-(-1))
            setStock(stock-1)
        }
    }
    const decrement = ()=>{
        if (count > 1 ){
            ArrayItemcomp.splice(0, 1, 'Item')
            setCount(count-1)
            setStock(stock-(-1))
        }
    }
    return(
        <div className="contador">
        <span>Cantidad de objetos: {Stock}, Cantidad a compara: {count}</span>
        <div>
            <button  onClick={()=> increment()}>Sumar </button>
            <button  onClick={()=> decrement()}>Restar</button>
            <button Text="Agregar al carrito" Variant="primary">Agregar al carrito </button>
            <div id="boton-terminar">
                <Link to="/Cart">
                    <ButtonBoostrap  Text="Terminar mi Compra" Variant="success"/> 
                </Link>
            </div>
            
        </div>
        </div>
    )
        
        

}