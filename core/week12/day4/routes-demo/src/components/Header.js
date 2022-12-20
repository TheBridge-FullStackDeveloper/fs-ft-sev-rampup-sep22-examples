import React from "react";

import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>MI SUPER TIENDA</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
