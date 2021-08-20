import React from 'react'
import ItemConter from './ItemCount'

export default function ItemDetail({titulo, Src, stock, precio,detail}) {
    
    return (
        <>
        <img src={Src} style={{ height: '400px', width: '450px' }} />
        <h1>{titulo}</h1>
        <div>
            <p>
                {detail}
            </p>
        </div>
        <p>Precio: {precio}</p>
        <ItemConter InitialValue="1" Stock={stock}/>
        </>
    )

}


