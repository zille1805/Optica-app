import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NotFound from '../Pages/Error/404'
import items from '../componentes/Objetos1'


const getItem = id => {
    const item = items.find(item => item.id === id);
    return item;
};
  
export default function ItemDetail() {
    const { id } = useParams();
    const isValid = id.length == 36;
  
    const [item, setItem] = useState({});
  
    useEffect(() => {
      const item = getItem(id);
      setItem(item);
    }, []);
  
    return (
      <>
        {isValid && (
          <>
            <img src={item.Src} style={{ height: '400px', width: '450px' }} />
            <h1>{item.titulo}</h1>
            <div>Delail ....{item.detail}</div>
            <p>Precio: {item.precio}</p>
          </>
        )}
        {!isValid && <NotFound />}
      </>
    );
}


