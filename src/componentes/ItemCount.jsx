import { useState } from "react"
import ButtonBoostrap from './Button.jsx'
import { Link } from "react-router-dom"



export default function ItemConter({initialValue, stockValue}){

    const [count, setCount]=useState(initialValue);
    const[Stock, setStock]=useState(stockValue);
    const [ isOn, setIsOn] = useState(null);
    const [itemComprar, setitemComprar] = useState(null);
    
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
    const Add=()=>{
        if (count >= 1){
            setIsOn(true)
            setitemComprar()
        }
    }
    return(
        <div className="contador">
        <span>Cantidad de objetos: {Stock}, Cantidad a compara: {count}</span>
        <div>
            {!isOn ?
                <>
                    <button  onClick={Increment}>Sumar </button>
                    <button  onClick={Decrement}>Restar</button>
                    <button Text="Agregar al carrito" Variant="primary" onClick={Add}>Agregar al carrito </button>
                </>
                :
                    <div id="boton-terminar">
                        <Link to="/Cart"><ButtonBoostrap  Text="Terminar mi Compra" Variant="success"/></Link>
                    </div>  
            }
        </div>
        </div>
    )
        
        

}