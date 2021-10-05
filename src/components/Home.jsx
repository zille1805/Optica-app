import Item from "./Item";
import { Firebase } from '../Firbase/index.jsx'
import { useEffect, useState } from "react";
import chica from "./img/chica.png";
import chico from "./img/chico.png";




export default function Home() {
    const [todosLosItems, setTodosLosItems] = useState([]);
    const [charge, setCharge] = useState(true);
    useEffect(() => {
        Firebase.getAll('objetos').then(docs => {
            const arr = [];
            docs.forEach(item => {
                const data = item.data();
                arr.push({ ...data, id: item.id });
            });
            setTodosLosItems(arr)
            setCharge(false)
        });

    }, [])

    if (charge == true) {
        return <h1>Esta cargando...</h1>;
    } else if (charge == false) {
        return (
            <>
                <div style={{ margin: "40px auto", }}>
                    <img src={chico} style={{ height: '60rem', width: '20rem' }} />
                </div>
                <div style={{ width: '55rem' }}>
                    <div style={{ marginTop: "25px" }}>
                        <h1>¡Bienvenidos!</h1>
                    </div>
                    <div className="list-conteiner">
                        {todosLosItems.map((objetos) => (
                            <div key={objetos.id} style={{ margin: "auto auto", }} >
                                <Item {...objetos} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ margin: "40px auto", }}>
                    <img src={chica} style={{ height: '60rem', width: '20rem' }} />
                </div>
            </>
        )
    }
}


