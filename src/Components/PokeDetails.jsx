import React from 'react';
import { useState, useEffect } from 'react';

export default function PokeDetails ({ match }) {

    const [poke, setPoke] = useState(null);
    const fectchPoke = async() => {
        try {
        await fetch(`https://api.pokemontcg.io/v1/cards/${match.params.id}`)
        .then(res => res.json())
        .then(res => {
            setPoke(res)
        })
        } catch {
            console.log(console.error);
        }
    }
    useEffect(() => {
        fectchPoke()
    })

    return (
        poke && (
            <div>
                <h3>{match.params.id}</h3>
                <img src={poke.card.imageUrl} alt={poke.card.name}/>
            </div>
        )
    )
}