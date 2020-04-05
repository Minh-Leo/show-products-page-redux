import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Records Albums Shop</p>
      </header>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
