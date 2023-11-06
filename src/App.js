import React, { useState } from "react";
import ExampleComponent from "./components/ExampleComponent/ExampleComponent"; // Suponiendo que ExampleComponent está en el mismo directorio
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {

  const [show, setShow] = useState(true)
  
  const showCounter = () => {
    setShow(!show)
  }

  return (
    <div className="App">

      <button className="btn btn-primary" onClick={showCounter}>SHOW/HIDE</button>

      {
        show ?
          <div className="counter-title">
            <h2 style={{ fontSize: "50px" }}>Counter</h2>
            <ExampleComponent />
          </div>
          :
          <div></div>
      }



    </div>
  );
};

export default App;
