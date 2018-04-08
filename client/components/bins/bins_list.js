import React , { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins'
import { Link } from 'react-router-dom'

class BinsList extends Component {

  removeBin(bin) {
    Meteor.call('bins.remove', bin)
  }

  renderBins() {
    return this.props.bins.map(bin => {
      const url = `/bins/${bin._id}`

      return (
        <li className="list-group-item" key={bin._id}>
          <Link to={url}>{bin._id}</Link>
          <span className="pull-right">
            <button className="btn btn-danger" onClick={() => this.removeBin(bin)}>Remove Bin </button>
          </span>
        </li>
      )
    })
  }

  render () {
    return (
      <div className="container">
        <ul className="list-group">
          {this.renderBins()}
        </ul>
      </div>
    )
  }
};

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');


  return { bins: Bins.find({}).fetch() }
}, BinsList)
