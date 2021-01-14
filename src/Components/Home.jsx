import React from 'react';
import { useState, useEffect } from 'react';

export default function Home () {
    const pokeUrl = "https://api.pokemontcg.io/v1/cards/base1-1"
    const [poke, setPoke]= useState(null)
    const fecthPokemon =() => {
        fetch(pokeUrl)
        .then(res => res.json())
        .then(res => {
            setPoke(res)
        });
    }
    useEffect(() => {
        fecthPokemon()
    }, []);
    return (
        poke !=null && (
            <div>
                <h4 className='cardName'>{poke.card.name}</h4> 
                <h6 className='cardRar'>{poke.card.rarity}</h6>
                <img src={poke.card.imageUrl} alt={poke.card.name}></img>
                <h4 className='cardAbNm'>{poke.card.ability.name}</h4>
                <p className='cardAbTxt'>{poke.card.ability.text}</p>
            </div>
        )
    )
}