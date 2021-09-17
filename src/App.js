import { BrowserRouter, Switch, Route } from "react-router-dom";
import {CartProvider} from "./componentes/contex/Cartcontext";
import './App.css';
import NavBar from './componentes/NavBar.js';
import Home from "./componentes/Home";
import ItemListConteiner from './componentes/ItemListConteiner.jsx';
import ItemDetailConteiner from './componentes/ItemDetailConteiner.jsx';
import Cart from './componentes/Cart';
import NotFound404 from './Pages/Error/404';
import OrdenyUsuario from '../src/Firbase/UsuariosyOrden.js';
import { UserProvider } from './componentes/contex/UserContext';



function App() {
  
  return (
    <header>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/ItemListConteiner/:data">
                <ItemListConteiner />
              </Route>
              <Route exact path="/ItemList-detail/:data/:id">
                <ItemDetailConteiner />
              </Route>
              <Route exact path="/Cart">
                <Cart />
              </Route>
              <Route path="*" component={NotFound404} />
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </header>
  )
}

export default App;
