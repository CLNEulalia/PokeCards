import React from 'react';
import PokeData from '../Data/poke-data.json'
import { Link, Route, Switch } from 'react-router-dom';
import BaseOne from './Sets/BaseOne';
import BaseTwo from './Sets/BaseTwo';
import BaseThree from './Sets/BaseThree';
import BaseFour from './Sets/BaseFour';
import BaseFive from './Sets/BaseFive';
import BaseSix from './Sets/BaseSix';

export default function Home () {
    return (
        <section className='homeDisplay'>
            {PokeData.map((sets) => {
                return (
                    <div className='baseSetImg'>
                            <Link to={`/base/${sets.setNum}/`}>
                                <h1>Set {sets.setNum}</h1>
                                <img src={sets.imgLink} alt='base set image' className='pokeCardBack'/>
                            </Link>
                    </div>
                )
            })}
            <main>
                <Switch>
                    <Route exact path='/base:id' render={BaseOne}></Route>
                    <Route exact path='/base:id' render={BaseTwo}></Route>
                    <Route exact path='/base:id' render={BaseThree}></Route>
                    <Route exact path='/base:id' render={BaseFour}></Route>
                    <Route exact path='/base:id' render={BaseFive}></Route>
                    <Route exact path='/base:id' render={BaseSix}></Route>
                </Switch>
            </main>
        </section>
    )
}