import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import Nav from './Components/Nav';
// import Base from './Components/Base';
// import PokeData from './Data/poke-data.json';


function App() {

  // const baseId = ({match}) => {
  //   return (
  //     <Base poke={ImgData.filter((img) =>
  //      img.setNum === parseInt(match.params.setNum, 10)
  //       )}
  //       />
  //   )
  // }
  
  return (
    <div className="App">
      <nav>
        <Nav/>
      </nav>
      <main>
            {/* {PokeData.map((sets) => {
                return (
                    <div className='baseSetImg'>
                            <Route exact path='/base/:setNum' component={baseId}/>
                            
                    </div>
                )
            })} */}
      </main>
    </div>
  );
}

export default App;
