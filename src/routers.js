import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './design/pages/home';
import Page from './design/pages/page';
import NoMatch from './design/pages/nomatch';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/page' component={Page} />
    <Route component={NoMatch} />
  </Switch>
);
