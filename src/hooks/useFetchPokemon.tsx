import {useEffect, useState} from "react";
import axios from 'axios'

type PokemonData = {
    id: number;
    name: string;
}



export const useFetchPokemon = (url: string) =>{
    const [data, setData] = useState<PokemonData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try {
                const response = await axios.get(url);
                console.log(response);
                setData(response.data.results);
                setLoading(false);
            }
            catch(err){
                console.log(err)
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return {data,loading};
}