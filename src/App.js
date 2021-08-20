import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './componentes/NavBar.js';
import Home from "./componentes/home";
import ItemListConteiner from './componentes/ItemListConteiner.jsx'
import ItemDetailConteiner from './componentes/ItemDetailConteiner.jsx'

import NotFound404 from './Pages/Error/404';


function App() {
  return (
    <header>
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

        <Route path="*" component={NotFound404} />

      </Switch>
    </BrowserRouter>
    </header>
  )
}

export default App;
