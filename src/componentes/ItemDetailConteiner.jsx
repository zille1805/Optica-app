import React from 'react';
import { useParams, Link } from "react-router-dom";
import ButtonBoostrap from './Button.jsx';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data1 from "./Objetos1";
import data2 from "./Objetos2";
import { useContext } from "react";


const  getDataCargar =  data => { 
  // esta funcion es para cargar la lista de objetos  correspondiente dependiendo de lo que busca el cliente
  if(data === "Marcos"){
    const datamostrar = data1
    return datamostrar;
  } else if (data === "Lc"){
    const datamostrar = data2
    return datamostrar;
  }
}

export default function ItemDetailConteiner(){
  const { data, id } = useParams();
  const [cargar, setCargar]=useState(false);
  const [itemObtenido, setItemObtenido] =useState([])

  const dataf=getDataCargar(data)
  
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setCargar(true)
      setTimeout(() => {resolve(dataf.filter((item) => item.id == id))},2000);
    })
    tarea
    .then((dataf) => {
      setItemObtenido(dataf[0])
      setCargar(false)
    })
    .catch((err)=>console.error(err));
  }, [id]); //por si cambia el id en la barra de navegacion
  
  if (cargar) {
    return (
      <>
        <div>
          <h1>Cargando, por favor espere... </h1>
        </div>
      </>
    )
  }else{
    return (
      <>
       <div className="boody-detail" style={{ border: "6px solid purple", margin: "10px"}}>
          <Link to={`/ItemListConteiner/${itemObtenido.lista}`} style={{ marginLeft: "10px" }}>
            <ButtonBoostrap Text= "Volver" Variant="primary" />
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
