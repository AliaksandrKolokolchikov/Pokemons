import {useEffect, useState} from "react";
import axios from 'axios'



export const useFetchPokemon = (url: string) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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