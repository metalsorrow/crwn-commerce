import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/homepage.component'



const HastPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component ={HomePage}/>
        <Route path='/hats' component ={HastPage}/>
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
