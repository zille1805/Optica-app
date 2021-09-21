import { useContext, useState } from 'react'
import React from 'react';
import Cartcontext from "./contex/Cartcontext";
import { Link } from 'react-router-dom';
import UserContex from './contex/UserContext';
import Button from 'react-bootstrap/Button'
import Lax from "./img/pngegg.png";


export default function Carrito() {
  const [nombre, setNombre] = useState();
  const [numero, setNumero] = useState();
  const [Email, setEmail] = useState();
  //TRAER DE CONTEXT
  const { user, telefono, email, AgregarUsuario } = useContext(UserContex);
  const { cart, preciot, RemoveCart, RemoveItem, FinalizarCompra } = useContext(Cartcontext);

  return (
    <>
      {cart.length > 0 ?

        <div style={{ padding: "30px", height: "auto" }}>
          <div style={{ margin: "2px" }}>
            <Link to="/">
              <Button>Volver</Button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th colSpan="6">
                  <h1>Registro de Compra</h1>
                </th>
              </tr>
              <tr>
                <th><h2>Producto</h2></th>
                <th><h2>Precio por unidad</h2></th>
                <th><h2>Unidad</h2></th>
                <th><h2>Subtotal</h2></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) =>
                <tr key={item.id}>
                  <th ><h3>{item.titulo}</h3></th>
                  <th ><h3>{item.precio}</h3></th>
                  <th ><h3>{item.cantidad}</h3></th>
                  <th ><h3>$ {item.subtotal} </h3></th>
                  <th >
                    <Button className="btn btn-primary" onClick={() => RemoveItem(item.titulo)} >
                      <img src={Lax} style={{ height: '40px', width: '40px' }} />
                    </Button>
                  </th>
                </tr>
              )}
              <tr>
                <th colSpan="3"> <h3>Total:  </h3></th>
                <th><h3>$ {preciot}</h3></th>
                <th><Button onClick={() => RemoveCart()}>Cancelar compra</Button></th>
              </tr>
            </tbody>
          </table>

          <div style={{ margin: "20px auto" }}>
            {!user ?
              <form>
                <div style={{ margin: "20px auto" }}>
                  <h3>Para finalizar la compra complete a continuacion: </h3>
                  <label >Nombre y Apellido:  </label>
                  <input onChange={(ev) => setNombre(ev.target.value)} type="text" placeholder="Ingrese el Nombre" />
                </div>
                <div style={{ margin: "20px auto" }}>
                  <label >Número de Telefono:  </label>
                  <input onChange={(ev) => setNumero(ev.target.value)} type="numero" placeholder="Ingrese el Numero" />
                </div>
                <div style={{ margin: "20px auto" }}>
                  <label >Email:  </label>
                  <input onChange={(e) => { setEmail(e.target.value) }} type="mail" placeholder="Ingrese su mail" />
                </div>
                <Button onClick={() => AgregarUsuario(nombre, numero, Email)}>Registrar</Button>
              </form>
              :
              <Button onClick={() => FinalizarCompra(cart, user, telefono, email)}>Finalizar Compra</Button>
            }
          </div>
        </div>
        :
        <div style={{ padding: "30px" }}>
          <div style={{ margin: "30px" }}>
            <h4>No tienes productos seleccionados!!</h4>
            <Link to="/"><Button>Volver al Inicio</Button></Link>

          </div>
        </div>
      }
    </>
  )
}
