import React, { Component } from "react";
import Todos from "./todo.js";
import AddTodo from "./addtodos.js";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "bring milk" }, { id: 2, content: "make bed" }],
    status: "Incomplete"
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
      console.log(id);
    });
    this.setState({
      todos
    });
  };
  completetodo = (val) => {
    this.setState ({
      status : val
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> TODO'S </h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          todostatus = {this.state.status}
          completetodo={this.completetodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
