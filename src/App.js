import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Footer from './Components/Footer';
import AnimePage from './Components/AnimePage';
import UserPage from './Components/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/animes">Animes</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/animes" element={<AnimePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;