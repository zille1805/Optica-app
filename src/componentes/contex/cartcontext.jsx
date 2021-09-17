import { addDoc, collection, doc, setDoc, Timestamp } from "@firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../../Firbase";
import UserContex from "./UserContext";

const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [cart, setCart] = useState([]);
  const [unidad, setUnidad]= useState(0);
  const [preciot, setPrecioT]=useState(0)
  const { CerrarSesion }= useContext(UserContex);

  const addItem = (itemComprar, cantidad) => {
    const itemRep=cart.find(item=>item.titulo===itemComprar.titulo);
    if (!itemRep){
        setCart([...cart,{titulo:itemComprar.titulo,subtotal:(itemComprar.precio*cantidad),cantidad:cantidad,precio:itemComprar.precio}]);
        setUnidad(unidad+cantidad);
        setPrecioT(preciot+(itemComprar.precio*cantidad));
    }else{
      const carritoBorrador=cart.map((item)=>{
        if(item.titulo === itemComprar.titulo){
          item.cantidad=(item.cantidad-(-cantidad))//evita que me tome los numeros como cadena
          item.subtotal+=(item.precio*cantidad)
          setUnidad(unidad+cantidad);
          setPrecioT(preciot+(item.precio*cantidad));
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
        setUnidad(unidad-item.cantidad);
      }
    })
    const carritoBorrador=cart.filter((itemnoborrar)=>itemnoborrar.titulo !==titulo)
    setCart(carritoBorrador)
  }

  const FinalizarCompra = async (cart, nombre, numero, email)=>{
    const ordenCollection = collection(db, "orden");
    const newOrder = {
      Datos: {
          name: {nombre},
          phone: {numero},
          email: {email},
      },
      date: new Date().toString(),
      carrito:{...cart}
    };

    await addDoc(ordenCollection, newOrder);
    CerrarSesion()
    setCart([])
    
  }
  return (
    // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)
    <Cartcontext.Provider value={{ cart, addItem, unidad, preciot, RemoveCart, RemoveItem, FinalizarCompra }}>
      {/* componentes hijos  */}
      {children}
    </Cartcontext.Provider>
  );
}

export default Cartcontext;
