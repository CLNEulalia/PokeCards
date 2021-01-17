import React from 'react';
import Home from './Home';
import { Link, Route } from 'react-router-dom';


export default function Nav () {
    return (
        <div>
            <nav>
            <Link to="/" className="Home">Home</Link>
            </nav>
            <main>
                <Route exact path='/' render={() => <Home/>}/>
            </main>
        </div>
    )
}