import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BaseOne () {
    function randNum(mx) {
        return Math.floor(Math.random() * Math.floor(mx))
    }
    let cardNum = randNum(100)
    const pokeUrl = "https://api.pokemontcg.io/v1/cards?setCode=base1"
    const [poke, setPoke]= useState([])
    const fecthPokemon = () => {
        fetch(pokeUrl)
        .then(res => res.json())
        .then(res => {
            setPoke(res)
        })
        .catch(console.error("Whoopsie! Not a Pokemon!"));
    }
    useEffect(() => {
        fecthPokemon()
    }, []);
    return (

            <section className='container'>
                {poke.map(pokeCard => {
                    return (

                        <Link to={`/cards/${cardNum}`} key={pokeCard.card.setCode}>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={pokeCard.card.imageUrl} alt={pokeCard.card.name}/>
                                </div>

                            </div>
                        </Link>
                        
                    )
                })}
            </section>

    )
}