import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Pesquisa extends Component {
  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
  }
  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    const login = this.loginRef.current.value;
    history.push(`/${login}`);
  };
  render() {
    return (
      <form lpformnum="1" className="header-busca" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Pesquisa"
          className="header-busca-campo"
          ref={this.loginRef}
        />
        <input type="submit" value="Buscar" className="header-busca-submit" />
      </form>
    );
  }
}

export default withRouter(Pesquisa);
