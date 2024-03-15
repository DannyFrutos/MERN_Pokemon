import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [fetched, setFetched] = useState(false);

    const fetchPokemonNames = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`);
            const names = response.data.results.map(pokemon => pokemon.name);
            setPokemonNames(names);
            setFetched(true);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    };

    const handleSearch = (filteredPokemon) => {
        setPokemonNames(filteredPokemon);
    };

    return (
        <div className="container mt-5">
            <div className="text-center">
                <button className="btn btn-primary mb-3" onClick={fetchPokemonNames}>Fetch All Pokemon</button>
            </div>
            {fetched && (
                <>
                    <Search pokemonNames={pokemonNames} onSearch={handleSearch} />
                    <ul className="list-group">
                        {pokemonNames.map((name, index) => (
                            <li key={index} className="list-group-item">{index + 1}. {name}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Pokemon;
