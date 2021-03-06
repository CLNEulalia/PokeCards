import React from 'react';
import SpinToWin from '../SpinToWin'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BaseOne () {
    const [poke, setPoke] = useState(["cards"])
    const fecthPokemon = async() => {
        await fetch("https://api.pokemontcg.io/v1/cards?setCode=base3")
        .then(res => res.json())
        .then(res => {
            setPoke(res)
            console.log(res)
            console.log(Object.keys(res))
        })
    }
    useEffect(() => {
        fecthPokemon()
    }, []);

    let pokeCards = poke.cards
    console.log(pokeCards)

    return (
        <section className='container'>
            {!pokeCards && <SpinToWin/>}
            {pokeCards && pokeCards.map(pokemon => {
                return (
                    <Link to={`/base/details/${pokemon.id}`} className ='pokeName'>
                        <div className='pokemon'>
                            <div className='poke-details'>
                                <h3>{pokemon.name}</h3>
                            </div>
                            <div className='pokeFace'>
                                <img src={pokemon.imageUrl} alt={pokemon.name}/>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}