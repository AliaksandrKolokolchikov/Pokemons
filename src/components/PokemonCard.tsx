import {useEffect, useState} from "react";
import axios from 'axios'
import {BaseInfo, Pokemon} from "../../Types.ts";



export const PokemonCard = ({name, url}:BaseInfo) => {
    const [pokemonData, setPokemonData] = useState<Partial<Pokemon>>({});

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setPokemonData(response.data);
            }
            catch(err){
                console.log('Error bro', err);
            }
        }
        fetchData();
    },[url])
    return (
        <div className='pokemon-card'>
            <h3>{name}</h3>
            {pokemonData && (
                <div className='pokemon-details'>
                    <img src={pokemonData.sprites} alt={name}/>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <p>Base Experience: {pokemonData.base_experience}</p>
                </div>
            )}
        </div>
    );
};
