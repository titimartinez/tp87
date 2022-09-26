import { useState } from 'react';

function App() {
  const [estudios, setEstudios] = useState('primario')

  function cambioEstudios(e) {
    setEstudios(e.target.value)
  }

  return (
    <div>
      <p><input type="radio" value="primario" checked={estudios === 'primario'}
        onChange={cambioEstudios} />Primario</p>
      <p><input type="radio" value="secundario" checked={estudios === 'secundario'}
        onChange={cambioEstudios} />Secundario</p>
      <p><input type="radio" value="universitario" checked={estudios === 'universitario'}
        onChange={cambioEstudios} />Universitario</p>
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;