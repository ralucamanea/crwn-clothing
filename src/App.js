import React from 'react';
import './App.css';
import HomePage from './pages/homepage/home-page.component';
import { Switch, Route } from 'react-router-dom';
//if you use switch (if matches, renders that one, nothing else), does not use exact and vice versa

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage }></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
