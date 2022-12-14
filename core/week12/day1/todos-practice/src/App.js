import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";

class App extends Component {
  state = {
    todos: [],
    todoInput: "",
  };

  async fetchTodos() {
    try {
      const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";

      const response = await fetch(apiEndpoint);
      const todos = await response.json();

      this.setState({ todos });
    } catch (ex) {
      console.log("Error al traer datos", ex);
    }
  }

  componentDidMount() {
    this.fetchTodos();
  }

  handleChangeTodoInput = (todoInput) => this.setState({ todoInput });

  handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      completed: false,
      title: this.state.todoInput,
    };

    this.setState({ todos: [newTodo, ...this.state.todos], todoInput: "" });
  };

  handleRemoveTodo = (todo) => {
    const todos = this.state.todos.filter((t) => t !== todo);

    this.setState({ todos });
  };

  handleReset = () => {
    this.fetchTodos();
  };

  handleClear = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.todoInput}
          onChange={(e) => this.handleChangeTodoInput(e.currentTarget.value)}
        />
        <button onClick={this.handleAddTodo}>ADD</button>
        <button onClick={this.handleReset}>RESET</button>
        <button onClick={this.handleClear}>CLEAR</button>
        <List todos={this.state.todos} onRemoveTodo={this.handleRemoveTodo} />
      </>
    );
  }
}

export default App;
