import { BrowserRouter, Switch, Route } from "react-router-dom";
import {ThemeContext} from "./componentes/contex/themecontext";
import {CartContext} from "./componentes/contex/cartcontext";
import './App.css';
import NavBar from './componentes/NavBar.js';
import Home from "./componentes/Home";
import ItemListConteiner from './componentes/ItemListConteiner.jsx';
import ItemDetailConteiner from './componentes/ItemDetailConteiner.jsx';
import Cart from './componentes/Cart';
import NotFound404 from './Pages/Error/404';
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [itemComprar, setitemComprar] = useState(true);
  return (
    <header>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <CartContext.Provider value={{ itemComprar, setitemComprar }}>
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
              <Cart/>
            </Route>
            <Route path="*" component={NotFound404} />
          </Switch>
        </BrowserRouter>
        </CartContext.Provider>
      </ThemeContext.Provider>
    </header>
  )
}

export default App;
