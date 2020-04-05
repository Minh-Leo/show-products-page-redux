import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  // const fetchProducts = async () => {
  //   const Products = await fetch('/Products/all').then((res) => res.json());
  //   setProductsList(Products);
  // };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Search bar</p>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default App;
