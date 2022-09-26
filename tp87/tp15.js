import {useState} from 'react';

function App() {
  const [dia,setDia]=useState('Lunes')

  function cambioDia(e) {
    setDia(e.target.value)
  }

  return (
    <div>
      <p><select value={dia} onChange={cambioDia}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
      </select></p>
      <p>Día seleccionado:{dia}</p>
    </div>
  );
}

export default App;