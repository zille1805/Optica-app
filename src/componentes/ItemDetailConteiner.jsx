import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Firebase } from '../Firbase/index.js'


export default function ItemDetailConteiner() {
  const { id } = useParams();
  const [cargar, setCargar] = useState(true);
  const [itemObtenido, setItemObtenido] = useState([])

  useEffect(() => {
    Firebase.get(`objetos/${id}`).then(res => {
      const item = res.data();
      setItemObtenido(
        {...item}
      );
      setCargar(false)
    });

  }, [id])


  if (cargar===true) {
    return (
      <>
        <div>
          <h1>Cargando, por favor espere... </h1>
        </div>
      </>
    )
  } else if (cargar === false){
    return (
      <>
        <div style={{ padding: "20px" }}>
          <div style={{ border: "6px solid purple", margin: "5px" }}>
          <ItemDetail {...itemObtenido}/>
          </div>
        </div>
      </>
    )
  }
}
