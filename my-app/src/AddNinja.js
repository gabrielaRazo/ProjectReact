import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" onChange={this.handleChange}></input>
          </label>
          <label htmlFor="age">
            Age:
            <input type="text" id="age" onChange={this.handleChange}></input>
          </label>
          <label htmlFor="belt">
            Belt:
            <input type="text" id="belt" onChange={this.handleChange}></input>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddNinja;