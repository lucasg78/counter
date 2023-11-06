import React from "react";
import ExampleComponent from "./components/ExampleComponent/ExampleComponent"; // Suponiendo que ExampleComponent está en el mismo directorio
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Counter</h1>
        <ExampleComponent />
    </div>
  );
};

export default App;
