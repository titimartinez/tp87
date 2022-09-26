import { useState } from "react";

function App() {

  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);
    setNumero(v)
  }

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={generarAleatorio}>Generar número aleatorio</button>
    </div>
  );
}

export default App;