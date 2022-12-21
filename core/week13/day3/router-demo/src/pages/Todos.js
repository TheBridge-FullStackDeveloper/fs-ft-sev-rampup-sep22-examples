import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import http from "../services/httpService";
import config from "../config.json";
import Pagination from "../components/common/Pagination";

import paginate from "../utils/paginate";

const apiEndpoint = `${config.apiURL}/todos`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(140);

  useEffect(() => {
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

  if (todos.length === 0) return "CARGANDO...";

  return (
    <>
      <h2>Comentarios ({pageTodosCount})</h2>
      <Pagination
        pageSize={pageSize}
        itemsCount={todos.length}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Tarea</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.user.name}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Hecha" : "Pendiente"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
