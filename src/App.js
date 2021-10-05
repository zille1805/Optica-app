import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/contex/CartContext.jsx";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.jsx';
import Home from "./components/Home.jsx";
import ItemListConteiner from './components/ItemListConteiner.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner.jsx';
import Cart from './components/Cart';
import NotFound404 from './Pages/Error/404';
import { UserProvider } from './components/contex/UserContext';
import Footer from "./components/Footer.jsx";


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
                <Route exact path="/itemlistconteiner/:data">
                  <div className="list-conteiner" style={{ width: '55rem', margin: "auto auto" }}>
                    <ItemListConteiner />
                  </div>
                </Route>
                <Route exact path="/itemlist-detail/:data/:id">
                  <div className="list-detail">
                    <ItemDetailConteiner />
                  </div>
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route path="*" component={NotFound404} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App;
