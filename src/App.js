import React from 'react';
import './App.css';
import HomePage from './pages/homepage/home-page.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
//if you use switch (if matches, renders that one, nothing else), does not use exact and vice versa


function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage }></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
