import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import BaseOne from './Components/Sets/BaseOne';
import BaseTwo from './Components/Sets/BaseTwo';
import BaseThree from './Components/Sets/BaseThree';
import BaseFour from './Components/Sets/BaseFour';
import BaseFive from './Components/Sets/BaseFive';
import BaseSix from './Components/Sets/BaseSix';
import PokeDetails from './Components/PokeDetails';


function App() {
  
  return (
    <div className="App">
      <nav>
        <Nav/>
      </nav>
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home/>}/>
            <Route exact path='/base/1' render={() => <BaseOne/>}/>
            <Route exact path='/base/2' render={() => <BaseTwo/>}/>
            <Route exact path='/base/3' render={() => <BaseThree/>}/>
            <Route exact path='/base/4' render={() => <BaseFour/>}/>
            <Route exact path='/base/5' render={() => <BaseFive/>}/>
            <Route exact path='/base/6' render={() => <BaseSix/>}/>

            <Route exact path='/base/details/:id' render={(routerProps) => <PokeDetails match={routerProps.match}/>}/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
