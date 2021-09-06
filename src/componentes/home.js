import data1 from "./Objetos1";
import data2 from "./Objetos2";
import Item from "./Item";
import ButtonBoostrap from './Button.jsx'
import { Link } from "react-router-dom";


export default function Home(){
   
    return (
        <>
        <h1>Bienvenido a Tu Optica de Confianza</h1>
        { data1.map((objetos) => (
            <div className="boody-center" style={{ border: "1px solid black",width: "450px",maxwidth: "100%",margin: "auto",}}>
                <Item Src={objetos.Src} titulo={objetos.titulo} stock={objetos.stock}/>
                <Link to={`/ItemList-detail/${objetos.lista}/${objetos.id}`}>
                    <ButtonBoostrap Text= "ver detalle del Producto" Variant="primary" />
                </Link>
            </div>
        ))}
        { data2.map((objetos) => (

            <div className="boody-center" style={{ border: "1px solid black",width: "450px",maxwidth: "100%",margin: "auto",}}>
                <Item Src={objetos.Src} titulo={objetos.titulo} stock={objetos.stock}/>
                <Link to={`/ItemList-detail/${objetos.lista}/${objetos.id}`}>
                    <ButtonBoostrap Text= "ver detalle del Producto" Variant="primary" />
                </Link>
            </div>
           
        ))}
        </>
    
    )

}