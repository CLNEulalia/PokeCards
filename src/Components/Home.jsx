import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className='homeDisplay'>
            <Link to="/base/1" className="base1">
                <h2>Set 1</h2>
                <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
            </Link>
            <Link to="/base/2" className="base2">
                <h2>Set 2</h2>
                <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
            </Link>
            <Link to="/base/3" className="base3">
                <h2>Set 3</h2>
            <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
                </Link>
            <Link to="/base/4" className="base4">
                <h2>Set 4</h2>
                <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
            </Link>
            <Link to="/base/5" className="base5">
                <h2>Set 5</h2>
                <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
            </Link>
            <Link to="/base/6" className="base6">
                <h2>Set 6</h2>
                <img src="https://i.redd.it/nwld3t4nsqc51.png" alt="poke card back" className="pokeCardBack"/>
            </Link>
        </div>
    )
}
