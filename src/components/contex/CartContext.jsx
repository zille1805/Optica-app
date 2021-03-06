import { addDoc, collection} from "@firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../../Firbase";
import UserContex from "./UserContext";
import swal from "sweetalert";

const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [cart, setCart] = useState([]);
  const [unidad, setUnit]= useState(0);
  const [preciot, setPriseT]=useState(0)
  const { CerrarSesion }= useContext(UserContex);

  const addItem = (itemComprar, cantidad) => {
    const itemRep=cart.find(item=>item.titulo===itemComprar.titulo);
    if (!itemRep){
        setCart([...cart,{titulo:itemComprar.titulo,subtotal:(itemComprar.precio*cantidad),cantidad:cantidad,precio:itemComprar.precio}]);
        setUnit(unidad-(-cantidad));
        setPriseT(preciot+(itemComprar.precio*cantidad));
    }else{
      const carritoBorrador=cart.map((item)=>{
        if(item.titulo === itemComprar.titulo){
          item.cantidad=(item.cantidad-(-cantidad))//evita que me tome los numeros como cadena
          item.subtotal+=(item.precio*cantidad)
          setUnit(unidad-(-cantidad));
          setPriseT(preciot+(item.precio*cantidad));
        }
        return(item)
      })
      setCart(carritoBorrador)
    }
  
  };
  const RemoveCart=()=>{
    setCart([])
    setPriseT(0)
    setUnit(0)
  };
  const RemoveItem=(titulo)=>{
    cart.map((item)=>{
      if (item.titulo===titulo){
        setPriseT(preciot-(item.subtotal))
        setUnit(unidad-item.cantidad);
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
      carrito:{...cart},
      total: preciot
    };

    const titulosDeCompra= cart.map((objeto)=>{
      return (" " + objeto.cantidad+" unidad de "+objeto.titulo+", ")
    })

    const idDeOrden = await addDoc(ordenCollection, newOrder);
    swal(`Compra Exitosa, id:${idDeOrden.id}`,`${nombre} usted compro:  ${titulosDeCompra} nos pondremos en contacto para la entrega`,"success")
    CerrarSesion()
    setCart([])
    setUnit(0)
    setPriseT(0)
    
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
