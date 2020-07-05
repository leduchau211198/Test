import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from "./components/Cart";
import './App.css';
// import {Provider} from 'react-redux';
// import store from './components/store';
import { BrowserRouter , Route, Switch} from 'react-router-dom';

function App() {
  return (
 
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
     </Switch>
      
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
