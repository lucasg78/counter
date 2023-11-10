import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Greeting from "./components/Greeting/Greeting";

const App = () => {

  const [show, setShow] = useState(true)

  const showCounter = () => {
    setShow(!show)
  }

  const person = { name: "Lucas" };

  return (
    <div className="App">

      <Greeting person={person} />

      <button className="btn btn-primary" onClick={showCounter}>SHOW/HIDE</button>

      {
        show ?
          <div className="counter-title">
            <h2 style={{ fontSize: "50px" }}>Counter</h2>
            <Counter />
          </div>
          :
          <div></div>
      }

    </div>
  );
};

export default App;