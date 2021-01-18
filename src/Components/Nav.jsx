import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav () {
    return (
        <div>
            <nav>
                <Link to='/' className='homeButt'>Home</Link>
            </nav>
        </div>
    )
}