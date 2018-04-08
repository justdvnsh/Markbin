import React , {Component} from 'react';
import Accounts from './accounts'

class Header extends Component {

  binClickHandler(event) {
    event.preventDefault();

    Methods.call('bins.insert')
  }

  render () {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">Markbin</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.binClickHandler.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
};

export default Header;
