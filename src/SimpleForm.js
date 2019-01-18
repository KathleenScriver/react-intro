import React, { Component } from 'react';
import Greeting from './Greeting'
import TextField from './TextField';
import style from './style';

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      firstNameError: "",
      lastNameError: "",
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

  onLastNameBlur = () => {
    const { lastName } = this.state;

    const lastNameError = this.validateName(lastName);

    return this.setState({ lastNameError });
  }

  onLastNameChange = (event) =>
    this.setState({
      lastName: event.target.value
    });

  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state

    return (
      <div style={style.form}>

        <TextField name='firstName'
                   label='First Name'
                   onChange={this.onFirstNameChange}
                   onBlur={this.onFirstNameBlur}
                   error={firstNameError} />

       <TextField name='lastName'
                  label='Last Name'
                  onChange={this.onLastNameChange}
                  onBlur={this.onLastNameBlur}
                  error={lastNameError} />

        <Greeting firstName={firstName} lastName={lastName}/>
      </div>
    );
  }
}
