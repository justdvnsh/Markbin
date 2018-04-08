import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {

  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content)
  }

  render() {
    return (
      <div className="col-xs-8">
        <h2>Input</h2>
        <CodeMirror value={this.props.bin.content}  options={{ mode: 'markdown', lineNumbers: true }} onChange={this.onEditorChange.bind(this)}/>
      </div>
    )
  }
};

export default BinsEditor;
