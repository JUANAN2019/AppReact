import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavInferior from './Componentes/NavInferior';
import Carrusel  from './Componentes/Carrusel';
import NavCompleto from './Componentes/NavCompletoS';
import Formulario from './Componentes/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="elNav ">
          <div className="navCom "><NavCompleto/></div>
           
        </div>
        <div id="carrusel"><Carrusel/></div>
        <div id="navInf"><NavInferior/></div>
        <div id='formulario'><Formulario/></div>

        
        
      </header>
    </div>
  );
}

export default App;
