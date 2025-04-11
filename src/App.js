import React from "react";
//import NBY from "../public/assets/NBYy2.webp";
import "./App.css";
import "./bases.css";
import Info from "./conponents/Info/Info";
import Header from "./conponents/Header/Header";
import Formations from "./conponents/formations/formations";
import Experience from "./conponents/experience/experience";
import Projets from "./conponents/Projets/projets";

function App() {
  return (
    <div className="App">
      <main className="MainApp">
        <div id="PartI">
          <Info />
        </div>

        <div id="PartII">
          <Header />
          <Formations />
          <Experience />
          <Projets />
        </div>
      </main>
    </div>
  );
}

export default App;
