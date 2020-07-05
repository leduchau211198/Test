import React from 'react';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import {Provider} from 'react-redux';
import store from './store.js';

import {BrowserRouter, Route ,Switch} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/home" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      </Switch>
        </BrowserRouter>
    </div>
    </Provider>
  );
}
export default App;
