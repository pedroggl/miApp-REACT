import './App.css';
import { Card } from './components/Card/Card';
import { Usuario } from './components/Usuario/Usuario';

function App() {
  return (
    <div>
      {/* se puede autocompletar al intentar usar el
      componente   */}
      <Usuario nombre="Pedro G" edad={23} nacionalidad="Español" />
      <Usuario nombre="Carla" edad={26} nacionalidad="Bolivia" />
      <Card />
    </div>
  );
}

export default App;