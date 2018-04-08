import React , {Component} from 'react';
import Accounts from './accounts';
import { Link, Route } from 'react-router-dom';
class Header extends Component {

  binClickHandler(event) {
    event.preventDefault();

    Meteor.call('bins.insert', (error , binId) => {
      this.props.history.push(`/bins/${binId}`)
    })
  }

  render () {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <Link to="#" onClick={this.binClickHandler.bind(this)}>Create Bin</Link>
          </li>
        </ul>
      </nav>
    )
  }
};

export default Header;
