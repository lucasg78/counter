import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./ExampleComponent.scss";

const ExampleComponent = () => {
  const initialState = 0; // Estado inicial
  const [count, setCount] = useState(initialState);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(initialState);
  };

  // El efecto se va a ejecutar con el montaje y con cada actualización
  /* useEffect(() => {
    console.log("mounted component")
  })
   */

  // El efecto se va a ejecutar sólo con el montaje
  useEffect(() => {
    console.log("mounted component")

    return () => {
      console.log("dismounted component") // Se va a ejecutar cuando el componente se desmonte
    }
  }, [])


  // El efecto se va a ejecutar cada vez que se modifique el estado del contador
  useEffect(() => {
    console.log("updated component")
  }, [count])


  return (
    <>
      <div style={{ fontSize: "20px" }}>You clicked <p style={{ fontSize: "100px" }}>{count}</p> times</div>
      <Button variant="primary" className="btn my-5" onClick={handleClick}>
        Click me
      </Button>
      {
        count !== 0 ?
        <Button variant="danger" onClick={resetCount}>
        Reset
      </Button>
        :
        <div></div>
      }

      <p style={{ fontSize: "15px" }}>Last click: {new Date().toLocaleString()}</p>
    </>
  );
};

export default ExampleComponent;
