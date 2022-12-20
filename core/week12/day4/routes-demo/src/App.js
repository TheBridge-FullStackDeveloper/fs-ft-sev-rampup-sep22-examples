import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Catalogo from "./pages/Categorias";

const categories = function () {
  return [
    { id: 1, name: "Ferreteria" },
    { id: 2, name: "Alimentación" },
    { id: 3, name: "Otros" },
  ];
};

const Home = () => <h1>Estamos en el home</h1>;
const NotFound = () => <p>No encontrada</p>;

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
