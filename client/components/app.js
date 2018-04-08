import React, {Component} from 'react';
import Header from './header';
import BinsList from './bins/bins_list'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header /><br /><br />
        <BinsList />
      </div>
    )
  }
};

export default App;
