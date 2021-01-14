import React from 'react';
import { useState, useEffect } from 'react';

export default function BaseTwo () {
    function randNum(mx) {
        return Math.floor(Math.random() * Math.floor(mx))
    }
    let cardNum = randNum(62)
    const pokeUrl = `https://api.pokemontcg.io/v1/cards/base2-${cardNum}`
    const [poke, setPoke]= useState(null)
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
        poke !=null && (
            <div className='container'>
                <h4 className='cardName'>{poke.card.name}, {poke.card.rarity}</h4>
                <img src={poke.card.imageUrl} alt={poke.card.name}></img>
            </div>
        )
    )
}