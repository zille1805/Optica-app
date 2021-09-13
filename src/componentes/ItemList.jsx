import { useEffect, useState } from "react";
import ButtonBoostrap from './Button.jsx'
import Item from "./Item.jsx";
import { Link, useParams } from "react-router-dom";
import { Firebase } from '../Firbase/index.js'
const  getDataCargar =  data => {
  if(data == "Marcos"){
    const datamostrar = data
    return datamostrar;
  } else if(data == "Lc"){
    const datamostrar = data
    return datamostrar;
  }
}

export default function ItemList() {
  const {data}=useParams()
  const [cargar, setCargar] = useState(true);
  const [itemListMostrar, setItemListMostrar] = useState([]);

  useEffect(() => {

    const dataf = getDataCargar(data)
    Firebase.getAll(`objetos`, dataf).then(res => {
      const arr = [];
      res.forEach(item => {
        const data = item.data();
        arr.push({ ...data });
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
          <div style={{ 
            border: "1px solid black",
            width: "450px",
            maxwidth: "100%",
            margin: "auto",
            margintop: "30px",
            padding: "20px",}}>
          <Item {...objetos}/>
          <Link to={`/ItemList-detail/${objetos.lista}/${objetos.id}`}>
            <ButtonBoostrap Text= "ver detalle del Producto" Variant="primary" />
            
          </Link>
          </div>
        ))}
        
      </>
    );
  }
}