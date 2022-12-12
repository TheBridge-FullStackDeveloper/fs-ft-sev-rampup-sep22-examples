import React, { Component } from "react";
import User from "../User/User";
import SearchBox from "../common/SearchBox";
import Pagination from "../common/Pagination";
import "./Users.css";

export class Users extends Component {
  state = {
    users: [],
    searchQuery: "",
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

  handleSearchBox = (searchQuery) => this.setState({ searchQuery });

  render() {
    if (!this.state.users.length) return <p>Cargando usuarios..</p>;

    const { users, searchQuery } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    return (
      <>
        <h2>Lista de usuarios</h2>

        <SearchBox
          placeholder="Search users..."
          value={searchQuery}
          onSearch={(e) => this.handleSearchBox(e.currentTarget.value)}
        />

        <ul>
          {filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>

        <Pagination pageSize="4" itemsCount={filteredUsers.length} />
      </>
    );
  }
}

export default Users;
