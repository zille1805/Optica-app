import { createContext, useState } from "react";
import React, { useContext } from 'react';


const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [cart, setCart] = useState([]);
  const [unidad, setUnidad]= useState(0);
  const [preciot, setPrecioT]=useState(0)

  const addItem = (itemComprar, cantidad) => {
    const itemRep=cart.find(item=>item.titulo===itemComprar.titulo);
    if (!itemRep){
        setCart([...cart,{titulo:itemComprar.titulo,subtotal:(itemComprar.precio*cantidad),cantidad:cantidad,precio:itemComprar.precio}]);
        setUnidad(unidad+1);
        setPrecioT(preciot+(itemComprar.precio*cantidad));
    }else{
      const carritoBorrador=cart.map((item)=>{
        if(item.titulo==itemComprar.titulo){
          item.cantidad+=cantidad
          item.precio+=(itemComprar.precio*cantidad)
        }
        return(item)
      })
      setCart(carritoBorrador)
    }
  
  };
  const RemoveCart=()=>{
    setCart([])
    setPrecioT(0)
  };
  const RemoveItem=(titulo)=>{
    cart.map((item)=>{
      if (item.titulo===titulo){
        setPrecioT(preciot-(item.subtotal))
      }
    })
    const carritoBorrador=cart.filter((itemnoborrar)=>itemnoborrar.titulo !==titulo)
    setCart(carritoBorrador)
  }
  return (
    // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)
    <Cartcontext.Provider value={{ cart, addItem, unidad, preciot,RemoveCart, RemoveItem }}>
      {/* componentes hijos  */}
      {children}
    </Cartcontext.Provider>
  );
}

export default Cartcontext;
