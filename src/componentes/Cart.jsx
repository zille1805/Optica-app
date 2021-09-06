//npm install firebase
//Luego, inicializa Firebase y comienza a usar los SDK de los productos que quieres usar.

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyBcIUMSN9PFj0FHNr4zLr6LR5pZya5ToSc",
//  authDomain: "optica-imagen.firebaseapp.com",
//  projectId: "optica-imagen",
//  storageBucket: "optica-imagen.appspot.com",
//  messagingSenderId: "990829906413",
//  appId: "1:990829906413:web:f8ccee4e94510150877fe4"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
import { useContext } from 'react'
import React from 'react';
import  Cartcontext  from "./contex/Cartcontext";
import ButtonBoostrap from './Button';


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
                      </div>  
          }
        </>
    )
}
