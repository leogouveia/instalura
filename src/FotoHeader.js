import React from "react";

const FotoHeader = ({ usuario, dataPostagem }) => (
  <header className="foto-header">
    <figure className="foto-usuario">
      <img src={usuario.urlFotoPerfil} alt="foto do usuario" />
      <figcaption className="foto-usuario">
        <a href={`/usuario/${usuario.login}`}>{usuario.login}</a>
      </figcaption>
    </figure>
    <time className="foto-data">
      {new Date(dataPostagem).toLocaleString("pt-BR")}
    </time>
  </header>
);

export default FotoHeader;
