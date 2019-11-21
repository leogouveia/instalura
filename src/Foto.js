import React from "react";

import FotoHeader from "./FotoHeader";
import Comentario from "./Comentario";

class Foto extends React.Component {
  render() {
    const { fotoSrc, usuario, comentarios, curtidas, fotoLegenda } = this.props;
    return (
      <div className="foto">
        <FotoHeader />
        <img
          alt="foto"
          className="foto-src"
          src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2"
        />

        <div className="foto-info">
          <div className="foto-info-likes">
            <a href="#">alots_ssa</a>,<a href="#">rafael_rollo</a>
            curtiram
          </div>

          <p className="foto-info-legenda">
            <a className="foto-info-autor">autor </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
          </p>

          <ul className="foto-info-comentarios">
            <Comentario />
          </ul>
        </div>

        <section className="fotoAtualizacoes">
          <a href="#" className="fotoAtualizacoes-like">
            Curtir
          </a>
          <form className="fotoAtualizacoes-form">
            <input
              type="text"
              placeholder="Adicione um comentário..."
              className="fotoAtualizacoes-form-campo"
            />
            <input
              type="submit"
              value="Comentar!"
              className="fotoAtualizacoes-form-submit"
            />
          </form>
        </section>
      </div>
    );
  }
}

export default Foto;
