import React from 'react';
import Pokemon from './componentes/Pokemon';

const App = () => {
  const handleClick = (pokemonNames) => {
    console.log(pokemonNames);
  };

  return (
    <div className="container mt-5">
      <Pokemon onClick={handleClick} />
    </div>
  );
};

export default App;
