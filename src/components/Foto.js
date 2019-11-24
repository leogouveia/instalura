import React from "react";

import FotoHeader from "./FotoHeader";
import Comentario from "./Comentario";

function BoxCurtidas({ curtidores }) {
  let textoCurtida = "Ninguem curtiu ainda";
  if (Array.isArray(curtidores)) {
    if (curtidores.length === 1) {
      textoCurtida = " curtiu";
    } else if (curtidores.length > 1) {
      textoCurtida = " curtiram";
    }
  } else {
    curtidores = [];
  }
  return (
    <div className="foto-info-likes">
      {curtidores.map(c => (
        <a key={c.id} href={`/usuario/${c.login}`}>
          {c.login}{" "}
        </a>
      ))}{" "}
      {textoCurtida}
    </div>
  );
}

class Foto extends React.Component {
  state = {
    curtiu: false,
    curtidores: []
  };

  constructor(props) {
    super(props);
    this.comentarioRef = React.createRef();
  }

  curtirFoto = () => {
    const { foto, onCurtir } = this.props;
    onCurtir(foto.id);
    this.setState(({ curtiu }) => ({ curtiu: !curtiu }));
  };

  fotoFoiCurtida = () => {
    const usuarioLogado = { id: 1 };
    const resultado = this.props.foto.curtidores.find(
      c => c.id == usuarioLogado.id
    );
    return resultado ? true : false;
  };

  handleSubmit = event => {
    event.preventDefault();
    const comentario = this.comentarioRef.current.value;
    const {
      foto: { id }
    } = this.props;
    this.props.onComentar(id, comentario);
    this.comentarioRef.current.value = "";
  };

  render() {
    const { foto } = this.props;
    const comentarios =
      foto.comentarios && Array.isArray(foto.comentarios)
        ? foto.comentarios
        : [];
    console.log({ comentarios });
    return (
      <article className="foto">
        <FotoHeader usuario={foto.usuario} dataPostagem={foto.updatedAt} />
        <img alt="foto" className="foto-src" src={foto.url} />

        <div className="foto-info">
          <BoxCurtidas curtidores={foto.curtidores} />

          <p className="foto-info-legenda">
            <span className="foto-info-autor">autor</span> {foto.comentario}
          </p>

          <ul className="foto-info-comentarios">
            {comentarios.map(comentario => (
              <Comentario key={comentario.id} comentario={comentario} />
            ))}
          </ul>
        </div>

        <section className="fotoAtualizacoes">
          <span
            className={`fotoAtualizacoes-like ${
              this.fotoFoiCurtida() ? "liked" : ""
            }`}
            onClick={this.curtirFoto}
          >
            Curtir
          </span>
          <form className="fotoAtualizacoes-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref={this.comentarioRef}
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
      </article>
    );
  }
}

export default Foto;
