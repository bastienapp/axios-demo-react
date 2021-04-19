import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = () => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters/students')
      .then((response) => {
        setCharacters(response.data);
      });
  };

  return (
    <div className='App'>
      <button type='button' onClick={loadCharacters}>
        Load characters
      </button>
      {characters.map((character) => {
        return (
          <Character
            name={character.name}
            house={character.house}
            yearOfBirth={character.yearOfBirth}
          />
        );
      })}
    </div>
  );
}

export default App;
