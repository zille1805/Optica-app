import React from 'react';
import { useParams, Link } from "react-router-dom";
import ButtonBoostrap from './Button.jsx';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Firebase } from '../Firbase/index.js'


export default function ItemDetailConteiner(){
  const { id } = useParams();
  const [cargar, setCargar]=useState(true);
  const [itemObtenido, setItemObtenido] = useState([])

  useEffect(() => {
    Firebase.get(`items/${id}`).then(res => {
      const item = res.data();
      setItemObtenido({...item});
    });
    setCargar(false)

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
          <Link to={`/ItemListConteiner/${itemObtenido.lista}`} style={{ marginLeft: "10px" }}>
            <ButtonBoostrap Text="Volver" Variant="primary" />
          </Link>
          <ItemDetail
            Src={itemObtenido.Src}
            titulo={itemObtenido.titulo}
            precio={itemObtenido.precio}
            detail={itemObtenido.detail}
            stock={itemObtenido.stock}
            cantidad={itemObtenido.cantidad}
          />
        </div>
      </>
    )
  }
}
