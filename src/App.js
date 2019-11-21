import React from "react";
import Header from "./Header";
import Foto from "./Foto";

function App() {
  return (
    <div className="main">
      <Header />

      <div className="fotos container">
        <Foto />
      </div>
    </div>
  );
}

export default App;
