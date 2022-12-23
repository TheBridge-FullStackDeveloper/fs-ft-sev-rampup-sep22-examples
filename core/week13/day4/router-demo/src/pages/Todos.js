import { useEffect, useState } from "react";

import http from "../services/httpService";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import config from "../config.json";
import Pagination from "../components/common/Pagination";
import ListGroup from "../components/common/ListGroup";
import Table from "../components/common/Table";

import paginate from "../utils/paginate";

const apiEndpoint = `${config.apiURL}/todos`;

const columns = [
  { path: "user.name", label: "Usuario" },
  { path: "title", label: "Tarea" },
  {
    path: "completed",
    label: "Estado",
    component: (value) => (value ? "Hecha" : "Pendiente"),
  },
];

const columnsUsers = [
  { path: "name", label: "Nombre" },
  { path: "username", label: "Nombre de usuario" },
  { path: "email", label: "Email" },
  { path: "address.street", label: "Calle" },
];

function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(140);

  useEffect(() => {
    async function getUsers() {
      try {
        let { data: users } = await http.get(`${config.apiURL}/users`);

        setUsers(users);
      } catch (ex) {
        console.log(ex);
      }
    }
    getUsers();

    async function getTodos() {
      try {
        let { data: todos } = await http.get(apiEndpoint);

        todos = await Promise.all(
          todos.map(async (todo) => {
            const { data: user } = await http.get(
              `${config.apiURL}/users/${todo.userId}`
            );

            return {
              ...todo,
              user,
            };
          })
        );

        setTodos(todos);
      } catch (ex) {
        console.log(ex);
      }
    }
    getTodos();
  }, []);

  const [filteredTodos, pageTodosCount] = paginate(
    todos,
    pageSize,
    currentPage
  );

  if (!users.length || !todos.length) return <Spinner animation="border" />;

  return (
    <>
      <Row>
        <Col sm={12} md={4}>
          <ListGroup items={users} titlePath="address.street" />
        </Col>
        <Col Col sm={12} md={8}>
          <h2>Todos ({pageTodosCount})</h2>
          <Table items={filteredTodos} columns={columns} />
          <Pagination
            pageSize={pageSize}
            itemsCount={todos.length}
            currentPage={currentPage}
            onChangePage={setCurrentPage}
          />
        </Col>
      </Row>
    </>
  );
}

export default Todos;
