
export default function Item({  titulo, Src, stock}) {
    return (
      <div>
        <img src={Src} style={{ height: '200px', width: '250px'}} />
        <h1>{titulo}</h1>
        <p>Stock disponible: {stock}</p>
      </div>
    )
}