import { Routes, Route, Link, useLoaderData, Outlet } from "react-router-dom";

const Categoria = () => <p>UNA Categoria</p>;

const Catalogo = () => {
  const { categorias } = useLoaderData();

  return (
    <>
      <h2>Estamos en el catalogo</h2>
      <nav>
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>
              <Link to={categoria.id}>{categoria.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Route path=":categoria" element={<Categoria />} />

      <Outlet />
    </>
  );
};

export default Catalogo;
