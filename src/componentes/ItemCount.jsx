import { useState, useEffect } from "react"


export default function ItemConter({initialValue, stockValue, onAdd = () => {}}){

    const [count, setCount]=useState(initialValue);
    const[Stock, setStock]=useState(stockValue);
    
    const Increment = ()=>{
        if ( Stock >= 1 ){
            setCount(count -(-1))
            setStock(Stock - 1)
        }
    }
    const Decrement = ()=>{
        if (count >= 1 ){
          
            setCount(count - 1)
            setStock(Stock -(-1))
        }
    }

    useEffect(() => {
        onAdd(count);
      }, [count]);

    return(
        <div className="contador">
        <span>Cantidad de objetos: {Stock}, Cantidad a comprar: {count}</span>
        <div>
            <button  onClick={Increment}>Sumar </button>
            <button  onClick={Decrement}>Restar</button>
        </div>
        </div>
    )
        

}