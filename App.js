import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from '../Components/Components/Main';
import Characters from '../Components/Components/Characters';

import NavInferior from '../Componentes/NavInferior';
import Carrusel  from '../Componentes/Carrusel';
import NavCompleto from '../Componentes/NavCompletoS';
import Formulario from '../Componentes/Formulario';

function App() {
  return (
    <>
       <bubbles />

      <NavCompleto/>
      <NavInferior/>

      <Carrusel/>
     
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/characters/:id' element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>

      <Formulario/>

    </>
  );
}

export default App;

