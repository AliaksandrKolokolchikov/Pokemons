import {useFetchPokemon} from "../hooks/useFetchPokemon.tsx";
import {Loader} from "./Loader.tsx";
import {PokemonCard} from "./PokemonCard.tsx";



export const PokemonList = ()  => {
    const   {
        data: pokemon,
        loading,
    } = useFetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=40');

    if(loading && !pokemon.length){
        return <Loader/>
    }

    return (
        <div className="pokemon-list">
            {pokemon.map((item  ) =>  (
                <PokemonCard   key={item.name} name={item.name} url={`https://pokeapi.co/api/v2/pokemon/${item.name} `} />
            ))}
        </div>
    );
};
