import React from 'react';
import PokeData from '../Data/poke-data.json'
import { Link, Route } from 'react-router-dom';
import BaseOne from './Sets/BaseOne';
import BaseTwo from './Sets/BaseTwo';
import BaseThree from './Sets/BaseThree';
import BaseFour from './Sets/BaseFour';
import BaseFive from './Sets/BaseFive';
import BaseSix from './Sets/BaseSix';

export default function Home () {
    return (
        <div className='homeDisplay'>
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
            <main>
                    <Route
                        exact
                        path='/base/1'
                        render={routerProps => (
                            <BaseOne
                                match={routerProps.match}
                            />
                        )}
                    />
                    <Route exact path='/base/2' render={() => <BaseTwo/>}/>
                    <Route exact path='/base/3' render={() => <BaseThree/>}/>
                    <Route exact path='/base/4' render={() => <BaseFour/>}/>
                    <Route exact path='/base/5' render={() => <BaseFive/>}/>
                    <Route exact path='/base/6' render={() => <BaseSix/>}/>
            </main>
        </div>
    )
}
