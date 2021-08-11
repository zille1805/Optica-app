export default function Item({ id, titulo, Src, stock, precio }) {
    return (
      <>
        <img src={Src} style={{ height: '200px', width: '250px'}} />
        <h1>{titulo}</h1>
        <div>cod: {id}</div>
        <p>Stock disponible: {stock}</p>
        <p>precio $ {precio}</p>
      </>
    );
  }