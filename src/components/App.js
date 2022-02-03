import React from 'react'
import GeoLocatorContainer from '../containers/GeoLocatorContainer';
import NavBar from './NavBar'
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavBar color='white' title="Weather App" /> 
        < GeoLocatorContainer />
      </header>


    </div>
  );
}

export default App;
