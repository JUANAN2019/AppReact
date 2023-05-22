import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Characters from './Components/Characters';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <div className='container-fluid'> <Navbar /> </div>

      <div className="content">
        <div className='bubbles'>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="contenedor-general">
          <div className="contenedor">
                <BrowserRouter >
                  <Routes >
                    <Route  path='/' element={<Main />}></Route>
                    <Route path='/characters/:id' element={<Characters />}></Route> 
                  </Routes>
                </BrowserRouter>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

