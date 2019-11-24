import React from "react";
import { Link, withRouter } from "react-router-dom";
import Pesquisa from "./Pesquisa";
const Header = ({ usuario, onLogout, location }) => {
  const url = location.pathname;
  return (
    <header className="header container">
      <Link to="/" className="header-logo-link">
        <h1 className="header-logo"> Instalura </h1>
      </Link>
      {url !== "/login" && <Pesquisa />}
      <nav>
        <ul className="header-nav">
          {usuario ? (
            <>
              <li className="header-nav-item">
                <div className="foto-usuario">
                  <a href={`/${usuario.login}`}>
                    <img
                      src={usuario.urlFotoPerfil}
                      alt="Foto usuário logado"
                    />
                  </a>
                </div>
              </li>
              <li className="header-nav-item">
                <button className="botao-texto" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            url !== "/login" && (
              <li className="header-nav-item">
                <Link to="/login">Login</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
