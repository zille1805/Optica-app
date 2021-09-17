import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Firebase } from '../Firbase/index.js'


export default function ItemDetailConteiner(){
  const { id } = useParams();
  const [cargar, setCargar]=useState(true);
  const [itemObtenido, setItemObtenido] = useState([])

  useEffect(() => {
    Firebase.get(`objetos/${id}`).then(res => {
      const item = res.data();
      setItemObtenido(
        <ItemDetail
        Src={item.Src}
        titulo={item.titulo}
        precio={item.precio}
        detail={item.detail}
        stock={item.stock}
        cantidad={item.cantidad}
        lista={item.lista}
        />
      );
      setCargar(false)
    });

  }, [id])


  if (cargar) {
    return (
      <>
        <div>
          <h1>Cargando, por favor espere... </h1>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div  style={{ border: "6px solid purple", margin: "10px" }}>
          {itemObtenido}
        </div>
      </>
    )
  }
}
