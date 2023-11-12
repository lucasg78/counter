import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.scss";

const Counter = () => {
  const initialState = 0; // Estado inicial
  const [count, setCount] = useState(initialState);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(initialState);
  };

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <div style={{ fontSize: "20px" }}>You clicked <p style={{ fontSize: "50px" }}>{count}</p> times</div>
      <Button variant="primary" className="btn my-2" onClick={handleClick}>
        Click me
      </Button>
      {
        count !== 0 ?
          <Button variant="danger" onClick={resetCount}>Reset</Button>
          :
          <Button variant="secondary">Reset</Button>
      }
      {
        count !== 0 ?
          <p style={{ width: "auto", margin: "0 100px", fontSize: "15px", backgroundColor: "#f0eee9", padding: "3px", borderRadius: "5px", marginTop: "10px"}}>Last click: {new Date().toLocaleString()}</p>
          :
          <div></div>
      }

    </>
  );
};

export default Counter;
