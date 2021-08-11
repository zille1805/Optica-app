import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import img0 from "..//componentes/img/marcos/GuuxYellow.jpg"
import img1 from "..//componentes/img/marcos/mormai.jpg"
import img2 from "..//componentes/img/marcos/oreiro.jpg"
import img3 from "..//componentes/img/marcos/reef.jpg"

export default function ItemList() {
  const [cargar, setCargar] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      const data = [
        {
          id: 0,
          Src: img0,
          titulo: "Marcos Guux Yellow",
          precio: 15000,
          cantidad: 1,
          stock: 10
        },
        {
          id: 1,
          Src: img1,
          titulo: "Marcos MorMai",
          precio: 7500,
          cantidad: 1,
          stock: 10
        },
        {
          id: 2,
          Src: img2,
          titulo: "Marcos Oreiro",
          precio: 12000,
          cantidad: 1,
          stock: 10
        },
        {
          id: 3,
          Src: img3,
          titulo: "Marcos Reef",
          precio: 8900,
          cantidad: 1,
          stock: 10
        }
      ];
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