import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const {page, pokemons, isLoading} = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemons());
    

    }, [])
    

    return (
        <>
            <h1>PokemonApp page {page}</h1>
            <hr />
            
            { isLoading ? (<span>Loading...</span>) : (
                <ul>
                    {pokemons.map(({name}) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            )}

            

            <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </>
    )
}
