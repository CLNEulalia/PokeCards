import React from 'react';
import './ComponentCSS/Hm.css';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div >
            <div className='tcg-logo-pos'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1200px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png"
                    alt="pokemonTCG-logo"
                    className='tcg-logo'
                    />
            </div>
            <div className='homeDisplay'>
                <Link to="/base/1" className='base-deck'>
                    <h2 className='set-deck'>Set 1</h2>
                    <img
                        src="https://i.redd.it/nwld3t4nsqc51.png"
                        alt="poke card back"
                        className="pokeCardBack"
                        />
                </Link>
                <Link to="/base/2" className='base-deck'>
                    <h2 className='set-deck'>Set 2</h2>
                    <img
                        src="https://i.redd.it/nwld3t4nsqc51.png"
                        alt="poke card back"
                        className="pokeCardBack"
                        />
                </Link>
                <Link to="/base/3" className='base-deck'>
                    <h2 className='set-deck'>Set 3</h2>
                    <img
                        src="https://i.redd.it/nwld3t4nsqc51.png"
                        alt="poke card back"
                        className="pokeCardBack"
                        />
                    </Link>
                <Link to="/base/4" className='base-deck'>
                    <h2 className='set-deck'>Set 4</h2>
                    <img
                        src="https://i.redd.it/nwld3t4nsqc51.png"
                        alt="poke card back"
                        className="pokeCardBack"
                        />
                </Link>
                <Link to="/base/5" className='base-deck'>
                    <h2 className='set-deck'>Set 5</h2>
                    <img
                        src="https://i.redd.it/nwld3t4nsqc51.png"
                        alt="poke card back"
                        className="pokeCardBack"
                        />
                </Link>
                <Link to="/base/6" className='base-deck'>
                <h2 className='set-deck'>Set 6</h2>
                <img
                    src="https://i.redd.it/nwld3t4nsqc51.png"
                    alt="poke card back"
                    className="pokeCardBack"
                    />
            </Link>
            </div>
        </div>
    )
}
