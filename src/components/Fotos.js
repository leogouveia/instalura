import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Foto from "./Foto";
import * as api from "../api";

export class Fotos extends Component {
  state = {
    fotos: []
  };

  componentDidMount() {
    const {
      match: {
        params: { login }
      }
    } = this.props;
    this.handleFetchFotos(login);
  }

  UNSAFE_componentWillUpdate(nextProps) {
    const prevProps = this.props;
    const oldLogin = prevProps.match.params.login;
    const newLogin = nextProps.match.params.login;
    if (oldLogin !== newLogin) {
      this.handleFetchFotos(newLogin);
    }
  }

  handleFetchFotos = login => {
    api
      .fetchFotos(login)
      .then(fotos => {
        this.setState(() => ({
          fotos: fotos
        }));
      })
      .catch(error => {
        console.log("errror >>>> ", error);
        this.setState(() => ({
          fotos: []
        }));
      });
  };
  handleCurtir = fotoId => {
    api.curtirFoto(fotoId).then(foto => {
      this.setState(({ fotos }) => ({
        fotos: fotos.map(f => {
          if (f.id !== fotoId) return f;
          return foto;
        })
      }));
    });
  };

  handleComentar = (fotoId, comentario) => {
    api.comentarFoto(fotoId, comentario).then(foto => {
      this.setState(({ fotos }) => ({
        fotos: fotos.map(f => {
          if (f.id !== fotoId) return f;
          return foto;
        })
      }));
    });
  };

  render() {
    const { fotos } = this.state;
    return (
      <div className="fotos container">
        <TransitionGroup>
          {fotos.map(foto => (
            <CSSTransition key={foto.id} timeout={500} classNames="timeline">
              <Foto
                foto={foto}
                onCurtir={this.handleCurtir}
                onComentar={this.handleComentar}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Fotos);
