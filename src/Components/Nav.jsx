import React from 'react';
import Home from './Home';
import { Link, Route } from 'react-router-dom';
import BaseOne from './Sets/BaseOne';
import BaseTwo from './Sets/BaseTwo';
import BaseThree from './Sets/BaseThree';
import BaseFour from './Sets/BaseFour';
import BaseFive from './Sets/BaseFive';
import BaseSix from './Sets/BaseSix';


export default function Nav () {
    return (
        <div>
            <nav>
            <Link to='/' className='Home'>Home</Link>
            <Link to='/base/1' className='base1'>Base 1</Link>
            <Link to='/base/2' className='base2'>Base 2</Link>
            <Link to='/base/3' className='base3'>Base 3</Link>
            <Link to='/base/4' className='base4'>Base 4</Link>
            <Link to='/base/5' className='base5'>Base 5</Link>
            <Link to='/base/6' className='base6'>Base 6</Link>
            </nav>
            <main>
                <Route exact path='/' render={() => <Home/>}/>
                <Route exact path='/base/1' render={() => <BaseOne/>}/>
                <Route exact path='/base/2' render={() => <BaseTwo/>}/>
                <Route exact path='/base/3' render={() => <BaseThree/>}/>
                <Route exact path='/base/4' render={() => <BaseFour/>}/>
                <Route exact path='/base/5' render={() => <BaseFive/>}/>
                <Route exact path='/base/6' render={() => <BaseSix/>}/>
            </main>
        </div>
    )
}