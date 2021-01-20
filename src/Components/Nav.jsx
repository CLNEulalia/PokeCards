import React from 'react';
import './ComponentCSS/Nv.css'
import { Link } from 'react-router-dom';


export default function Nav () {

    return (
        <div>
            <nav>
                <Link to='/' className='navLink'>
                    <div className='navBlock'>
                        <div>
                            <img
                                src='https://icons-for-free.com/iconfiles/png/512/Pokeballs-1320568182055361827.png'
                                alt='pokeCard'
                                className='navDisplay'
                                />
                        </div>
                        <div>
                            <h4 className='navInfo'>Pokémon Sets</h4>
                        </div>
                    </div>
                </Link>
            </nav>
        </div>
    )
}