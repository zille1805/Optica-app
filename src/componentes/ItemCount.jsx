import { useState } from "react"


export default function Conter({InitialValue, Stock}){
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
        <div>
        <span>Cantidad de objetos: {Stock}, Cantidad a compara: {count}</span>
        <div>
            <button onClick={()=> increment()}> Sumar </button>
            <button onClick={()=> decrement()}> Restar </button>
            <button> Add </button>
        </div>
        </div>
    )
        
        

}