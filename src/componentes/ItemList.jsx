import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import { useParams } from "react-router-dom";
import { Firebase } from '../Firbase/index.js'



const getDataCargar = data => {
  if (data == "Marcos") {
    const datamostrar = data
    return datamostrar;
  } else if (data == "Lc") {
    const datamostrar = data
    return datamostrar;
  }
}

export default function ItemList() {
  const { data } = useParams()
  const [cargar, setCargar] = useState(true);
  const [itemListMostrar, setItemListMostrar] = useState([]);

  useEffect(() => {

    const dataf = getDataCargar(data)
    
    Firebase.getAll(`objetos`, dataf).then(res => {
      const arr = [];
      res.forEach(item => {
        const data = item.data();
        arr.push({ ...data, id: item.id });
      });
      setItemListMostrar(arr)
      setCargar(false)
    });

  }, [data])

  if (cargar === true) {
    return <h1>Esta cargando...</h1>;
  } else if (cargar === false) {
    return (
      <>
        {itemListMostrar.map((objetos) => (
          <div key={objetos.id} style={{ margin: "auto auto" }} >
            <Item {...objetos} />
          </div>
        ))}

      </>
    );
  }
}