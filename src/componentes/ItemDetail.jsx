import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import ItemConter from './ItemCount'
import Cartcontext from "./contex/Cartcontext";
import Button from 'react-bootstrap/Button'

export default function ItemDetail({ titulo, Src, stock, precio, detail, cantidad, lista }) {
    const [cantcomp, setCantComprar] = useState()
    const [isOn, setIsOn] = useState(false);
    const { addItem } = useContext(Cartcontext);



    const onAdd = (count) => {
        setCantComprar(count)

    }
    const AgregarCarrito = () => {
        setIsOn(true);
        addItem({ titulo, cantidad, precio }, cantcomp);

    }


    return (
        <div style={{ height: '700px' }}>
            <div style={{ margin: "6px" }}>
                <Link to={`/ItemListConteiner/${lista}`} style={{ marginLeft: "30px" }}>
                    <Button className="btn btn-primary">Volver</Button>
                </Link>
            </div>
            <img src={Src} style={{ height: '300px', width: '350px' }} />
            <h1>{titulo}</h1>
            <div>
                <h5>
                    {detail}
                </h5>
            </div>
            <h4>Precio: {precio}</h4>

            <div>

                <div>
                    {!isOn ?
                        <>
                            <ItemConter initialValue="1" stockValue={stock} onAdd={onAdd} />
                            {cantcomp != 0 ? <Button onClick={AgregarCarrito} style={{ margin: "2px" }}>Agregar al carrito </Button> : <></>}
                        </>
                        :
                        <div style={{ margin: "2px" }}>
                            <Link to="/Cart"><Button className="btn btn-primary" >Revisar mi Compra</Button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}


