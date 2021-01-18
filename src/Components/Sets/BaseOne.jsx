import React from 'react';
import SpinToWin from '../SpinToWin'
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function BaseOne () {
    const [poke, setPoke] = useState([])
    const fecthPokemon = async() => {
        await fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1`)
        .then(res => res.json())
        .then(res => {
            setPoke(res)
        })
    }
    useEffect(() => {
        fecthPokemon()
    }, []);

    let pokeCards = poke.cards

    return (
            <section className='container'>
                {!pokeCards && <SpinToWin/>}
                {pokeCards && pokeCards.map(pokemon => {
                    return (
                        <div className='pokemon'>
                            <div className='poke-details'>
                                <h3>{pokemon.name}, {pokemon.rarity}</h3>
                            </div>
                            <div className='pokeFace'>
                                <img src={pokemon.imageUrl} alt={pokemon.name}/>
                            </div>
                        </div>
                    )
                })}
            </section>

    )
}