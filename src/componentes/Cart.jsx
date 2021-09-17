import { useContext ,useState  } from 'react'
import React from 'react';
import  Cartcontext  from "./contex/Cartcontext";
import { Link } from 'react-router-dom';
import UserContex from './contex/UserContext';
import Button from 'react-bootstrap/Button'


export default function Carrito() {
  const [nombre, setNombre] = useState();
  const [numero, setNumero] = useState();
  const [Email, setEmail] = useState();
  //TRAER DE CONTEXT
  const { user,telefono, email, AgregarUsuario} = useContext(UserContex);
  const { cart, preciot, RemoveCart, RemoveItem, FinalizarCompra } = useContext(Cartcontext);

  return (
    <>
      {cart.length > 0 ?

        <div>
          <table >
            <thead>
              <tr>
                <th colspan="6">
                  <h3><h1>Registro de Compra</h1></h3>
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
                <tr>
                  <th> <h3>{item.titulo}</h3></th>
                  <th><h3>{item.precio}</h3></th>
                  <th><h3>{item.cantidad}</h3></th>
                  <th><h3>$ {item.subtotal} </h3></th>
                  <th><Button className="btn btn-primary" onClick={() => RemoveItem(item.titulo)} >Eliminar</Button></th>
                </tr>
              )}
              <tr>
                <th colspan="3"> <h3>Total:  </h3></th>
                <th><h3>$ {preciot}</h3></th>
                <th></th>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => RemoveCart()}>Cancelar compra</Button>
          <div>
            {!user ?
              <form>
                <div>
                  <label>Nombre y Apellido</label>
                  <input onChange={(ev) => setNombre(ev.target.value)} type="text" placeholder="Enter Nombre" />
                </div>
                <div>
                  <label>Número de Telefono</label>
                  <input onChange={(ev) => setNumero(ev.target.value)} type="text" placeholder="Enter Numero" />
                </div>
                <div>
                  <label>Email</label>
                  <input onChange={(e) => { setEmail(e.target.value) }} type="mail" placeholder="Ingrese su mail" />
                </div>
                <Button onClick={() => AgregarUsuario(nombre, numero, Email)}>iniciar sesión</Button>
              </form>
              :
              <Button onClick={() => FinalizarCompra(cart, user,telefono, email)}>Finalizar Compra</Button>
            }
          </div>
        </div>
        :
        <div >
          <h4>No tienes productos seleccionados!!</h4>
          <Link to="/"><Button>Volver al Inicio</Button></Link>
        </div>
      }
    </>
  )
}
