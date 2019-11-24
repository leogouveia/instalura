import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Fotos from "./components/Fotos";
import Login from "./components/Login";
import { bootstrap, logout as apiLogout } from "./api";
class App extends React.Component {
  state = {
    carregando: true,
    logado: false,
    usuario: undefined,
    token: ""
  };
  componentDidMount() {
    const { usuario, token } = bootstrap();
    this.setState(() => ({
      usuario,
      token,
      logado: usuario ? true : false,
      carregando: false
    }));
  }

  handleLogin = ({ usuario, token }) => {
    this.setState(() => ({ usuario, token, logado: true, carregando: false }));
  };

  handleLogout = () => {
    this.setState(() => ({ usuario: undefined, token: "", logado: false }));
    apiLogout();
  };

  render() {
    if (this.state.carregando) {
      return <div>Carregando...</div>;
    }
    return (
      <>
        <Router>
          <Header usuario={this.state.usuario} onLogout={this.handleLogout} />
          <Switch>
            <Route path="/login">
              <Login onLogin={this.handleLogin} />
            </Route>
            <Route exact path="/:login?">
              {this.state.logado ? (
                <div className="main">
                  <Fotos />
                </div>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
