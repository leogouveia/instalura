import React from "react";

const Comentario = ({ comentario }) => (
  <li className="comentario">
    <a href={`/${comentario.usuario.login}`} className="foto-info-autor">
      {comentario.usuario.login}
    </a>{" "}
    {comentario.texto}
  </li>
);

export default Comentario;
