import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import { useParams } from "react-router-dom";
import { Firebase } from '../Firbase/index.jsx'



const getDatacharge = data => {
  if (data == "Marcos") {
    const dataM = data
    return dataM;
  } else if (data == "Lc") {
    const dataM = data
    return dataM;
  }
}

export default function ItemList() {
  const { data } = useParams()
  const [charge, setcharge] = useState(true);
  const [itemListM, setItemListM] = useState([]);

  useEffect(() => {

    const dataf = getDatacharge(data)
    
    Firebase.getAll(`objetos`, dataf).then(res => {
      const arr = [];
      res.forEach(item => {
        const data = item.data();
        arr.push({ ...data, id: item.id });
      });
      setItemListM(arr)
      setcharge(false)
    });

  }, [data])

  if (charge === true) {
    return <h1>Esta cargando...</h1>;
  } else if (charge === false) {
    return (
      <>
        {itemListM.map((objetos) => (
          <div key={objetos.id} style={{ margin: "auto auto" }} >
            <Item {...objetos} />
          </div>
        ))}

      </>
    );
  }
}