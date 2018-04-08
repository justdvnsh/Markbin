import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import {Bins} from '../imports/collections/bins';
import BinsList from './components/bins/bins_list'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import BinsDetail from './components/bins/bins_detail'


const routes = (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bins/:binsId" component={BinsDetail} />
    </Switch>
  </BrowserRouter>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('#my-render-area'))
})
