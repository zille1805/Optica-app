import Item from "./Item";
import { Link } from "react-router-dom";
import { Firebase } from '../Firbase/index.js'
import { useEffect, useState } from "react";



export default function Home() {
    const [todosLosItems, setTodosLosItems] = useState([]);
    const [cargar, setCargar] = useState(true);
    useEffect(() => {
        Firebase.getAll('objetos').then(docs => {
            const arr = [];
            docs.forEach(item => {
                const data = item.data();
                arr.push({...data, id: item.id});
            });
            setTodosLosItems(arr)
            setCargar(false)
        });

    }, [])

    if (cargar == true) {
        return <h1>Esta cargando...</h1>;
    } else if (cargar == false) {
        return (
            <>
                <h1>Bienvenido </h1>
                {todosLosItems.map((objetos) => (
                    <div  style={{ border: "1px solid black", width: "450px", maxwidth: "100%", margin: "auto", }}>
                        <Item Src={objetos.Src} titulo={objetos.titulo} stock={objetos.stock} />
                        <Link to={`/ItemList-detail/${objetos.lista}/${objetos.id}`}>
                            <button className="btn btn-primary">ver detalle del Producto</button>
                        </Link>
                    </div>
                ))}
            </>
        )
    }
}