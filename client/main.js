import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import {Bins} from '../imports/collections/bins'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    )
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App /> , document.querySelector('#my-render-area'))
})
