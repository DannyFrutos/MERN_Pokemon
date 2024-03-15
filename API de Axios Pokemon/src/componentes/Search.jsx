import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [pokemonName, setPokemonName] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);

    useEffect(() => {
        const fetchAllPokemonNames = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`);
                const pokemonNames = response.data.results.map(pokemon => pokemon.name);
                setFilteredNames(pokemonNames);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchAllPokemonNames();
    }, []);

    const handleInputChange = event => {
        const searchTerm = event.target.value.toLowerCase();
        setPokemonName(searchTerm);

        const filtered = filteredNames.filter(name => name.includes(searchTerm));
        onSearch(filtered);
    };

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter Pokemon Name"
                value={pokemonName}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
