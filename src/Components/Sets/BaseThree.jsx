import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function BaseOne () {
    const [pokes, setPoke]= useState([])
    const fecthPokemon = async() => {
        await fetch("https://api.pokemontcg.io/v1/cards?setCode=base3")
        .then(res => res.json())
        .then(res => {
            setPoke(res)
        })
        .catch(console.error());
    }
    useEffect(() => {
        fecthPokemon()
    }, []);

    let pokeCards = pokes.cards
    console.log(pokeCards)

    return (

            <section className='container'>
                {pokeCards.map(pokemon => {
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