
import ButtonBoostrap from './Button.jsx'
import Carrito from './CartWidget.jsx'
import logo from '..//componentes/img/logo.jpeg'
import { Link } from "react-router-dom";
import Cartcontext from './contex/Cartcontext.jsx';
import { useContext } from 'react';



 const data1 = "Marcos"
 const data2 = "Lc"
export default function NavBar(){
    const{cart}=useContext(Cartcontext)
    return(
        <header>
            <nav>
            <ul>
                <li>
                    <Link to="/">
                        <div>
                            <img class='logo' src={logo} style={{ height: '200px', width: '500px'}} />
                        </div>
                    </Link>
                    {cart.length>0 ?<div><Carrito /></div>:<></>}
                    <Link to={`/ItemListConteiner/${data2}`}>
                        <ButtonBoostrap Text= "Lentes de contacto" Variant="primary" />
                    </Link>

                    <Link to={`/ItemListConteiner/${data1}`}>
                        <ButtonBoostrap Text= "Armazones" Variant="success"/>
                    </Link>

                    <Link >
                        <ButtonBoostrap Text= "Cristales" Variant="warning"/>
                    </Link>

                    <Link >
                        <ButtonBoostrap Text= "Liquidos LC" Variant="danger"/>
                    </Link>

                    <Link>
                        <ButtonBoostrap Text= "Ayuda" Variant="info"/>
                    </Link>
                    
                </li>
            </ul>
        </nav>
        
        </header>
    )
}