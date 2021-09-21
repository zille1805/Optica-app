
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carrito from './CartWidget.jsx'
import logo from '..//componentes/img/logo.jpeg'
import { Link } from "react-router-dom";

const data1 = "Marcos"
const data2 = "Lc"
export default function NavBar() {

    return (
        <header>
            <Navbar bg="primary" variant="dark"  >

                <Link to="/" style={{ marginLeft: "30px" }}>
                    <img src={logo} style={{ height: '90px', width: '300px' }} />
                </Link>
                <Nav>
                    <Link to={`/ItemListConteiner/${data2}`} className="nav-link" style={{ marginLeft: "50px" }}> <h3>Lentes de Contacto</h3> </Link>
                    <Link to={`/ItemListConteiner/${data1}`} className="nav-link" style={{ marginLeft: "50px"  }}> <h3>Armazones</h3> </Link>
                </Nav>

                <Carrito />
            </Navbar>
        </header>
    )
}