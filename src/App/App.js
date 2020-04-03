import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>header here</p>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default App;
