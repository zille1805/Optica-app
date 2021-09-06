import { useEffect, useState } from "react";
import ButtonBoostrap from './Button.jsx'
import Item from "./Item.jsx";
import { Link, useParams } from "react-router-dom";
import data1 from "./Objetos1";
import data2 from "./Objetos2";
import { useContext } from "react";
import { ThemeContext } from "./contex/Themecontext";

const  getDataCargar =  data => {
  if(data == "Marcos"){
    const datamostrar = data1
    return datamostrar;
  } else if(data == "Lc"){
    const datamostrar = data2
    return datamostrar;
  }
}

export default function ItemList() {
  const {data}=useParams()
  const [cargar, setCargar] = useState(false);
  const [itemList, setItemList] = useState([]);
  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    
    const tarea = new Promise((resolve, reject) => {
      const dataf=getDataCargar(data)
      setTimeout(() => resolve(dataf), 2000);
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
  }, [data]);

  if (cargar === true) {
    return <h1>Esta cargando...</h1>;
  } else if (cargar === false) {
    return (
      <>
        {itemList.map((objetos) => (
          <div style={{ 
            border: "1px solid black",
            background: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
            width: "450px",
            maxwidth: "100%",
            margin: "auto",
            margintop: "30px",
            padding: "20px",}}>
          <Item
            Src={objetos.Src}
            titulo={objetos.titulo}
            stock={objetos.stock}
          />
          <Link to={`/ItemList-detail/${objetos.lista}/${objetos.id}`}>
            <ButtonBoostrap Text= "ver detalle del Producto" Variant="primary" />
            
          </Link>
          </div>
        ))}
        
      </>
    );
  }
}