import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Item({ titulo, Src, stock, lista, id }) {
  return (
    <Card style={{
      width: '20rem',
      height: "30rem",
      border: "1px solid black",
      padding: "20px",
      backgroundColor: "#93bb4e",
      margin: "20px auto",
      borderRadius: "20px",
      boxShadow: "inset 2px 2px 10px 10px",
    }}>
      <Card.Img variant="top" src={Src} style={{ width: '15rem', height: "15rem", margin: "auto auto" }} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Stock disponible: {stock}
        </Card.Text>
        <Link to={`/itemlist-detail/${lista}/${id}`}>
          <Button >ver detalle del Producto</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}


