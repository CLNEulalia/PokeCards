import React from 'react';
import './ComponentCSS/PD.css';
import { useState, useEffect } from 'react';

export default function PokeDetails ({ match }) {

    const [poke, setPoke] = useState(null);
    const fectchPoke = async() => {
        try {
        await fetch(`https://api.pokemontcg.io/v1/cards/${match.params.id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPoke(res)
        })
        } catch {
        }
    }
    useEffect(() => {
        fectchPoke()
    })
    
    if (poke && poke.card.supertype === "Pokémon") {
        return (
            poke && (
                <div className='cardBlock'>
                    <div className ='cardDisplay'>
                        <img src={poke.card.imageUrl} alt={poke.card.name} className='card'/>
                    </div>
                    <div className='cardInfo'>
                        <h2 className='action-head'>{poke.card.name} ({poke.card.types[0]} Type), HP = {poke.card.hp}</h2>
                        <p className='action-main'>Artist: {poke.card.artist}</p>
                        <h3 className='action-head'> Attack 1: {poke && poke.card.attacks[0].name}</h3>
                        <p className='action-main'>{poke && poke.card.attacks[0].text}</p>
                        <h3 className='action-head'> Attack 2: {poke && poke.card.attacks[1].name}</h3>
                        <p className='action-main'>{poke && poke.card.attacks[1].text}</p>
                    </div>
                </div>
            )
        )
    } else if (poke && poke.card.supertype === "Trainer") {
        return (
            poke && (
                <div className='cardBlock'>
                    <div className ='cardDisplay'>
                        <img src={poke.card.imageUrl} alt={poke.card.name} className='card'/>
                    </div>
                    <div className='cardInfo'>
                        <h3>Type : {poke.card.name}, {poke.card.rarity}</h3>
                        <h3 className='action-head'>Action:</h3>
                        <p className='action-main'>{poke.card.text[0]}</p>
                    </div>
                </div>
            )
        )
    } else if (poke && poke.card.supertype === "Energy") {
        return (
            poke && (
                <div className='cardBlock'>
                    <div className ='cardDisplay'>
                        <img src={poke.card.imageUrl} alt={poke.card.name} className='card'/>
                    </div>
                    <div className='cardInfo'>
                        <h3>Type : {poke.card.name}, {poke.card.rarity}</h3>
                        <p className='action-main'>Artist: {poke.card.artist}</p>
                    </div>
                </div>
            )
        )
    } else {
        return (
            <h1>Card Not Found</h1>
        )
    }

}
/*
CONDITIONAL RENDERING
set contants for 3 different view states of each superType:
-Pokemon
-Trainer
-Energy
build tenerary operator to conditionally render based on superType
*/