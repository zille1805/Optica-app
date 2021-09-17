import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import ItemConter from './ItemCount'
import  Cartcontext  from "./contex/Cartcontext";
import Button from 'react-bootstrap/Button'

export default function ItemDetail({titulo, Src, stock, precio,detail,cantidad, lista}) {
    const [cantcomp, setCantComprar]=useState()
    const [ isOn, setIsOn] = useState(false);
    const {addItem} =useContext(Cartcontext);
    
    

    const onAdd=(count)=>{
        setCantComprar(count)
    
    }
    const AgregarCarrito=()=>{
        setIsOn(true);
        addItem({titulo, cantidad, precio}, cantcomp);

    }
  
    
    return (
        <div>
            <div>
                <Link to={`/ItemListConteiner/${lista}`} style={{ marginLeft: "10px" }}>
                    <Button className="btn btn-primary">Volve</Button>
                </Link>
            </div>
            <img src={Src} style={{ height: '400px', width: '450px' }} />
            <h1>{titulo}</h1>
            <div>
                <p>
                    {detail}
                </p>
            </div>
            <p>Precio: {precio}</p>

            <div>

                <div>
                    {!isOn ?
                        <>
                            <ItemConter initialValue="1" stockValue={stock} onAdd={onAdd} />
                            {cantcomp!=0 ? <Button Text="Agregar al carrito" Variant="primary" onClick={AgregarCarrito}>Agregar al carrito </Button>:<></>}
                        </>
                        :
                        <div id="boton-terminar">
                            <Link to="/Cart"><Button className="btn btn-primary">Revisar mi Compra</Button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}


