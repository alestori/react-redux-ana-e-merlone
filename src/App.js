import React from "react";
import categories from "./redux/data";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import "./App.css";

// criar a store
// criar as actions e reducers
// conectar o componente
// criar o mapStateToProps - para ler
// criar o mapDispatchToProps - para disparar a action

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Player />
        <Sidebar />
      </main>
    );
  }
}

export default App;
