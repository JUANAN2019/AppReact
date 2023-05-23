import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Main';
import Characters from './Components/Characters';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />

      <bubbles />

      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/characters/:id' element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

