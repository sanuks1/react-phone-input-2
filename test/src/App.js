import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPhoneInput from '../../'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { number: '' }
  }

  onChange = (value) => {
    console.log(value)
    this.setState({ number: value })
  }

  render() {
    const { number } = this.state
    return (
      <div className="App">
        <ReactPhoneInput
          value={number}
          placeholder="Enter phone number"
          defaultCountry="gb"
          onChange={this.onChange}
          enableSearchField
          numberTrailing={10}
        />
      </div>
    );
  }
}

export default App;
