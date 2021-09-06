import { useContext } from 'react'
import React from 'react';
import  Cartcontext  from "./contex/Cartcontext";
import { Link } from 'react-router-dom';


export default function Carrito() {
  const{ cart }=useContext(Cartcontext);
  const{preciot,RemoveCart,RemoveItem}=useContext(Cartcontext);
    return(
        <>
          { cart.length>0 ? 
                      
                      <div>
                        <table class="table1"  id="table1">
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
                            {cart.map((item)=>
                              <tr>
                                <th> <h3>{item.titulo}</h3></th>
                                <th><h3>{item.precio}</h3></th>
                                <th><h3>{item.cantidad}</h3></th>
                                <th><h3>$ {item.subtotal} </h3></th>
                                <th><button onClick={()=>RemoveItem(item.titulo)} >Eliminar</button></th>
                              </tr>
                            )}
                            <tr>
                            <th colspan="3"> <h3>Total:  </h3></th>
                            <th><h3>$ {preciot}</h3></th>
                            <th></th>
                            </tr>
                          </tbody>
                        </table>
                        <button onClick={()=>RemoveCart()}>Cancelar compra</button>
                        
                      </div>
          :
                      <div >
                        <h4>No tienes productos seleccionados!!</h4>
                        <Link to="/"><button>Volver al Inicio</button></Link>
                      </div>  
          }
        </>
    )
}
