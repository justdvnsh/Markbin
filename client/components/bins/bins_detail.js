import React, { Component} from 'react';
import Header from '../header';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import {Route} from 'react-router-dom';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share'

class BinsDetail extends Component {
  render() {
    console.log(this.props.bin);
    if (!this.props.bin){
      return <div>Loading....</div>
    }
    return (
      <div>
        <Header /><br /><br />
        <div className="container-fluid">
          <BinsEditor bin={this.props.bin} />
          <BinsViewer bin={this.props.bin} />
          <BinsShare bin={this.props.bin}/>
        </div>
      </div>
    )
  }
};

export default createContainer((props) => {
  const { binsId } = props.match.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(binsId) }
  console.log(props)
}, BinsDetail);
