import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import ButtonBoostrap from './Button.jsx'
import { Link } from "react-router-dom"
import ItemConter from './ItemCount'
import  Cartcontext  from "./contex/Cartcontext";


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
                    <ButtonBoostrap Text="Volver" Variant="primary" />
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
                            {cantcomp!=0 ? <button Text="Agregar al carrito" Variant="primary" onClick={AgregarCarrito}>Agregar al carrito </button>:<></>}
                        </>
                        :
                        <div id="boton-terminar">
                            <Link to="/Cart"><ButtonBoostrap Text="Revisar mi Compra" Variant="success" /></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}


