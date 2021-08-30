import React from 'react'
import { useState } from "react";

import ItemConter from './ItemCount'


export default function ItemDetail({titulo, Src, stock, precio,detail}) {
    const [isOn, setIsOn] = useState(true);
  
    return (
        <div>
            <img src={Src} style={{ height: '400px', width: '450px' }} />
            <h1>{titulo}</h1>
            <div>
                <p>
                    {detail}
                </p>
            </div>
            <p>Precio: {precio}</p>

            <div>
                 {isOn ==true && <ItemConter initialValue="1" stockValue={stock} />}
            </div>

            
            

            
        </div>
    )

}


