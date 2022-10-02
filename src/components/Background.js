import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Rgb from './Rgb';
import './Background.css';

export default function Background() {
  return (
    <div>
      <Switch>
        <Route>
          <Rgb />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
