import React, { Component } from 'react';

export default class App extends Component {

  handleChange = (event) => {
    event.persist();
    const { name } = event.target;
    
    this.props[name](); // name equally increment or decrement
  }

  render() {
    const { value } = this.props;
    return (
      <div className="App">
        <div className="content">
          <div className="counter">
            {value}
          </div>
          <div className="wrapButtons">
            <button className="button" name='increment' onClick={this.handleChange}>+</button>
            <button className="button" name='decrement' onClick={this.handleChange}>-</button>
          </div>
        </div>
      </div>
    );
  }
}


