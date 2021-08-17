import ItemDetailConteiner from "./ItemDetailConteiner"

export default function Item({ id, titulo, Src, stock, precio }) {
    return (
      <>
        <img src={Src} style={{ height: '200px', width: '250px'}} />
        <h1>{titulo}</h1>
        <p>Stock disponible: {stock}</p>
        <p>precio $ {precio}</p>
        <p>
        <button onClick={()=>ItemDetailConteiner(id)}>Detail</button>
        </p>
      </>
    )
}