import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Random Users</h1>
      <div className="button-container">
        <button className="refresh-button" onClick={handleRefresh}>
          Actualizar
        </button>
      </div>
      <div className="grid-container">
        {users.map(user => (
          <div className="grid-item" key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <span>{user.name.first} {user.name.last}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;