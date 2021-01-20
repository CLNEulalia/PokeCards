import React from 'react';
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
            <div>
                <img src={poke.card.imageUrl} alt={poke.card.name}/>
                <h3>{poke.card.name}</h3>
                <h3>{poke.card.supertype}</h3>
                <h3>HP = {poke.card.hp}</h3>
                <h3>{poke && poke.card.attacks[0].name}</h3>
                <h4>{poke && poke.card.attacks[0].text}</h4>
                <h3>{poke && poke.card.attacks[1].name}</h3>
                <h4>{poke && poke.card.attacks[1].text}</h4>
            </div>
            )
        )
    } else if (poke && poke.card.supertype === "Trainer") {
        return (
            poke && (
            <div>
                <img src={poke.card.imageUrl} alt={poke.card.name}/>
                <h3>Trainer Type : {poke.card.name}, {poke.card.rarity}</h3>
                <p>Action: {poke.card.text[0].text}</p>
            </div>
            )
        )
    } else if (poke && poke.card.supertype === "Energy") {
        return (
            poke && (
            <div>
                <img src={poke.card.imageUrl} alt={poke.card.name}/>
                <h3>Energy Type : {poke.card.name}</h3>
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