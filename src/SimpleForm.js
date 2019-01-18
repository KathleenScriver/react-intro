import React, { Component } from 'react';
import Greeting from './Greeting'

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName = "",
    }
  }

  onFirstNameChange = (event) =>
    this.setState({
      firstName: event.target.value
    });


  render() {
    return (
      <div>
        <input
          type='text'
          name='first name'
          onChange={this.onFirstNameChange}
        />
        <Greeting firstName={this.state.firstName} />
      </div>
    );
  }
}
