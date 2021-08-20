import React from 'react'
import { useParams, Link } from "react-router-dom";
import ButtonBoostrap from './Button.jsx'
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import data1 from "./Objetos1"
import data2 from "./Objetos2"

const  getDataCargar =  data => {
  if(data == 1){
    const datamostrar = data1
    return datamostrar;
  } else{
    const datamostrar = data2
    return datamostrar;
  }
}

export default function ItemDetailConteiner(){
  const { data, id } = useParams();
  const [itemObtenido, setItemObtenido] =useState([])

  const dataf=getDataCargar(data)

  const  getItemCargar =  id => {
    const item1 = dataf.find(item => item.id == id);
    return item1;
  }

  useEffect(() => {
    const itemmostrar = getItemCargar(id)
    setItemObtenido(itemmostrar)
  }, []);

  return (
    <>
      <div className="boody-detail" style={{ border: "1px solid black", margin: "10px" }}>
        <ItemDetail
          Src={itemObtenido.Src}
          titulo={itemObtenido.titulo}
          precio={itemObtenido.precio}
          detail={itemObtenido.detail}
          stock={itemObtenido.stock}
        />
        <Link to={`/ItemListConteiner/${itemObtenido.lista}`}>
          <ButtonBoostrap Text= "Volver" Variant="primary" />
        </Link>
      </div>
    </>
  )
}
