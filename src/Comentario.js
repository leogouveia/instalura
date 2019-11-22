import React from "react";

const Comentario = ({ comentario }) => (
  <li className="comentario">
    <a href={`/${comentario.Usuario.login}`} className="foto-info-autor">
      {comentario.Usuario.login}
    </a>{" "}
    {comentario.texto}
  </li>
);

export default Comentario;
