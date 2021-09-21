import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./componentes/contex/Cartcontext";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componentes/NavBar.js';
import Home from "./componentes/Home";
import ItemListConteiner from './componentes/ItemListConteiner.jsx';
import ItemDetailConteiner from './componentes/ItemDetailConteiner.jsx';
import Cart from './componentes/Cart';
import NotFound404 from './Pages/Error/404';
import { UserProvider } from './componentes/contex/UserContext';
import PieDePagina from "./componentes/PieDePagina.jsx";


function App() {

  return (
    <>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <div className="app">
              <Switch>
                <Route exact path="/">
                  <div className="list-conteiner" >
                    <Home />
                  </div>
                </Route>
                <Route exact path="/ItemListConteiner/:data">
                  <div className="list-conteiner" style={{ width: '55rem', margin: "auto auto" }}>
                    <ItemListConteiner />
                  </div>
                </Route>
                <Route exact path="/ItemList-detail/:data/:id">
                  <div className="list-detail">
                    <ItemDetailConteiner />
                  </div>
                </Route>
                <Route exact path="/Cart">
                  <Cart />
                </Route>
                <Route path="*" component={NotFound404} />
              </Switch>
              <PieDePagina />
            </div>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App;
