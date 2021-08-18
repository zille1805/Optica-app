import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import objeto from "./Objetos1"


export default function ItemDetailConteiner({id}){
  const [cargar, setCargar] = useState(false);
  const [detail, setDetail] = useState([]);
  const [lentes, setLentes] = useState([]);
  
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setDetail(id)
      setTimeout(() => resolve(objeto), 2000);
      setCargar(true);
    });
  
    tarea
      .then((respuestaDeLaPromesa) => {
        setCargar(false);
        setLentes(respuestaDeLaPromesa);
      })
      .catch((err) => {
        setCargar(true);
        console.log("algo salio mal...");
      });
  }, []);
  
  if (cargar === true) {
    return <h1>Esta cargando...</h1>;
  } else if (cargar === false) {
    render(()=>{
      return (
        <>
        {lentes.map((objetos)=>{
          if(lentes.id===detail){
            <ItemDetail
              id={objetos.id}
              Src={objetos.Src}
              titulo={objetos.titulo}
              precio={objetos.precio}
              detail={objetos.detail}
              stock={objetos.stock} 
            />
          }
              
        })}
  
        </>
      );

    })
  }
}