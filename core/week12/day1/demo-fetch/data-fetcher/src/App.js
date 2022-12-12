import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    try {
      const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

      const response = await fetch(apiEndpoint);
      const users = await response.json();

      this.setState({ users });
    } catch (ex) {
      console.log("Error al traer datos", ex);
    }
  }

  render() {
    if (!this.state.users.length) return <p>Cargando usuarios..</p>;

    return (
      <>
        {this.state.users.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </>
    );
  }
}

export default App;
