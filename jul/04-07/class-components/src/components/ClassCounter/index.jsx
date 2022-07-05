import React, { Component } from "react";

// ! We have to extend from the Component to have React functionality
export default class ClassCounter extends Component {
  constructor() {
    super();
    // ! We have to use the keyword this.state
    // ! React depends on it
    this.state = {
      count: 0,
    };
    // ! We have to bind the `this` to our method
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    // ! We have to use the keyword this.setState
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h3>Class component</h3>
        <p>count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment count</button>
      </div>
    );
  }
}
