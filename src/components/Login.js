import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../assets/logo-instalura.svg";
import { logar as apiLogar } from "../api";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passRef = React.createRef();
  }

  resetForm = () => {
    this.loginRef.current.value = "";
    this.passRef.current.value = "";
  };

  handleSubmit = async e => {
    e.preventDefault();
    const login = this.loginRef.current.value;
    const senha = this.passRef.current.value;
    try {
      const res = await apiLogar(login, senha);
      this.props.onLogin(res);
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
      alert("Usuário ou senha inválidos");
      this.passRef.current.value = "";
    }
  };

  render() {
    return (
      <div className="login-container">
        <form className="login-box" onSubmit={this.handleSubmit}>
          <div className="login-header-box">
            <img
              src={Logo}
              alt="Logo instalura"
              className="login-header-logo"
            />
            <span>Instalura</span>
          </div>
          <p>
            <label>Login: </label>
            <input type="text" ref={this.loginRef} />
          </p>
          <p>
            <label>Senha: </label>
            <input type="password" ref={this.passRef} />
          </p>
          <p className="login-botao-logar">
            <button type="submit" className="botao-azul">
              Logar
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
