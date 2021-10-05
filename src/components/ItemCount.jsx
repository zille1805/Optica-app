import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'


export default function ItemConter({ initialValue, stockValue, onAdd = () => { } }) {

    const [count, setCount] = useState(initialValue);
    const [Stock, setStock] = useState(stockValue);

    const Increment = () => {
        if (Stock >= 1) {
            setCount(count - (-1))
            setStock(Stock - 1)
        }
    }
    const Decrement = () => {
        if (count >= 1) {
            setCount(count - 1)
            setStock(Stock - (-1))
        }
    }

    useEffect(() => {
        onAdd(count);
    }, [count]);

    return (
        <div>
            <span><h6>Cantidad de objetos: {Stock}, Cantidad a comprar: {count}</h6></span>
            <div>
                < Button onClick={Increment} variant="success" style={{ margin: "2px" }} >Sumar </ Button>{"   "}
                < Button onClick={Decrement} variant="danger" style={{ margin: "2px" }} >Restar</ Button>
            </div>
        </div>
    )


}