import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getAction';
import {Link} from 'react-router-dom'

function Navbar(props) {
  console.log(props);

  useEffect(() => {
      getNumbers();
  }, []);
  
    return (
        <div>
            <header>
        <div className="overlay"></div>
        <nav>
          <h2 >Shop</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="cart"><Link to="/cart"> 
            cart
            <span>
            {props.basketProps.basketNumbers}</span>
            </Link></li>
          </ul>
        </nav>
        
      </header>
        </div>
    )
}
const mapStateToProps = state =>({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers} )(Navbar);
