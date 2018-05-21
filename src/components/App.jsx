import React, { Component } from 'react';

export default class App extends Component {
  handleCounter = () => {
    this.setState({
      value: this.props.increment()
    });
  }

  handleSubtractCounter = () => {
    this.setState({
      value: this.props.decrement()
    });
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
            <button className="button" onClick={this.handleCounter}>+</button>
            <button className="button" onClick={this.handleSubtractCounter}>-</button>
          </div>
        </div>
      </div>
    );
  }
}


