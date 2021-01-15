import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BaseOne () {
    const [pokes, setPokes]= useState([])
    const fecthPokemon = async() => {
        // try {
        await fetch("https://api.pokemontcg.io/v1/cards?setCode=base2")
        .then(res => res.json())
        .then(res => {
            setPokes(res)
        })
        // } catch {
        //     console.log(console.error);
        // }
    }
    useEffect(() => {
        fecthPokemon()
    }, []);

    let pokeCards = pokes.cards
    console.log(pokeCards)
    console.log(pokes)

    {
        pokes.length > 0 
        ?
        return (
            // poke !=null ()
            <section className='container'>
    
            {/* lakjsdlfjal;sj */}
            if pokes.
    
            {pokes.map(pokemon => {
                return (
                    <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
                    <div className='pokemon'>
                        <div className='poke-details'>
                            <h3>{pokemon.name}, {pokemon.rarity}</h3>
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
        :
        return null

    }

}