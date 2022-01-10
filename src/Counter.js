import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: ++prevState.count,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: --prevState.count,
    }));
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    var isEven = this.state.count % 2 === 0;
    return (
      <div>
        <button onClick={this.increment}>инкремент</button>
        <button onClick={this.decrement}>декремент</button>
        <button onClick={this.reset}>сброс</button>
        <p style={{color: isEven? "green" : "blue"}}>Current count: {this.state.count}</p>
      </div>
    );
  }
}
