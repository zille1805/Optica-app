
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Carrito from './CartWidget.jsx'
import logo from '..//componentes/img/logo.jpeg'
import { Link } from "react-router-dom";

 const data1 = "Marcos"
 const data2 = "Lc"
export default function NavBar(){

    return (
        <header>
            <div>
                <Link to="/">
                    <div>
                        <img class='logo' src={logo} style={{ height: '200px', width: '500px' }} />
                    </div>
                </Link>
                <div><Carrito /></div>
            </div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        
                        <Nav className="me-auto">
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Nav.Link href={`/ItemListConteiner/${data2}`}>Lentes de Contacto</Nav.Link>
                            <Nav.Link href={`/ItemListConteiner/${data1}`}>Armazones</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </header>
    )
}