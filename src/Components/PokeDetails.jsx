import React from 'react';
import { useState, useEffect } from 'react';

export default function PokeDetails ({ match, params }) {

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
        poke !=null && (
            <div>
                <h1>
                    Oh Shoot oh snap
                </h1>
            </div>
        )
    )
}