import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState ({
      content : e.target.value
    })
  };
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo (this.state)
    this.setState ({
      content : ''
    })
  };

  render() {
    return (
      <div>
        <form>
          <label> Add Todo </label>
          <input onChange={this.handleChange} value = {this.state.content} />
          <button onClick={this.handleSubmit}> Add </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
