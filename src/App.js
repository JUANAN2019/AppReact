import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Main';
import Characters from './Components/Characters';
import NavCompleto from './Components/NavCompletoS';
import Carrusel  from './Components/Carrusel';
import NavInferior from './Components/NavInferior';
import Formulario from './Components/Formulario';


function App() {
  return (
    <>
      <bubbles />
      <NavInferior/>
      {/*<NavCompleto/>*/}
      <Carrusel/>

      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/characters/:id' element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>

      <Formulario />
    </>
  );
}

export default App;

