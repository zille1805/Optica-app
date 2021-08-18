
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetail from '../componentes/ItemDetail';
import NotFound404 from './Error/404';

export default function Rooter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login">
          <div>/login</div>
        </Route>
        <Route exact path="/item/:id" component={ItemDetail} />
        <Route exact path="/item/:id/detail">
          <div>Mi detalle del producto 1</div>
        </Route>
        <Route path="*" component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}
