import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav () {
    const [searchState, setSearchState] = useState('');

    const searchChange = (event) => {
        setSearchState({ ...searchState, [event.target.value]: event.target.name});
    }
    const searchSubmit = (event) => {
        event.preventDefault()
        setSearchState({ ...searchState, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <nav>
                <Link to='/' className='homeButt'>Home</Link>
            </nav>
            <input
                type='text'
                name='searchState'
                className='searchBar'
                id='search'
                onChange={searchChange}
                value={searchSubmit.value}
            />
        </div>
    )
}