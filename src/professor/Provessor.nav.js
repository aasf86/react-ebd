import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" to="/professor/lista">Lista</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/professor/cadastro">Cadastro</Link>
        </li>
    </ul>
  </div>
)

export default Nav;

