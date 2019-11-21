import React from "react";

const FotoHeader = ({ usuarioImgSrc, usuarioNome, dataFoto }) => (
  <header className="foto-header">
    <figure className="foto-usuario">
      <img
        src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg"
        alt="foto do usuario"
      />
      <figcaption className="foto-usuario">
        <a href="#">alots</a>
      </figcaption>
    </figure>
    <time className="foto-data">03/10/2016 20:13</time>
  </header>
);

export default FotoHeader;
