import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import data from "./Objetos1"

export default function ItemList() {
  const [cargar, setCargar] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      
      setTimeout(() => resolve(data), 2000);
      setCargar(true);
    });

    tarea
      .then((respuestaDeLaPromesa) => {
        setCargar(false);
        setItemList(respuestaDeLaPromesa);
      })
      .catch((err) => {
        setCargar(true);
        console.log("algo salio mal...");
      });
  }, []);

  if (cargar === true) {
    return <h1>Esta cargando...</h1>;
  } else if (cargar === false) {
    return (
      <>
        {itemList.map((objetos) => (
          <Item
            id={objetos.id}
            Src={objetos.Src}
            titulo={objetos.titulo}
            precio={objetos.precio}
            cantidad={objetos.cantidad}
            stock={objetos.stock}
          />
        ))}
      </>
    );
  }
}