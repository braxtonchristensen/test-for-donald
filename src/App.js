import React, { useState } from "react";
import cn from "classnames";
import logo from "./logo.svg";
import "./App.css";

const Drawer = props => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      data-testid="Drawer"
      className={cn("Drawer", { "Drawer--closed": isClosed })}
    >
      <button
        className="Drawer__Action"
        onClick={() => {
          setIsClosed(!isClosed);
        }}
      >
        toggle me
      </button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Drawer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
