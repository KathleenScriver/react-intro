import React, { Component } from 'react';
import Greeting from './Greeting'
import style from './style'

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameError: "",
    };
  }

  validateName = (name) => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
     ? "The name must contain at least 3 letters. Numbers and special characters are not allowed."
     : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName(firstName);

    return this.setState({ firstNameError });
  }

  onFirstNameChange = (event) =>
    this.setState({
      firstName: event.target.value
    });


  render() {
    const { firstNameError, firstName } = this.state

    return (
      <div style={style.form}>
        <div style={style.inputGroup}>
          <label> First Name:
            <input
              style={style.input}
              type='text'
              name='firstName'
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div style={style.error}>{firstNameError}</div>}
          </label>
        </div>

        <Greeting firstName={firstName} />
      </div>
    );
  }
}
