import { useState } from "react";
import "./App.css";
import GridMain from "./Components/Grid Main/GridMain";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <GridMain />
      </main>
    </div>
  );
}

export default App;
