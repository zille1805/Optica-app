import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Firebase } from '../Firbase/index.jsx'


export default function ItemDetailConteiner() {
  const { id } = useParams();
  const [charge, setcharge] = useState(true);
  const [itemO, setItemO] = useState([])

  useEffect(() => {
    Firebase.get(`objetos/${id}`).then(res => {
      const item = res.data();
      setItemO(
        {...item}
      );
      setcharge(false)
    });

  }, [id])


  if (charge===true) {
    return (
      <>
        <div>
          <h1>Cargando, por favor espere... </h1>
        </div>
      </>
    )
  } else if (charge === false){
    return (
      <>
        <div style={{ padding: "20px" }}>
          <div style={{ border: "6px solid purple", margin: "5px" }}>
          <ItemDetail {...itemO}/>
          </div>
        </div>
      </>
    )
  }
}
