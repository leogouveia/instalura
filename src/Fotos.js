import React, { Component } from "react";
import Foto from "./Foto";

export class Fotos extends Component {
  state = {
    fotos: []
  };
  componentDidMount() {
    fetch("http://localhost:8888/api/fotos")
      .then(response => response.json())
      .then(body => {
        this.setState(() => ({
          fotos: body
        }));
      });
  }
  handleCurtir = fotoId => {
    fetch(`http://localhost:8888/api/fotos/${fotoId}/curtida`)
      .then(response => response.json())
      .then(foto => {
        this.setState(({ fotos }) => ({
          fotos: fotos.map(f => {
            if (f.id !== fotoId) return f;
            return foto;
          })
        }));
      });
  };
  handleComentar = (fotoId, comentario) => {
    fetch(`http://localhost:8888/api/fotos/${fotoId}/comentario`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ texto: comentario })
    })
      .then(response => response.json())
      .then(foto => {
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
        {fotos.map(foto => (
          <Foto
            key={foto.id}
            foto={foto}
            onCurtir={this.handleCurtir}
            onComentar={this.handleComentar}
          />
        ))}
      </div>
    );
  }
}

export default Fotos;
