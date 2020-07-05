import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import "./App.css";
import Home from "./components/page/Home";
import Navbar from "./components/page/layout/Navbar";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/page/Login";
import Register from "./components/page/Register";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
     
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
