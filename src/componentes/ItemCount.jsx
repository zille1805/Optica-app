import { useState } from "react"
import ButtonBoostrap from './Button.jsx'

export default function ItemConter({InitialValue, Stock}){
    const [count, setCount]=useState(InitialValue)
    const[stock, setStock]=useState(Stock)
    const increment = ()=>{
        if (stock > 1 ){
            setCount(count-(-1))
            setStock(stock-1)
        }
    }
    const decrement = ()=>{
        if (count > 1 ){
            setCount(count-1)
            setStock(stock-(-1))
        }
    }
    return(
        <div className="contador">
        <span>Cantidad de objetos: {Stock}, Cantidad a compara: {count}</span>
        <div>
            <ButtonBoostrap  Text="Sumar" Variant="primary"  onClick={()=> increment()}/> 
            <ButtonBoostrap  Text="Restar" Variant="primary"  onClick={()=> decrement()}/>
            <ButtonBoostrap  Text="Add" Variant="primary"/> 
        </div>
        </div>
    )
        
        

}